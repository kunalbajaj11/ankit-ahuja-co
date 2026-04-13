"use client";

import { FormEvent, useEffect, useState } from "react";
import { detailedServices } from "@/data/site";

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      source: "lead-popup" as const,
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setError(result.message ?? "Unable to send inquiry right now.");
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("Unable to send inquiry right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-primary">Book a Consultation</h3>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-2xl leading-none text-slate-500 hover:text-slate-700"
            aria-label="Close lead popup"
          >
            ×
          </button>
        </div>

        {submitted ? (
          <p className="mt-4 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-700">
            Thank you. Our team will reach out shortly.
          </p>
        ) : (
          <form onSubmit={submitLead} className="mt-4 grid gap-3">
            <input
              name="name"
              required
              placeholder="Full Name"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <input
              name="phone"
              required
              type="tel"
              placeholder="Phone Number"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <select
              name="service"
              required
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-primary"
            >
              <option value="">Select Service</option>
              {detailedServices.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-[#094b6b]"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            {error && <p className="text-sm text-red-600">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
