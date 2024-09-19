// src/utils/dataTransform.js

// Group expenses by category and calculate total amount per category
export const groupByCategory = (expenses) => {
  const categoryTotals = {};

  expenses.forEach((expense) => {
    const { category, amount } = expense;
    if (categoryTotals[category]) {
      categoryTotals[category] += amount;
    } else {
      categoryTotals[category] = amount;
    }
  });

  // Convert to an array suitable for Recharts
  return Object.keys(categoryTotals).map((category) => ({
    category,
    amount: categoryTotals[category],
  }));
};

// Group expenses by date (or month) and calculate total amount per period
export const groupByDate = (expenses) => {
  const dateTotals = {};

  expenses.forEach((expense) => {
    // Format date as 'YYYY-MM-DD' or 'YYYY-MM' for monthly grouping
    const date = new Date(expense.date).toISOString().split("T")[0];
    if (dateTotals[date]) {
      dateTotals[date] += expense.amount;
    } else {
      dateTotals[date] = expense.amount;
    }
  });

  // Convert to an array suitable for Recharts
  return Object.keys(dateTotals)
    .sort()
    .map((date) => ({
      date,
      amount: dateTotals[date],
    }));
};
