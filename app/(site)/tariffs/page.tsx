import PricingConstellation from "@/app/_components/templates/tariffs/PricingConstellation";
import Breadcrumb from "@/app/_components/modules/Breadcrumb/Breadcrumb";
import Plans from "@/app/_components/templates/home/Plans/Plans";
import Portfolios from "@/app/_components/templates/home/Portfolios/Portfolios";
import Image from "next/image";
import React from "react";

const page = () => {
  
  return (
    <>
      <div className="relative z-[100]">
        <Breadcrumb />
      </div>
      <PricingConstellation />
        <div className="container relative z-10">
        
        <Plans></Plans>
        <Portfolios></Portfolios>
        <div className="relative h-[233px] w-full  rounded-[30px] mt-[200px] overflow-hidden">
          <Image
            className="blur-sm"
            alt=""
            src={"/home/brief/phonemd.png"}
            fill
          ></Image>
          <div className="absolute top-0 left-0 w-full h-full bg-second_dark/90 flex justify-center items-center">
            <div className="z-10 text-center flex flex-col gap-[15px] px-8">
              <h3 className="text-[40px] font-normal font-cinema ">
                برای شروع پروژه آماده‌اید؟
              </h3>
              <p className="font-light">برای دریافت مشاوره رایگان و اطلاع از هزینه طراحی سایت اختصاصی، با کارشناسان لاول کد تماس بگیرید.</p>
              <p>09305712252</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
