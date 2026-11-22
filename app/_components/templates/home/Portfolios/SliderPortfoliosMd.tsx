"use client";

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Portfolio from "./Portfolio";

const SliderPortfoliosMd = () => {
  return (
    <div className="hidden w-full min-w-0 md:block">
      <Swiper
        modules={[Autoplay]}
        loop
        speed={650}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={2}
        spaceBetween={16}
        breakpoints={{
          1024: { slidesPerView: 3, spaceBetween: 18 },
          1280: { slidesPerView: 4, spaceBetween: 16 },
        }}
        className="!pb-6"
      >
        {Array.from({ length: 6 }, (_, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <Portfolio />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderPortfoliosMd;
