import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-primary">{siteConfig.name}</h3>
          <p className="mt-2 text-sm text-slate-600">{siteConfig.tagline}</p>
          <p className="mt-3 text-sm text-slate-700">{siteConfig.address}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800">
            Quick Links
          </h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-700">
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800">
            Contact
          </h4>
          <div className="mt-3 space-y-2 text-sm text-slate-700">
            <p>
              {siteConfig.contacts.ankit.name}:{" "}
              <a
                className="text-primary hover:underline"
                href={`tel:${siteConfig.contacts.ankit.phone}`}
              >
                {siteConfig.contacts.ankit.phone}
              </a>
            </p>
            <p>
              {siteConfig.contacts.anshum.name}:{" "}
              <a
                className="text-primary hover:underline"
                href={`tel:${siteConfig.contacts.anshum.phone}`}
              >
                {siteConfig.contacts.anshum.phone}
              </a>
            </p>
            {siteConfig.contacts.emails.map((email) => (
              <p key={email}>
                <a className="text-primary hover:underline" href={`mailto:${email}`}>
                  {email}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
