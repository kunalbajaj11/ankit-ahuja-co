import { siteConfig } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${siteConfig.contacts.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-4 z-40 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 sm:bottom-6"
    >
      WhatsApp
    </a>
  );
}
