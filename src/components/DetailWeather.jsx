import React from "react";
import {
  BsFillSunriseFill,
  BsFillSunsetFill,
  BsSpeedometer2,
} from "react-icons/bs";
import { GiMultiDirections } from "react-icons/gi";
import { IoIosSpeedometer } from "react-icons/io";

function DetailWeather({ currentData }) {
  return (
    <div className="bg-white rounded-[7px] shadow-lg">
      <p>جزئیات آب و هوا</p>
      <div>
        <div className="flex justify-between mt-[30px]">
          <div className="flex items-center">
            <span>
              <BsFillSunriseFill className="text-[1.7rem] text-yellow-500" />
            </span>
            <div className="flex flex-col pr-[10px] gap-y-2">
              <p className="">رطوبت</p>
              <span className="font-thin">
                {currentData["main"]["humidity"]}
                <span>%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mt-[30px]">
          <div className="flex items-center">
            <span>
              <BsFillSunsetFill className="text-[1.7rem] text-yellow-500" />
            </span>
            <div className="flex flex-col pr-[10px] gap-y-2">
              <p className="">رطوبت</p>
              <span className="font-thin">
                {currentData["main"]["humidity"]}
                <span>%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mt-[30px]">
          <div className="flex items-center">
            <span>
              <GiMultiDirections className="text-[1.7rem] text-yellow-500" />
            </span>
            <div className="flex flex-col pr-[10px] gap-y-2">
              <p className="">رطوبت</p>
              <span className="font-thin">
                {currentData["main"]["humidity"]}
                <span>%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mt-[30px]">
          <div className="flex items-center">
            <span>
              <IoIosSpeedometer className="text-[1.7rem] text-yellow-500" />
            </span>
            <div className="flex flex-col pr-[10px] gap-y-2">
              <p className="">رطوبت</p>
              <span className="font-thin">
                {currentData["main"]["humidity"]}
                <span>%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailWeather;
