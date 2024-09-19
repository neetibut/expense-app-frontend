import { useEffect, useContext, useState } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";
import AddExpense from "./AddExpense";

const ExpenseList = () => {
  const { expenses, getExpenses } = useContext(ExpenseContext);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    const fetchExpenses = async () => {
      await getExpenses();
      setLoading(false);
    };
    fetchExpenses();
    // eslint-disable-next-line
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setFilterCategory(e.target.value);
  };

  // **Filter and Search Expenses**
  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory
      ? expense.category === filterCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <div>Loading expenses...</div>;
  }

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-5">Your Expenses</h2>
      <AddExpense />
      {/* Search and Filter Controls */}
      <div className="flex flex-wrap mt-5 mb-5">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
          <input
            type="text"
            placeholder="Search by description"
            value={searchTerm}
            onChange={handleSearchChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-2">
          <select
            value={filterCategory}
            onChange={handleCategoryChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          >
            <option value="">All Categories</option>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      {filteredExpenses.length === 0 ? (
        <p className="mt-5">No expenses found.</p>
      ) : (
        <ul className="mt-5">
          {filteredExpenses.map((expense) => (
            <ExpenseItem key={expense._id} expense={expense} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
