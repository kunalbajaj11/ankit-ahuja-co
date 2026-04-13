import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts, siteConfig } from "@/data/site";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) {
    return { title: "Article Not Found" };
  }
  return {
    title: post.title,
    description: post.excerpt,
    keywords: siteConfig.seoKeywords,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
        {new Date(post.date).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </p>
      <h1 className="mt-2 text-4xl font-bold text-primary">{post.title}</h1>
      <p className="mt-6 leading-8 text-slate-700">{post.content}</p>
      <Link href="/blog" className="mt-8 inline-flex text-sm font-semibold text-primary">
        ← Back to Blog
      </Link>
    </article>
  );
}
