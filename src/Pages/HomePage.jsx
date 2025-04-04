import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { API_KEY, geoApi } from "../config/api";
import Layout from "../layout/Layout";
import FetchWeatherData from "../components/FetchWeatherData";
import SearchFailed from "../components/SearchFailed";
import Loading from "../components/Loading";
import { ComponentsContext } from "../App"; // 
import { useSelector } from "react-redux";

function HomePage() {
  const { cityName, language } = useContext(ComponentsContext); 
  const result = useSelector(store => store.Favorite.favoriteObject)
  console.log("result :" , result)

  const { data, isPending } = useQuery({
    queryKey: ["geoLocation", cityName],
    queryFn: () =>
      geoApi.get(
        `direct?q=${
          cityName[cityName.length - 1]
        }&lang=${language}&appid=${API_KEY}`
      ),
  });

  return (
    <>
      {/* <Layout> */}
        {data?.length === 0 ? (
          <SearchFailed />
        ) : isPending ? (
          <Loading />
        ) : (
          <FetchWeatherData data={data} />
        )}
      {/* </Layout> */}
    </>
  );
}

export default HomePage;
