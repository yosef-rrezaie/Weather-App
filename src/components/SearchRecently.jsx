import React, { useContext } from "react";
import { ComponentsContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import e2p from "../../config/e2p";
import { removeserachRecently } from "../feautures/serachRecently";
import { toast } from "react-toastify";

function SearchRecently() {
  const { setCityName, cityName } = useContext(ComponentsContext);
  const dispatch = useDispatch();
  const result = useSelector(
    (store) => store.SearchRecently.searchRecentlyObject
  );
  console.log(result);
  console.log("p:", result[result.length - 1]);

  function removeHandler(e) {
    const value = Number(e.currentTarget.dataset.value);
    if (result.length === 1) {
      toast.success(" حداقل یک شهر باید در لیست جست و جو باشد !", {
        className: "text-[12px] font-bold text-green-700",
        style: {
          background: "#e0f2f1",
          color: "#004d40",
          borderRadius: "10px",
          fontFamily: "Vazir",
        },
      });
      return;
    }

    if (value == result[result.length - 1]["lon"]) {
      toast.success("موقعیت کنونی را نمی توان حذف کرد !", {
        className: "text-[12px] font-bold text-green-700",
        style: {
          background: "#e0f2f1",
          color: "#004d40",
          borderRadius: "10px",
          fontFamily: "Vazir",
        },
      });
      return;
    }
    dispatch(removeserachRecently(value));
    toast.success("شهر مورد نظر از لیست جست و جو حذف شد !", {
      className: "text-[12px] font-bold text-green-700",
      style: {
        background: "#e0f2f1",
        color: "#004d40",
        borderRadius: "10px",
        fontFamily: "Vazir",
      },
    });
  }

  function searchAgain(e) {
    setCityName([...cityName, e.target.innerText]);
  }

  return (
    <div className="flex gap-[15px] mt-[19px]">
      {result.map((item, index) => (
        <div
          key={index}
          className="relative w-[250px] bg-white py-[15px] px-[13px] rounded-[9px] shadow-sm flex 
          justify-between items-center"
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
            data-value={`${item["lon"]}`}
            onClick={removeHandler}
          />
        </div>
      ))}
    </div>
  );
}

export default SearchRecently;
