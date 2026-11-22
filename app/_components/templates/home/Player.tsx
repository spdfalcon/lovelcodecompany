"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Player() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="mid flex justify-center">
        <div className="mt-11 w-full max-w-[820px] h-[240px] md:h-[360px] rounded-3xl md:rounded-[42px] overflow-hidden relative">
          <Image fill sizes="(max-width: 768px) 100vw, 820px" className="object-cover object-center" src="/images/lovelcode-workspace.png"
            alt="ویدیوی معرفی طراحی سایت"
          />

          <div className="absolute inset-0 bg-black/20" />

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="پخش ویدیوی طراحی سایت"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[78px] h-[78px] cursor-pointer hover:scale-110 transition-transform"
          >
            <span className="relative block w-[78px] h-[78px]">
              <Image
                width={78}
                height={78}
                src="/home/btnplay.png"
                alt=""
              />
              <Image
                width={14}
                height={14}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !w-[14px] !h-[14px]"
                src="/home/btnplay2.svg"
                alt=""
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="پخش ویدیوی طراحی سایت"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="بستن ویدیو"
              className="absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-2xl text-white hover:bg-red-600"
            >
              ×
            </button>

            <iframe
              src="https://www.aparat.com/video/video/embed/videohash/m3809kb/vt/frame"
              title="ویدیوی طراحی سایت از آپارات"
              className="w-full aspect-video rounded-xl bg-black"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="eager"
            />
          </div>
        </div>
      )}
    </>
  );
}
