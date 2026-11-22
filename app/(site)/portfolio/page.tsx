import PortfolioShowcase from "@/app/_components/templates/portfolio/PortfolioShowcase";
import Breadcrumb from "@/app/_components/modules/Breadcrumb/Breadcrumb";
import PortfolioFilter from "@/app/_components/modules/porfolio/PortfolioFilter";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <Breadcrumb />
      <PortfolioShowcase />
      <div className="container relative -mt-[100px] z-10 lg:relative mx-auto w-full max-w-[1600px] px-4 md:px-6 lg:px-8 mx-auto w-full max-w-[1600px] px-4 md:px-6 lg:px-8">
      <div>
        
        <div className="filter md:mt-20">
          <PortfolioFilter></PortfolioFilter>
        </div>
      </div>
    </div>
      </>
  );
}
