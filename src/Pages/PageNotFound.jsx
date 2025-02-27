import React, { useContext, useEffect } from "react";
import { TbError404 } from "react-icons/tb";
import { ComponentsContext } from "../App";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const { cityName, dark } = useContext(ComponentsContext);
  let x = cityName.length;
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (cityName.length > x || cityName.length < x) {
  //     navigate("/");
  //   }
  // }, [cityName]);
  return (
    <div className="flex justify-center items-center h-[80vh] flex-col ">
      <TbError404
        className={` text-blue-500 text-[10rem] ${dark && "text-blue"}`}
      />
      <p>صفحه مورد نظر موجود نمی باشد !</p>
      <button
        className={`mt-[27px] rounded-[7px]  p-[10px] border-[.5px] 
      border-solid border-blue-400 bg-blue-500 text-white shadow-2xl text-[12px] ${
        dark && "bg-[#00ADB5]"
      }`}
        onClick={() => navigate("/")}
      >
        بازگشت به صفحه اصلی
      </button>
    </div>
  );
}

export default PageNotFound;
