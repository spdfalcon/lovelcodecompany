"use client";

import { useEffect, useState } from "react";

const lines = [
  'import { createBrand } from "@lovelcode/core";',
  "",
  "const future = createBrand({",
  '  name: "LOVELCODE",',
  "  creativity: Infinity,",
  '  engineering: "precise",',
  '  experience: "extraordinary"',
  "});",
  "",
  "future.render();",
];

export default function BrandBuild() {
  const [step, setStep] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const timer = window.setInterval(
      () => setStep((previous) => (previous + 1) % 120),
      65
    );
    return () => window.clearInterval(timer);
  }, []);

  const count = Math.min(lines.length, Math.floor(step / 5));
  const showBrand = reduced || step >= 58;

  return (
    <div className="relative mx-auto flex h-[370px] w-full max-w-[760px] items-center justify-center overflow-hidden md:h-[510px]">
      <div
        className={`absolute w-[94%] max-w-[570px] overflow-hidden rounded-xl border border-white/15 bg-[#101116] shadow-[0_30px_90px_rgba(0,0,0,.55)] transition-all duration-500 ${
          showBrand
            ? "scale-90 opacity-0 blur-xl"
            : "scale-100 opacity-100 blur-0"
        }`}
        style={{ transform: showBrand ? undefined : "perspective(1000px) rotateY(-5deg) rotateX(3deg)" }}
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <i className="h-2 w-2 rounded-full bg-[#E65526]" />
          <i className="h-2 w-2 rounded-full bg-[#FFC828]" />
          <i className="h-2 w-2 rounded-full bg-white/30" />
          <span className="ml-auto font-mono text-[10px] text-white/40">
            create-brand.tsx
          </span>
        </div>

        <div dir="ltr" className="h-[260px] overflow-hidden px-4 py-5 font-mono text-[10px] leading-6 text-[#e4e4e9] sm:text-xs sm:leading-7">
          {lines.slice(0, reduced ? lines.length : count).map((line, i) => (
            <div key={i} className="flex whitespace-pre">
              <span className="mr-4 w-5 shrink-0 text-white/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={
                line.includes("import") ? "text-[#FFC828]" :
                line.includes("LOVELCODE") ? "text-[#ffb65e]" :
                line.includes("render") ? "text-[#E65526]" :
                "text-[#e4e4e9]"
              }>
                {line}
              </span>
            </div>
          ))}
        </div>
        <div className="h-[3px] bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-[#FFC828] to-[#E65526] transition-all duration-300"
            style={{ width: `${Math.min(100, step * 1.55)}%` }}
          />
        </div>
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          showBrand
            ? "translate-y-0 scale-100 opacity-100 blur-0"
            : "translate-y-6 scale-90 opacity-0 blur-lg"
        }`}
      >
        <img
          src="/logo/logotype-animation.svg"
          alt="LovelCode"
          className="h-auto w-[min(78vw,560px)] object-contain"
        />
      </div>
    </div>
  );
}
