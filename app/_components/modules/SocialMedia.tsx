import { SocialmediaProps } from "@/app/_types/types";
import Image from "next/image";
import React from "react";

const SocialMedia: React.FC<SocialmediaProps> = ({
  title,
  bg,
  iconsm,
  iconmd,
}) => {
  const isInstagram = bg.includes("E825D4");

  return (
    <div className="group relative w-[280px] md:w-[330px]">
      <div
        className={`pointer-events-none absolute -inset-1 rounded-[24px] opacity-30 blur-xl transition-all duration-500 group-hover:opacity-80 group-hover:blur-2xl ${bg}`}
      />

      <div
        className={`relative flex h-[90px] items-center overflow-hidden rounded-[22px] border border-white/25 px-5 shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-white/60 hover:shadow-[0_22px_55px_rgba(0,0,0,0.4)] md:h-[100px] ${bg}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/20" />

        <div className="pointer-events-none absolute -right-8 -top-16 h-36 w-36 rounded-full bg-white/20 blur-2xl transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-8" />

        <div className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[140%]" />

        <div className="relative z-10 flex min-w-0 flex-1 items-center justify-between gap-2">
          <div className="flex min-w-0 flex-col gap-1">
            <span className="text-[10px] font-medium text-white/75">
              {isInstagram ? "INSTAGRAM" : "TELEGRAM"}
            </span>
            <span className="text-[18px] font-bold leading-7 text-white drop-shadow-sm md:text-[20px]">
              {title}
            </span>
          </div>

          <Image
            className="h-auto w-[70px] shrink-0 object-contain drop-shadow-xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-8deg] group-hover:scale-110 md:w-[80px]"
            alt=""
            src={iconsm}
            width={90}
            height={90}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
