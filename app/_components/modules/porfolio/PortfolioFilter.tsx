"use client";

import React from "react";
import Portfolio from "../../templates/home/Portfolios/Portfolio";



export default function PortfolioFilter() {


  return (
    <section className="relative w-full min-w-0">

      {/* Static portfolio grid: four cards per row on desktop */}
      <div
        className="mx-auto -translate-y-[250px] mt-2 grid w-full max-w-[1500px]
          grid-cols-1 justify-items-center gap-x-5 gap-y-8
          px-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
      >
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className="w-full min-w-0">
            <Portfolio />
          </div>
        ))}
      </div>


    </section>
  );
}
