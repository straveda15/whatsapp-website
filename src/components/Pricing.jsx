import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For small teams launching their first WhatsApp journey.",
    features: [
      "1 WhatsApp number",
      "AI replies for FAQs",
      "Lead capture",
      "Basic analytics",
    ],
    recommended: false,
  },
  {
    name: "Growth",
    description: "For growing sales teams that run on conversations.",
    features: [
      "AI qualification & scoring",
      "Workflow builder",
      "Campaigns & follow-ups",
      "Team inbox (5 agents)",
    ],
    recommended: true,
  },
  {
    name: "Scale",
    description: "For multi-team operations with high volume.",
    features: [
      "Advanced routing",
      "Multi-team workspaces",
      "Custom workflows",
      "Full analytics suite",
    ],
    recommended: false,
  },
  {
    name: "Enterprise",
    description: "For organisations with custom requirements.",
    features: [
      "Custom AI training",
      "Dedicated success manager",
      "Security review",
      "Priority support",
    ],
    recommended: false,
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full bg-white py-8 px-5 sm:px-8 sm:py-10 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* ── Top Pill Badge ── */}
        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
            PRICING
          </span>
        </div>

        {/* ── Heading & Subtitle ── */}
        <div className="mt-4 text-center sm:mt-5">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a1128] sm:text-4xl md:text-[42px] md:leading-[1.18]">
            Plans that grow with
            <br />
            your conversations
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-[#64748b] sm:text-[14.5px]">
            Talk to us for pricing tailored to your team size and message volume.
          </p>
        </div>

        {/* ── 4 Pricing Cards Grid ── */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch sm:mt-11">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-[24px] bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${
                plan.recommended
                  ? "border-2 border-[#2563eb] shadow-[0_12px_36px_rgba(37,99,235,0.12)]"
                  : "border border-[#e8edf4] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              }`}
            >
              <div>
                {/* Recommended Badge */}
                {plan.recommended ? (
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-[#2563eb] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      RECOMMENDED
                    </span>
                  </div>
                ) : null}

                {/* Plan Name */}
                <h3 className="text-[17px] font-bold text-[#0a1128]">
                  {plan.name}
                </h3>

                {/* Plan Description */}
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#64748b]">
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="mt-5 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-[12.5px] text-[#334155]"
                    >
                      <Check
                        size={14}
                        className="shrink-0 text-[#16a34a]"
                        strokeWidth={2.4}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-6 pt-2">
                <a
  href="https://wa.me/919623095766"
  target="_blank"
  rel="noopener noreferrer"
  className={`inline-flex w-full items-center justify-center rounded-2xl py-2.5 text-[13px] font-semibold transition-all duration-200 active:scale-95 ${
    plan.recommended
      ? "bg-[#2563eb] text-white shadow-[0_6px_20px_rgba(37,99,235,0.30)] hover:bg-[#1d4ed8]"
      : "border border-[#e2e8f0] bg-white text-[#0a1128] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#cbd5e1] hover:bg-[#f8fafc]"
  }`}
>
  Talk to sales
</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;