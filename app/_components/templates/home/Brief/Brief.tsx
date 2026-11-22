import React from "react";
import { Fingerprint, CodeXml, Gauge, ChartNoAxesCombined } from "lucide-react";

const features = [
  { icon: Fingerprint, title: "طراحی با هویت اختصاصی", desc: "متناسب با شخصیت برند و نیاز مخاطبان شما." },
  { icon: CodeXml, title: "توسعه مهندسی‌شده", desc: "کدنویسی اصولی و ساختار قابل توسعه." },
  { icon: Gauge, title: "سرعت و عملکرد بهینه", desc: "تجربه‌ای سریع و روان در دستگاه‌های مختلف." },
  { icon: ChartNoAxesCombined, title: "آماده برای رشد", desc: "ساخت محصولی که همراه کسب‌وکار شما رشد کند." },
];

export default function Brief() {
  return (
    <section dir="rtl" className="px-5 pt-[124px] pb-[92px] text-white">
      <div className="mx-auto max-w-xl">


        <h2 className="mt-5 font-cinema text-[34px] leading-[1.6]">
          ما فقط وب‌سایت نمی‌سازیم؛
          <span className="block gradient-orange bg-clip-text text-transparent">
            تجربه دیجیتال خلق می‌کنیم.
          </span>
        </h2>

        <p className="mt-4 text-[12px] leading-7 text-gray-400">
          در لاول کد، طراحی خلاقانه را با مهندسی نرم‌افزار ترکیب
          می‌کنیم تا کسب‌وکارها حضوری قدرتمند، سریع و متمایز در
          دنیای دیجیتال داشته باشند.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/[0.07] bg-[#0A0D15] p-4 transition-all duration-300 hover:border-transparent hover:bg-[linear-gradient(#0A0D15,#0A0D15),linear-gradient(90deg,rgba(255,200,40,0.25),rgba(241,90,36,0.25))] hover:[background-origin:padding-box,border-box] hover:[background-clip:padding-box,border-box] hover:text-white"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-lg text-orange-400 transition-colors duration-300 group-hover:text-white">
                <feature.icon size={24} strokeWidth={1.7} />
              </div>
              <h3 className="text-sm font-semibold leading-6">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs leading-6 text-gray-400 transition-colors duration-300 group-hover:text-white">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-9 rounded-[24px] border border-white/10 bg-second_dark p-6 text-center">
          <h3 className="font-cinema text-2xl">
            برای ساخت ایده بعدی آماده‌ای؟
          </h3>
          <p className="mt-3 text-sm leading-7 text-gray-300">
            درباره پروژه‌ات با ما صحبت کن.
          </p>
          <a
            href="tel:09305712252"
            className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-[#FFC828] to-[#F15A24] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
          >
            تماس با لاول کد — ۰۹۳۰۵۷۱۲۲۵۲
          </a>
        </div>
      </div>
    </section>
  );
}
