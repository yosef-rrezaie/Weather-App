import React, { useState } from "react";
import { API_KEY, weatherApi } from "../config/api";
import { useQuery } from "@tanstack/react-query";
import ShowCurrentWeather from "./ShowCurrentWeather";
// current weather api : https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function CurrentWeather({ data, cityName, language, units }) {
  console.log(data[0].lat, data[0].lon);
  // console.log(units)
  const { data: currentData, isPending } = useQuery({
    queryKey: ["currentWeather" , cityName],
    queryFn: () =>
      weatherApi.get(
        `weather?lat=${data[0].lat}&lon=${data[0].lon}&lang=${language}&units=${units}&appid=${API_KEY}`
      ),
  });
  

  console.log(cityName[cityName.length - 1], currentData);
  return (
    <div>
     {isPending ? null : <ShowCurrentWeather currentData={currentData}/>}
    </div>
  );
}

export default CurrentWeather;
