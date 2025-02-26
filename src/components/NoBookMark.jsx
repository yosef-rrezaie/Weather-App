import React from "react";
import { CiBookmarkRemove } from "react-icons/ci";

function NoBookMark() {
  return (
    <div className=" flex h-[80vh] flex-col items-center justify-center">
      <CiBookmarkRemove className="text-[10rem] text-red-300" />
      <p className="font-bold mt-[8px]">
        تا کنون شهری به لیست مورد علاقه شما افزوده نشده است
      </p>
    </div>
  );
}

export default NoBookMark;
