import React from "react";
import { API_KEY, weatherApi } from "../config/api";
import { useQuery } from "@tanstack/react-query";
import ShowCurrentWeather from "./ShowCurrentWeather";
import { Chart } from "./Chart";

function FetchWeatherData({ data, cityName, language, units }) {
  console.log(data[0].lat, data[0].lon);
  const { data: currentData, isPending: currentDataPending } = useQuery({
    queryKey: ["currentWeather", cityName],
    queryFn: () =>
      weatherApi.get(
        `weather?lat=${data[0].lat}&lon=${data[0].lon}&lang=${language}&units=${units}&appid=${API_KEY}`
      ),
  });

  const { data: weatherForcast, isPending: weatherForcastPending } = useQuery({
    queryKey: ["weatherForcast", cityName],
    queryFn: () =>
      weatherApi.get(
        `forecast?lat=${data[0].lat}&lon=${data[0].lon}&lang=${language}&units=${units}&appid=${API_KEY}`
      ),
  });
  console.log("weatherForcastPending :", weatherForcastPending);
  console.log("current :", currentDataPending);

  console.log("current:", currentData);
  console.log("forcast:", weatherForcast);

  return (
    <>
      {currentDataPending || weatherForcastPending === true ? null : (
        <div>
          <div className="grid grid-cols-2 gap-5 m-[33px] box-border min-h-[300px]">
              <ShowCurrentWeather currentData={currentData} />
              <Chart weatherForcast={weatherForcast} />
          </div>
        </div>
      )}
    </>
  );
}

export default FetchWeatherData;
