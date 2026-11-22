import { ButtonProps } from "@/app/_types/types";
import Link from "next/link";
import React from "react";

const Btn: React.FC<ButtonProps> = ({ title, bg, type, href, shadow }) => {
  return (
    <div
      className={`${
        bg === "gradient"
          ? "gradient-orange"
          : bg === "background"
          ? "bg-main_dark/65"
          : bg === "outline"
          ? "border border-gray-500/60 bg-transparent text-gray-400 transition-all duration-300 hover:border-transparent"
          : ""
      } ${
        type === "box1"
          ? "rounded-[18px] w-[170px] h-[65px] relative after:block after:absolute after:size-[42px] after:bg-background after:rounded-full after:-top-6"
          : type === "box2"
          ? "w-[253px] h-[68px] rounded-[20px]"
          : type === "box3"
          ? "w-[255px] h-[55px] rounded-[16px]"
          : type === "box4"
          ? "w-[188px] h-[55px] rounded-[16px]"
          : type === "box5"
          ? "w-[360px] h-[55px] rounded-[16px]"
          : type === "box6"
          ? "w-[233px] h-[50px] rounded-[14px]"
          : type === "box7"
          ? "w-[320px] h-[50px] rounded-[14px]"
          : type === "box8"
          ? "w-full min-w-0 h-[44px] rounded-[14px]"
          : ""
      } lc-interactive lc-outline-button group flex justify-center items-center ${shadow ? "shadow-btn" : ""}`}
    >
      <Link href={href} className={`lc-interactive__content lc-outline-button__content flex h-full w-full items-center justify-center text-center transition-colors duration-300 ${
          bg === "outline"
            ? "rounded-[13px] text-[8px] md:text-xs text-gray-400 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#FFC828] hover:to-[#F15A24] hover:text-white"
            : "text-xs md:text-base"
        }`}>
        {(title)}
      </Link>
    </div>
  );
};

export default Btn;
