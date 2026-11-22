import Btn from "@/app/_components/modules/Btn/Btn";
import Image from "next/image";
import React from "react";

export default function Portfolio() {

  return (
    <div className="flex h-full min-w-0 justify-center">
      <div className="flex flex-col gap-[18px] bg-second_dark p-[18px] rounded-[20px] relative h-full w-full max-w-[311px] min-w-0">
        <div className="absolute top-0 bg-second_dark left-1/2 -translate-x-1/2 rounded-b-[14px]  w-36 h-11 flex justify-center items-center z-50 text-[14px]">
          سایت فروشگاهی
        </div>
        <div className="relative h-[177px] w-full overflow-hidden rounded-xl">
          <Image alt="" src={"/home/portfolio/portfolio1.png"} fill></Image>
        </div>
        <div className="">
          <h3 className="title text-[16px] font-semibold">شرکت آزاسیت</h3>
        </div>
        <div>
          <p className="text-[14px] leading-6 text-light_text">
            شرکت آسازیست اردم ، ارائه دهنده راهکار های ارگانیک برای دفع آفات
            است. تیم ما افتخار همکاری با این مجموعه بین المللی را داشته است.
          </p>
        </div>
        <Btn
            href={`/portfolio/mohammad`}
            bg="outline"
            title="مشاهده نمونه‌کار"
            type="box8"
          />
      </div>
    </div>
  );
}
