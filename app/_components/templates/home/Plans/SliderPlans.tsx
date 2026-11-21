"use client";

import React from "react";
import Plan from "@/app/_components/modules/home/Plan";
import { plans } from "./plansData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SliderPlans() {
  return (
    <div className="md:hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={12}
        centeredSlides
        className="mySwiper !pb-5"
        breakpoints={{
          500: { slidesPerView: 1, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 12 },
        }}
      >
        {plans.map((plan) => (
          <SwiperSlide key={plan.title}>
            <Plan {...plan} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
