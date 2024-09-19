import { useEffect, useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";
import AddExpense from "./AddExpense";

const ExpenseList = () => {
  const { expenses, getExpenses } = useContext(ExpenseContext);

  useEffect(() => {
    getExpenses();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-5">Your Expenses</h2>
      <AddExpense />
      <ul className="mt-5">
        {expenses.map((expense) => (
          <ExpenseItem key={expense._id} expense={expense} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
