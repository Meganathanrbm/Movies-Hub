import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { empty_arr, imageUrl } from "../constants";
import { imdb } from "../assets";
import { Rating } from "@mui/material";
import CButton from "../components/CButton";
import getTrailer from "../utils/getTrailer";
import useScrennWidth from "../hooks/useScrennWidth";
import { PlayIcon } from "../assets/playBtn/PlayIcon";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  const screenWidth = useScrennWidth();
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/details/" + id);
    window.location.reload();
  };
  return (
    <section className="">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        navigation={screenWidth > 767}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {movies
          ? movies.slice(0, 15).map((movie, i) => (
              <SwiperSlide
                key={i}
                className="w-screen relative flex center  md:min-h-screen md:mt-[-90px] h-auto mt-[-70px] overflow-hidden"
              >
                {/* Background dark  fade effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r  from-black to-transparent"></div>

                <img
                  src={imageUrl + movie.backdrop_path}
                  alt="background-slide-imagae"
                  className="w-screen object-cover object-center h-screen lg:mt-[90px] md:mt-[20px] mt-[10px]"
                />
                <div className="center absolute top-0 left-0 p-10 w-full h-screen lg:mt-[80px] md:mt-[20px] padding">
                  <div className="flex-[3]">
                    <h2 className="lg:text-6xl md:text-5xl text-4xl  lg:w-lg lg:my-8 my-5 lg:mb-6 mb-3 text-white font-bold uppercase ">
                      {movie.title}
                    </h2>
                    <div className="flex gap-6 flex-nowrap mb-4  items-center">
                      <Rating
                        name="read-only"
                        value={
                          Math.round((movie.vote_average / 10) * 5 * 10) / 10
                        }
                        readOnly
                      />
                      <p className="font-semibold text-white text-lg  ">
                        {Math.round((movie.vote_average / 10) * 5 * 10) / 10}
                      </p>
                      <img src={imdb} alt="" className="w-12 h-auto" />
                    </div>
                    <p className="text-white max-w-2xl mb-4 text-[17px] leading-7">
                      {screenWidth > 767
                        ? movie.overview
                        : movie.overview.slice(0, 150) + "..."}
                    </p>
                    <p className="text-red-500 font-semibold mb-8 text-[17px] leading-7 ">
                      Release date{" "}
                      <span className="ml-2 text-white inline-block">
                        {" "}
                        {movie.release_date}
                      </span>
                    </p>
                    <CButton
                      title="View Movie"
                      className="px-2"
                      sIcon={<PlayArrowIcon />}
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={() => handleClick(movie.id)}
                    />
                  </div>

                  {/* right side of the slide */}
                  <div className="flex-[2] center hidden lg:flex">
                    <div
                      onClick={() => getTrailer(movie.id)}
                      className="playbtn center gap-4 group hover:cursor-pointer hover:text-red-500"
                    >
                      <PlayIcon name="playbtn" />
                      <h3
                        style={{ wordSpacing: "0.25em" }}
                        className="text-2xl font-montserrat text-white transition duration-200 ease-in capitalize font-normal group-hover:text-red-500"
                      >
                        WATCH TRAILER
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          : empty_arr.map((item, i) => (
              <SwiperSlide key={i} className="w-screen  relative center  md:min-h-screen md:mt-[-90px] h-auto mt-[-70px] overflow-hidden">
                <div className="absolute bg-gray-200 animate-pulse  dark:bg-gray-700 w-full h-full rounded-lg"></div>
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
};

export default Home;
