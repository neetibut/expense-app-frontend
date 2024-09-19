// src/pages/Dashboard.jsx

import ExpenseList from "../components/expenses/ExpenseList";

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-5 px-4">
      <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
      <ExpenseList />
    </div>
  );
};

export default Dashboard;
