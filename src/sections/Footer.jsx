import React from "react";
import { social_link } from "../constants";

const Footer = () => {

  return (
    <footer className="padding z-50 bg-[#141215] flex-col mt-auto">
      <h3 className="text-red-500 flex-nowrap whitespace-nowrap font-semibold p-1 mb-3 pl-0 lg:mb-5 text-2xl ">
        Movies Fire
      </h3>
      <div className="flex items-center  flex-wrap">
        <p className="text-white capitalize  font-medium text-md mb-2 mr-3">
          follow us:
        </p>
        <ul className="center flex-nowrap gap-4">
          {social_link.map((link, i) => (
            <li
              key={i}
              className="p-2 transform transform-transition duration-200  ease-in-out hover:translate-y-[-7px] cursor-pointer  text-sm max-sm:text-xs bg-gray-800 rounded-full text-white-400"
            >
              {link.icon}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex mt-4 lg:mt-6 mb-4 gap-6 items-center justify-start flex-wrap">
        {["Terms of Use", "Privacy Policy", "Blog", "FAQ", "Watch List"].map(
          (title, i) => (
            <p
              key={i}
              className="cursor-pointer hover:text-red-500 duration-200 transition ease-in m-3 ml-0 text-white-400 font-normal text-md"
            >
              {title}
            </p>
          )
        )}
      </div>
      <p className="text-white-400 text-justify leading-6 lg:leading-8 lg:w-[80%] text-md">
        © 2023 Movies - Hub. All Rights Reserved. All videos and shows on this
        platform are trademarks of, and all related images and content are the
        property of, Streamit Inc. Duplication and copy of this is strictly
        prohibited.
      </p>
    </footer>
  );
};

export default Footer;
