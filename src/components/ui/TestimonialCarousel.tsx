"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
};

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4500, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-[0_0_88%] sm:flex-[0_0_60%] md:flex-[0_0_38%] bg-base-100 border border-base-300 rounded-3xl p-8"
            >
              <Quote className="text-primary/30 mb-4" size={32} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-secondary text-base mb-6 min-h-[80px]">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-secondary text-sm">{t.name}</p>
                  <p className="text-xs text-secondary/50">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        <button onClick={scrollPrev} className="btn btn-circle btn-outline btn-sm">
          <ChevronLeft size={16} />
        </button>
        <button onClick={scrollNext} className="btn btn-circle btn-outline btn-sm">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}