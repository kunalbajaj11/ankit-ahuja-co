"use client";

import { FormEvent, useState } from "react";

import { detailedServices } from "@/data/site";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    setIsError(false);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      source: "contact-page" as const,
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus(result.message ?? "Unable to send your request. Please try again.");
        setIsError(true);
        return;
      }

      setStatus("Your request has been sent successfully. We will contact you shortly.");
      setIsError(false);
      form.reset();
    } catch {
      setStatus("Unable to send your request. Please try again.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Name"
          className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-primary"
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone"
          className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-primary"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-primary sm:col-span-2"
        />
        <select
          name="service"
          required
          className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-primary sm:col-span-2"
        >
          <option value="">Select Service</option>
          {detailedServices.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your requirement"
          className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-primary sm:col-span-2"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 rounded-lg bg-primary px-5 py-2.5 font-semibold text-white hover:bg-[#094b6b]"
      >
        {isSubmitting ? "Sending..." : "Submit Inquiry"}
      </button>
      {status && (
        <p className={`mt-3 text-sm ${isError ? "text-red-600" : "text-emerald-700"}`}>
          {status}
        </p>
      )}
    </form>
  );
}
