// src/utils/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5500", // Replace with your backend URL if different
});

// Add a request interceptor to include the token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
