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
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 sm:pb-32 sm:pt-24 lg:px-12">
        {/* Hero Section */}
        <section className="mb-24 flex flex-col items-center text-center sm:mb-48">
          <p className="mb-6 text-[11px] uppercase tracking-[0.25em] text-neutral-500 sm:mb-8 sm:text-xs sm:tracking-[0.3em]">
            CRM for ecommerce brands
          </p>
          
          <h1 className="mb-6 max-w-3xl text-[2.25rem] font-light leading-[1.15] tracking-tight sm:mb-8 sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-7xl">
            Turn every shopper into a repeat buyer with PebbleCRM
          </h1>
          
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-neutral-600 sm:mb-16 sm:text-lg lg:text-xl">
            Pebble brings customer data, call playbooks, and SMS follow-ups into one workspace built for fast-growing ecommerce teams. Keep launches on track, revive churn risks, and prove the revenue impact of every conversation.
          </p>

          <WaitlistForm />

          <div className="mt-16 w-full border-t border-neutral-200 pt-12 sm:mt-24 sm:pt-16">
            <p className="mb-8 text-[11px] uppercase tracking-[0.25em] text-neutral-400 sm:mb-12 sm:text-xs sm:tracking-[0.3em]">
              Connects with tools you already love
            </p>
            <div className="grid w-full grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-4 sm:gap-8">
              {logos.map((integration) => (
                <div
                  key={integration.name}
                  className="flex h-14 w-full items-center justify-center opacity-80 transition hover:opacity-100 sm:h-16"
                >
                  <Image
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    width={120}
                    height={40}
                    className="h-7 w-auto sm:h-8"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-24 grid gap-16 sm:mb-48 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-neutral-400 sm:mb-4 sm:text-xs sm:tracking-[0.3em]">
              Live activity
            </p>
            <h2 className="mb-4 text-2xl font-light leading-tight tracking-tight sm:mb-6 sm:text-3xl lg:text-4xl">
              Know who needs attention before they churn
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-neutral-600 sm:mb-12 sm:text-base">
              Pebble surfaces customers at risk with real-time signals like delivery delays, subscription stops, and abandoned carts. Your team can jump in with tailored playbooks instantly.
            </p>
            <div className="space-y-5 border-l border-neutral-200 pl-5 sm:space-y-6 sm:pl-6">
              <div>
                <p className="text-sm font-medium text-black sm:text-base">High-value VIP segment</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-neutral-400 sm:text-xs sm:tracking-[0.28em]">
                  14 follow-ups due today
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-black sm:text-base">Recharge paused orders</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-neutral-400 sm:text-xs sm:tracking-[0.28em]">
                  Script: Win-back SMS
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-black sm:text-base">Missed delivery calls</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-neutral-400 sm:text-xs sm:tracking-[0.28em]">
                  Calls auto-assigned
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-neutral-400 sm:mb-4 sm:text-xs sm:tracking-[0.3em]">
              Why teams pick Pebble
            </p>
            <h2 className="mb-4 text-2xl font-light leading-tight tracking-tight sm:mb-6 sm:text-3xl lg:text-4xl">
              Built to scale the customer experience team
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-neutral-600 sm:mb-12 sm:text-base">
              Stop stitching together point tools. Pebble centralizes your revenue ops, support workflows, and customer communication so your team has clarity with every interaction.
            </p>
            <div className="space-y-8 sm:space-y-10">
              {features.map((feature) => (
                <div key={feature.title}>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-neutral-400 sm:text-xs sm:tracking-[0.3em]">
                    {feature.badge}
                  </p>
                  <h3 className="mb-2 text-base font-medium text-black sm:mb-3 sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="mb-24 grid gap-12 sm:mb-48 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-neutral-400 sm:mb-4 sm:text-xs sm:tracking-[0.3em]">
              Launch playbooks fast
            </p>
            <h2 className="mb-4 text-2xl font-light leading-tight tracking-tight sm:mb-6 sm:text-3xl lg:text-4xl">
              From integration to impact in a single week
            </h2>
            <p className="text-[15px] leading-relaxed text-neutral-600 sm:text-base">
              We built Pebble for ecommerce operators who want results quickly. Sync your store, import segments, and start running multi-channel follow-ups in days, not months.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-4 sm:gap-6">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-black text-sm font-medium sm:h-10 sm:w-10">
                  {index + 1}
                </span>
                <div className="pt-0.5 sm:pt-1">
                  <h3 className="mb-1.5 text-[15px] font-medium text-black sm:mb-2 sm:text-base">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-neutral-200 pt-12 text-center sm:pt-20">
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-neutral-400 sm:mb-4 sm:text-xs sm:tracking-[0.3em]">
            Early access invite
          </p>
          <h2 className="mb-4 text-2xl font-light leading-tight tracking-tight sm:mb-6 sm:text-3xl lg:text-4xl">
            Be the first to try the CRM built for modern ecommerce
          </h2>
          <p className="mb-10 text-[15px] leading-relaxed text-neutral-600 sm:mb-12 sm:text-base">
            We are opening PebbleCRM to a small cohort of brands over the next few weeks. Join the waitlist to secure your invite and we will share updates, product walkthroughs, and launch perks.
          </p>
          <div className="flex flex-col items-center justify-center">
            <WaitlistForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 py-8 text-center sm:py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 text-[11px] text-neutral-400 sm:flex-row sm:justify-between sm:gap-3 sm:px-6 sm:text-xs sm:text-left">
          <p className="font-medium tracking-[0.2em] sm:tracking-[0.24em]">
            PEBBLECRM
          </p>
          <p>
            © {new Date().getFullYear()} Pebble Labs, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
