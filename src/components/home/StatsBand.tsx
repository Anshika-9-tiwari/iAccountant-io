import StatCard from "@/components/ui/StatCard";
import { prisma } from "@/lib/prisma";

export default async function StatsBand() {
  const stats = await prisma.stat.findMany({ orderBy: { order: "asc" } });

  return (
    <section className="py-14 md:py-16 bg-secondary bg-ledger-lines">
      <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat) => (
          <StatCard key={stat.id} value={stat.value} suffix={stat.suffix ?? ""} label={stat.label} />
        ))}
      </div>
    </section>
  );
}