import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../../components/MovieCard";
import useScrennWidth from "../../hooks/useScrennWidth";

const SimilarRecommandations = ({movieTit}) => {
  const screenWidth = useScrennWidth();
  return (
    <main className="my-10">
      <div className="flex justify-between mb-6 flex-nowrap items-center">
        <h2 className="font-semibold  text-2xl text-white">
          {movieTit.name.length > 1 && movieTit.title}
        </h2>
      </div>
      <Swiper
        spaceBetween={screenWidth > 767 ? 30 : screenWidth > 555 ? 25 : 15}
        slidesPerView={screenWidth > 1024 ? 5 : screenWidth > 767 ? 3 : 2}
        loop={false}
        navigation={false}
        modules={[Pagination, Navigation]}
        className=""
      >
        {movieTit.name.map((movie, i) => (
          <SwiperSlide
            key={i}
            className="cursor-pointer group  h-auto relative"
          >
            <MovieCard movie={movie} i={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default SimilarRecommandations;
