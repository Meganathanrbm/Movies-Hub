import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
// for drawer
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import SearchBar from "./SearchBar";
import UserTab from "./UserTab";
import useSignOut from "../hooks/useSignOut";
import { useSelector } from "react-redux";
import { navLinks } from "../constants";
import PersonIcon from "@mui/icons-material/Person";
import { logo1 } from "../assets";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

const Nav = () => {
  const signOut = useSignOut();
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const userName = useSelector((state) => state.user.username);
  const email = useSelector((state) => state.user.email);

  const hanldeSignOut = () => {
    return signOut();
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      className="bg-black h-full flex flex-col"
    >
      <ul className="bg-black h-screen">
        <li className="cursor-pointer w-full my-3">
          <span className="block p-4 capitalize text-base font-medium">
            <img
              src={logo1}
              className="lg:h-[40px] md:h-[35px] h-[30px] "
              alt="logo"
            />
          </span>
        </li>
        {navLinks.map((text, i) =>
          text.label === "Favorite" ? (
            <Link key={i} to={text.url}>
              <li className="cursor-pointer w-full my-3">
                <span className="block px-4 py-3 capitalize text-base font-medium text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-white">
                  {text.icon}
                  {text.label}
                </span>
              </li>
            </Link>
          ) : (
            <a key={i} href={text.url}>
              <li className="cursor-pointer w-full my-3 ">
                <span className="block px-4 py-3  capitalize text-base font-medium text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-white">
                  {text.icon}
                  {text.label}
                </span>
              </li>
            </a>
          )
        )}
        <Link to="/searchResults/noResult">
          <li className="cursor-pointer w-full my-3 ">
            <span className="block px-4 py-3  capitalize text-base font-medium text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-white">
              <SearchSharpIcon className="mr-4" />
              Search Movies
            </span>
          </li>
        </Link>
      </ul>
      <Divider />
      <ul className="">
        <li onClick={hanldeSignOut} className="cursor-pointer w-full">
          <span className="center justify-start px-4 py-3 capitalize text-base font-medium text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-white">
            <div className="mr-4 center w-7 h-7 rounded-full overflow-hidden  bg-gray-800  md:me-0 ring-2 p-1 ring-gray-300 dark:ring-gray-700">
              <PersonIcon className="w-7 h-7 " />
            </div>

            <div className="ml-6">
              <span className="block text-base min-w-[130px] capitalize text-gray-900 dark:text-white">
                {userName}
              </span>
              <span className="block text-sm lowercase break-words text-gray-500 truncate dark:text-gray-400">
                {email.length > 10 ? email.slice(0,10)+"...": email}
              </span>
            </div>
          </span>
        </li>
      </ul>
      <Divider />
      <ul className="mb-8 mt-6">
        <li onClick={hanldeSignOut} className="cursor-pointer w-full">
          <span className="block px-4 py-3 capitalize text-base font-medium text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-white">
            <LogoutIcon className="mr-4" />
            Sign out
          </span>
        </li>
      </ul>
    </Box>
  );

  return (
    <header
      className={`bg-light-black  z-50 w-screen h-[70px] max-sm:h-[60px] center padding-x `}
    >
      <nav className="flex items-center w-full justify-between gap-16 ">
        <Link to="/">
          <img
            src={logo1}
            className="lg:h-[40px] md:h-[35px] h-[30px] m-0 p-0 w-auto"
            alt="logo"
          />
        </Link>
        <ul className="hidden lg:center justify-evenly py-6 gap-14  ">
          {navLinks.map((itm, i) => (
            <li
              key={i}
              className="text-white-400  font-bold text-md capitalize cursor-pointer hover:text-red-500"
            >
              {itm.label === "Favorite" ? (
                <Link to={itm.url}>{itm.label}</Link>
              ) : (
                <a href={itm.url}>{itm.label}</a>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden lg:center mr-4  md:center gap-6">
          <SearchBar />
          <UserTab />
        </div>
        <div
          className="inline-block lg:hidden absolute-5 max-sm:top top-6 right-8 cursor-pointer z-20"
          onClick={() => setToggleHamburger(!toggleHamburger)}
        >
          {toggleHamburger ? (
            <FaXmark className="text-red-500 h-6 w-6 " />
          ) : (
            <FaBars className="text-white h-6 w-6" />
          )}
          <Drawer anchor="left" open={toggleHamburger}>
            {list("left")}
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
