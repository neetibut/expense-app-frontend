// src/components/layout/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-10">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-white text-sm">
          &copy; {new Date().getFullYear()} Expense Tracker App. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
