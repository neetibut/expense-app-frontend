/* eslint-disable react/prop-types */
// src/context/ExpenseContext.js

import { createContext, useState } from "react";
import api from "../utils/api";

export const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const getExpenses = async () => {
    try {
      const res = await api.get("/api/expenses");
      setExpenses(res.data);
    } catch (err) {
      console.error(err.response.data);
      // Handle errors
    }
  };

  const addExpense = async (expenseData) => {
    try {
      const res = await api.post("/api/expenses", expenseData);
      setExpenses((prevExpenses) => [res.data, ...prevExpenses]);
    } catch (err) {
      console.error(err.response.data);
      // Handle errors
    }
  };

  const deleteExpense = async (id) => {
    try {
      await api.delete(`/api/expenses/${id}`);
      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense._id !== id)
      );
    } catch (err) {
      console.error(err.response.data);
      // Handle errors
    }
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, getExpenses, addExpense, deleteExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
