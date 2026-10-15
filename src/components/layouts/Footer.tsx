import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaPhone} from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { mainNav, services } from "@/lib/data/nav";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="section-container py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-3xl font-bold  mb-4">
            iAccountant<span className="text-primary">.io</span>
          </h3>
          <p className="text-white/75 text-[16px] max-w-xs">
            AI-powered bookkeeping, accounts management, and tax preparation —
            built for modern businesses.
          </p>
          <div className="flex gap-4 mt-6 text-white/75">
            <FaLinkedin className="hover:text-primary cursor-pointer" size={20} />
            <FaTwitter className="hover:text-primary cursor-pointer" size={20} />
            <FaFacebook className="hover:text-primary cursor-pointer" size={20} />
            <FaInstagram className="hover:text-primary cursor-pointer" size={20} />
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-lg text-white/90">Company</h4>
          <ul className="space-y-2 text-[16px] text-white/75">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary">{item.name}</Link> 
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4  text-white/90">Services</h4>
          <ul className="space-y-2 text-[16px] text-white/75">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-primary">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-lg text-white/90">Get Started</h4>
          <p className="text-sm text-white/75 text-[16px] mb-5">Start your free 14-day trial today.</p>
          <div className="flex gap-4">
            <a href="tel:+18002948513" className="btn btn-primary rounded-full btn-md text-[15px] tracking-wider text-white px-6 py-4">
              <FaPhone/>
              Book a call 
            </a>
            <a href="mailto:info@iaccountant.io" className="btn btn-primary rounded-full btn-md tracking-wide text-white px-6 py-4">
              <MdMarkEmailRead />
              Email to us
            </a> 
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} iAccountant.io— All rights reserved.
      </div>
    </footer>
  );
}