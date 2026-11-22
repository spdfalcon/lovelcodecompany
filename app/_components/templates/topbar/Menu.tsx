"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export default function Menu() {
  const navLinks = [
    { id: 1, title: "صفحه اصلی", href: "/" },
    { id: 7, title: "دوره‌های آموزشی", href: "/courses" },
    { id: 2, title: "نمونه کارها", href: "/portfolio" },
    { id: 3, title: "تعرفه طراحی سایت", href: "/tariffs" },
    { id: 4, title: "مقالات", href: "/articles" },
    { id: 5, title: "درباره ما", href: "/aboutus" },
    { id: 6, title: "تماس با ما", href: "/contactus" },
  ];
  const pathname = usePathname();


  return (
    <div>
      <ul className="px-[33px] py-5 bg-background rounded-full text-sm flex gap-2 lg:gap-9">
        {navLinks.map((link) => (
          <li className="text-[10px] cursor-pointer lg:text-sm" key={link.id}>
            <Link
              className={`lc-nav-link ${
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href + "/"))
                  ? "lc-nav-link--active"
                  : ""
              }`}
              href={`${link.href}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
