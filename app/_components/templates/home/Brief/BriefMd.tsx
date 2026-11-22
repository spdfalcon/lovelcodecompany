import React from "react";
import { Fingerprint, CodeXml, Gauge, ChartNoAxesCombined } from "lucide-react";

const features = [
  {
    icon: Fingerprint, title: "طراحی با هویت اختصاصی",
    desc: "طراحی متناسب با شخصیت برند، مخاطبان و اهداف کسب‌وکار.",
  },
  {
    icon: CodeXml, title: "توسعه مهندسی‌شده",
    desc: "کدنویسی اصولی، ساختار قابل نگهداری و توسعه‌پذیر.",
  },
  {
    icon: Gauge, title: "سرعت و عملکرد بهینه",
    desc: "تمرکز روی سرعت بارگذاری و تجربه روان کاربران.",
  },
  {
    icon: ChartNoAxesCombined, title: "آماده برای رشد",
    desc: "محصولاتی که امکان افزودن قابلیت‌های جدید را دارند.",
  },
];

export default function BriefMd() {
  return (
    <section
      dir="rtl"
      className="px-[60px] xl:px-[100px] pt-[204px] pb-[140px] text-white"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 items-center gap-16">
          <div>


            <h2 className="mt-6 font-cinema text-[48px] leading-[1.55] xl:text-[58px]">
              ما فقط وب‌سایت نمی‌سازیم؛
              <span className="block gradient-orange bg-clip-text text-transparent">
                تجربه دیجیتال خلق می‌کنیم.
              </span>
            </h2>

            <p className="mt-6 max-w-[650px] text-[16px] leading-8 text-gray-400">
              در لاول کد، طراحی خلاقانه را با مهندسی نرم‌افزار
              ترکیب می‌کنیم تا کسب‌وکارها حضوری قدرتمند، سریع و
              متمایز در دنیای دیجیتال داشته باشند.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group min-h-[210px] rounded-[26px] border border-white/[0.07] bg-[#0A0D15] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[linear-gradient(#0A0D15,#0A0D15),linear-gradient(90deg,rgba(255,200,40,0.25),rgba(241,90,36,0.25))] hover:[background-origin:padding-box,border-box] hover:[background-clip:padding-box,border-box] hover:text-white"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-xl font-bold text-orange-400 transition-colors duration-300 group-hover:text-white">
                  <feature.icon size={24} strokeWidth={1.7} />
                </div>
                <h3 className="text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-400 transition-colors duration-300 group-hover:text-white">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lc-shimmer-cta relative isolate mt-28 overflow-hidden rounded-[30px] bg-[#0A0D15] px-8 py-10 shadow-[0_20px_70px_rgba(0,0,0,0.22)] md:px-12 md:py-11">


          {/* Brand glow — right side only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_110%_at_100%_50%,rgba(255,200,40,0.12)_0%,rgba(241,90,36,0.055)_42%,transparent_78%)]"
          />

          {/* Subtle highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-12 top-0 h-px w-[260px] bg-gradient-to-l from-transparent via-[#FFC828]/60 to-transparent"
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-[700px]">
              <h3 className="font-cinema text-[30px] leading-[1.6] text-white md:text-[38px]">
                ایده بعدی کسب‌وکارت را با هم بسازیم.
              </h3>

              <p className="mt-2 text-sm leading-8 text-white md:text-base">
                از طراحی اولیه تا توسعه محصول، کنار شما هستیم.
              </p>
            </div>

            <a
              href="tel:09305712252"
              className="inline-flex min-h-[52px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-[#FFC828] to-[#F15A24] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(241,90,36,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(241,90,36,0.28)] md:text-base"
            >
              شروع گفتگو — ۰۹۳۰۵۷۱۲۲۵۲
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
