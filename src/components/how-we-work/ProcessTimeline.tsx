"use client";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { processSteps } from "@/lib/data/how-we-work";

export default function ProcessTimeline() {
  const [activeId, setActiveId] = useState(processSteps[0].id);

  // Scroll spy — highlight the current section in the side-nav
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    processSteps.forEach((step) => {
      const el = document.getElementById(step.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-24 bg-base-100">
      <div className="section-container grid lg:grid-cols-[280px_1fr] gap-16">
        {/* Sticky side nav */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              The 6-Step Process
            </p>
            <ul className="space-y-1 border-l border-base-300">
              {processSteps.map((step) => (
                <li key={step.id}>
                  <a
                    href={`#${step.id}`}
                    className={`block pl-5 py-2.5 -ml-px border-l-2 transition-all text-sm ${
                      activeId === step.id
                        ? "border-primary text-primary font-semibold"
                        : "border-transparent text-secondary/50 hover:text-secondary"
                    }`}
                  >
                    <span className="font-display mr-2">{step.step}</span>
                    {step.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Timeline content */}
        <div className="space-y-24">
          {processSteps.map((step, i) => (
            <div
              key={step.id}
              id={step.id}
              className="scroll-mt-28 relative animate-fade-up"
            >
              {/* Ledger row header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-base-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <step.icon className="text-primary" size={26} />
                </div>
                <div className="flex-1">
                  <span className="text-primary font-display font-bold text-sm">
                    STEP {step.step}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-secondary">
                    {step.title}
                  </h3>
                </div>
                <span className="hidden md:inline-block badge badge-outline text-secondary/60">
                  {step.duration}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <p className="text-secondary/70 text-lg leading-relaxed">
                  {step.desc}
                </p>

                <ul className="bg-base-200 rounded-3xl p-6 space-y-3 border border-base-300">
                  {step.checklist.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-primary shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="text-secondary/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connecting line between steps (except last) */}
              {i !== processSteps.length - 1 && (
                <div className="hidden lg:block absolute -bottom-24 left-7 w-px h-24 bg-base-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}