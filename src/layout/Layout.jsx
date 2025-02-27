import React, { useContext } from "react";
import HeaderComponent from "./HeaderComponent";
import { ComponentsContext } from "../App";

function Layout({ children }) {
  const { dark, setDark } = useContext(ComponentsContext);
  return (
    <div
      className={`bg-[#f1f0f0] min-h-[100vh] ${dark && "darkmood-home text-white"}`}
    >
      <HeaderComponent />
      <main className="">{children}</main>
    </div>
  );
}

export default Layout;
