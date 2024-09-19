// src/pages/Home.jsx

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto mt-10 px-4 text-center">
      <h1 className="text-4xl font-bold mb-5">
        Welcome to Expense Tracker App
      </h1>
      <p className="text-lg mb-8">
        Keep track of your expenses and manage your finances effectively.
      </p>
      <div className="space-x-4">
        <Link
          to="/register"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
