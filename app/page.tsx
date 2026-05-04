import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { FilingCountdown } from "@/components/sections/filing-countdown";
import { LeadPopup } from "@/components/sections/lead-popup";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { FadeIn } from "@/components/ui/fade-in";
import {
  blogPosts,
  complianceDeadline,
  featuredPlans,
  firmStats,
  industriesServed,
  primaryServices,
  siteConfig,
  testimonials,
  valuePillars,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Trusted Chartered Accountants for Business Growth",
  description:
    "Delhi NCR chartered accountants for GST, income tax, audit, bookkeeping, registrations, and ongoing compliance — clear timelines and CA-led delivery.",
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

  const latestPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

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
            Chartered accountants · Delhi NCR
          </p>
          <h1 className="text-4xl font-bold leading-tight text-primary sm:text-5xl">
            Compliance, accounting, and filings — without the noise
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            {siteConfig.name} supports growing businesses with tax, GST, audit, bookkeeping, and
            advisory work — structured processes, documented advice, and predictable communication.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-[#094b6b]"
            >
              Book consultation
            </Link>
            <a
              href={`tel:${siteConfig.contacts.ankit.phone}`}
              className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
            >
              Call now
            </a>
            <Link
              href="/services"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-primary hover:text-primary"
            >
              View services
            </Link>
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

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {firmStats.map((row, idx) => (
            <FadeIn key={row.label} delay={idx * 0.05}>
              <div className="text-center lg:text-left">
                <p className="text-lg font-bold text-primary">{row.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {row.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <FadeIn>
          <h2 className="text-3xl font-bold text-primary">About the firm</h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            We combine technical depth with practical judgment so owners spend less time chasing
            notices and more time running the business. Engagements are scoped in writing, staffed
            consistently, and reviewed by qualified chartered accountants.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              CA certified
            </span>
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              End-to-end compliance
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Clear turnaround expectations
            </span>
          </div>
        </FadeIn>
      </section>

      <section className="mt-14">
        <FadeIn>
          <h2 className="text-3xl font-bold text-primary">How we work with you</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Three principles shape every engagement — so compliance feels managed instead of
            improvised.
          </p>
        </FadeIn>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {valuePillars.map((pillar, idx) => (
            <FadeIn key={pillar.title} delay={idx * 0.07}>
              <article className="h-full rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{pillar.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <FadeIn>
          <h2 className="text-3xl font-bold text-primary">Core practice areas</h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            Explore detailed write-ups, deliverables, and discussion prompts on the services page.
          </p>
        </FadeIn>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {primaryServices.map((service, idx) => (
            <FadeIn key={service} delay={idx * 0.05}>
              <Link
                href="/services"
                className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-primary hover:shadow-md"
              >
                <h3 className="font-semibold text-slate-900">{service}</h3>
                <p className="mt-2 text-sm font-medium text-primary">View details →</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <FadeIn>
          <h2 className="text-3xl font-bold text-primary">Indicative engagement packs</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Illustrative fee bands for typical volumes. Final pricing depends on transactions,
            sector, and timelines — confirmed after a short scoping call.
          </p>
        </FadeIn>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPlans.map((plan, idx) => (
            <FadeIn key={plan.title} delay={idx * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary">{plan.title}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-900">{plan.priceLabel}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {plan.turnaround}
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-700">
                  {plan.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex justify-center rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#094b6b]"
                >
                  Discuss this pack
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">
          *Indicative only; not an offer. Statutory fees, portal charges, and out-of-pocket
          disbursements are extra where applicable.
        </p>
      </section>

      <section className="mt-14">
        <FadeIn>
          <FilingCountdown
            title={complianceDeadline.title}
            description={complianceDeadline.description}
            endAt={complianceDeadline.endAt}
            timeZone={complianceDeadline.timeZone}
          />
        </FadeIn>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <FadeIn>
          <h2 className="text-3xl font-bold text-primary">Why teams choose us</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>Single point of contact with CA oversight on material positions</li>
            <li>Checklists and reconciliations built for audit and portal scrutiny</li>
            <li>Practical guidance on cash tax, GST positions, and governance gaps</li>
            <li>Scalable support from first registration to mature reporting cycles</li>
          </ul>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h2 className="text-3xl font-bold text-primary">Industries served</h2>
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
          <h2 className="text-3xl font-bold text-primary">Client voices</h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            Swipe or use the arrows to read recent feedback — representative of how we run monthly
            compliance and project-based mandates.
          </p>
        </FadeIn>
        <div className="mt-8">
          <FadeIn delay={0.1}>
            <TestimonialsCarousel items={testimonials} />
          </FadeIn>
        </div>
      </section>

      <section className="mt-14">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-primary">Latest on the blog</h2>
              <p className="mt-2 max-w-2xl text-slate-700">
                Short notes on compliance habits, planning ideas, and common mistakes we see in the
                field.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all posts
            </Link>
          </div>
        </FadeIn>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {latestPosts.slice(0, 3).map((post, idx) => (
            <FadeIn key={post.slug} delay={idx * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {post.date}
                </p>
                <h3 className="mt-2 text-lg font-bold text-primary">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-700">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 text-sm font-semibold text-primary hover:underline"
                >
                  Read article
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl bg-primary p-8 text-white">
        <FadeIn>
          <p className="text-2xl font-bold">Talk to our team</p>
          <p className="mt-2 text-white/90">
            Share your entity type and pain points — we will propose a phased plan covering tax,
            GST, books, audit, or registrations as needed.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary"
          >
            Book consultation
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
