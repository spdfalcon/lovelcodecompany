
import Link from "next/link";
import React from "react";
import SliderPortfolios from "./SliderPortfolios";
import Btn from "@/app/_components/modules/Btn/Btn";
import SliderPortfoliosMd from "./SliderPortfoliosMd";
export default function Portfolios() {
  return (
    <div>
      <div className="mt-16 px-5 md:px-[100px]">
        <div className="flex justify-center lg:justify-between  items-center">
          <div className="title">
            <div className="flex justify-center md:justify-normal font-cinema text-[25px] md:text-[40px] ">
              <h2 className="">نمونه‌کارهای تیم</h2>
              <h2 className="gradient-orange text-transparent bg-clip-text">
                لاول کد
              </h2>
            </div>
            <h2 className="font-light text-xs md:text-base text-center md:text-start text-gray_text">
              نگاهی به پروژه‌ها و تجربه‌های تیم لاول کد در طراحی و توسعه وب‌سایت‌های اختصاصی
            </h2>
          </div>
          <Link
            className="hidden h-[40px] w-[130px] items-center justify-center rounded-xl bg-second_dark text-[12px] font-medium shadow-btn transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 lg:flex"
            href={""}
          >
            مشاهده همه
          </Link>
        </div>
      </div>
      <SliderPortfolios></SliderPortfolios>
      <SliderPortfoliosMd></SliderPortfoliosMd>
      <div className="flex justify-center mt-[30px] md:hidden">
        <Btn
          shadow={true}
          type="box7"
          href="/"
          title="مشاهده همه"
          bg="background"
        ></Btn>
      </div>
    </div>
  );
}
