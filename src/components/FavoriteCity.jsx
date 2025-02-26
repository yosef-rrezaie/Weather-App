import { current } from "@reduxjs/toolkit";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import e2p from "../../config/e2p";
import { FaArrowDown, FaArrowUp, FaHeart, FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { CiHeart } from "react-icons/ci";
import { ComponentsContext } from "../App";
import { ImCross } from "react-icons/im";
import { removeFavorite } from "../feautures/favotire";
function FavoriteCity() {
  const { units, favorite, setFavoriteHandler } = useContext(ComponentsContext);
  const result = useSelector((store) => store.Favorite.favoriteObject);
  const dispatch = useDispatch()
    console.log(result);

  function removeHandler(e) {
    const value = Number(e.currentTarget.dataset.value);
    const removeItem = result.filter(item => item["lon"]!== value)
    console.log(removeItem)
    dispatch(removeFavorite(value)); 

  }

  return (
    <div className="grid grid-cols-3 gap-[30px]  px-[43px] mt-[30px] flex-wrap">
      {result.map((item) => (
        <div
          key={item["lon"]}
          className="flex bg-white rounded-[9px] shadow p-[25px] flex-grow border border-solid
         border-gray-200"
        >
          <div className="w-3/5 ">
            <div className="flex justify-between">
              <p className="font-normal">{item["data"]["name"]}</p>
              <span>{item["data"]["sys"]["country"]}</span>
            </div>
            <div className="p-[24px]">
              <p dir="ltr" className="text-center text-7xl -[19px]">
                {e2p(Math.floor(item["data"]["main"]["temp"]))}
                <span>°</span>
              </p>
              <div>
                <div dir="ltr" className="flex justify-evenly items-center">
                  <p className="flex text-blue-800 text-[1.3rem]">
                    <FaArrowDown className="" />
                    {e2p(Math.floor(item["data"]["main"]["temp_min"]))}
                    <span>°</span>
                  </p>
                  <p className="flex text-red-800 text-[1.3rem]">
                    <FaArrowUp />
                    {e2p(Math.floor(item["data"]["main"]["temp_max"]))}
                    <span>°</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-[30px]">
              <div className="flex items-center">
                <span>
                  <WiHumidity className="text-[1.7rem] text-blue-800" />
                </span>
                <div className="flex flex-col pr-[10px] gap-y-2">
                  <p className="">رطوبت</p>
                  <span className="font-thin">
                    {e2p(item["data"]["main"]["humidity"])}
                    <span>%</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <span>
                  <FaWind className="text-[1.3rem] text-blue-800" />
                </span>
                <div className="flex flex-col pr-[10px] gap-y-2">
                  <p>سرعت باد</p>
                  <span className="font-thin">
                    {e2p(Math.floor(item["data"]["wind"]["speed"]))}{" "}
                    <span></span>
                    <span>
                      {units === "imperial" ? "مایل بر ساعت" : "متر بر ثانیه"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-[30px] pr-[10px] gap-5 flex text-[.7rem] text-blue-400 ">
              {/* <button
                onClick={setUnitsHandler}
                className={`rounded-[7px]  p-[10px] border-[.5px] border-solid border-blue-400 shadow-lg ${
                  units === "metric" ? "bg-blue-500 text-white" : null
                }
             }`}
                value="metric"
              >
                سلسیوس
              </button>
              <button
                onClick={setUnitsHandler}
                value="Imperial"
                className={`rounded-[7px]  p-[10px] border-[.5px] border-solid border-blue-400 shadow-lg ${
                  units === "imperial" ? "bg-blue-500 text-white" : null
                } `}
              >
                کلوین
              </button> */}
              <p>دمای معیار :</p>
              <p>{item["units"] === "metric" ? "سلسیوس" : "کلوین"}</p>
            </div>
          </div>
          <div className="w-2/5 flex items-center flex-col justify-center">
            <img
              src={`https://openweathermap.org/img/wn/${item["data"]["weather"][0]["icon"]}@2x.png`}
              className="w-[130px]"
            />
            <p>{item["data"]["weather"][0]["description"]}</p>
          </div>
          <div
            className="text-[15px] text-red-600 h-max cursor-pointer"
            data-value={`${item["lon"]}`}
            onClick={removeHandler} 
          >
            <ImCross />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavoriteCity;
