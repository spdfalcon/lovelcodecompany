import React from "react";
// Import Swiper styles

import SliderPlans from "./SliderPlans";
import SliderPlansMd from "./SliderPlansMd";

// import required modules
export default function Plans() {
  return (
    <div>
      <div className="mt-16 px-4 md:px-[100px]">
        <div className="flex w-full items-center justify-center text-center">
          <div className="title mx-auto flex w-full flex-col items-center text-center">
            <div className="flex w-full flex-wrap items-center justify-center gap-x-2 font-cinema text-[25px] text-center md:text-[40px]">
              <h2 className="">هزینه پلن های طراحی سایت</h2>
              <h2 className="gradient-orange text-transparent bg-clip-text">
                لاول کد
              </h2>
            </div>
            <h2 className="mx-auto mt-3 w-full text-center font-light text-xs text-gray_text md:text-base">
              طراحی و برنامه‌نویسی اختصاصی وب‌سایت از صفر تا صد، متناسب با نیاز کسب‌وکار شما
            </h2>
          </div>
        </div>
      </div>
      <SliderPlans></SliderPlans>
      <SliderPlansMd></SliderPlansMd>
    </div>
  );
}
