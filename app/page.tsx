import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { FadeIn } from "@/components/ui/fade-in";
import {
  industriesServed,
  primaryServices,
  siteConfig,
  testimonials,
} from "@/data/site";
import { LeadPopup } from "@/components/sections/lead-popup";

export const metadata: Metadata = {
  title: "Trusted Chartered Accountants for Business Growth",
  description:
    "Professional Chartered Accountant services in Delhi including tax planning, GST compliance, audit, advisory, and bookkeeping.",
};

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteConfig.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-239, Hari Nagar",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    email: siteConfig.contacts.emails,
    telephone: [
      siteConfig.contacts.ankit.phone,
      siteConfig.contacts.anshum.phone,
    ],
    url: siteConfig.url,
    areaServed: "Delhi NCR",
    keywords: siteConfig.seoKeywords.join(", "),
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <LeadPopup />
      <section className="grid items-center gap-8 rounded-3xl bg-slate-50 p-8 lg:grid-cols-2 lg:p-12">
        <FadeIn>
          <p className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Premium CA Services in Delhi
          </p>
          <h1 className="text-4xl font-bold leading-tight text-primary sm:text-5xl">
            Trusted Chartered Accountants for Your Business Growth
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Tax, Audit, Compliance and Advisory support for startups, SMEs, and
            growing businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-[#094b6b]"
            >
              Book Consultation
            </Link>
            <a
              href={`tel:${siteConfig.contacts.ankit.phone}`}
              className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
            >
              Contact Now
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/hero-ca-professional.svg"
              alt="Professional chartered accountant themed hero illustration"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
              priority
            />
          </div>
        </FadeIn>
      </section>

      <section className="mt-14">
        <FadeIn>
          <h2 className="text-3xl font-bold text-primary">About the Firm</h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            {siteConfig.name} delivers reliable and practical chartered accountancy
            services with a client-first approach. We help businesses stay
            compliant, improve financial clarity, and make confident decisions.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              CA Certified
            </span>
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              End-to-End Compliance
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Fast Turnaround
            </span>
          </div>
        </FadeIn>
      </section>

      <section className="mt-14">
        <FadeIn>
          <h2 className="text-3xl font-bold text-primary">Our Services</h2>
        </FadeIn>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {primaryServices.map((service, idx) => (
            <FadeIn key={service} delay={idx * 0.05}>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">{service}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <FadeIn>
          <h2 className="text-3xl font-bold text-primary">Why Choose Us</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>Expert CA Team</li>
            <li>Client-Centric Approach</li>
            <li>End-to-End Compliance Support</li>
            <li>Fast Turnaround and Clear Communication</li>
          </ul>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h2 className="text-3xl font-bold text-primary">Industries Served</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {industriesServed.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                {industry}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="mt-14">
        <FadeIn>
          <h2 className="text-3xl font-bold text-primary">Client Testimonials</h2>
        </FadeIn>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <FadeIn key={item.name} delay={idx * 0.07}>
              <article className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-700">“{item.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-primary">
                  {item.name}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl bg-primary p-8 text-white">
        <FadeIn>
          <p className="text-2xl font-bold">Talk to Our Experts Today</p>
          <p className="mt-2 text-white/90">
            Get trusted support for tax, GST, audit, accounting, and compliance.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary"
          >
            Book Consultation
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
