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
      className="w-full max-w-2xl"
      aria-label="Join waitlist form"
    >
      <div className="mb-6 flex flex-col gap-5">
        <div className="w-full">
          <label htmlFor="email" className="block text-sm font-medium text-black">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@brand.com"
            required
            aria-required="true"
            className="mt-2 w-full border-2 border-black bg-white px-4 py-3 text-lg text-black placeholder:text-neutral-400 transition focus:border-black focus:outline-none focus:ring-0"
          />
        </div>
        <div className="w-full">
          <label htmlFor="store" className="block text-sm font-medium text-black">
            Store URL <span className="text-neutral-500">(optional)</span>
          </label>
          <input
            id="store"
            name="store"
            type="url"
            placeholder="https://yourstore.com"
            aria-required="false"
            className="mt-2 w-full border border-neutral-300 bg-white px-4 py-3 text-lg text-black placeholder:text-neutral-400 transition focus:border-black focus:outline-none focus:ring-0"
          />
        </div>
      </div>
      
      <button
        type="submit"
        disabled={state === "loading"}
        aria-busy={state === "loading"}
        className="mb-4 inline-flex h-14 w-full items-center justify-center border-2 border-black bg-black px-8 text-base font-medium tracking-wide text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-[200px]"
      >
        {state === "loading" ? "Joining..." : "Join waitlist"}
      </button>
      
      <p className="text-sm leading-relaxed text-neutral-600">
        No spam. We'll invite a small group of ecommerce founders first.
      </p>
      
      <input 
        type="text" 
        name="company" 
        className="hidden" 
        tabIndex={-1} 
        autoComplete="off"
        aria-hidden="true"
      />
      
      {message && (
        <p
          role={state === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`mt-4 text-sm font-medium ${
            state === "success" ? "text-black" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
