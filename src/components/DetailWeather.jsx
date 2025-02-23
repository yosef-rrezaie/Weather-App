import React from "react";
import {
  BsFillSunriseFill,
  BsFillSunsetFill,
} from "react-icons/bs";
import { GiMultiDirections } from "react-icons/gi";
import { IoIosSpeedometer } from "react-icons/io";
import { dateConverter } from "../../config/dateConverter";

function DetailWeather({ currentData }) {
  return (
    <div className="bg-white rounded-[7px] shadow-lg">
      <p>جزئیات آب و هوا</p>
      <div>
        <div className="flex justify-between mt-[30px]">
          <div className="flex items-center">
            <span>
              <BsFillSunriseFill className="text-[1.7rem] text-yellow-600" />
            </span>
            <div className="flex flex-col pr-[10px] gap-y-2">
              <p className="">طلوع</p>
              <span className="font-thin">
                {dateConverter( currentData["sys"]["sunrise"], "sunrise")} قبل از ظهر
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mt-[30px]">
          <div className="flex items-center">
            <span>
              <BsFillSunsetFill className="text-[1.7rem] text-blue-600" />
            </span>
            <div className="flex flex-col pr-[10px] gap-y-2">
              <p className="">غروب</p>
              <span className="font-thin">
                {dateConverter(currentData["sys"]["sunset"] , "sunset")} بعد از ظهر
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mt-[30px]">
          <div className="flex items-center">
            <span>
              <GiMultiDirections className="text-[1.7rem] text-green-800" />
            </span>
            <div className="flex flex-col pr-[10px] gap-y-2">
              <p className="">جهت باد</p>
              <span className="font-thin">
                {currentData["wind"]["deg"]}°
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mt-[30px]">
          <div className="flex items-center">
            <span>
              <IoIosSpeedometer className="text-[1.7rem] text-purple-500" />
            </span>
            <div className="flex flex-col pr-[10px] gap-y-2">
              <p className="">فشار</p>
              <span className="font-thin">
                {currentData["main"]["pressure"]} پاسکال
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailWeather;
