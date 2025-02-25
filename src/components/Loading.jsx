import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <AiOutlineLoading3Quarters className="animate-spin text-blue-500 w-16 h-16" />
    </div>
  );
}

export default Loading;
