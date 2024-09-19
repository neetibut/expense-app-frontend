/* eslint-disable react/prop-types */
// src/components/charts/ExpensesOverTimeChart.jsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ExpensesOverTimeChart = ({ data }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">Expenses Over Time</h3>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default ExpensesOverTimeChart;
