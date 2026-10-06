import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Contact Us | iAccountant.io",
  description:
    "Get in touch with the iAccountant.io team. Ask about our bookkeeping, AP/AR, tax, and compilation services.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-20 bg-base-100">
        <div className="section-container grid lg:grid-cols-[1fr_380px] gap-16">
          {/* Form */}
          <div>
            <h2 className="font-display text-3xl font-bold text-secondary mb-2">
              Send us a message
            </h2>
            <p className="text-secondary/60 mb-8">
              Fill out the form below and we'll get back to you within one business day.
            </p>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside>
            <ContactInfo />
          </aside>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}