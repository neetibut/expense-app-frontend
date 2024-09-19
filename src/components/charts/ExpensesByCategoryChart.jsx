/* eslint-disable react/prop-types */
// src/components/charts/ExpensesByCategoryChart.jsx
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AA00FF",
  "#FF4081",
];

const ExpensesByCategoryChart = ({ data }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">Expenses by Category</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpensesByCategoryChart;
