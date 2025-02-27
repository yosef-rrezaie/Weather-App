import React, { useContext } from "react";
import HeaderComponent from "./HeaderComponent";
import { ComponentsContext } from "../App";

function Layout({ children }) {
  const {dark , setDark} = useContext(ComponentsContext)
  return (
    <div className={`bg-[#f1f0f0] ${dark && "darkmood-home"}`}>
      <HeaderComponent />
      {children}
    </div>
  );
}

export default Layout;
