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
    category: 3,
    category__name: "clothes and accessories",
    number_of_posts: 14,
  },
  {
    category: 4,
    category__name: "Books and Stationery",
    number_of_posts: 7,
  },
  {
    category: 2,
    category__name: "electronic",
    number_of_posts: 6,
  },
  {
    category: 5,
    category__name: "Plants",
    number_of_posts: 4,
  },
  {
    category: 6,
    category__name: "Phones",
    number_of_posts: 3,
  },
];

const BarChartCustom = () => {
  return (
    <BarChart
      width={1000}
      height={400}
      data={data}
      align="center"
      margin={{
        top: 5,
        right: 30,
        left: 50,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis
        dataKey="category__name"
        scale="point"
        padding={{ left: 10, right: 10 }}
        style={{ textTransform: "capitalize" }}
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar
        dataKey="number_of_posts"
        fill="#8884d8"
        background={{ fill: "#eee" }}
        label="Posts"
      />
    </BarChart>
  );
};
export default BarChartCustom;
