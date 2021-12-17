import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Category A",
    products: 2400,
  },
  {
    name: "Category B",
    products: 1398,
  },
  {
    name: "Category C",
    products: 9800,
  },
  {
    name: "Category D",
    products: 3908,
  },
  {
    name: "Category E",
    products: 4800,
  },
  {
    name: "Category F",
    products: 3800,
  },
  {
    name: "Category G",
    products: 4300,
  },
];

const BarChartCustom = () => {
  return (
    <BarChart
      width={700}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="products" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
  );
};
export default BarChartCustom;
