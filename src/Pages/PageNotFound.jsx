import React from "react";
import { TbError404 } from "react-icons/tb";

function PageNotFound() {
  return (
    <div className="flex justify-center items-center h-[80vh] flex-col">
      <TbError404 className=" text-blue-500 text-[10rem]" />
      <p>صفحه مورد نظر موجود نمی باشد !</p>
      <button className="mt-[27px] rounded-[7px]  p-[10px] border-[.5px] 
      border-solid border-blue-400 bg-blue-500 text-white shadow-2xl text-[12px]">
        بازگشت به صفحه اصلی
      </button>
    </div>
  );
}

export default PageNotFound;
