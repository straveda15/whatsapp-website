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
      className="w-full border-y border-[#e2e8f0] bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* ── Top Pill Badge ── */}
        <div className="mt-0 flex justify-center sm:-mt-8">
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2563eb] sm:px-4 sm:text-[11px]">
            HUMAN + AI
          </span>
        </div>

        {/* ── Heading ── */}
        <div className="mt-4 text-center sm:mt-5">
          <h2 className="text-3xl font-bold leading-[1.18] tracking-tight text-[#0a1128] sm:text-4xl md:text-[42px]">
            AI when it's repetitive
            <br />
            Humans when it matters
          </h2>
        </div>

        {/* ── Flow Diagram ── */}
        <div className="mx-auto mt-8 flex w-full max-w-[360px] flex-col items-center sm:mt-9 sm:max-w-[420px]">
          {/* Node 1: Customer */}
          <div className="flex h-10 w-full items-center justify-center rounded-2xl border border-[#bbf7d0] bg-[#dafbe4] px-3 text-center text-[13px] font-medium text-[#15803d] shadow-xs sm:text-[13.5px]">
            Customer
          </div>

          {/* Connector Line */}
          <div className="h-4 w-[1px] bg-[#cbd5e1]" />

          {/* Node 2: Sandesa AI */}
          <div className="flex h-10 w-full items-center justify-center rounded-2xl border border-[#bfdbfe] bg-[#e6f0fd] px-3 text-center text-[13px] font-semibold text-[#1d4ed8] shadow-xs sm:text-[13.5px]">
            Sandesa AI
          </div>
        </div>

        {/* ── 3 Outcome Cards ── */}
        <div className="mx-auto mt-8 grid w-full max-w-[880px] grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
          {outcomes.map(({ label, result }) => (
            <div
              key={label}
              className="flex min-h-[150px] flex-col items-center justify-center rounded-[24px] border border-[#e8edf4] bg-white px-5 py-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:min-h-[160px] sm:px-6"
            >
              {/* Question / Request */}
              <p className="text-[13.5px] font-semibold text-[#0a1128] sm:text-[14px]">
                {label}
              </p>

              {/* Arrow */}
              <span className="my-2 text-[16px] font-medium text-[#2563eb]">
                →
              </span>

              {/* Result Action */}
              <p className="text-[13.5px] font-bold text-[#2563eb] sm:text-[14px]">
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