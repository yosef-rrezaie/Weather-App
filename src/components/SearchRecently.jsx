import React, { useContext, useRef, useState, useEffect } from "react";
import { ComponentsContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import e2p from "../../config/e2p";
import { removeserachRecently } from "../feautures/serachRecently";
import { toast } from "react-toastify";
import toastCreate from "../../config/toastCreate";

function SearchRecently() {
  const { setCityName, cityName, dark } = useContext(ComponentsContext);
  const dispatch = useDispatch();
  const result = useSelector(
    (store) => store.SearchRecently.searchRecentlyObject
  );
  const scrollRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        setShowButtons(
          scrollRef.current.scrollWidth > scrollRef.current.clientWidth
        );
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [result]);

  function removeHandler(e) {
    const value = e.currentTarget.dataset.value;

    if (result.length === 1) {
      toastCreate("حداقل یک شهر باید در لیست جست و جو باشد !");
      return;
    }

    if (value === result[result.length - 1]["data"]["name"]) {
      toastCreate("موقعیت کنونی را نمی توان حذف کرد !");
      return;
    }

    dispatch(removeserachRecently(value));
    toastCreate("شهر مورد نظر از لیست جست و جو حذف شد !");
  }

  function searchAgain(e) {
    setCityName([...cityName, e.target.innerText]);
  }

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 250;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 250;
    }
  };

  return (
    <div className="relative w-full mt-[19px]">
      {showButtons && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition hidden md:flex"
        >
          <FaChevronLeft size={20} />
        </button>
      )}

      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap flex gap-[15px] px-10 scroll-smooth custom-scrollbar"
      >
        {result.map((item, index) => (
          <div
            key={index}
            className={`bg-white relative min-w-[258px] py-[15px] px-[13px] rounded-[9px] shadow-sm flex 
            justify-between items-center ${
              dark && "darkmood-bg darkmood-border"
            }`}
          >
            <div className="flex flex-col justify-between mx-[10px] gap-y-2 items-center">
              <p className="text-[17px] cursor-pointer" onClick={searchAgain}>
                {item["data"]["name"]}
              </p>
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

            <ImCross
              className="absolute top-[10px] left-[10px] text-[10px] text-red-500"
              data-value={item["data"]["name"]}
              onClick={removeHandler}
            />
          </div>
        ))}
      </div>

      {/* دکمه راست */}
      {showButtons && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition hidden md:flex"
        >
          <FaChevronRight size={20} />
        </button>
      )}
    </div>
  );
}

export default SearchRecently;
