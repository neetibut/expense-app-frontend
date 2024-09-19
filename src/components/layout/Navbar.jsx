// src/components/layout/Navbar.jsx

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);

  const authLinks = (
    <>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            : "text-white px-3 py-2 rounded-md text-sm font-medium"
        }
      >
        Dashboard
      </NavLink>
      <button
        onClick={logout}
        className="text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Logout
      </button>
    </>
  );

  const guestLinks = (
    <>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            : "text-white px-3 py-2 rounded-md text-sm font-medium"
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive
            ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            : "text-white px-3 py-2 rounded-md text-sm font-medium"
        }
      >
        Register
      </NavLink>
    </>
  );

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Expense Tracker
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {auth.isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
