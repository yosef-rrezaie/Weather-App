import React from "react";
import moment from "moment-jalaali";

function ForcastWeather({ weatherForcast }) {
  //   const convrtTimeStamp = (timestamp) => {
  //     let date = moment.unix(timestamp).locale("fa").format("jD jMMMM");
  //     let dayOfWeek = moment.unix(timestamp).locale("fa").format("dddd");
  //   };
  moment.loadPersian({ usePersianDigits: true });

  let data = weatherForcast["list"];
  let temp = [];

  for (let i = 0; i < 5; i++) {
    let y = data.slice(i * 8, (i + 1) * 8);
    let min = Infinity;
    let max = -Infinity;
    let stamp = null;

    for (let item of y) {
      if (item["main"]["temp_min"] < min) {
        min = item["main"]["temp_min"];
      }
      if (item["main"]["temp_max"] > max) {
        max = item["main"]["temp_max"];
      }
      if (new Date(item["dt_txt"]).getHours() === 6) {
        stamp = item["dt"];
      }
    }

    temp.push({
      index: i,
      min: Math.floor(min),
      max: Math.floor(max),
      stamp: stamp,
    });
  }

  console.log(temp);

  return (
    <div className="bg-white rounded-[7px] shadow-lg">
      {temp.map((item) => (
        <div key={item.index}>
          <p>
            {moment.unix(item["stamp"]).format("dddd") === "آدینه"
              ? "جمعه"
              : moment.unix(item["stamp"]).format("dddd")} ،  
            <span>{moment.unix(item["stamp"]).format("jD jMMMM")}</span>
          </p>
          <div>
            <p>{item["min"]}</p>
            <p>{item["max"]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ForcastWeather;
