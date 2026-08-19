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

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full border-y border-[#e8eef5] bg-[#f8fbff] px-6 py-20 sm:px-8 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* Section Badge */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-4 py-1 text-[11px] font-medium uppercase tracking-wider text-[#1d64ec]">
            PRICING
          </span>
        </div>

    

        
         {/* ── Heading ── */}
        <h2 className="text-center text-[30px] font-bold leading-[1.15] tracking-tight text-[#0f172a] sm:text-[38px] lg:text-[44px]">
                Plans that grow with
          <br />
           your conversations.
         
        </h2>

    

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-[560px] text-center text-[13.5px] font-normal leading-relaxed text-[#64748b] sm:text-[14px]">
          Talk to us for pricing tailored to your team size and message volume.
        </p>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-[22px] bg-white p-6 transition-all duration-200 hover:-translate-y-1 ${
                plan.recommended
                  ? "border-2 border-[#1d64ec] shadow-[0_12px_32px_rgba(29,100,236,0.08)]"
                  : "border border-[#e8eef5] shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-[#dbe3ec] hover:shadow-[0_10px_28px_rgba(0,0,0,0.05)]"
              }`}
            >
              <div>
                {/* Recommended Badge */}
                {plan.recommended ? (
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-[#1d64ec] px-3 py-0.5 text-[9.5px] font-semibold uppercase tracking-wider text-white">
                      RECOMMENDED
                    </span>
                  </div>
                ) : (
                  <div className="mb-3 h-[18px]" />
                )}

                {/* Plan Title */}
                <h3 className="text-[15px] font-semibold text-[#0f172a]">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="mt-1.5 min-h-[38px] text-[12px] font-normal leading-[1.5] text-[#64748b]">
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="my-5 h-px bg-[#eef2f6]" />

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 text-[12px] font-normal text-[#475569]"
                    >
                      <Check
                        size={14}
                        className="shrink-0 text-[#22c55e]"
                        strokeWidth={2.2}
                      />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <button
                  type="button"
                  className={`w-full rounded-full py-2.5 text-[12.5px] font-medium transition-all duration-200 ${
                    plan.recommended
                      ? "bg-[#1d64ec] text-white shadow-sm hover:bg-[#1554cb]"
                      : "border border-[#e2e8f0] bg-white text-[#0f172a] hover:border-[#cbd5e1] hover:bg-[#f8fafc]"
                  }`}
                >
                  Talk to sales
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;