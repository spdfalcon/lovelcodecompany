import Breadcrumb from "@/app/_components/modules/Breadcrumb/Breadcrumb";
import PortfolioFilter from "@/app/_components/modules/porfolio/PortfolioFilter";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <Breadcrumb />
      <div className="container">
      <div>
        <div className="relative header px-5 flex flex-col items-center gap-6">
          <h1 className="text-3xl font-cinema">نمونه کارهای طراحی سایت</h1>
          
          <h2 className="absolute -top-10 text-3xl bg-gradient-to-b from-[#FFFFFF] to-[#030712] text-transparent bg-clip-text font-bold opacity-20">
            portfolio
          </h2>
        </div>
        <div className="filter md:mt-20">
          <PortfolioFilter></PortfolioFilter>
        </div>
      </div>
    </div>
      </>
  );
}
