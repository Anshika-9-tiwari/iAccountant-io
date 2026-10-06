import { MessageSquare } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-base-200 bg-radial-fade  bg-ledger-lines">
      <div className="section-container py-20 lg:py-26 text-center relative z-10">
        <span className="inline-flex items-center gap-2 badge badge-outline text-primary border-primary/40 py-4 px-4 mb-6">
          <MessageSquare size={14} /> Get In Touch
        </span>
        <h1 className="font-display text-5xl lg:text-6xl font-bold text-secondary leading-[1.1] max-w-3xl mx-auto">
          Let's talk about <span className="text-primary">your books.</span>
        </h1>
        <p className="text-lg text-secondary/60 mt-6 max-w-xl mx-auto">
          Whether you have a question about our services, need a custom quote,
          or just want to see if we're the right fit — we'd love to hear from you.
        </p>
      </div>

      <div className="absolute top-14 right-12 hidden lg:block bg-white/50 border border-secondary/5 shadow-md rounded-2xl p-4 backdrop-blur-sm animate-float">
        <p className="text-xs text-secondary/50">Avg. Response</p>
        <p className="text-secondary/50 font-display font-bold text-xl mt-0.5">Under 4 hrs</p>
      </div>
      <div className="absolute bottom-14 left-12 hidden lg:block bg-white/5 border border-secondary/10 shadow-md rounded-2xl p-4 backdrop-blur-sm animate-float"> 
        <p className="text-xs text-secondary/50">Avg. Price</p>
        <p className="text-secondary/80 font-display font-bold text-xl mt-1">$199/550/m</p>  
      </div>
    </section>
  );
}