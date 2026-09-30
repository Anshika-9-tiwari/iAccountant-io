// src/components/ui/SectionHeading.tsx
export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={`max-w-2xl mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl font-bold leading-tight ${
          dark ? "text-white" : "text-secondary"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 text-lg ${dark ? "text-white/60" : "text-secondary/60"}`}>
          {desc}
        </p>
      )}
    </div>
  );
}