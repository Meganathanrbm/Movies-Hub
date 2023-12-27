import React, { useState } from "react";
import { useSelector } from "react-redux";
import useSignOut from "../hooks/useSignOut";
import LogoutIcon from '@mui/icons-material/Logout';


const UserTab = () => {
  const [activeTab, setActiveTab] = useState(false);
  const signout = useSignOut();
  const userName = useSelector((state)=> state.user.username);
  const email = useSelector((state)=> state.user.email);
  const handleSignOut = ()=>{
    return signout();
  }
  return (
    <div className="relative">
      <button
        onClick={()=> setActiveTab(!activeTab)}
        type="button"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <svg
          className="w-7 hidden lg:inline-flex h-7 hover:text-white-400 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      </button>
      <div
        className={` ${activeTab ? "lg:block" : "-z-20"} hidden z-20 lg:absolute right-0  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow
         dark:bg-gray-700 dark:divide-gray-600`}
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm min-w-[130px] capitalize text-gray-900 dark:text-white">
            {userName}
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            {email}
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li 
          onClick={handleSignOut}
          className="cursor-pointer">
            <span
              className="block px-4 py-2 capitalize text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              <LogoutIcon className="mr-4"/>
              Sign out
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserTab;
