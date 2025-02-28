import React, { useContext } from "react";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { GiMultiDirections } from "react-icons/gi";
import { IoIosSpeedometer } from "react-icons/io";
import { dateConverter } from "../../config/dateConverter";
import e2p from "../../config/e2p";
import getWindDirection from "../../config/windDirecttion";
import { ComponentsContext } from "../App";

function DetailWeather({ currentData }) {
  const {dark} = useContext(ComponentsContext)
  return (
    <div className={`bg-white rounded-[9px] shadow p-[25px] h-[300px] border border-solid
    border-gray-200 ${dark && "darkmood-bg darkmood-border"} `}>
      <p>جزئیات آب و هوا</p>
      <div className="flex flex-wrap max-md:justify-between max-md:flex">
        <div className={`w-1/2`}>
          <div className={`flex  justify-between mt-[30px] ${dark && "border-[#1e1c1c]"}`}>
            <div className={`flex items-center ${dark && "border-[#1e1c1c]"}`}>
              <span>
                <BsFillSunriseFill className="text-[1.7rem] text-yellow-600" />
              </span>
              <div className={`flex flex-col pr-[10px] gap-y-2`}>
                <p className="">طلوع</p>
                <span className="font-thin">
                  {e2p(dateConverter(currentData["sys"]["sunrise"]), "sunrise")}{" "}
                  قبل از ظهر
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex justify-between mt-[30px]">
            <div className="flex items-center">
              <span>
                <BsFillSunsetFill className={`text-[1.7rem] text-blue-600 ${dark && "text-blue"}`} />
              </span>
              <div className="flex flex-col pr-[10px] gap-y-2">
                <p className="">غروب</p>
                <span className="font-thin">
                  {e2p(dateConverter(currentData["sys"]["sunset"]), "sunset")}{" "}
                  بعد از ظهر
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex justify-between mt-[30px]">
            <div className="flex items-center">
              <span>
                <GiMultiDirections className="text-[1.7rem] text-green-800" />
              </span>
              <div className="flex flex-col pr-[10px] gap-y-2">
                <p className="">جهت باد</p>
                <span className="font-thin">
                  {getWindDirection(currentData["wind"]["deg"])}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex justify-between mt-[30px]">
            <div className="flex items-center">
              <span>
                <IoIosSpeedometer className="text-[1.7rem] text-purple-500" />
              </span>
              <div className="flex flex-col pr-[10px] gap-y-2">
                <p className="">فشار</p>
                <span className="font-thin">
                  {e2p(currentData["main"]["pressure"])} پاسکال
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailWeather;
