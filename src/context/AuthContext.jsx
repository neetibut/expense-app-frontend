/* eslint-disable react/prop-types */
// src/context/AuthContext.js

import { createContext, useState, useEffect } from "react";
import api from "../utils/api";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    if (auth.token) {
      const user = jwtDecode(auth.token);
      setAuth((prevState) => ({
        ...prevState,
        user,
        isAuthenticated: true,
      }));
      // Set default headers for Axios api requests
      api.defaults.headers.common["x-auth-token"] = auth.token;
    } else {
      delete api.defaults.headers.common["x-auth-token"];
    }
  }, [auth.token]);

  const setAuthData = (token) => {
    localStorage.setItem("token", token);
    setAuth({ token, user: jwtDecode(token), isAuthenticated: true });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({ token: null, user: null, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuthData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
