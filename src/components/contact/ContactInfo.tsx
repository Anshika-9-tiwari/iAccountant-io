import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "info@iaccountant.io",
    sub: "We reply within 4 business hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) 294-8513",
    sub: "Mon – Fri, 9 AM – 6 PM EST",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "350 Fifth Avenue, Suite 4200",
    sub: "New York, NY 10118",
  },
  {
    icon: Clock,
    label: "Support Hours",
    value: "Mon – Fri: 9 AM – 6 PM EST",
    sub: "Scale plan clients get 24/7 support",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {info.map((item, i) => (
        <div key={i} className="flex gap-4">
          <div className="w-13 h-13 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <item.icon className="text-primary" size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
              {item.label}
            </p>
            <p className="font-bold text-secondary text-[17px]">{item.value}</p>
            <p className="text-secondary/60 font-medium text-sm">{item.sub}</p>
          </div>
        </div>
      ))}

      <div className="bg-base-200 rounded-2xl p-6 border border-base-300 mt-8">
        <div className="flex items-center gap-3 mb-3">
          <MessageCircle className="text-primary" size={20} />
          <p className="font-display font-bold text-secondary">Prefer a quick chat?</p>
        </div>
        <p className="text-secondary/60 text-sm mb-4">
          Book a 15-minute call with our team — no commitment, just answers.
        </p>
        <a
          href="tel:+18002948513"
          className="btn btn-primary btn-md px-6 rounded-full text-white"
        >
          Book a Call
        </a>
      </div>
    </div>
  );
}