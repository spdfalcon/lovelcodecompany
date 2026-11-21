import React from "react";
import Plan from "@/app/_components/modules/home/Plan";
import { plans } from "./plansData";

export default function SliderPlansMd() {
  return (
    <div className="hidden justify-center md:flex">
      <div className="flex flex-wrap justify-center gap-4 xl:gap-5">
        {plans.map((plan) => (
          <Plan key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  );
}
