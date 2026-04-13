import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative h-12 w-16 overflow-hidden rounded-md border border-primary/20 bg-white p-1">
        <Image
          src="/images/logo-transparent.png"
          alt={`${siteConfig.name} logo`}
          fill
          className="object-contain"
          sizes="64px"
          priority
        />
      </div>
      <div>
        <p className="text-lg font-bold text-primary">{siteConfig.name}</p>
        <p className="text-xs uppercase tracking-wider text-accent">
          {siteConfig.tagline}
        </p>
      </div>
    </Link>
  );
}
