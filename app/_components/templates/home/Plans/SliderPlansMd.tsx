import React from "react";
import Plan from "@/app/_components/modules/home/Plan";
import { plans } from "./plansData";

export default function SliderPlansMd() {
  return (
    <div className="hidden justify-center md:flex">
      <div className="grid w-full max-w-[1280px] grid-cols-4 items-center justify-items-center gap-x-3 lg:gap-x-5">
        {plans.map((plan) => (
          <Plan key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  );
}
