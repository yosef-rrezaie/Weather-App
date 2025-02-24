import React, { PureComponent, useState } from "react";
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

function Chart({ weatherForcast }) {
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

  return (
    <div className="bg-white shadow-lg rounded-lg p-[25px]  h-[360px] flex-grow">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">نمودار دما</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 40, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="4 4" stroke="#ddd" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            dy={10}
            tickFormatter={e2p}
          />
          <YAxis
            tickFormatter={(value) => e2p(`${value}°C`)}
            tick={{ fontSize: 14 , direction:"ltr" }}
            dx={-15}
          />
          <Tooltip formatter={(value) => `${value}°C`} />
          <Line
            type="monotone"
            dataKey="دما"
            stroke="#3A80BA"
            strokeWidth={3}
            dot={{ r: 1 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export { Chart };
