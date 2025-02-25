import { useQuery } from "@tanstack/react-query";
import React, { createContext, useState } from "react";
import { API_KEY, geoApi, weatherApi } from "../config/api";
import Layout from "../layout/Layout";
import FetchWeatherData from "../components/FetchWeatherData";

export const UserContext = createContext();
function HomePage() {
  const [currentCity, setCurrentCity] = useState("");
  const [cityName, setCityName] = useState(["تهران"]);
  const [allCity, setAllCity] = useState(null);
  const [language, setLanguage] = useState("fa");
  const [units, setUnits] = useState("metric");
  const [favorite, setFavorite] = useState(true);
  const { data, isPending, refetch, isError, error } = useQuery({
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
  console.log("data :", data);
  console.log("isErorr :", isError);
  console.log("Erorr :", error);

  return (
    <>
      <Layout
        changeHandler={changeHandler}
        currentCity={currentCity}
        clickHandler={clickHandler}
      >
        {isPending ? null : (
          <>
            <UserContext.Provider value={{favorite , setFavorite}}>
              <FetchWeatherData
                data={data}
                cityName={cityName}
                language={language}
                units={units}
                setUnits={setUnits}
              />
            </UserContext.Provider>
          </>
        )}
      </Layout>
    </>
  );
}

export default HomePage;
