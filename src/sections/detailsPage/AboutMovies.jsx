import React from "react";
import { imageUrl } from "../../constants";
import CircularRating from "../../components/CircularRating";
import getTrailer from "../../utils/getTrailer";
import { PlayIcon } from "../../assets/playBtn/PlayIcon";
import AddToFavoriteBtn from "../../components/AddToFavoriteBtn";


const AboutMovies = ({movie}) => {
  return (
    <section className="center flex-col lg:gap-14 gap-10 justify-evenly md:flex-row ">
      <div className="details-left flex-shrink-0">
        <img
          src={imageUrl + movie.poster_path}
          className="h-[450px] md:h-[500px]  rounded-md"
          alt="poster"
        />
      </div>
      <div className="details-right text-white">
       <div className="flex flex-nowrap items-center justify-between">
       <h2 className=" font-medium lg:max-w-2xl max-w-xl capitalize text-2xl md:text-3xl  lg:text-[35px]">
          {movie.original_title}
        </h2>
          <AddToFavoriteBtn ftype="about" movie={movie} />
       </div>
        <p className="text-slate-gray mt-1 text-lg md:text-2xl font-medium caplitalize mb-4">
          <em>{movie.tagline}</em>
        </p>
        {/* for category tag */}
        <div className="category flex flex-wrap  mb-6">
          {movie.genres.map((category, i) => (
            <span
              key={i}
              className="bg-red-500  m-1 py-[3px] text-sm text-center  px-1 rounded-md"
            >
              {category.name}
            </span>
          ))}
        </div>
        {/* rating */}
        <div className="rating-trailer center gap-10 mb-6  justify-start">
          <CircularRating
            rating={movie.vote_average.toFixed(1)}
            transparent="true"
          />
          <div
            onClick={() => getTrailer(movie.id)}
            className="playbtn center gap-4 group hover:cursor-pointer hover:text-red-500"
          >
            <PlayIcon name="playbtn" />
            <h3
              style={{ wordSpacing: "0.25em" }}
              className="text-2xl font-montserrat transition duration-200 ease-in 
            capitalize font-normal group-hover:text-red-500"
            >
              WATCH TRAILER
            </h3>
          </div>
        </div>
        {/* overview */}
        <h2 className="text-2xl text-left mb-2 font-medium">Overview</h2>
        <p className="max-w-xl lg:max-w-2xl text-[16px] mb-6 text-justify">
          {movie.overview}
        </p>
        {/* Status runtime release date */}
        <div className="">
          {[
            { name: "status:", value: movie.status },
            { name: "released date:", value: movie.release_date },
            {
              name: "runtime:",
              value: movie.runtime + " min",
            },
          ].map((item, i) => (
            <div key={i} className="flex m-6 ml-0 flex-nowrap">
              <h4 className="font-medium capitalize text-lg">{item.name}</h4>
              <span className="inline-block text-lg ml-4 font-normal text-slate-gray">
                {item.value}
              </span>
            </div>
          ))}
        </div>
        {/* <h3>Director: <span>{movie.}</span></h3> */}
      </div>
    </section>
  );
};

export default AboutMovies;
