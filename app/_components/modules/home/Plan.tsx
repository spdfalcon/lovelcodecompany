import React from "react";
import FeaturesPlan from "./FeaturesPlan";
import { PlanProps } from "@/app/_types/types";

const Plan: React.FC<PlanProps> = ({
  title,
  description,
  price,
  featured,
  features,
}) => {
  return (
    <div className="flex h-full justify-center px-2">
      <div
        className={`relative flex w-[290px] flex-col rounded-[24px] border px-5 transition-all duration-300 hover:-translate-y-2 ${
          featured
            ? "mt-[75px] pb-[49px] pt-0"
            : "mt-[75px] pb-6 pt-0"
        } ${
          featured
            ? "border-2 border-[#FFC828] bg-[#111522] shadow-[0_0_55px_rgba(255,200,40,0.30)] ring-1 ring-[#FFC828]/30"
            : "border-white/[0.08] bg-second_dark hover:border-[#FFC828]/30"
        }`}
      >
        

        <div className="flex justify-center">
          <div
            className={`rounded-b-[16px] px-8 py-3 text-sm font-bold ${
              featured
                ? "gradient-orange text-white"
                : "bg-white/[0.06] text-white"
            }`}
          >
            {title}
          </div>
        </div>

        <p className="mt-5 min-h-[44px] text-center text-xs leading-7 text-gray_text">
          {description}
        </p>

        <div className="my-5 h-px w-full bg-white/10" />

        <div className="flex flex-1 flex-col gap-[18px]">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2 text-xs leading-6 text-white/90">
                {featured && (
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full gradient-orange">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="block h-3 w-3 text-white"
                      >
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                <span>{feature.title}</span>
              </div>
              <span className="shrink-0 text-left text-[11px] leading-6 text-gray_text">
                {feature.detail}
              </span>
            </div>
          ))}
        </div>

        <div className="my-5 h-px w-full bg-white/10" />

        <div className="flex items-center justify-center gap-2">
          <span className="text-xs text-gray_text">شروع قیمت از</span>
          <span className={`font-yekanbakh text-[42px] font-extrabold ${
            featured ? "gradient-orange bg-clip-text text-transparent" : "text-white"
          }`}>
            {price}
          </span>
          <span className="flex flex-col text-[10px] leading-4 text-gray_text">
            <span>میلیون</span>
            <span>تومان</span>
          </span>
        </div>

        <div className="mt-5">
          <a
            href="/"
            className={`group/plan-button relative mx-auto flex h-[50px] w-[233px]
              items-center justify-center overflow-hidden rounded-[14px]
              border text-center text-xs font-semibold
              transition-all duration-300 md:text-base
              hover:-translate-y-[2px] active:scale-[0.97]
              ${
                featured
                  ? "border-transparent bg-gradient-to-r from-[#FFC828] to-[#F15A24] text-white"
                  : "border-gray-500/60 bg-transparent text-gray-400 hover:border-[#F15A24] hover:text-white"
              }`}
          >
            {!featured && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0
                  bg-gradient-to-r from-[#FFC828] to-[#F15A24]
                  opacity-0 transition-opacity duration-300
                  group-hover/plan-button:opacity-100"
              />
            )}
            <span className="relative z-10">مشاهده پلن</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Plan;
