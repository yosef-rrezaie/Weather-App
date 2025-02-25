import React from "react";
import HeaderComponent from "./HeaderComponent";

function Layout({ children , cityName , changeHandler , currentCity , clickHandler  }) {
  console.log(cityName)
  return (
    <>
      <HeaderComponent changeHandler={changeHandler} currentCity={currentCity} clickHandler={clickHandler}/>
      {children}
    </>
  );
}

export default Layout;
