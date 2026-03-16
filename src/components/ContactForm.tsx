"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (error: unknown) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to submit. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="font-heading text-lg font-semibold text-green-900">
          Thank you for reaching out
        </h3>
        <p className="mt-2 text-sm text-green-700">
          We&apos;ll review your message and get back to you within one business
          day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-600 underline hover:text-green-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
      {status === "error" && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-grey-accent/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-grey-accent/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-navy"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-grey-accent/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-navy"
          >
            What do you need built? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe the product, platform, or system you need. Include any constraints like timeline, budget, or tech preferences."
            className="mt-2 block w-full rounded-md border border-navy/20 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-grey-accent/50 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>

        <p className="text-center text-xs text-grey-accent">
          By submitting this form, you agree to our{" "}
          <a href="/privacy" className="underline hover:text-navy">
            privacy policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}
