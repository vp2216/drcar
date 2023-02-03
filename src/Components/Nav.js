import React, { useContext, useEffect, useState } from "react";
import { GoGear } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { ThemeContext } from "./Theme";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { dark, setDark } = useContext(ThemeContext);
  function changeTheme() {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  }
  return (
    <div className="flex items-center justify-between px-10 lg:fixed lg:w-screen z-40 top-0 py-10">
      <div className="flex justify-center items-center gap-2 md:gap-4 nav-div">
        <GoGear
          className={`h-12 w-12 ${
            dark ? "text-blue-300" : "text-blue-600"
          } animate-spin-coustom`}
        />
        <span
          className={`${
            dark ? "text-blue-300" : "text-blue-600"
          } text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider `}
        >
          Dr.Car
        </span>
      </div>

      <ul className="hidden md:flex justify-center items-center gap-10">
        <li
          className={`font-bold text-lg text-gray-500 hover:text-black cursor-pointer ${
            dark
              ? "text-gray-300 hover:text-white"
              : "text-gray-500 hover:text-black"
          }`}
          onClick={changeTheme}
        >
          Change Theme
        </li>
        <li
          className={`font-bold text-lg text-gray-500 hover:text-black cursor-pointer ${
            dark
              ? "text-gray-300 hover:text-white"
              : "text-gray-500 hover:text-black"
          }`}
          onClick={() => navigate("/home")}
        >
          Home
        </li>
        <li
          className={`font-bold text-lg text-gray-500 hover:text-black cursor-pointer ${
            dark
              ? "text-gray-300 hover:text-white"
              : "text-gray-500 hover:text-black"
          }`}
          onClick={() => navigate("/orders")}
        >
          Orders
        </li>
        <li
          className={`font-bold text-lg text-gray-500 hover:text-black cursor-pointer ${
            dark
              ? "text-gray-300 hover:text-white"
              : "text-gray-500 hover:text-black"
          }`}
          onClick={() => {
            sessionStorage.removeItem("token");
            navigate("/");
          }}
        >
          Logout
        </li>
      </ul>

      <div
        className={`h-full fixed w-full sm:w-2/4 bg-blue-400 top-0 right-0 flex justify-center items-center flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300 z-20 md:hidden`}
      >
        <GrClose
          className="md:hidden w-6 h-6 fixed top-12 right-10 z-50"
          onClick={() => setOpen(false)}
        />
        <div
          className="font-bold w-full cursor-pointer text-center text-gray-800 p-5"
          onClick={changeTheme}
        >
          Change Theme
        </div>
        <div
          className="font-bold w-full cursor-pointer text-center text-gray-800 p-5"
          onClick={() => navigate("/home")}
        >
          Home
        </div>
        <div
          className="font-bold w-full cursor-pointer text-center text-gray-800 p-5"
          onClick={() => navigate("/orders")}
        >
          Orders
        </div>
        <div
          className="font-bold w-full cursor-pointer text-center text-gray-800 p-5"
          onClick={() => {
            sessionStorage.removeItem("token");
            navigate("/");
          }}
        >
          Logout
        </div>
        <div className="flex gap-10 mt-10 justify-center items-center">
          <BsFacebook className="w-7 h-7 text-gray-800" />
          <BsInstagram className="w-7 h-7 text-gray-800" />
          <BsTwitter className="w-7 h-7 text-gray-800" />
        </div>
      </div>
      <GiHamburgerMenu
        className="md:hidden w-6 h-6"
        onClick={() => {
          setOpen(true);
        }}
      />
    </div>
  );
};

export default Nav;
