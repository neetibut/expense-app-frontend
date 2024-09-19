// src/pages/Dashboard.jsx

import { useContext } from "react";
import ExpenseList from "../components/expenses/ExpenseList";
import ExpensesByCategoryChart from "../components/charts/ExpensesByCategoryChart";
import ExpensesOverTimeChart from "../components/charts/ExpensesOverTimeChart";
import { ExpenseContext } from "../context/ExpenseContext";
import { groupByCategory, groupByDate } from "../utils/dataTransform";

const Dashboard = () => {
  const { expenses } = useContext(ExpenseContext);

  // Transform data for charts
  const expensesByCategory = groupByCategory(expenses);
  const expensesOverTime = groupByDate(expenses);

  return (
    <div className="container mx-auto mt-5 px-4">
      <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
      {/* Charts */}
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          <ExpensesByCategoryChart data={expensesByCategory} />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <ExpensesOverTimeChart data={expensesOverTime} />
        </div>
      </div>
      {/* Expense List */}
      <ExpenseList />
    </div>
  );
};

export default Dashboard;
