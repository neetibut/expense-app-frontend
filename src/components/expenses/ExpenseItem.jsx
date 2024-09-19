/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useContext(ExpenseContext);

  const onDelete = () => {
    deleteExpense(expense._id);
  };

  return (
    <li className="bg-white shadow-md rounded p-4 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold">{expense.description}</p>
          <p className="text-gray-600">Amount: ${expense.amount}</p>
          <p className="text-gray-600">Category: {expense.category}</p>
          <p className="text-gray-600">
            Date: {new Date(expense.date).toLocaleDateString()}
          </p>
        </div>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
