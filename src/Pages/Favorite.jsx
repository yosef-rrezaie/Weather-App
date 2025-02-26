import React, { useContext } from "react";
import { useSelector } from "react-redux";
import NoBookMark from "../components/NoBookMark";

function Favorite() {
  const result = useSelector((store) => store.Favorite.favoriteObject);
  console.log(result);
  return <>{!result.length? <NoBookMark/> : <p>bye</p>}</>;
}

export default Favorite;
