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
      <div className="mb-5 flex flex-col gap-4 sm:mb-6 sm:gap-5">
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="email" className="text-sm font-medium text-neutral-500">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@email.com"
            required
            aria-required="true"
            className="w-full border-2 border-black bg-white px-4 py-3.5 text-base text-black placeholder:text-neutral-400 transition focus:border-black focus:outline-none focus:ring-0 sm:text-lg"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="store" className="text-sm font-medium text-neutral-500">
            Store URL <span className="text-neutral-400">(optional)</span>
          </label>
          <input
            id="store"
            name="store"
            type="url"
            placeholder="https://yourstore.com"
            aria-required="false"
            className="w-full border border-neutral-300 bg-white px-4 py-3.5 text-base text-black placeholder:text-neutral-400 transition focus:border-black focus:outline-none focus:ring-0 sm:text-lg"
          />
        </div>
      </div>
      
      <button
        type="submit"
        disabled={state === "loading"}
        aria-busy={state === "loading"}
        className="mb-3 inline-flex h-12 w-full items-center justify-center border-2 border-black bg-black px-8 text-[15px] font-medium tracking-wide text-white transition active:scale-[0.98] hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50 sm:mb-4 sm:h-14 sm:w-auto sm:min-w-[200px] sm:text-base"
      >
        {state === "loading" ? "Joining..." : "Join waitlist"}
      </button>
      
      <p className="text-sm leading-relaxed text-neutral-600">
        No spam. We&apos;ll invite a small group of ecommerce founders first.
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
