import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import SectionHeading from "@/components/ui/SectionHeading";
import { prisma } from "@/lib/prisma";

export default async function TestimonialSection({
  eyebrow = "Client Stories",
  title = "Trusted by businesses who value accuracy",
  take = 6,
}: {
  eyebrow?: string;
  title?: string;
  take?: number;
}) {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
    take,
  });

  return (
    <section className="py-24 bg-base-200">
      <div className="section-container">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}