import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import useScrennWidth from "../hooks/useScrennWidth";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { empty_arr } from "../constants";
import MovieCardSke from "../components/skeleton/MovieCardSke";

const MoviesSection = ({ title, name }) => {
  // title props specify the title of the section
  const [isfavoriteBtn, setIsfavoriteBtn] = useState(false);
  const moviesList = useSelector((state) => state.movies[title]);
  const screenWidth = useScrennWidth();

  return (
    <main id={`${name}`} className="w-screen padding bg-black">
      <div className="flex justify-between mb-6 flex-nowrap items-center">
        <h2 className="font-semibold  text-2xl text-white">
          {/* give title based on the page title */}
          {name}
        </h2>
        <button className="text-red-500  cursor-pointer font-medium text-[17px]">
          <Link to={`${title}/viewAll`}> View All</Link>
        </button>
      </div>
      <Swiper
        spaceBetween={screenWidth > 767 ? 30 : screenWidth > 555 ? 25 : 15}
        slidesPerView={screenWidth > 1024 ? 5 : screenWidth > 767 ? 3 : 2}
        loop={false}
        autoplay={{
          delay: title[0] === "t" ? 4000 : title[0] === "u" ? 4500 : 5500,
          disableOnInteraction: false,
        }}
        navigation={screenWidth > 767}
        modules={[Pagination, Navigation, Autoplay]}
        className=""
      >
        {moviesList
          ? moviesList.map((movie, i) => (
              <SwiperSlide
                key={i}
                className="cursor-pointer group  h-auto relative"
              >
                <MovieCard movie={movie} i={i} />
              </SwiperSlide>
            ))
          : empty_arr.map((item, i) => (
              <SwiperSlide
                key={i}
                className="cursor-pointer group  h-auto relative"
              >
                <MovieCardSke key={i} />
              </SwiperSlide>
            ))}
      </Swiper>
    </main>
  );
};

export default MoviesSection;
