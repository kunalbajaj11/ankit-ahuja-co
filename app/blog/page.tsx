import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/ui/fade-in";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Latest tax updates, GST tips, and business compliance insights from Ankit Ahuja & Co.",
};

export default function BlogPage() {
  return (
    <section>
      <FadeIn>
        <h1 className="text-4xl font-bold text-primary">Insights & Updates</h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Practical guidance on tax updates, GST, and compliance for businesses.
        </p>
      </FadeIn>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, idx) => (
          <FadeIn key={post.slug} delay={idx * 0.06}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h2 className="mt-2 text-xl font-bold text-primary">{post.title}</h2>
              <p className="mt-3 text-sm text-slate-700">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Read Article →
              </Link>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
