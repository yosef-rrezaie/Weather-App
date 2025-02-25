import React from "react";
import moment from "moment-jalaali";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa6";

function ShowForcastWeather({ temp }) {
  moment.loadPersian({ usePersianDigits: true });

  return (
    <>
      <div>
        <p>
          {moment.unix(temp["stamp"]).format("dddd") === "آدینه"
            ? "جمعه"
            : moment.unix(temp["stamp"]).format("dddd")}{" "}
          ،<span>{moment.unix(temp["stamp"]).format("jD jMMMM")}</span>
        </p>
        <div>
          <div>
            <p>{temp["min"]}</p>
            <FaArrowDown />
          </div>
          <div>
            <p>
              {temp["max"]}
              <FaArrowUp />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowForcastWeather;
