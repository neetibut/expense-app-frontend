// src/pages/NotFound.jsx

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto mt-10 px-4 text-center">
      <h1 className="text-6xl font-bold mb-5">404</h1>
      <h2 className="text-2xl font-semibold mb-5">Page Not Found</h2>
      <p className="text-lg mb-8">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
