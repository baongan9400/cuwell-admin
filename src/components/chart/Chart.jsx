import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React, { useEffect, useState } from "react";
import userApi from "api/user";

export default function Chart({ title, data, dataKey, grid }) {
  const [chart, setChart] = useState([data]);

  const [isLoadingChart, setLoadingChart] = useState(false);

  const fetchChartUserAnalytic = async () => {
    try {
      setLoadingChart(true);
      const res = await userApi.statisticUserByMonth();
      if (res) {
        setLoadingChart(false);
        setChart(res.payload);
      }
    } catch (error) {
      console.log("failed to fetch chart", error);
    }
  };
  useEffect(() => {
    fetchChartUserAnalytic();
  }, []);

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      {isLoadingChart ? (
        <img
          src="https://cutewallpaper.org/21/loading-gif-transparent-background/Free-Content-Discovery-Influencer-Marketing-Tool-Buzzsumo-.gif"
          alt="Loading..."
          className="center"
          style={{
            width: 40,
            height: 40,
            marginBottom: 50,
          }}
        />
      ) : (
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={chart}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
