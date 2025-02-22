import { useQuery } from "@tanstack/react-query";
import React, { use, useEffect, useState } from "react";
import { API_KEY, geoApi, weatherApi } from "../config/api";
import Layout from "../../layout/Layout";
import CurrentWeather from "../components/CurrentWeather";
import { Chart } from "../components/Chart";

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
  console.log(isPending);
  return (
    <>
      <Layout>
        <input type="text" onChange={changeHandler} value={currentCity} />
        <button onClick={clickHandler}>کلیک</button>
        {isPending ? null : (
          <>
            <div className="grid grid-cols-2 gap-3 px-[40px]">
              <CurrentWeather
                data={data}
                cityName={cityName}
                language={language}
                units={units}
              />
              <Chart/>
            </div>
          </>
        )}
      </Layout>
    </>
  );
}

export default HomePage;
