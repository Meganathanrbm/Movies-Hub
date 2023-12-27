import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { searchBg2 } from "../assets";
import axios from "axios";
import { options } from "../constants";
import MovieCard from "../components/MovieCard";

const SearchResults = () => {
  const { movieName } = useParams();
  const [results, setResults] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const getSearchData = async (movieName) => {
    if (movieName === "noResult") {
      return;
    }
    const encodedString = encodeURIComponent(movieName);
    try {
      const url =
        "https://api.themoviedb.org/3/search/movie?query=" +
        encodedString +
        "&include_adult=false&language=en-US&page=1";
      const response = await axios.request(url, options);
      const data = response.data;
      setResults(data?.results ?? []);
      setSearchInput("");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSearchData(movieName);
  }, [movieName]);
  const handleSearch = () => {
    setResults(null);
    getSearchData(searchInput);
    navigate("/searchResults/" + encodeURIComponent(searchInput));
  };

  return (
    <main className="overflow-hidden">
      <div className="center relative ">
        <img
          src={searchBg2}
          className="w-screen min-h-[200px] brightness-[30%] object-cover object-center"
          alt="search-background-image"
        />
        <div className="center w-full flex-col padding-x absolute">
          <h2 className=" md:text-4xl text-2xl my-2 lg:my-3 font-palanquin z-20 font-medium text-white capitalize">
            Welcome . . .
          </h2>
          <p className="text-white mb-6 text-center text-xl">
            Millions of Movies , Explore now...
          </p>
          <div className="center w-[80%] md:w-[60%] flex-nowrap overflow-hidden rounded-full">
            <input
              className="lg:w-[80%] md:[75%]  w-[60%] lg:p-4 md:p-3 p-2 text-base md:text-lg lg:text-xl outline-none pl-4  md:pl-8 bg-white"
              placeholder="Search For Movies..."
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
            onClick={handleSearch}
              type="button"
              class="lg:w-[20%] md:w[25%] w-[40%] lg:py-4 md:py-3 py-2 inline-flex items-center justify-center gap-x-2 
              text-base md:text-lg lg:text-xl  font-medium shrink-0  capitalize border border-transparent bg-red-500 text-white
              hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              search
            </button>
          </div>
        </div>
      </div>
      <section className="w-screen py-6 padding-x bg-black">
        <h2 className="font-semibold  text-2xl md:text-3xl mb-6 font-montserrat text-white">
          Search Reaults
        </h2>
        <div className="card-container   center sm:justify-between gap-4 md:gap-7 lg:gap-10 flex-wrap">
          {results ? (
            results.map((movie, i) => (
              <MovieCard
                movie={movie}
                i={i}
                key={i}
                imgStyle={
                  "w-[150px] h-auto  md:w-auto md:h-[300px] lg:w-auto lg:h-[350px] "
                }
              />
            ))
          ) : (
            <p className="text-xl w-full text-white text-center ">
              No result found!
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default SearchResults;
