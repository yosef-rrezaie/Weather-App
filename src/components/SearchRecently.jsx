import React, { useContext } from "react";
import { ComponentsContext } from "../App";
import { useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import e2p from "../../config/e2p";

function SearchRecently() {
  const result = useSelector(
    (store) => store.SearchRecently.searchRecentlyObject
  );

  return (
    <div className="flex gap-[15px] mt-[19px]">
      {result.map((item, index) => (
        <div
          key={index}
          className="relative w-[250px] bg-white py-[15px] px-[13px] rounded-[9px] shadow-sm flex 
          justify-between items-center"
        >
          <div className="flex flex-col justify-between mx-[10px] gap-y-2 items-center">
            <p className="text-[17px]">{item["data"]["name"]}</p>
            <p className="font-thin">{item["data"]["sys"]["country"]}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-[17px]" dir="ltr">
              {e2p(Math.floor(item["data"]["main"]["temp"]))}°
            </p>
            <p className="font-thin">
              {item["data"]["weather"][0]["description"]}
            </p>
          </div>

          <ImCross className="absolute top-[10px] left-[10px] text-[10px] text-red-500" />
        </div>
      ))}
    </div>
  );
}

export default SearchRecently;
