"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/data/site";
import { Logo } from "./logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  isActive ? "text-primary" : "text-slate-700 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.contacts.ankit.phone}`}
            className="hidden rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white sm:inline-flex"
          >
            Call Now
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#094b6b]"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
