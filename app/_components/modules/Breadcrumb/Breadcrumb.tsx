"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  aboutus: "درباره ما",
  contactus: "تماس با ما",
  articles: "مقالات",
  portfolio: "نمونه‌کارها",
  tariffs: "تعرفه طراحی سایت",
};

const detailLabels: Record<string, string> = {
  aboutus: "معرفی اعضای تیم",
  articles: "جزئیات مقاله",
  portfolio: "جزئیات نمونه‌کار",
};

export default function Breadcrumb({
  currentTitle,
  embedded = false,
}: {
  currentTitle?: string;
  embedded?: boolean;
}) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (!segments.length) return null;

  const section = segments[0];
  const sectionTitle = labels[section] || "صفحه";
  const isDetail = segments.length > 1;
  const pageTitle = isDetail
    ? currentTitle || detailLabels[section] || "جزئیات"
    : sectionTitle;

  const content = (
    <nav
      aria-label="مسیر صفحه"
      dir="rtl"
      className="relative top-[50px] flex w-fit max-w-full items-center gap-2
        rounded-lg bg-second_dark p-2.5 text-xs text-badge
        md:rounded-xl md:p-3"
    >
      <Link
        href="/"
        aria-label="خانه"
        className="shrink-0 transition-colors hover:text-primery_orang"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-3.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </Link>

      <span aria-hidden="true" className="text-white/40">‹</span>

      {isDetail && (
        <>
          <Link
            href={"/" + section}
            className="shrink-0 transition-colors
              hover:text-primery_orang"
          >
            {sectionTitle}
          </Link>
          <span aria-hidden="true" className="text-white/40">‹</span>
        </>
      )}

      <span
        aria-current="page"
        className="truncate font-semibold text-badge"
      >
        {pageTitle}
      </span>
    </nav>
  );

  if (embedded) return content;

  return (
    <div className="mt-10 md:mt-16">
      <div className="container mb-8 md:mb-16">
        {content}
      </div>
    </div>
  );
}
