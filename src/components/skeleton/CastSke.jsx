import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useScrennWidth from "../../hooks/useScrennWidth";
import { FreeMode, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

const CastSke = () => {
    const screenWidth = useScrennWidth();
  return (
    <section className="mt-14 overflow-hidden  animate-pulse">
      <h2 className="bg-gray-200 h-8 w-32 md:w-44  rounded-lg dark:bg-gray-700"></h2>
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
        {[1,2,3,4,5,6,7,8].map((actor, i) => (
            <SwiperSlide
              key={i}
              className="font-bold flex items-center justify-center flex-col"
            >
              <div className="center flex-col flex-nowrap">
                <div className="overflow-hidden border-2 bg-gray-200  dark:bg-gray-700 border-slate-gray rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28  mb-4 lg:w-32 lg:h-32">
                  <div className="w-full h-full"></div>
                </div>
                <h3 className="bg-gray-200 h-4 md:h-6  w-28 md:w-40 mb-3 rounded-lg dark:bg-gray-700"></h3>
                <h3 className="bg-gray-200 h-3 md:h-5  w-24 md:w-36  rounded-lg dark:bg-gray-700"></h3>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default CastSke;
