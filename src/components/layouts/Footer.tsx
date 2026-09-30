import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { mainNav, services } from "@/lib/data/nav";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="section-container py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">
            iAccountant<span className="text-primary">.io</span>
          </h3>
          <p className="text-white/60 text-sm max-w-xs">
            AI-powered bookkeeping, accounts management, and tax preparation —
            built for modern businesses.
          </p>
          <div className="flex gap-4 mt-6 text-white/70">
            <FaLinkedin className="hover:text-primary cursor-pointer" size={20} />
            <FaTwitter className="hover:text-primary cursor-pointer" size={20} />
            <FaFacebook className="hover:text-primary cursor-pointer" size={20} />
            <FaInstagram className="hover:text-primary cursor-pointer" size={20} />
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white/90">Company</h4>
          <ul className="space-y-2 text-sm text-white/60">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white/90">Services</h4>
          <ul className="space-y-2 text-sm text-white/60">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-primary">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white/90">Get Started</h4>
          <p className="text-sm text-white/60 mb-4">Start your free 14-day trial today.</p>
          <Link href="/free-trial" className="btn btn-primary rounded-full btn-sm text-white">
            Start Free Trial
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} iAccountant.io— All rights reserved.
      </div>
    </footer>
  );
}