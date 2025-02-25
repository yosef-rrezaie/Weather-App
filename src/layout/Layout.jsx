import React from "react";
import HeaderComponent from "./HeaderComponent";

function Layout({ children }) {
  return (
    <>
      <HeaderComponent />
      {children}
    </>
  );
}

export default Layout;
