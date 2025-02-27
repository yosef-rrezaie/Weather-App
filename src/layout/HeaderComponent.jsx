import React, { useContext, useEffect } from "react";
import weatherIcon from "../assets/weather-forecast.png";
import { CiSearch } from "react-icons/ci";
import { ComponentsContext } from "../App";
import { NavLink } from "react-router-dom";
import { IoMdSave, IoMdSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa6";
import { FiMoon } from "react-icons/fi";

function HeaderComponent() {
  const {
    changeHandler,
    currentCity,
    clickHandler,
    cityName,
    setHistory,
    dark,
    setDark,
  } = useContext(ComponentsContext);

  function setDarkHandler() {
    setDark(!dark);
  }

  return (
    <header
      className={`bg-white h-[100px] flex justify-between items-center px-[43px] shadow-lg 
    sticky top-0 z-10 ${dark && "darkmood-bg text-white"} `}
    >
      <div className="flex items-center gap-[35px]">
        {!!dark ? (
          <IoMdSunny
            className="text-yellow-400 text-[23px] animate-pulse"
            onClick={setDarkHandler}
          />
        ) : (
          <FiMoon
            className="text-blue-500 text-[23px] animate-pulse"
            onClick={setDarkHandler}
          />
        )}

        <div className="relative">
          <input
            type="text"
            placeholder="جست و جوی شهر ..."
            className={`placeholder:text-[11px] focus:outline-none border-[2px] border-solid shadow-sm border-gray-200 
          rounded-[5px] p-[8px] w-[270px] ${
            dark && "darkmood-home darkmood-border placeholder:font-extrabold"
          }`}
            onChange={changeHandler}
            value={currentCity}
          />
          <CiSearch
            className="absolute top-[30%] left-[2%] text-[20px] text-blue-700"
            onClick={clickHandler}
          />
        </div>
      </div>
      <div className="flex gap-[25px]">
        <NavLink to="/Homepage">صفحه اصلی</NavLink>
        <NavLink to="/favorite">مورد علاقه</NavLink>
      </div>
      <img src={weatherIcon} className="w-[60px]" />
    </header>
  );
}

export default HeaderComponent;
