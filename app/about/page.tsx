import type { Metadata } from "next";

import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ankit Ahuja & Co, our mission, and our founder-led approach to client-focused CA services.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <h1 className="text-4xl font-bold text-primary">About {siteConfig.name}</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          We are a Chartered Accountant firm focused on helping businesses manage
          taxation, audit, accounting, and compliance with confidence and clarity.
        </p>
      </FadeIn>

      <section className="grid gap-6 lg:grid-cols-2">
        <FadeIn>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-primary">Mission</h2>
            <p className="mt-3 text-slate-700">
              To deliver reliable and strategic financial guidance that helps
              clients stay compliant, optimize taxes, and grow sustainably.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-primary">Vision</h2>
            <p className="mt-3 text-slate-700">
              To be a trusted CA partner for startups, SMEs, and corporates by
              combining technical depth with responsive, client-centric support.
            </p>
          </div>
        </FadeIn>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-primary">Founders</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <FadeIn>
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Ankit Ahuja</h3>
              <p className="mt-2 text-slate-700">
                Focused on taxation, audit advisory, and practical compliance
                solutions tailored to business needs.
              </p>
            </article>
          </FadeIn>
          <FadeIn delay={0.1}>
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Anshum Ahuja</h3>
              <p className="mt-2 text-slate-700">
                Focused on client advisory, business setup support, and helping
                organizations build robust financial systems.
              </p>
            </article>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
