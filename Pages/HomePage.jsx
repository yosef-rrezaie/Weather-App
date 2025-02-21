import { useQuery } from "@tanstack/react-query";
import React, { use, useEffect, useState } from "react";
import { API_KEY, geoApi, weatherApi } from "../config/api";
import Layout from "../layout/layout";

function HomePage() {
  const [currentCity, setCurrentCity] = useState("");
  const [cityName, setCityName] = useState(["تهران"]);
  const [allCity, setAllCity] = useState(null);
  const { data, isPending, refetch } = useQuery({
    queryKey: ["geoLocation"],
    queryFn: () =>
      geoApi.get(
        `direct?q=${cityName[cityName.length - 1]}&lang=fa&appid=${API_KEY}`
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
    refetch()
  }
  console.log(data);
  console.log(cityName)
  return (
    <>
      <Layout>
        <input type="text" onChange={changeHandler} value={currentCity} />
        <button onClick={clickHandler}>click</button>
      </Layout>
    </>
  );
}

export default HomePage;
