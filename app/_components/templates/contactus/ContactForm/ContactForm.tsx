"use client";

import { useState, type FormEvent } from "react";
import { useDropdownDismiss } from "@/app/_hooks/useDropdownDismiss";

const inputClass =
  "w-full h-12 rounded-xl border border-white/10 bg-[#0B0D11] px-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-white/30 focus:border-[#FFC828]/70 focus:ring-2 focus:ring-[#FFC828]/10";

const labelClass = "mb-2 block text-sm font-medium text-white/75";


type DropdownOption = {
  value: string;
  label: string;
};

function StyledDropdown({
  id,
  placeholder,
  options,
}: {
  id: string;
  placeholder: string;
  options: DropdownOption[];
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useDropdownDismiss(open, () => setOpen(false));
  const [value, setValue] = useState("");

  const selected = options.find((item) => item.value === value);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={`flex h-12 w-full items-center justify-between gap-4
          rounded-xl border px-4 text-right text-sm
          transition-all duration-300
          ${
            open
              ? "border-[#FFC828] bg-[#24212A]"
              : "border-white/10 bg-[#0B0D11] hover:border-[#FFC828]/60"
          }`}
      >
        <span className={selected ? "text-white" : "text-white/35"}>
          {selected?.label || placeholder}
        </span>

        <svg
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFC828"
          strokeWidth="2"
          className={`shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={placeholder}
          className="absolute right-0 top-full z-50 mt-2
            max-h-[300px] w-full overflow-y-auto
            rounded-2xl border border-[#FFC828]/25
            bg-[#171A25] p-2
            shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={value === option.value}
              onClick={() => {
                setValue(option.value);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between
                rounded-xl px-4 py-3 text-right text-sm
                transition-colors duration-200
                ${
                  value === option.value
                    ? "bg-gradient-to-l from-[#FFC828]/20 to-[#F15A24]/10 text-[#FFC828]"
                    : "text-gray-200 hover:bg-white/10"
                }`}
            >
              <span>{option.label}</span>
              {value === option.value && <span>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [notice, setNotice] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotice(true);
  };

  return (
    <section
      id="contact-form"
      dir="rtl"
      className="relative mx-auto mb-24 max-w-5xl px-5 md:px-8"
    >
      <div className="relative isolate rounded-[28px] border border-white/10 bg-[#111318] px-6 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:px-12 md:py-14">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[400px] w-[400px] rounded-full bg-[#E65526]/10 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#FFC828]/[0.07] blur-[110px]"
        />

        <div className="mb-9 border-b border-white/10 pb-8">

          <h2 className="text-3xl font-bold leading-relaxed text-white md:text-4xl">
            بیایم ایده‌ات رو بسازیم.
          </h2>

          <p className="mt-2 text-sm leading-7 text-white/50">
            چندتا جزئیات بگو، از اینجا شروع می‌کنیم.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2"
        >
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              نام و نام خانوادگی *
            </label>
            <input
              id="contact-name"
              className={inputClass}
              placeholder="نام شما"
              autoComplete="name"
              required
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              شماره تماس *
            </label>
            <input
              id="contact-phone"
              type="tel"
              dir="ltr"
              className={inputClass + " text-left"}
              placeholder="09123456789"
              pattern="09[0-9]{9}"
              title="شماره موبایل ۱۱ رقمی با شروع 09 وارد کنید"
              autoComplete="tel"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="contact-email" className={labelClass}>
              آدرس ایمیل
              <span className="mr-2 text-xs text-white/30">(اختیاری)</span>
            </label>
            <input
              id="contact-email"
              type="email"
              dir="ltr"
              className={inputClass + " text-left"}
              placeholder="hello@example.com"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="contact-project" className={labelClass}>
              نوع پروژه
            </label>
            
<StyledDropdown
  id="contact-project"
  placeholder="انتخاب نوع پروژه"
  options={[
    { value: "website", label: "طراحی وب‌سایت" },
    { value: "webapp", label: "توسعه وب‌اپلیکیشن" },
    { value: "uiux", label: "طراحی UI/UX" },
    { value: "other", label: "سایر" },
  ]}
/>
          </div>

          <div>
            <label htmlFor="contact-budget" className={labelClass}>
              بودجه تقریبی
            </label>
            
<StyledDropdown
  id="contact-budget"
  placeholder="انتخاب بودجه"
  options={[
    { value: "unknown", label: "هنوز مشخص نیست" },
    { value: "under50", label: "کمتر از ۵۰ میلیون تومان" },
    { value: "50to150", label: "۵۰ تا ۱۵۰ میلیون تومان" },
    { value: "over150", label: "بیشتر از ۱۵۰ میلیون تومان" },
  ]}
/>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="contact-description" className={labelClass}>
              درباره پروژه‌ات بگو *
            </label>
            <textarea
              id="contact-description"
              rows={5}
              minLength={10}
              maxLength={5000}
              required
              className="w-full resize-y rounded-xl border border-white/10 bg-[#0B0D11] px-4 py-3 text-sm leading-8 text-white outline-none transition-all duration-200 placeholder:text-white/30 focus:border-[#FFC828]/70 focus:ring-2 focus:ring-[#FFC828]/10"
              placeholder="قراره چه چیزی بسازیم؟ درباره ایده و امکانات موردنیازت بگو..."
            />
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-white/40">
              اطلاعات شما صرفاً برای بررسی درخواست پروژه استفاده خواهد شد.
            </p>

            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFC828] to-[#E65526] px-6 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              ارسال درخواست

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </div>

          {notice && (
            <p
              role="status"
              className="rounded-xl border border-[#FFC828]/20 bg-[#FFC828]/[0.06] px-4 py-3 text-sm leading-7 text-white/80 md:col-span-2"
            >
              فرم بررسی شد. ارسال آنلاین درخواست هنوز فعال نشده و
              در مرحله بعد راه‌اندازی می‌شود.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
