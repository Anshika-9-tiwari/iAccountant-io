import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import SectionHeading from "@/components/ui/SectionHeading";
import { prisma } from "@/lib/prisma";

export default async function TestimonialSection() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  return (
    <section className="py-16 md:py-18 bg-base-100">
      <div className="section-container">
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by businesses who value accuracy"
        />
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}