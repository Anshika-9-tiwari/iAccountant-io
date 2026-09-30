"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { services, mainNav } from "@/lib/data/nav";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-base-100/80 border-b border-base-300">
      <nav className="section-container flex items-center justify-between py-4">
        <Link href="/" className="font-display text-2xl font-bold text-secondary">
          iAccountant<span className="text-primary">.io</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 font-medium text-secondary/80 text-sm">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              Services <ChevronDown size={14} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[420px]">
                <div className="bg-base-100 shadow-2xl rounded-2xl border border-base-300 p-3 grid gap-1 animate-fade-up">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="p-3 rounded-xl hover:bg-base-200 transition-colors"
                    >
                      <p className="font-semibold text-secondary text-sm">{s.name}</p>
                      <p className="text-xs text-secondary/60 mt-0.5">{s.desc}</p>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="p-3 rounded-xl text-primary text-sm font-semibold hover:bg-base-200"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            )}
          </li>
          {mainNav.slice(1).map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/free-trial" className="btn btn-primary btn-sm rounded-full px-5 text-white">
            Start Free Trial
          </Link>
        </div>

        <button className="lg:hidden text-secondary" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-base-100 border-t border-base-300 px-6 py-6 animate-fade-up">
          <ul className="flex flex-col gap-4 text-secondary font-medium">
            <li><Link href="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
            <li className="font-semibold text-primary">Services</li>
            {services.map((s) => (
              <li key={s.href} className="pl-3">
                <Link href={s.href} onClick={() => setMobileOpen(false)} className="text-sm">
                  {s.name}
                </Link>
              </li>
            ))}
            {mainNav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMobileOpen(false)}>{item.name}</Link>
              </li>
            ))}
            <Link href="/free-trial" className="btn btn-primary rounded-full mt-2 text-white">
              Start Free Trial
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}