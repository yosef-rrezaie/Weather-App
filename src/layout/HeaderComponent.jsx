import React, { useContext } from "react";
import weatherIcon from "../assets/weather-forecast.png";
import { CiSearch } from "react-icons/ci";
import { ComponentsContext } from "../Pages/HomePage";

function HeaderComponent() {
  const { changeHandler, currentCity, clickHandler } = useContext(ComponentsContext)
  return (
    <header className="bg-white h-[100px] flex justify-between items-center px-[43px] shadow-lg 
    sticky top-0 z-10">
      <div className="relative">
        <input
          type="text"
          placeholder="جست و جوی شهر ..."
          className="placeholder:text-[11px] focus:outline-none border-[2px] border-solid shadow-sm border-gray-200 
          rounded-[5px] p-[8px] w-[270px]"
          onChange={changeHandler}
          value={currentCity}
        />
        <CiSearch
          className="absolute top-[30%] left-[2%] text-[20px] text-blue-700"
          onClick={clickHandler}
        />
      </div>
      <img src={weatherIcon} className="w-[60px]" />
    </header>
  );
}

export default HeaderComponent;
