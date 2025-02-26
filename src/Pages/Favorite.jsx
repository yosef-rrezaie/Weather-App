import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import NoBookMark from "../components/NoBookMark";
import FavoriteCity from "../components/FavoriteCity";
import { ComponentsContext } from "../App";

function Favorite() {
  const { setCurrentCity } = useContext(ComponentsContext);
  useEffect(()=> {
    setCurrentCity("")
  },[])
  const result = useSelector((store) => store.Favorite.favoriteObject);
  //   console.log(result);
  return (
    <div className="w-[100%]">
      {!result.length ? <NoBookMark /> : <FavoriteCity />}
    </div>
  );
}

export default Favorite;
