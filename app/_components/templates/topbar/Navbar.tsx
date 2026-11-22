"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import HamberMenu from "../home/HamberMenu";

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (!isShow) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsShow(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isShow]);


  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="relative flex w-full items-center justify-between px-5 py-4">
        <Link
          href="/"
          aria-label="بازگشت به صفحه اصلی"
          className="flex items-center md:absolute md:left-[100px] md:top-[calc(50%_+_40px)] md:-translate-y-1/2"
        >
          <Image
            width={80}
            height={53}
            src="/navbar/lovelcode-logo.png"
            alt="لاول کد"
            className="w-[80px] h-auto cursor-pointer transition-all duration-300 ease-out hover:-translate-y-[2px] hover:scale-[1.03] hover:drop-shadow-[0_0_14px_rgba(230,85,38,0.45)] motion-reduce:transition-none motion-reduce:hover:transform-none"
          />
        </Link>

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
        className={`md:hidden w-[80%] h-full duration-300 fixed top-0 z-[60] transition-[left,right] ease-in-out ${
          isShow ? "rtl:right-0 ltr:left-0" : "rtl:-right-full ltr:-left-full"
        }`}
      >
        <HamberMenu setIsShow={setIsShow} />
      </div>

      {isShow && (
        <div
          onClick={() => setIsShow(false)}
          className="md:hidden fixed inset-0 bg-black/35 backdrop-blur-[5px] z-[55]"
        />
      )}
    </div>
  );
}
