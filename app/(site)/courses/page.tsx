import type { Metadata } from "next";
import AcademyCatalog from "./AcademyCatalog";

export const metadata: Metadata = {
  title: "دوره‌های آموزشی | لاول‌کد",
  description: "دوره‌های رایگان و تخصصی برنامه‌نویسی و مهارت‌های دیجیتال در لاول‌کد",
};

export default function CoursesPage() {
  return <AcademyCatalog />;
}
