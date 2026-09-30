const logos = ["QuickBooks", "Xero", "Stripe", "Gusto", "NetSuite", "Bill.com", "Wave", "FreshBooks"];

export default function LogoMarquee() {
  return (
    <section className="py-10 border-y border-base-300 bg-base-100 overflow-hidden">
      <p className="text-center text-sm text-secondary/50 mb-8">
        Integrated with the tools you already use
      </p>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <span key={i} className="mx-10 text-2xl font-display font-bold text-secondary/30">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}