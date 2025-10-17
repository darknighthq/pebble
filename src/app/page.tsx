import Image from "next/image";

import { WaitlistForm } from "@/components/WaitlistForm";

const logos = [
  {
    name: "Shopify",
    logo:
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons@main/svg/shopify.svg",
  },
  {
    name: "Mailchimp",
    logo:
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons@main/svg/mailchimp.svg",
  },
  {
    name: "Zendesk",
    logo:
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons@main/svg/zendesk.svg",
  },
  {
    name: "WooCommerce",
    logo:
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons@main/svg/woocommerce.svg",
  },
];

const features = [
  {
    badge: "Customer DNA",
    title: "All your shopper context in one view",
    description:
      "Orders, support history, tracking updates, and upsell potential organized automatically so every message can be personal.",
  },
  {
    badge: "Follow-up autopilot",
    title: "Call and text workflows that actually happen",
    description:
      "Pebble nudges the right rep with the right script, then logs replies instantly. Nothing slips through the cracks.",
  },
  {
    badge: "Revenue insights",
    title: "See the ROI of every touchpoint",
    description:
      "Attribute recurring revenue back to conversations, know when to re-engage, and forecast retention with confidence.",
  },
];

const steps = [
  {
    title: "Connect your stack",
    description:
      "Bring in Shopify, Klaviyo, support tools, even spreadsheets. Pebble normalizes customer data in minutes.",
  },
  {
    title: "Design your playbooks",
    description:
      "Build drag-and-drop call and SMS flows tuned to your brand tone, then assign ownership by team or lifecycle stage.",
  },
  {
    title: "Engage and measure",
    description:
      "Launch and monitor conversations with live revenue dashboards that spotlight repeat buyers and churn risks.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(16,185,129,0.18),_transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,_rgba(129,140,248,0.18),_transparent_40%)]" />
      </div>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-28 px-6 pb-24 pt-20 sm:px-12 sm:pt-28">
        <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
            CRM for ecommerce brands
          </span>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Turn every shopper into a repeat buyer with PebbleCRM
            </h1>
            <p className="text-lg text-white/80 sm:text-xl">
              Pebble brings customer data, call playbooks, and SMS follow-ups into one workspace built for fast-growing ecommerce teams. Keep launches on track, revive churn risks, and prove the revenue impact of every conversation.
            </p>
          </div>

          <WaitlistForm />

          <div className="w-full border-t border-white/10 pt-8">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
              Connects with tools you already love
            </p>
            <div className="grid w-full grid-cols-2 items-center justify-items-center gap-6 opacity-80 sm:grid-cols-4">
              {logos.map((integration) => (
                <div
                  key={integration.name}
                  className="flex h-14 w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4"
                >
                  <Image
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    width={120}
                    height={40}
                    className="h-8 w-auto opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 sm:grid-cols-2 sm:gap-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(45,216,255,0.4)] backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200/70">
              Live activity
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Know who needs attention before they churn
            </h2>
            <p className="mt-4 text-base text-white/75">
              Pebble surfaces customers at risk with real-time signals like delivery delays, subscription stops, and abandoned carts. Your team can jump in with tailored playbooks instantly.
            </p>
            <div className="mt-8 space-y-5 text-sm text-white/80">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">
                <div>
                  <p className="font-semibold text-white">High-value VIP segment</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/70">
                    14 follow-ups due today
                  </p>
                </div>
                <span className="rounded-full bg-emerald-300/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                  +18% LTV
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">
                <div>
                  <p className="font-semibold text-white">Recharge paused orders</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-sky-200/70">
                    Script: Win-back SMS
                  </p>
                </div>
                <span className="rounded-full bg-sky-300/20 px-3 py-1 text-xs font-semibold text-sky-200">
                  43 queued
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">
                <div>
                  <p className="font-semibold text-white">Missed delivery calls</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-violet-200/70">
                    Calls auto-assigned
                  </p>
                </div>
                <span className="rounded-full bg-violet-300/20 px-3 py-1 text-xs font-semibold text-violet-200">
                  6 escalated
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                Why teams pick Pebble
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Built to scale the customer experience team
              </h2>
              <p className="text-base text-white/75">
                Stop stitching together point tools. Pebble centralizes your revenue ops, support workflows, and customer communication so your team has clarity with every interaction.
              </p>
            </div>
            <div className="grid gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200/70">
                    {feature.badge}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/75">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-10 shadow-[0_40px_90px_-50px_rgba(56,189,248,0.5)] backdrop-blur-sm sm:grid-cols-[1.1fr_1fr] sm:p-14">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
              Launch playbooks fast
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              From integration to impact in a single week
            </h2>
            <p className="text-base text-white/75">
              We built Pebble for ecommerce operators who want results quickly. Sync your store, import segments, and start running multi-channel follow-ups in days, not months.
            </p>
            <div className="grid gap-4 text-sm text-white/80">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-slate-950/80 p-8">
            <div className="absolute right-10 top-10 h-28 w-28 rounded-full bg-emerald-400/20 blur-3xl" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                Results
              </p>
              <h3 className="mt-4 text-4xl font-semibold text-white">
                38%
              </h3>
              <p className="text-sm text-white/70">
                Average increase in repeat revenue in the first 60 days after switching to Pebble.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                &ldquo;Pebble finally gives our CX and retention team the same playbook. We can see what works and scale it overnight.&rdquo;
                <div className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                  Head of retention · DTC apparel
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                &ldquo;Integrations were lightning fast. The team now knows exactly who to call and which message converts.&rdquo;
                <div className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                  Founder · Supplements brand
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-[0_40px_90px_-60px_rgba(16,185,129,0.6)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Early access invite
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Be the first to try the CRM built for modern ecommerce
          </h2>
          <p className="mt-4 text-base text-white/75">
            We are opening PebbleCRM to a small cohort of brands over the next few weeks. Join the waitlist to secure your invite and we will share updates, product walkthroughs, and launch perks.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center">
            <WaitlistForm />
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/80 py-12 text-center text-xs text-white/50">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 sm:flex-row sm:justify-between sm:text-left">
          <p className="font-semibold tracking-[0.24em] text-white/50">
            PebbleCRM
          </p>
          <p className="text-white/50">
            © {new Date().getFullYear()} Pebble Labs, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
