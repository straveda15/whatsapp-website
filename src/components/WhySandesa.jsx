import React from "react";

import { Check } from "lucide-react";

const reasons = [
  {
    title: "Built around business outcomes",
    description: "Not message counts — leads, meetings and revenue.",
  },
  {
    title: "AI + Automation together",
    description: "Understanding and action in the same system.",
  },
  {
    title: "Human when needed",
    description: "Escalate with full conversation context.",
  },
  {
    title: "Easy to launch",
    description: "Templates and workflows ready for your industry.",
  },
  {
    title: "Built for growth",
    description: "From one number to multi-team operations.",
  },
  {
    title: "One conversation. One system.",
    description: "Marketing, sales and support in one place.",
  },
];

const WhySandesa = () => {
  return (
    <section
      id="why-sandesa"
      className="w-full border-y border-[#e8eef5] bg-[#f8fbff] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Badge */}
        <div className="mt-0 flex justify-center sm:-mt-8">
          <span className="rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-4 py-1 text-[10px] font-medium uppercase tracking-wider text-[#1d64ec] sm:text-[11px]">
            WHY SANDESA
          </span>
        </div>

        {/* ── Heading ── */}
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#0a1128] sm:text-4xl md:text-[42px] md:leading-[1.18]">
          Why teams choose Sandesa
        </h2>

        {/* Feature Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {reasons.map(({ title, description }) => (
            <div
              key={title}
              className="flex flex-col justify-start rounded-[22px] border border-[#e8eef5] bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-1 hover:border-[#dbe3ec] hover:shadow-[0_10px_28px_rgba(0,0,0,0.05)] sm:p-6"
            >
              {/* Green Check */}
              <div className="mb-3 flex items-center text-[#22c55e]">
                <Check size={17} strokeWidth={2.3} />
              </div>

              {/* Title */}
              <h3 className="text-[14px] font-semibold text-[#0f172a]">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-1.5 text-[12px] font-normal leading-[1.6] text-[#64748b]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySandesa;