import React from "react";

const outcomes = [
  {
    label: "Simple question",
    result: "AI resolves",
  },
  {
    label: "Complex request",
    result: "Human handoff",
  },
  {
    label: "High-value lead",
    result: "Sales team",
  },
];

export const HumanAI = () => {
  return (
    <section
      id="human-ai"
      className="w-full bg-white py-14 px-4 sm:py-18 sm:px-6 lg:py-24 lg:px-8 border-y border-[#e2e8f0]"
    >
      <div className="mx-auto max-w-5xl">

        {/* ── Top Pill Badge ── */}
        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
            HUMAN + AI
          </span>
        </div>

        {/* ── Heading ── */}
        <div className="mt-5 text-center">
          <h2 className="text-[28px] font-bold tracking-tight text-[#0a1128] sm:text-[36px] md:text-[42px] leading-[1.18]">
            AI when it's repetitive.
            <br />
            Humans when it matters.
          </h2>
        </div>

        {/* ── Flow Diagram (Customer -> Sandesa AI) ── */}
        <div className="mx-auto mt-10 flex max-w-[360px] flex-col items-center sm:max-w-[420px]">
          
          {/* Node 1: Customer */}
          <div className="flex h-11 w-full items-center justify-center rounded-2xl border border-[#bbf7d0] bg-[#dafbe4] text-center text-[13.5px] font-medium text-[#15803d] shadow-xs">
            Customer
          </div>

          {/* Connector Line */}
          <div className="h-5 w-[1px] bg-[#cbd5e1]" />

          {/* Node 2: Sandesa AI */}
          <div className="flex h-11 w-full items-center justify-center rounded-2xl border border-[#bfdbfe] bg-[#e6f0fd] text-center text-[13.5px] font-semibold text-[#1d4ed8] shadow-xs">
            Sandesa AI
          </div>
        </div>

        {/* ── 3 Outcome Cards (Stacked vertically on mobile, 3-Cols on tablet/desktop) ── */}
        <div className="mx-auto mt-10 grid max-w-[880px] grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {outcomes.map(({ label, result }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-[24px] border border-[#e8edf4] bg-white py-7 px-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              {/* Question / Request */}
              <p className="text-[14px] font-semibold text-[#0a1128]">
                {label}
              </p>

              {/* Arrow */}
              <span className="my-2.5 text-[16px] font-medium text-[#2563eb]">
                →
              </span>

              {/* Result Action */}
              <p className="text-[14px] font-bold text-[#2563eb]">
                {result}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HumanAI;