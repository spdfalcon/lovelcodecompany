import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function HamberMenu({ setIsShow }: any) {
  const navLinks = [
    { id: 1, title: "صفحه اصلی", href: "/" },
    { id: 2, title: "نمونه کارها", href: "/portfolio" },
    { id: 3, title: "تعرفه طراحی سایت", href: "/tariffs" },
    { id: 4, title: "مقالات", href: "/articles" },
    { id: 5, title: "درباره ما", href: "/aboutus" },
    { id: 6, title: "تماس با ما", href: "/contactus" },
  ];
  const pathname = usePathname();

  return (
    <div className="px-8 py-12 bg-black w-full h-screen overflow-y-auto">
      <div className="flex justify-end w-full">
        <button
          type="button"
          onClick={() => setIsShow(false)}
          aria-label="بستن منو"
          className="relative -left-[20px] relative -top-[8px] flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div>
        <ul className="flex flex-col gap-9 mt-[-36px] text-sm pr-12">
          {navLinks.map((link) => (
            <li className="cursor-pointer" key={link.id}>
              <Link
                onClick={() => setIsShow(false)}
                className={
                  pathname === `/${link.href}`
                    ? "gradient-orange text-transparent bg-clip-text before:size-[2px] before:gradient-orange before:block relative before:absolute before:-top-px before:-right-1 before:rounded-full "
                    : pathname === `${link.href}`
                    ? "gradient-orange text-transparent bg-clip-text before:size-[2px] before:gradient-orange before:block relative before:absolute before:-top-px before:-right-1 before:rounded-full "
                    : ""
                }
                href={`${link.href}`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
