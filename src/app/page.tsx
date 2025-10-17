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
      <main className="mx-auto max-w-5xl px-6 pb-32 pt-24 sm:px-12">
        {/* Hero Section */}
        <section className="mb-48 flex flex-col items-center text-center">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-neutral-500">
            CRM for ecommerce brands
          </p>
          
          <h1 className="mb-8 max-w-3xl text-5xl font-light leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
            Turn every shopper into a repeat buyer with PebbleCRM
          </h1>
          
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
            Pebble brings customer data, call playbooks, and SMS follow-ups into one workspace built for fast-growing ecommerce teams. Keep launches on track, revive churn risks, and prove the revenue impact of every conversation.
          </p>

          <WaitlistForm />

          <div className="mt-24 w-full border-t border-neutral-200 pt-16">
            <p className="mb-12 text-xs uppercase tracking-[0.3em] text-neutral-400">
              Connects with tools you already love
            </p>
            <div className="grid w-full grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-4">
              {logos.map((integration) => (
                <div
                  key={integration.name}
                  className="flex h-16 w-full items-center justify-center grayscale opacity-40 transition hover:opacity-60"
                >
                  <Image
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-48 grid gap-20 sm:grid-cols-2 sm:gap-16">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
              Live activity
            </p>
            <h2 className="mb-6 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Know who needs attention before they churn
            </h2>
            <p className="mb-12 text-base leading-relaxed text-neutral-600">
              Pebble surfaces customers at risk with real-time signals like delivery delays, subscription stops, and abandoned carts. Your team can jump in with tailored playbooks instantly.
            </p>
            <div className="space-y-6 border-l border-neutral-200 pl-6">
              <div>
                <p className="text-sm font-medium text-black">High-value VIP segment</p>
                <p className="mt-1 text-xs uppercase tracking-[0.28em] text-neutral-400">
                  14 follow-ups due today
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-black">Recharge paused orders</p>
                <p className="mt-1 text-xs uppercase tracking-[0.28em] text-neutral-400">
                  Script: Win-back SMS
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-black">Missed delivery calls</p>
                <p className="mt-1 text-xs uppercase tracking-[0.28em] text-neutral-400">
                  Calls auto-assigned
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
              Why teams pick Pebble
            </p>
            <h2 className="mb-6 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Built to scale the customer experience team
            </h2>
            <p className="mb-12 text-base leading-relaxed text-neutral-600">
              Stop stitching together point tools. Pebble centralizes your revenue ops, support workflows, and customer communication so your team has clarity with every interaction.
            </p>
            <div className="space-y-10">
              {features.map((feature) => (
                <div key={feature.title}>
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-400">
                    {feature.badge}
                  </p>
                  <h3 className="mb-3 text-lg font-medium text-black">
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
        <section className="mb-48 grid gap-16 sm:grid-cols-[1fr_1.2fr] sm:gap-20">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
              Launch playbooks fast
            </p>
            <h2 className="mb-6 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              From integration to impact in a single week
            </h2>
            <p className="text-base leading-relaxed text-neutral-600">
              We built Pebble for ecommerce operators who want results quickly. Sync your store, import segments, and start running multi-channel follow-ups in days, not months.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-6">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-black text-sm font-medium">
                  {index + 1}
                </span>
                <div className="pt-1">
                  <h3 className="mb-2 text-base font-medium text-black">
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
        <section className="border-t border-neutral-200 pt-20 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
            Early access invite
          </p>
          <h2 className="mb-6 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
            Be the first to try the CRM built for modern ecommerce
          </h2>
          <p className="mb-12 text-base leading-relaxed text-neutral-600">
            We are opening PebbleCRM to a small cohort of brands over the next few weeks. Join the waitlist to secure your invite and we will share updates, product walkthroughs, and launch perks.
          </p>
          <div className="flex flex-col items-center justify-center">
            <WaitlistForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 py-12 text-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-xs text-neutral-400 sm:flex-row sm:justify-between sm:text-left">
          <p className="font-medium tracking-[0.24em]">
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
