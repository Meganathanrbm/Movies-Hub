
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchText, setsearchText] = useState("noResult");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchInput(e.target.value)
    const encodedString = encodeURIComponent(e.target.value);
    setsearchText(encodedString);
  };
  const handleKeyDown = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === "Enter") {
      searchText
        ? navigate("/searchResults/" + searchText)
        : navigate("/searchResults/" + "noResult");
        setSearchInput("")
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchText]);

  return (
    <div className="search-bar center gap-2 px-2  bg-black ">
      <FaSearch className="text-white" />
      <input
        className="bg-black text-white font-medium outline-none  placeholder:capitalize p-1"
        placeholder="search"
        type="text"
        value={searchInput}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
