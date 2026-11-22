"use client";

import React from "react";
import Player from "./Player";
import Btn from "../../modules/Btn/Btn";

export default function AddOrder() {
  return (
    <div className="px-5 mt-[94px]">
      <div className="flex justify-center text-center">
        <div className="title">
          <div className="md:flex font-cinema text-[30px] md:text-[40px] ">
            <h1 className="">
              آژانــس حرفــه ای دیــــجیتـــــال مــــــارکـــتـیـنـگ
            </h1>
            <h2 className="gradient-orange text-transparent bg-clip-text">
              لاول کد
            </h2>
          </div>
          <h2 className="font-light text-gray_text text-[6px] md:text-[16px] mt-[6px]">
            از یک ایده تا یک برند ماندگار.
          </h2>
        </div>
      </div>
      <div className="mid">
        <Player></Player>
      </div>
      <div id="home-order-cta" className="w-full down flex justify-center mb-[200px] mt-[78px]">
        <div className="md:hidden text-xs">
          <button type="button" onClick={() => window.dispatchEvent(new Event("lovelcode:open-order"))} className="rounded-xl bg-gradient-to-r from-[#FFC828] to-[#F15A24] font-bold text-white shadow-btn transition-transform hover:scale-105 px-5 py-3 text-[13px]">ثبت سفارش طراحی سایت</button>
        </div>
        <div className="hidden md:flex text-[18px] shadow-btn">
          <button type="button" onClick={() => window.dispatchEvent(new Event("lovelcode:open-order"))} className="rounded-xl bg-gradient-to-r from-[#FFC828] to-[#F15A24] font-bold text-white shadow-btn transition-transform hover:scale-105 px-7 py-3.5 text-[16px]">ثبت سفارش طراحی سایت</button>
        </div>
      </div>
    </div>
  );
}
