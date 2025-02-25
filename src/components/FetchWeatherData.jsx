import React from "react";
import { API_KEY, weatherApi } from "../config/api";
import { useQuery } from "@tanstack/react-query";
import ShowCurrentWeather from "./ShowCurrentWeather";
import { Chart } from "./Chart";
import DetailWeather from "./DetailWeather";
import ForcastWeather from "./ForcastWeather";
import { IoIosRefreshCircle } from "react-icons/io";

function FetchWeatherData({ data, cityName, language, units, setUnits }) {
  console.log(data[0].lat, data[0].lon);
  const { data: currentData, isPending: currentDataPending , refetch : currentRefetch } = useQuery({
    queryKey: ["currentWeather", cityName, units],
    queryFn: () =>
      weatherApi.get(
        `weather?lat=${data[0].lat}&lon=${data[0].lon}&lang=${language}&units=${units}&appid=${API_KEY}`
      ),
  });

  const { data: weatherForcast, isPending: weatherForcastPending , refetch : forcastRefetch  } = useQuery({
    queryKey: ["weatherForcast", cityName, units],
    queryFn: () =>
      weatherApi.get(
        `forecast?lat=${data[0].lat}&lon=${data[0].lon}&lang=${language}&units=${units}&appid=${API_KEY}`
      ),
  });

  console.log("current:", currentData);
  console.log("forcast:", weatherForcast);

  function refetchHandler () {
    currentRefetch()
    forcastRefetch()
  }

  return (
    <>
      {currentDataPending || weatherForcastPending === true ? null : (
        <div>
          <div className="flex justify-between mx-[43px] mt-[30px] ">
            <p className="text-[1.3rem] font-extrabold">موقعیت من</p>
            <IoIosRefreshCircle className="text-blue-300 text-[2rem]" onClick={refetchHandler} />
          </div>
          <div className="grid grid-cols-2 gap-5 mx-[43px] mb-[43px] mt-[25px]  min-h-[300px]">
            <ShowCurrentWeather
              currentData={currentData}
              units={units}
              setUnits={setUnits}
            />
            <Chart weatherForcast={weatherForcast} />
          </div>
          <div className="mx-[43px] grid custom-grid-cols gap-5 min-h-[300px] pb-[20px]">
            <DetailWeather currentData={currentData} />
            <ForcastWeather weatherForcast={weatherForcast} />
          </div>
        </div>
      )}
    </>
  );
}

export default FetchWeatherData;
