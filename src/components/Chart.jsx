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

function Chart({ weatherForcast }) {
  let data = [];
  for (let i = 0; i < 8; i++) {
    let x = {};
    let key = new Date(weatherForcast["list"][i]["dt_txt"]).getHours();
    let value = Math.floor(weatherForcast["list"][i]["main"]["temp"]);
    let value2 = Math.floor(weatherForcast["list"][i]["main"]["feels_like"]);
    x["name"] = key;
    x["دما"] = value;
    x["دمای احساسی"] = value2;
    data.push(x);
  }

  console.log(data);
  return (
    <div className="bg-white shadow-lg rounded-lg p-[25px]  h-[370px] flex-grow">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">نمودار دما</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 40 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="#ddd" />
          <XAxis dataKey="name" tick={{ fontSize: 14 }} dy={10} />
          <YAxis tickFormatter={(value) => `${value}°C`} tick={{ fontSize: 14 }} dx={-35} />
          <Tooltip formatter={(value) => `${value}°C`} />
          <Line type="monotone" dataKey="دما" stroke="#3A80BA" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export { Chart };
