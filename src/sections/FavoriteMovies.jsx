import React from "react";
import { searchBg1 } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const FavoriteMovies = () => {
  const movies = useSelector((state) => state.user.favorite);
  return (
    <main className="overflow-hidden">
      <div className="center relative ">
        <img
          src={searchBg1}
          className="w-screen min-h-[200px] brightness-[30%] object-cover object-center"
          alt="search-background-image"
        />
        <div className="center flex-col absolute">
          <h2 className="lg:text-4xl md:text-3xl text-2xl my-2 lg:my-3 font-palanquin z-20 font-medium text-white capitalize">
            Your Collections
          </h2>
          <p className="lg:text-lg text-lg font-palanquin z-20 font-bold text-red-500   capitalize">
            <Link className="" to="/">
              Home
            </Link>
            <span> > Favorite</span>
          </p>
        </div>
      </div>
      <section className="w-screen py-6 padding-x bg-black">
        <h2 className="font-semibold  text-2xl md:text-3xl mb-6 font-montserrat text-white">
          Favorite Movies
        </h2>
        <div className="card-container   center sm:justify-evenly gap-4 md:gap-7 lg:gap-10 flex-wrap">
          {(movies && movies.length) ? (
            movies.map((movie, i) => (
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

export default FavoriteMovies;
