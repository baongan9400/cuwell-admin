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
import "./BarChart.css";

const BarChartCustom = (props) => {
  const { data, isLoadingChart } = props;
  return (
    <div className="category-barchart" style={{ marginBottom: 50 }}>
      <h3 className="chartTitle">Category Analytics</h3>
      {isLoadingChart ? (
        <img
          src="https://cutewallpaper.org/21/loading-gif-transparent-background/Free-Content-Discovery-Influencer-Marketing-Tool-Buzzsumo-.gif"
          alt="Loading..."
          className="center"
          style={{
            width: 40,
            height: 40,
          }}
        />
      ) : (
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
      )}
    </div>
  );
};
export default BarChartCustom;
