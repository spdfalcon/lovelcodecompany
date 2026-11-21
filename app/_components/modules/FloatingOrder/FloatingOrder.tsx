"use client";

import React, { useEffect, useState } from "react";

const orderTypes = [
  "طراحی سایت فروشگاهی",
  "طراحی سایت شرکتی",
  "طراحی سایت شخصی",
  "طراحی سایت آموزشی",
  "طراحی سایت اختصاصی",
  "طراحی اپلیکیشن موبایل",
  "طراحی رابط و تجربه کاربری",
  "سئو و دیجیتال مارکتینگ",
  "سایر خدمات",
];

export default function FloatingOrder() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const openOrder = () => setOpen(true);
    window.addEventListener("lovelcode:open-order", openOrder);
    return () => window.removeEventListener("lovelcode:open-order", openOrder);
  }, []);


  return (
    <>
      {/* Floating order button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-10 right-10 z-[90]
          rounded-2xl bg-gradient-to-r from-[#FFC828] to-[#F15A24]
          px-5 py-4 text-sm font-bold text-white
          shadow-[0_10px_35px_rgba(241,90,36,0.35)]
          transition-transform hover:scale-105"
        aria-label="باز کردن فرم ثبت سفارش"
      >
        ثبت سفارش فوری
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center
            justify-center bg-black/75 p-4"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-order-title"
            dir="rtl"
            className="max-h-[90vh] w-full max-w-[520px]
              overflow-y-auto rounded-[24px]
              border border-white/10 bg-second_dark
              p-5 text-white shadow-2xl md:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="portfolio-order-title"
                  className="text-xl font-bold"
                >
                  ثبت درخواست پروژه
                </h2>
                <p className="mt-2 text-sm leading-7 text-gray-300">
                  اطلاعات پروژه‌ات رو وارد کن تا درخواستت
                  برای بررسی آماده بشه.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-white/10 px-3 py-2
                  text-lg hover:bg-white/20"
                aria-label="بستن فرم"
              >
                ×
              </button>
            </div>

            <form
              className="mt-6 flex flex-col gap-4"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="flex flex-col gap-2 text-sm">
                نام و نام خانوادگی
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="نام شما"
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10
                    bg-white/5 px-4 py-3 outline-none
                    focus:border-[#FFC828]"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                شماره تماس
                <input
                  required
                  type="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="09xxxxxxxxx"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-white/10
                    bg-white/5 px-4 py-3 text-left outline-none
                    focus:border-[#FFC828]"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                نوع سفارش
                
                  <div className="relative">
                    <button
                      type="button"
                      aria-label="انتخاب نوع سفارش"
                      aria-haspopup="listbox"
                      aria-expanded={serviceOpen}
                      onClick={() => setServiceOpen(!serviceOpen)}
                      className={`flex w-full items-center justify-between gap-4
                        rounded-2xl border py-4 pr-4 pl-5 text-right
                        transition-all duration-300
                        ${serviceOpen
                          ? "border-[#FFC828] bg-[#24212A]"
                          : "border-white/10 bg-white/5 hover:border-[#FFC828]/60"
                        }`}
                    >
                      <span className={service ? "text-white" : "text-gray-400"}>
                        {service || "خدمت موردنظر را انتخاب کنید"}
                      </span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFC828"
                        strokeWidth="2"
                        aria-hidden="true"
                        className={`shrink-0 transition-transform duration-300
                          ${serviceOpen ? "rotate-180" : ""}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {serviceOpen && (
                      <div
                        role="listbox"
                        aria-label="نوع سفارش"
                        className="absolute right-0 top-full z-50 mt-2
                          max-h-[300px] w-full overflow-y-auto
                          rounded-2xl border border-[#FFC828]/25
                          bg-[#171A25] p-2
                          shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
                      >
                        {orderTypes.map((type, index) => (
                          <button
                            key={type}
                            type="button"
                            role="option"
                            aria-selected={service === type}
                            onClick={() => {
                              setService(type);
                              setServiceOpen(false);
                            }}
                            className={`group flex w-full items-center justify-between
                              gap-3 rounded-xl pl-4 pr-2 py-3 text-right text-sm
                              transition-colors duration-200
                              ${service === type
                                ? "bg-gradient-to-l from-[#FFC828]/20 to-[#F15A24]/10 text-[#FFC828]"
                                : "text-gray-200 hover:bg-white/10"
                              }`}
                          >
                            <span className="flex items-center gap-3">
                              <span className="flex h-10 w-10 shrink-0 items-center
                                justify-center rounded-xl border
                                border-[#FFC828]/20 bg-[#FFC828]/10
                                text-[#FFC828] transition-all duration-200
                                group-hover:border-[#FFC828]/50
                                group-hover:bg-[#FFC828]/20">
                                {index < 5 ? (
                                  <svg width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="1.7"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="16" rx="2" />
                                    <path d="M3 9h18M8 14h3M8 17h7" />
                                  </svg>
                                ) : index === 5 ? (
                                  <svg width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="1.7"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="7" y="2" width="10" height="20" rx="2" />
                                    <path d="M11 18h2" />
                                  </svg>
                                ) : (
                                  <svg width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="1.7"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z" />
                                  </svg>
                                )}
                              </span>
                              {type}
                            </span>
                            {service === type && (
                              <span className="text-[#FFC828]">✓</span>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

              </label>

              <label className="flex flex-col gap-2 text-sm">
                توضیحات پروژه
                <textarea
                  value={description}
                  onChange={(event) =>
                    setDescription(event.target.value)
                  }
                  placeholder="درباره ایده، امکانات موردنیاز و زمان‌بندی پروژه بنویسید..."
                  rows={4}
                  className="w-full resize-y rounded-xl
                    border border-white/10 bg-white/5
                    px-4 py-3 outline-none
                    focus:border-[#FFC828]"
                />
              </label>

              <div className="rounded-xl bg-white/5 p-4
                text-sm leading-7 text-gray-300">
                <p className="font-semibold text-white">
                  اطلاعات تماس لاول کد
                </p>
                <a
                  href="tel:09305712252"
                  dir="ltr"
                  className="inline-block text-[#FFC828]"
                >
                  09305712252
                </a>
              </div>

              <button
                type="submit"
                disabled
                className="w-full cursor-not-allowed rounded-xl
                  bg-gradient-to-r from-[#FFC828] to-[#F15A24]
                  px-5 py-3 font-bold text-white opacity-60"
              >
                ثبت نهایی درخواست
              </button>

              <p className="text-center text-xs leading-6 text-gray-400">
                ثبت نهایی پس از اتصال امن فرم به سامانه
                سفارش‌ها فعال می‌شود.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
