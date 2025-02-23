import React from "react";
import { WiHumidity } from "react-icons/wi";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa6";

// ['coord', 'weather', 'base', 'main', 'visibility', 'wind', 'rain', 'clouds', 'dt', 'sys', 'timezone', 'id', 'name', 'cod']
function ShowCurrentWeather({ currentData }) {

  const image = currentData["weather"][0]["icon"];
  return (
    <div className="flex bg-white my-[30px] p-[18px] rounded-[7px] shadow-lg items-center">
      <div className="w-1/3">
        <div className="flex justify-between">
          <p className="font-normal">{currentData["name"]}</p>
          <span>{currentData["sys"]["country"]}</span>
        </div>
        <div className="">
          <p dir="ltr" className="text-center text-7xl my-[19px]">
            {Math.floor(currentData["main"]["temp"])}
            <span>°</span>
          </p>
          <div>
            {/* <div>
              <p>
                دمای احساسی : {Math.floor(currentData["main"]["feels_like"])}
                <span>°</span>
              </p>
            </div> */}
            <div dir="ltr" className="flex justify-evenly items-center">
              <p className="flex text-blue-800 text-[1.3rem]">
                <FaArrowDown className="" />
                {Math.floor(currentData["main"]["temp_min"])}
                <span>°</span>
              </p>
              <p className="flex text-red-800 text-[1.3rem]">
                <FaArrowUp />
                {Math.floor(currentData["main"]["temp_max"])}
                <span>°</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[30px]">
          <div className="flex items-center">
            <span>
              <WiHumidity className="text-[1.3rem] text-blue-800"/>
            </span>
            <div className="flex flex-col pr-[10px] gap-y-2">
              <p className="">رطوبت</p>
              <span className="font-thin">
                {currentData["main"]["humidity"]}<span>%</span>
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <span>
              <FaWind className="text-[1.3rem] text-blue-800" />
            </span>
            <div className="flex flex-col pr-[10px] gap-y-2">
              <p>سرعت باد</p>
              <span className="font-thin">{Math.floor(currentData["wind"]["speed"])} <span>متر بر ثانیه</span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3  flex items-center flex-col">
        <img
          src={`https://openweathermap.org/img/wn/${image}@2x.png`}
          className="w-[130px]"
        />
        <p>{currentData["weather"][0]["description"]}</p>
      </div>
    </div>
  );
}

export default ShowCurrentWeather;
