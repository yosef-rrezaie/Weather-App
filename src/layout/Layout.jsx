import React, { useContext } from "react";
import HeaderComponent from "./HeaderComponent";
import { ComponentsContext } from "../App";

function Layout({ children }) {
  const {dark , setDark} = useContext(ComponentsContext)
  return (
    <div className={`bg-[#f1f0f0] h-[100vh] ${dark && "darkmood-home text-white"}`}>
      <HeaderComponent />
      {children}
    </div>
  );
}

export default Layout;
