import React from "react";

function Layout({ children , cityName }) {
  console.log(cityName)
  return (
    <>
      <header>hello</header>
      {children}
    </>
  );
}

export default Layout;
