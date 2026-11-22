import BrandBuild from "@/app/_components/templates/contactus/BrandBuild";
import ContactForm from "@/app/_components/templates/contactus/ContactForm/ContactForm";
import ContactDetail from "@/app/_components/templates/contactus/ContactDetail/ContactDetail";

export default function ContactPage() {
  return (
    <main
      dir="rtl"
      className="relative isolate overflow-hidden bg-transparent text-white"
    >
      <section className="relative mx-auto max-w-7xl px-6 pt-12 pb-8 md:px-12 md:pt-20 md:pb-12">
        <BrandBuild />
      </section>

      <ContactForm />
      <ContactDetail />
    </main>
  );
}
