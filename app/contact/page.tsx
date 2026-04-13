import type { Metadata } from "next";

import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ankit Ahuja & Co for tax filing, GST support, audit, compliance, and advisory services.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(siteConfig.address);

  return (
    <section>
      <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        Let us know your requirement and our CA team will connect with you.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <ContactForm />

        <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-primary">Direct Contact</h2>
          <p className="text-slate-700">
            <span className="font-semibold">Ankit Ahuja:</span>{" "}
            <a href={`tel:${siteConfig.contacts.ankit.phone}`} className="text-primary">
              {siteConfig.contacts.ankit.phone}
            </a>
          </p>
          <p className="text-slate-700">
            <span className="font-semibold">Anshum Ahuja:</span>{" "}
            <a href={`tel:${siteConfig.contacts.anshum.phone}`} className="text-primary">
              {siteConfig.contacts.anshum.phone}
            </a>
          </p>
          {siteConfig.contacts.emails.map((email) => (
            <p key={email}>
              <a href={`mailto:${email}`} className="text-primary">
                {email}
              </a>
            </p>
          ))}
          <p className="text-slate-700">{siteConfig.address}</p>

          <a
            href={`https://wa.me/${siteConfig.contacts.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Chat on WhatsApp
          </a>

          <iframe
            title="Google Map"
            loading="lazy"
            className="mt-4 h-64 w-full rounded-lg border border-slate-200"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          />
        </div>
      </div>
    </section>
  );
}
