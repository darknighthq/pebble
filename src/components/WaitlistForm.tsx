"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = (form.get("email") as string)?.trim();

    if (!email) {
      setMessage("Please enter a valid email address.");
      setState("error");
      return;
    }

    setState("loading");
    setMessage("");

    await new Promise((resolve) => setTimeout(resolve, 900));
    setState("success");
    setMessage("Thanks! We'll be in touch soon.");
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="w-full text-sm font-medium text-white/80">
          Email
          <input
            name="email"
            type="email"
            placeholder="you@brand.com"
            required
            className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/50 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
          />
        </label>
        <label className="w-full text-sm font-medium text-white/80 sm:w-1/2">
          Store URL (optional)
          <input
            name="store"
            type="url"
            placeholder="https://yourstore.com"
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
          />
        </label>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold leading-none text-slate-900 shadow-lg shadow-slate-950/20 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:bg-white/70 disabled:text-slate-700"
        >
          {state === "loading" ? "Joining..." : "Join the waitlist"}
        </button>
        <p className="text-sm text-white/70">
          No spam. We’ll invite a small group of ecommerce founders first.
        </p>
      </div>
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      {message && (
        <p
          className={`text-sm font-medium ${
            state === "success" ? "text-emerald-300" : "text-rose-300"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

