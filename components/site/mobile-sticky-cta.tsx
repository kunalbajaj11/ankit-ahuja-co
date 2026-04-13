import { siteConfig } from "@/data/site";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white p-3 sm:hidden">
      <a
        href={`tel:${siteConfig.contacts.ankit.phone}`}
        className="rounded-full border border-primary px-4 py-2 text-center text-sm font-semibold text-primary"
      >
        Call Now
      </a>
      <a
        href={`https://wa.me/${siteConfig.contacts.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white"
      >
        Book Consultation
      </a>
    </div>
  );
}
