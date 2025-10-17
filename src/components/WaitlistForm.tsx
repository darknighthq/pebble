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
      className="w-full max-w-2xl space-y-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <label className="w-full text-sm font-medium text-black">
          Email address
          <input
            name="email"
            type="email"
            placeholder="you@brand.com"
            required
            className="mt-2 w-full border-b border-black bg-transparent px-0 py-2 text-base text-black placeholder:text-neutral-400 focus:border-black focus:outline-none"
          />
        </label>
        <label className="w-full text-sm font-medium text-black sm:w-auto sm:min-w-[240px]">
          Store URL (optional)
          <input
            name="store"
            type="url"
            placeholder="https://yourstore.com"
            className="mt-2 w-full border-b border-neutral-300 bg-transparent px-0 py-2 text-base text-black placeholder:text-neutral-300 focus:border-black focus:outline-none"
          />
        </label>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex h-11 items-center justify-center border border-black bg-black px-8 text-sm font-medium text-white transition hover:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {state === "loading" ? "Joining..." : "Join waitlist"}
        </button>
        <p className="text-sm text-neutral-500">
          No spam. We'll invite a small group first.
        </p>
      </div>
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      {message && (
        <p
          className={`text-sm font-medium ${
            state === "success" ? "text-black" : "text-neutral-500"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
