import React, { useContext } from "react";
import { WiHumidity } from "react-icons/wi";
import { FaArrowDown, FaArrowUp, FaHeart, FaWind } from "react-icons/fa6";
import e2p from "../../config/e2p";
import { CiHeart } from "react-icons/ci";
import { ComponentsContext } from "../App";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../feautures/favotire";
// ['coord', 'weather', 'base', 'main', 'visibility', 'wind', 'rain', 'clouds', 'dt', 'sys', 'timezone', 'id', 'name', 'cod']
function ShowCurrentWeather({ currentData }) {
  const { units, setUnits, favorite, setFavorite } =
    useContext(ComponentsContext);
  const dispatch = useDispatch();
  console.log("currentDataYosef", currentData);

  function setFavoriteHandler() {
    if (favorite === false) {
      dispatch(
        addFavorite({
          lon: currentData["coord"]["lon"],
          lat: currentData["coord"]["lat"],
          data: currentData,
          units: units,
        })
      );
      setFavorite(!favorite);
    } else {
      dispatch(removeFavorite(currentData["coord"]["lon"]));
      setFavorite(!favorite);
    }
  }

  const setUnitsHandler = (e) => {
    const value = e.target.value;
    if (value === "metric") {
      setUnits("metric");
    } else {
      setUnits("imperial");
    }
  };

  const image = currentData["weather"][0]["icon"];
  return (
    <div className="flex bg-white rounded-[9px] shadow p-[25px] flex-grow border border-solid border-gray-200">
      <div className="w-3/5 ">
        <div className="flex justify-between">
          <p className="font-normal">{currentData["name"]}</p>
          <span>{currentData["sys"]["country"]}</span>
        </div>
        <div className="p-[24px]">
          <p dir="ltr" className="text-center text-7xl -[19px]">
            {e2p(Math.floor(currentData["main"]["temp"]))}
            <span>°</span>
          </p>
          <div>
            <div dir="ltr" className="flex justify-evenly items-center">
              <p className="flex text-blue-800 text-[1.3rem]">
                <FaArrowDown className="" />
                {e2p(Math.floor(currentData["main"]["temp_min"]))}
                <span>°</span>
              </p>
              <p className="flex text-red-800 text-[1.3rem]">
                <FaArrowUp />
                {e2p(Math.floor(currentData["main"]["temp_max"]))}
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
                {e2p(currentData["main"]["humidity"])}
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
                {e2p(Math.floor(currentData["wind"]["speed"]))} <span></span>
                <span>
                  {units === "imperial" ? "مایل بر ساعت" : "متر بر ثانیه"}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[30px] pr-[10px] gap-5 flex text-[.7rem]">
          <button
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
          </button>
        </div>
      </div>
      <div className="w-2/5 flex items-center flex-col justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${image}@2x.png`}
          className="w-[130px]"
        />
        <p>{currentData["weather"][0]["description"]}</p>
      </div>
      <div className="text-[25px]">
        {!!favorite ? (
          <FaHeart className="text-red-500" onClick={setFavoriteHandler} />
        ) : (
          <CiHeart
            className="text-red-500 hover:text-red-700"
            onClick={setFavoriteHandler}
          />
        )}
      </div>
    </div>
  );
}

export default ShowCurrentWeather;
