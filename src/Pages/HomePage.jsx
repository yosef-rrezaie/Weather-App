import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { API_KEY, geoApi, weatherApi } from "../config/api";
import Layout from "../layout/Layout";
import FetchWeatherData from "../components/FetchWeatherData";

function HomePage() {
  const [currentCity, setCurrentCity] = useState("");
  const [cityName, setCityName] = useState(["تهران"]);
  const [allCity, setAllCity] = useState(null);
  const [language, setLanguage] = useState("fa");
  const [units, setUnits] = useState("metric");
  const { data, isPending, refetch } = useQuery({
    queryKey: ["geoLocation", cityName],
    queryFn: () =>
      geoApi.get(
        `direct?q=${
          cityName[cityName.length - 1]
        }&lang=${language}&appid=${API_KEY}`
      ),
  });

  function changeHandler(e) {
    setCurrentCity(e.target.value);
  }

  function clickHandler() {
    if (cityName.find((item) => item === currentCity)) {
      return;
    }
    setCityName([...cityName, currentCity]);
  }
  console.log(data);

  return (
    <>
      <Layout changeHandler={changeHandler} currentCity={currentCity} clickHandler={clickHandler}>
        {/* <input type="text" onChange={changeHandler} value={currentCity} />
        <button onClick={clickHandler}>کلیک</button> */}
        {isPending ? null : (
          <>
            <FetchWeatherData
              data={data}
              cityName={cityName}
              language={language}
              units={units}
              setUnits={setUnits}
            />
          </>
        )}
      </Layout>
    </>
  );
}

export default HomePage;
