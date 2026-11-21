"use client";

import React, { useState } from "react";
import Image from "next/image";
import Menu from "./Menu";
import HamberMenu from "../home/HamberMenu";

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="relative flex w-full items-center justify-between px-5 py-4">
        <div className="flex items-center md:absolute md:left-[40px] md:top-[calc(50%_+_40px)] md:-translate-y-1/2">
          <Image
            width={85}
            height={56.67}
            src="/navbar/lovelcode-logo.png"
            alt="لاول کد"
            className="w-[85px] h-auto"
          />
        </div>

        <div className="hidden md:flex absolute left-1/2 top-[calc(50%_+_40px)] -translate-x-1/2 -translate-y-1/2 items-center">
          <Menu />
        </div>

        <div
          onClick={() => setIsShow((prev) => !prev)}
          className="md:hidden cursor-pointer p-1 flex items-center"
        >
          <Image
            width={18.33}
            height={12}
            src="/navbar/hamber.svg"
            alt="منو"
          />
        </div>
      </div>

      <div
        className={`md:hidden w-full h-full duration-300 fixed top-0 z-[60] ${
          isShow ? "rtl:right-0 ltr:left-0" : "rtl:-right-full ltr:-left-full"
        }`}
      >
        <HamberMenu setIsShow={setIsShow} />
      </div>

      {isShow && (
        <div
          onClick={() => setIsShow(false)}
          className="md:hidden fixed inset-0 bg-white/65 z-[55]"
        />
      )}
    </div>
  );
}
