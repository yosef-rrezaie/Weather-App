import { useQuery } from "@tanstack/react-query";
import React, { createContext, useState } from "react";
import { API_KEY, geoApi, weatherApi } from "../config/api";
import Layout from "../layout/Layout";
import FetchWeatherData from "../components/FetchWeatherData";
import SearchFailed from "../components/SearchFailed";
import Loading from "../components/Loading";

export const ComponentsContext = createContext();
function HomePage() {
  const [currentCity, setCurrentCity] = useState("");
  const [cityName, setCityName] = useState(["تهران"]);
  const [allCity, setAllCity] = useState(null);
  const [language, setLanguage] = useState("fa");
  const [units, setUnits] = useState("metric");
  const [favorite, setFavorite] = useState(false);
  const [country, setCountry] = useState(["IR"]);
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
    if (currentCity === "") return;
    if (cityName.find((item) => item === currentCity)) {
      return;
    }
    setCityName([...cityName, currentCity]);
  }
  // console.log("data :", data);
  // console.log("isErorr :", isError);
  // console.log("Erorr :", error);
  console.log(country)

  return (
    <>
      <ComponentsContext.Provider
        value={{
          favorite,
          setFavorite,
          data,
          cityName,
          language,
          units,
          setUnits,
          changeHandler,
          currentCity,
          clickHandler,
          country , 
          setCountry
        }}
      >
        <Layout>
          {data?.length === 0? (
            <SearchFailed />
          ) : isPending ? (
            <Loading />
          ) : (
            <FetchWeatherData />
          )}
          {/* {isPending ? null : (
            <>
              <FetchWeatherData />
            </>
          )} */}
        </Layout>
      </ComponentsContext.Provider>
    </>
  );
}

export default HomePage;
