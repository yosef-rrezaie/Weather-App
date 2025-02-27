import React, { useContext } from "react";
import { ComponentsContext } from "../App";
import { useSelector } from "react-redux";

function SearchRecently() {
  const result = useSelector(
    (store) => store.SearchRecently.searchRecentlyObject
  );

  return (
    <div className="flex gap-[10px] mt-[19px]">
      {result.map((item, index) => (
        <div key={index} className="flex w-[250px] bg-white justify-between py-[17px] px-[13px] rounded-[9px] shadow-sm">
          <p>{item["data"]["name"]}</p>
          <p>{item["data"]["sys"]["country"]}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchRecently;
