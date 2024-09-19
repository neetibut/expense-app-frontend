/* eslint-disable react/prop-types */
// src/components/expenses/EditExpense.jsx

import { useState, useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

const EditExpense = ({ expense, onCancelEdit }) => {
  const [formData, setFormData] = useState({
    amount: expense.amount,
    category: expense.category,
    date: expense.date.split("T")[0], // Format date for input[type="date"]
    description: expense.description || "",
  });

  const { amount, category, date, description } = formData;
  const { updateExpense } = useContext(ExpenseContext);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    updateExpense(expense._id, formData);
    onCancelEdit();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-2">Amount</label>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={onChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Category</label>
        <select
          name="category"
          value={category}
          onChange={onChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Date</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={onChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancelEdit}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditExpense;
