import { UserPlus, DatabaseZap, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign up in 2 minutes",
    desc: "Fill out the form below. We'll create your account and assign a dedicated onboarding specialist.",
  },
  {
    icon: DatabaseZap,
    title: "We connect your data",
    desc: "Securely link your bank accounts and accounting software. We handle the migration.",
  },
  {
    icon: BarChart3,
    title: "See clean books in days",
    desc: "Within 48-72 hours, you'll have your first reconciled reports and a live dashboard.",
  },
];

export default function TrialTimeline() {
  return (
    <section className="py-18 bg-base-200 border-t border-base-300">
      <div className="section-container">
        <h2 className="font-display text-2xl font-bold text-secondary text-center mb-12">
          What happens after you sign up
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-base-300 z-0" />
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-base-100 border-2 border-primary flex items-center justify-center mb-4 shadow-sm">
                <step.icon className="text-primary" size={26} />
              </div>
              <span className="text-primary font-display font-bold text-xs">
                STEP {i + 1}
              </span>
              <h3 className="font-display font-bold text-lg text-secondary mt-1 mb-2">
                {step.title}
              </h3>
              <p className="text-secondary/60 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}