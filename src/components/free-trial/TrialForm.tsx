"use client";
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building2,
  User,
  ClipboardCheck,
} from "lucide-react";

const SERVICE_OPTIONS = [
  { id: "bookkeeping", label: "Bookkeeping" },
  { id: "accounts-payable-receivable", label: "Accounts Payable & Receivable" },
  { id: "tax-preparation", label: "Tax Preparation" },
  { id: "account-compilation", label: "Account Compilation" },
];

const EMPLOYEE_OPTIONS = [
  "1 – 5",
  "6 – 20",
  "21 – 50",
  "51 – 200",
  "200+",
];

export default function TrialForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    servicesNeeded: [] as string[],
    employeeCount: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (field: string, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (id: string) => {
    setForm((prev) => ({
      ...prev,
      servicesNeeded: prev.servicesNeeded.includes(id)
        ? prev.servicesNeeded.filter((s) => s !== id)
        : [...prev.servicesNeeded, id],
    }));
  };

  const canProceed = () => {
    if (step === 1) return form.fullName && form.email;
    if (step === 2) return form.companyName;
    if (step === 3) return form.servicesNeeded.length > 0;
    return false;
  };

  const handleSubmit = async () => {
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/free-trial", {
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
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  // Success state
  if (status === "success") {
    return (
      <div className="bg-base-100 border border-base-300 rounded-3xl p-12 text-center max-w-lg mx-auto">
        <CheckCircle2 className="mx-auto text-primary mb-4" size={56} />
        <h3 className="font-display text-3xl font-bold text-secondary mb-3">
          You're in! 🎉
        </h3>
        <p className="text-secondary/60 mb-2">
          Welcome to iAccountant.io, <strong>{form.fullName.split(" ")[0]}</strong>.
        </p>
        <p className="text-secondary/60 mb-8">
          Check your inbox at <strong>{form.email}</strong> for next steps.
          Your onboarding specialist will reach out within 24 hours.
        </p>
        <a href="/" className="btn btn-primary rounded-full px-6 text-white">
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all
              ${
                s < step
                  ? "bg-primary text-white"
                  : s === step
                  ? "bg-primary text-white ring-4 ring-primary/20"
                  : "bg-base-300 text-secondary/40"
              }`}
            >
              {s < step ? <CheckCircle2 size={18} /> : s}
            </div>
            {s < 3 && (
              <div
                className={`w-16 h-[2px] transition-colors ${
                  s < step ? "bg-primary" : "bg-base-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="bg-base-100 border border-base-300 rounded-3xl p-8 md:p-10">
        {status === "error" && (
          <div className="flex items-center gap-2 bg-error/10 text-error rounded-xl p-4 text-sm mb-6">
            <AlertCircle size={18} /> {errorMsg}
          </div>
        )}

        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div className="animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-primary" size={22} />
              <h3 className="font-display text-2xl font-bold text-secondary">
                Tell us about yourself
              </h3>
            </div>

            <div className="space-y-5">
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-secondary">
                    Full Name <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  placeholder="Jane Doe"
                  className="input input-bordered w-full rounded-xl bg-base-200 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-secondary">
                    Work Email <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="jane@company.com"
                  className="input input-bordered w-full rounded-xl bg-base-200 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-secondary">Phone</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="input input-bordered w-full rounded-xl bg-base-200 focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Company Info */}
        {step === 2 && (
          <div className="animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-primary" size={22} />
              <h3 className="font-display text-2xl font-bold text-secondary">
                About your business
              </h3>
            </div>

            <div className="space-y-5">
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-secondary">
                    Company Name <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  value={form.companyName}
                  onChange={(e) => update("companyName", e.target.value)}
                  placeholder="Acme Inc."
                  className="input input-bordered w-full rounded-xl bg-base-200 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-secondary">
                    Number of Employees
                  </span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {EMPLOYEE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => update("employeeCount", opt)}
                      className={`btn btn-sm rounded-full transition-all ${
                        form.employeeCount === opt
                          ? "btn-primary text-white"
                          : "btn-outline border-base-300"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Services */}
        {step === 3 && (
          <div className="animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardCheck className="text-primary" size={22} />
              <h3 className="font-display text-2xl font-bold text-secondary">
                What do you need help with?
              </h3>
            </div>
            <p className="text-secondary/60 mb-6">
              Select all that apply. You can always add more services later.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICE_OPTIONS.map((svc) => {
                const selected = form.servicesNeeded.includes(svc.id);
                return (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => toggleService(svc.id)}
                    className={`p-5 rounded-2xl border text-left transition-all ${
                      selected
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-base-300 bg-base-200 hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          selected
                            ? "border-primary bg-primary"
                            : "border-base-300"
                        }`}
                      >
                        {selected && <CheckCircle2 size={14} className="text-white" />}
                      </div>
                      <span
                        className={`font-semibold text-sm ${
                          selected ? "text-primary" : "text-secondary"
                        }`}
                      >
                        {svc.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-base-300">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="btn btn-ghost rounded-full gap-1"
            >
              <ArrowLeft size={16} /> Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
              className="btn btn-primary rounded-full px-6 text-white disabled:opacity-40"
            >
              Continue <ArrowRight size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canProceed() || status === "loading"}
              className="btn btn-primary rounded-full px-8 text-white disabled:opacity-40"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Creating your trial...
                </>
              ) : (
                <>
                  Start My Free Trial <ArrowRight size={16} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}