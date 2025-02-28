import React, { useContext, useState, useEffect, useRef } from "react";
import weatherIcon from "../assets/weather-forecast.png";
import { CiSearch } from "react-icons/ci";
import { ComponentsContext } from "../App";
import { NavLink } from "react-router-dom";
import { IoMdSunny } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

function HeaderComponent() {
  const { changeHandler, currentCity, clickHandler, dark, setDark } =
    useContext(ComponentsContext);

  // State for managing the menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  function setDarkHandler() {
    setDark(!dark);
    setIsMenuOpen(false); 
  }

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle search icon click
  const handleSearchClick = () => {
    clickHandler();
    setIsMenuOpen(false); 
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`bg-white h-[100px] flex justify-between items-center px-[43px] max-mdl:px-[15px] shadow-lg 
      sticky top-0 z-10 w-[100%] ${dark && "darkmood-bg text-white"}`}
    >
      <div className="flex items-center gap-[35px]">
        <GiHamburgerMenu
          ref={hamburgerRef}
          className={`text-[23px] hidden max-sm:block cursor-pointer max-sm:block `}
          onClick={toggleMenu}
        />

        {!!dark ? (
          <IoMdSunny
            className="text-yellow-400 text-[23px] animate-pulse max-sm:hidden"
            onClick={setDarkHandler} 
          />
        ) : (
          <FiMoon
            className="text-blue-500 text-[23px] animate-pulse max-sm:hidden"
            onClick={setDarkHandler} 
          />
        )}

        <div
          className={`relative max-sm:hidden ${
            isMenuOpen ? "hidden" : "block"
          }`}
        >
          <input
            type="text"
            placeholder="جست و جوی شهر ..."
            className={`placeholder:text-[11px] focus:outline-none border-[2px] border-solid shadow-sm border-gray-200 
            rounded-[5px] p-[8px] w-[270px] ${
              dark && "darkmood-home darkmood-border placeholder:font-extrabold"
            }`}
            onChange={changeHandler}
            value={currentCity}
          />
          <CiSearch
            className="absolute top-[30%] left-[2%] text-[20px] text-blue-700"
            onClick={handleSearchClick} 
          />
        </div>
      </div>

      {/* Navbar Links visible from max-sm */}
      <div className={`flex gap-[25px] max-sm:hidden`}>
        <NavLink to="/Homepage" onClick={() => setIsMenuOpen(false)}>
          صفحه اصلی
        </NavLink>
        <NavLink to="/favorite" onClick={() => setIsMenuOpen(false)}>
          مورد علاقه
        </NavLink>
      </div>

      <img src={weatherIcon} className="w-[60px] max-sm:block" />

      {/* Mobile Menu with additional links visible on small screens */}
      <div
        ref={menuRef} // Added ref to mobile menu
        className={`max-sm:flex max-sm:flex-col gap-5 items-start absolute top-[0px] right-0 w-[250px] bg-[#f1f0f0] z-10 
        shadow-lg p-5 transition-all duration-300 transform h-[100vh] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${dark && "darkmood-home"}`}
      >
        <NavLink
          to="/Homepage"
          className={`mt-[14px]`}
          onClick={() => setIsMenuOpen(false)}
        >
          صفحه اصلی
        </NavLink>
        <NavLink to="/favorite" onClick={() => setIsMenuOpen(false)}>
          مورد علاقه
        </NavLink>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="جست و جوی شهر ..."
            className={`placeholder:text-[11px] focus:outline-none border-[2px] border-solid shadow-sm border-gray-200 
          rounded-[5px] p-[8px] w-full ${
            dark && "darkmood-home darkmood-border placeholder:font-extrabold"
          }`}
            onChange={changeHandler}
            value={currentCity}
          />
          <CiSearch
            className="absolute top-[30%] left-[2%] text-[20px] text-blue-700"
            onClick={handleSearchClick} 
          />
        </div>
        <div className="flex items-center gap-2 absolute top-[7px] left-[7px]">
          {!!dark ? (
            <IoMdSunny
              className="text-yellow-400 text-[23px] animate-pulse "
              onClick={setDarkHandler} 
            />
          ) : (
            <FiMoon
              className="text-blue-500 text-[23px] animate-pulse"
              onClick={setDarkHandler} 
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
