import React, { useContext } from "react";
import moment from "moment-jalaali";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa6";
import e2p from "../../config/e2p";
import { ComponentsContext } from "../App";

function ForcastWeather({ weatherForcast }) {
  const {dark} = useContext(ComponentsContext)
  moment.loadPersian({ usePersianDigits: true });

  let data = weatherForcast["list"];
  let temp = [];

  for (let i = 0; i < 5; i++) {
    let y = data.slice(i * 8, (i + 1) * 8);
    let min = Infinity;
    let max = -Infinity;
    let stamp = null;

    for (let item of y) {
      if (item["main"]["temp_min"] < min) {
        min = item["main"]["temp_min"];
      }
      if (item["main"]["temp_max"] > max) {
        max = item["main"]["temp_max"];
      }
      if (new Date(item["dt_txt"]).getHours() === 6) {
        stamp = item["dt"];
      }
    }

    temp.push({
      index: i,
      min: Math.floor(min),
      max: Math.floor(max),
      stamp: stamp,
    });
  }

  return (
    <div
      className={`bg-white rounded-[9px] shadow grid grid-cols-1  p-[25px] gap-7 h-[550px] border border-solid
     border-gray-200 ${dark && "darkmood-bg darkmood-border"}`}
    >
      <p>دمای {e2p(5)} روز آینده</p>
      {temp.map((item) => (
        <div
          key={item.index}
          className={`flex justify-around
            items-center rounded-[7px]  p-[10px] border-[.5px] border-solid border-gray-100 
            shadow-sm ${dark && "border-[#1e1c1c]"}  `}
        >
          <p className="w-3/4">
            {moment.unix(item["stamp"]).format("dddd") === "آدینه"
              ? "جمعه"
              : moment.unix(item["stamp"]).format("dddd")}
            <span> </span>، <span></span>
            <span>{moment.unix(item["stamp"]).format("jD jMMMM")}</span>
          </p>
          <div className="flex w-1/4 justify-center  ">
            <div className="flex justify-between ml-[10px]">
              °
              <p dir="ltr" className="">
                {e2p(item["min"])}
              </p>
              <FaArrowDown className="text-blue-800" />
            </div>
            <div className="flex">
              °<p dir="ltr">{e2p(item["max"])}</p>
              <FaArrowUp className="text-red-800" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ForcastWeather;
