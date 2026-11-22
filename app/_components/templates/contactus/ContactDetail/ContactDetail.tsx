import React from "react";

export default function ContactDetail() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24">
        <div>
          <h2 className="text-3xl font-bold md:text-5xl">
            مستقیم در ارتباط باشیم.
          </h2>
        </div>

        <div className="space-y-8">
          <a
            href="tel:09305712252"
            className="group flex items-center justify-between border-b border-white/10 pb-6 transition-colors hover:border-[#f59e57]"
          >
            <div>
              <p className="mb-2 text-xs text-white/40">شماره تماس</p>
              <p dir="ltr" className="text-left text-xl font-semibold md:text-2xl">
                0930 571 2252
              </p>
            </div>
            <span className="text-[14px] text-white/90 transition-transform group-hover:-translate-x-2">
              ↖
            </span>
          </a>

          <a
            href="mailto:mail.lovelcode@gmail.com"
            className="group flex items-center justify-between border-b border-white/10 pb-6 transition-colors hover:border-[#f59e57]"
          >
            <div>
              <p className="mb-2 text-xs text-white/40">ایمیل</p>
              <p dir="ltr" className="break-all text-left text-base font-semibold md:text-xl">
                mail.lovelcode@gmail.com
              </p>
            </div>
            <span className="text-[14px] text-white/90 transition-transform group-hover:-translate-x-2">
              ↖
            </span>
          </a>

          <p className="text-xs leading-8 text-white/35">
            برای شروع همکاری، از طریق تماس تلفنی یا ایمیل با ما ارتباط بگیر.
          </p>
        </div>
      </div>
    </section>
  );
}
