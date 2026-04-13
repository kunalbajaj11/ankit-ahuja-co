import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/ui/fade-in";
import { detailedServices } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore taxation, GST, audit, accounting, compliance, and startup advisory services by Ankit Ahuja & Co.",
};

export default function ServicesPage() {
  return (
    <section>
      <FadeIn>
        <h1 className="text-4xl font-bold text-primary">Our Services</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Structured chartered accountancy services designed to reduce compliance
          stress, improve financial clarity, and support business growth.
        </p>
      </FadeIn>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {detailedServices.map((service, idx) => (
          <FadeIn key={service.title} delay={idx * 0.06}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-primary">{service.title}</h2>
              <p className="mt-3 text-slate-700">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {service.benefits.map((benefit) => (
                  <li key={benefit}>• {benefit}</li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-[#094b6b]"
              >
                Discuss This Service
              </Link>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
