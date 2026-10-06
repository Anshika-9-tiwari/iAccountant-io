"use client";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-base-100 border border-base-300 rounded-3xl p-10 text-center">
        <CheckCircle2 className="mx-auto text-primary mb-4" size={48} />
        <h3 className="font-display text-2xl font-bold text-secondary mb-2">
          Message sent!
        </h3>
        <p className="text-secondary/60 mb-6">
          Thanks for reaching out. Our team will get back to you within 4 business hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn btn-outline btn-primary rounded-full px-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="flex items-center gap-2 bg-error/10 text-error rounded-xl p-4 text-sm">
          <AlertCircle size={18} /> {errorMsg}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="label">
            <span className="label-text font-semibold text-secondary">
              Full Name <span className="text-error">*</span>
            </span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="John Smith"
            className="input input-bordered w-full rounded-xl bg-base-200 focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text font-semibold text-secondary">
              Email <span className="text-error">*</span>
            </span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="john@company.com"
            className="input input-bordered w-full rounded-xl bg-base-200 focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="label">
            <span className="label-text font-semibold text-secondary">Phone</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="input input-bordered w-full rounded-xl bg-base-200 focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text font-semibold text-secondary">Company</span>
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Acme Inc."
            className="input input-bordered w-full rounded-xl bg-base-200 focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="label">
          <span className="label-text font-semibold text-secondary">
            Message <span className="text-error">*</span>
          </span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your business and what you need help with..."
          className="textarea textarea-bordered w-full rounded-xl bg-base-200 focus:border-primary focus:outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary rounded-full px-8 text-white"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}