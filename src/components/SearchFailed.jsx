import React from "react";
import { LuSearchX } from "react-icons/lu";

function SearchFailed() {
  return (
    <div className=" flex h-[80vh] flex-col items-center justify-center">
      <LuSearchX className="text-[10rem] text-red-300" />
      <p className="font-bold mt-[8px] max-slm:p-[10px] text-center ">
        اطلاعات شهر مورد نظر موجود نمی باشد ، لطفا مجددا جست و جو نمایید
      </p>
    </div>
  );
}

export default SearchFailed;
