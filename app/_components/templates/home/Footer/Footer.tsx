
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="md:hidden gap-y-9 mt-[100px] flex flex-col  py-11">
        <div className="logoandmenu relative overflow-hidden py-11">
          <div className="logo flex justify-center">
            <Image
              alt=""
              src={"/footer/icon.png"}
              width={65.52}
              height={43.71}
            ></Image>
            <div className="absolute w-full h-full bg-black/90 top-0 left-0 -z-10"></div>
          </div>
          <div className="menu grid grid-cols-2 *:flex *:justify-center mt-9 gap-y-[30px] text-xs">
            <Link href={"/"}>{("portfolio")}</Link>
            <Link href={"/"}>{("websitedesignfee")}</Link>
            <Link href={"/"}>{("articles")}</Link>
            <Link href={"/"}>{("aboutus")}</Link>
            <Link href={"/"}>{("contactus")}</Link>
          </div>
          <Image
            className="absolute top-0 left-0 blur-sm -z-20"
            alt=""
            src={"/footer/bgsm.png"}
            fill
          ></Image>
        </div>
        <div className="enamad flex justify-center gap-6">
          <Image
            alt=""
            src={"/footer/namad1.png"}
            width={101}
            height={115}
          ></Image>
          <Image
            alt=""
            src={"/footer/namad2.png"}
            width={101}
            height={115}
          ></Image>
        </div>
       
      </div>

      <div className="relative hidden md:flex justify-between items-center px-[60px] py-10 mt-[100px] overflow-hidden">
        <Image
          className="blur-sm -z-20"
          alt=""
          src={"/footer/bgmd.png"}
          fill
        ></Image>
        <div className="absolute w-full h-full bg-black/90 top-0 left-0 -z-10"></div>
        <div className="r flex flex-col gap-9">
          <Image
            alt=""
            src={"/footer/icon.png"}
            width={65.52}
            height={43.71}
          ></Image>
          <div className="menu flex gap-4 lg:gap-9 text-sm">
            <Link href={"/"}>{("portfolio")}</Link>
            <Link href={"/"}>{("websitedesignfee")}</Link>
            <Link href={"/"}>{("articles")}</Link>
            <Link href={"/"}>{("aboutus")}</Link>
            <Link href={"/"}>{("contactus")}</Link>
          </div>
        </div>
        <div className="l">
          <div className="enamad flex justify-center gap-6">
            <Image
              alt=""
              src={"/footer/namad1.png"}
              width={101}
              height={115}
            ></Image>
            <Image
              alt=""
              src={"/footer/namad2.png"}
              width={101}
              height={115}
            ></Image>
          </div>
        </div>
      
      </div>
      <div className="p flex py-6 justify-center text-white/40 text-xs bg-background">
          {("copy")}
        </div>
    </>
  );
}
