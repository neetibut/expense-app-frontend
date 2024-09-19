/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";
import EditExpense from "./EditExpense";

const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useContext(ExpenseContext);
  const [isEditing, setIsEditing] = useState(false);

  const onDelete = () => {
    deleteExpense(expense._id);
  };

  const onEdit = () => {
    setIsEditing(true);
  };

  const onCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <li className="bg-white shadow-md rounded p-4 mb-4">
      {isEditing ? (
        <EditExpense expense={expense} onCancelEdit={onCancelEdit} />
      ) : (
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">{expense.description}</p>
            <p className="text-gray-600">Amount: ${expense.amount}</p>
            <p className="text-gray-600">Category: {expense.category}</p>
            <p className="text-gray-600">
              Date: {new Date(expense.date).toLocaleDateString()}
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={onEdit}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default ExpenseItem;
