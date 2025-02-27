import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import e2p from "../../config/e2p";
import { ComponentsContext } from "../App";

function Chart({ weatherForcast }) {
  const { dark } = useContext(ComponentsContext);  // دسترسی به حالت دارک
  let data = [];

  for (let i = 0; i < 8; i++) {
    let x = {};
    let key = new Date(weatherForcast["list"][i]["dt_txt"]).getHours();
    let key_12h = key % 12 || 12;
    let key_AM_PM = key >= 12 ? "بعد از ظهر" : "قبل از ظهر";
    let value = Math.floor(weatherForcast["list"][i]["main"]["temp"]);
    let value2 = Math.floor(weatherForcast["list"][i]["main"]["feels_like"]);
    x["name"] = key_12h + key_AM_PM;
    x["دما"] = value;
    x["دمای احساسی"] = value2;
    data.push(x);
  }

  const chartStyles = dark
    ? {
        chart: { backgroundColor: "#171616", borderColor: "#444" },
        textColor: "white",
        gridColor: "#555",
        lineColor: "#3A80BA",
        tickColor: "#bbb",
        tooltipBgColor: "#444",
      }
    : {
        chart: { backgroundColor: "#fff", borderColor: "#ddd" },
        textColor: "#333",
        gridColor: "#ddd",
        lineColor: "#3A80BA",
        tickColor: "#666",
        tooltipBgColor: "#fff",
      };

  return (
    <div
      className={`bg-white shadow rounded-[9px] p-[25px] flex-grow border border-solid border-gray-200 ${
        dark && "darkmood-bg darkmood-border"
      }`}
      style={chartStyles.chart}
    >
      <h2 className={`text-xl font-semibold mb-4`} style={{ color: chartStyles.textColor }}>
        نمودار دما
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 40, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="4 4" stroke={chartStyles.gridColor} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: chartStyles.tickColor }}
            dy={10}
            tickFormatter={e2p}
          />
          <YAxis
            tickFormatter={(value) => e2p(`${value}°C`)}
            tick={{ fontSize: 14, direction: "ltr", fill: chartStyles.tickColor }}
            dx={-15}
          />
          <Tooltip formatter={(value) => `${value}°C`} contentStyle={{ backgroundColor: chartStyles.tooltipBgColor }} />
          <Line
            type="monotone"
            dataKey="دما"
            stroke={chartStyles.lineColor} 
            strokeWidth={3}
            dot={{ r: 1 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export { Chart };
