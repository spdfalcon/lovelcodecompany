import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/_components/modules/Breadcrumb/Breadcrumb";

const features = [
  ["۰۱", "تجربه فروشگاهی", "ساختار حرفه‌ای برای معرفی و فروش محصولات"],
  ["۰۲", "طراحی اختصاصی", "هویت بصری متناسب با شخصیت برند"],
  ["۰۳", "مدیریت محتوا", "امکان مدیریت و توسعه آسان صفحات"],
  ["۰۴", "مدیریت محصولات", "ساختار منظم برای دسته‌بندی محصولات"],
  ["۰۵", "تجربه کاربری", "مسیر ساده و قابل فهم برای مخاطبان"],
  ["۰۶", "طراحی واکنش‌گرا", "تجربه متناسب با نمایشگرهای مختلف"],
];

const facts = [
  ["نوع پروژه", "فروشگاهی"],
  ["حوزه فعالیت", "پوشاک و الیاف طبیعی"],
  ["سال آغاز فعالیت", "۱۴۰۳"],
  ["نوع همکاری", "طراحی و توسعه وب‌سایت"],
];

export default function PortfolioDetailPage() {
  return (
    <main dir="rtl" className="lc-showroom relative isolate overflow-hidden text-white">

      <section className="relative z-10 mx-auto max-w-[1600px] px-5 pt-5 md:px-12">
        <Breadcrumb embedded />

        <div className="lc-showroom-hero">

          <div className="lc-showroom-ceiling" aria-hidden="true" />
          <div className="lc-showroom-light-cone" aria-hidden="true" />
          <div className="lc-showroom-wall-left" aria-hidden="true" />
          <div className="lc-showroom-wall-right" aria-hidden="true" />

          <div className="lc-showroom-intro">
            <span className="lc-showroom-kicker">روایت یک پروژه اختصاصی</span>

            <h1>
              آزاسیت
              <span>تجربه‌ای فراتر از یک فروشگاه</span>
            </h1>

            <p>
              بازآفرینی تجربه خرید آنلاین در دنیای پوشاک؛
              ترکیبی از زیبایی بصری، ساختار هوشمند و تجربه‌ای ساده و دلنشین.
            </p>

            <div className="lc-showroom-meta">
              <span>طراحی اختصاصی</span>
              <span>توسعه وب‌سایت</span>
              <span>تجربه کاربری</span>
            </div>
          </div>

          <div className="lc-showroom-exhibition">

            <div className="lc-showroom-platform" aria-hidden="true" />
            <div className="lc-showroom-platform-glow" aria-hidden="true" />

            <div className="lc-showroom-devices">

              <div className="lc-showroom-desktop">
                <div className="lc-showroom-monitor-frame">
                  <div className="lc-showroom-monitor-screen">
                    <Image
                      src="/portfolio/1.png"
                      alt="نمای دسکتاپ وب‌سایت آزاسیت"
                      fill
                      priority
                      sizes="(max-width: 768px) 90vw, 850px"
                    />
                  </div>
                </div>
                <div className="lc-showroom-monitor-neck" />
                <div className="lc-showroom-monitor-base" />
              </div>

              <div className="lc-showroom-phone">
                <div className="lc-showroom-phone-screen">
                  <div className="lc-showroom-phone-island" />
                  <Image
                    src="/portfolio/1.png"
                    alt="نمای موبایل وب‌سایت آزاسیت"
                    fill
                    sizes="220px"
                  />
                </div>
              </div>

            </div>

            <div className="lc-showroom-caption">
              <span>طراحی یکپارچه در تمام نمایشگرها</span>
              <span>نسخه دسکتاپ و موبایل</span>
            </div>
          </div>

          <div className="lc-showroom-scroll">
            <span>ادامه روایت پروژه</span>
            <i />
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1300px] px-5 py-28 md:px-12 md:py-36">
        <div className="lc-showroom-section-title">
          <span>شناخت پروژه</span>
          <h2>پشت هر تجربه خوب، یک داستان وجود دارد.</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="lc-showroom-story">
            <p>
              شرکت آزاسیت با مدیریت محمد گودرزی در سال ۱۴۰۳ با هدف گسترش
              فرهنگ استفاده از پارچه‌های الیاف طبیعی و مدل‌های ایرانی آغاز
              به فعالیت کرد.
            </p>
            <p>
              در طراحی این تجربه دیجیتال، هدف فقط ساخت یک فروشگاه اینترنتی
              نبود؛ بلکه ایجاد فضایی بود که سادگی، زیبایی و کیفیت محصولات
              را به شکلی منسجم به مخاطب منتقل کند.
            </p>
            <p>
              تصاویر باکیفیت، دسته‌بندی منظم و دسترسی ساده به محصولات،
              بخش مهمی از رویکرد طراحی این پروژه را شکل می‌دهند.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {facts.map(([label, value]) => (
              <div key={label} className="lc-showroom-fact">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lc-showroom-detail relative overflow-hidden py-28 md:py-36">
        <div className="relative z-10 mx-auto max-w-[1300px] px-5 md:px-12">
          <div className="lc-showroom-section-title text-center">
            <span>از هر زاویه</span>
            <h2>یک تجربه، در هر اندازه</h2>
            <p>هویت بصری یکپارچه، در تمام نمایشگرها.</p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_260px]">
            <div className="lc-showroom-detail-monitor">
              <Image
                src="/portfolio/1.png"
                alt="نمای وب‌سایت آزاسیت"
                width={399}
                height={228}
                className="w-full"
              />
            </div>

            <div className="mx-auto w-[190px]">
              <div className="lc-showroom-detail-phone">
                <Image
                  src="/portfolio/1.png"
                  alt="نمای موبایل آزاسیت"
                  width={399}
                  height={228}
                  className="w-full"
                />
              </div>
              <p className="mt-7 text-center text-sm text-white/60">
                تجربه موبایل
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1300px] px-5 py-28 md:px-12 md:py-36">
        <div className="lc-showroom-section-title">
          <span>ساختار و امکانات</span>
          <h2>جزئیاتی که تجربه را می‌سازند</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([number, title, description]) => (
            <article key={number} className="lc-showroom-feature">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-5 py-32 text-center md:py-40">
        <div className="mx-auto max-w-3xl">
          <span className="text-sm text-[#BDA1F7]">
            پروژه بعدی می‌تواند متعلق به شما باشد
          </span>
          <h2 className="mt-8 text-3xl font-black leading-[1.8] md:text-6xl">
            بیایید یک تجربه ماندگار بسازیم.
          </h2>
          <p className="mt-7 text-sm leading-9 text-white/55">
            برای ساخت یک وب‌سایت متفاوت و متناسب با هویت کسب‌وکارتان،
            با لاول‌کد همراه شوید.
          </p>
          <Link
            href="/contactus"
            className="mt-10 inline-flex rounded-xl bg-gradient-to-l from-[#FFC828] to-[#F15A24] px-10 py-4 text-sm font-bold text-black transition-transform duration-300 hover:-translate-y-1"
          >
            شروع همکاری
          </Link>
        </div>
      </section>
    </main>
  );
}
