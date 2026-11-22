import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { title: "نمونه‌کارها", href: "/portfolio" },
  { title: "تعرفه طراحی سایت", href: "/tariffs" },
  { title: "مقالات", href: "/articles" },
  { title: "درباره ما", href: "/aboutus" },
  { title: "تماس با ما", href: "/contactus" },
];

export default function Footer() {
  return (
    <footer dir="rtl" className="mt-[100px] text-white">
      <div className="relative overflow-hidden px-5 py-14 md:px-[110px]">
        <Image
          src="/footer/bgmd.png"
          alt=""
          fill
          className="-z-20 object-cover blur-sm"
        />
        <div className="absolute inset-0 -z-10 bg-black/90" />

        <div className="mx-auto flex w-full flex-col-reverse items-center justify-center gap-9 md:flex-row md:justify-between md:gap-12">
          <nav
            aria-label="لینک‌های فوتر"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-5 text-center text-xs md:gap-x-8 md:text-sm"
          >
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-gradient-to-r from-[#FFC828] to-[#F15A24] bg-clip-text text-white transition-all duration-300 hover:text-transparent"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <Link
            href="/"
            aria-label="صفحه اصلی لاول کد"
            className="inline-flex shrink-0 items-center justify-center"
          >
            <Image
              src="/navbar/lovelcode-logo.png"
              alt="لوگوی لاول کد"
              width={150}
              height={60}
              className="h-auto w-[78px] object-contain"
            />
          </Link>
        </div>
      </div>

      <div className="bg-background px-4 py-6 text-center text-xs text-white/40">
        تمام حقوق مادی و معنوی این وب‌سایت متعلق به لاول کد می‌باشد. © 2026
      </div>
    </footer>
  );
}
