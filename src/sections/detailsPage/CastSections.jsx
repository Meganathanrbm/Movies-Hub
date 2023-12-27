import React from "react";
import useScrennWidth from "../../hooks/useScrennWidth";
import { imageUrl } from "../../constants";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
    Navigation,
    FreeMode,
    Pagination,
    Mousewheel,
    Keyboard,
  } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const CastSections = ({cast}) => {
const screenWidth = useScrennWidth();
  return (
    <section className="mt-14 overflow-hidden">
      <h2 className="capitalize text-white text-2xl w-full text-left font-medium">
        {cast.length > 1 && "Top Cast"}
      </h2>
      <Swiper
        cssMode={true}
        slidesPerView={
          screenWidth > 1234
            ? 7
            : screenWidth > 1024
            ? 6
            : screenWidth > 789
            ? 5
            : screenWidth > 512
            ? 4
            : 3
        }
        spaceBetween={30}
        freeMode={true}
        navigation={false}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, FreeMode, Pagination, Mousewheel, Keyboard]}
        className="my-8"
      >
        {cast
          .filter(
            (act) => act.profile_path && (act.known_for_department = "Actin")
          )
          .map((actor, i) => (
            <SwiperSlide
              key={i}
              className="font-bold flex justify-center flex-col"
            >
              <div className="center flex-col flex-nowrap">
                <div className="overflow-hidden border-2 border-slate-gray rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28  mb-4 lg:w-32 lg:h-32">
                  <img
                    src={imageUrl + actor.profile_path}
                    className="object-cover w-full h-full  object-center"
                    alt="actor-img"
                  />
                </div>
                <h3 className="text-white mb-1 text-base md:text-lg">
                  {actor.original_name}
                </h3>
                <h3 className="text-slate-gray text-sm md:text-base">
                  {actor.character}
                </h3>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default CastSections;
