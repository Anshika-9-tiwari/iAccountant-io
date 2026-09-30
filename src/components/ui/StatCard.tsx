export default function StatCard({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <p className="font-display text-4xl md:text-5xl font-bold text-white">
        {value}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="text-white/50 mt-2 text-sm">{label}</p>
    </div>
  );
}