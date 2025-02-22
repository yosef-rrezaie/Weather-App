import React from "react";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";

// ['coord', 'weather', 'base', 'main', 'visibility', 'wind', 'rain', 'clouds', 'dt', 'sys', 'timezone', 'id', 'name', 'cod']
function ShowCurrentWeather({ currentData }) {
  const image = currentData["weather"][0]["icon"];
  return (
    <>
      <div>
        <div>
          <p>{currentData["name"]}</p>
          <span>{currentData["sys"]["country"]}</span>
        </div>
        <div>
          <p>{Math.floor(currentData["main"]["temp"])}</p>
          <div>
            <p>دمای احساسی : {Math.floor(currentData["main"]["feels_like"])}</p>
            <div>
              <span>{Math.floor(currentData["main"]["temp_min"])}</span>
              <span>{Math.floor(currentData["main"]["temp_max"])}</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>
              <WiHumidity />
            </span>
            <div>
              <p>رطوبت</p>
              <span>{currentData["main"]["humidity"]}</span>
            </div>
          </div>
          <div>
            <span>
              <FaWind />
            </span>
            <div>
              <p>سرعت باد</p>
              <span>{Math.floor(currentData["wind"]["speed"])}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={`https://openweathermap.org/img/wn/${image}@2x.png`} />
        <p>{currentData["weather"][0]["description"]}</p>
      </div>
    </>
  );
}

export default ShowCurrentWeather;
