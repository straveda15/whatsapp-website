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

const HumanAI = () => {
  return (
    <section
      id="human-ai"
      className="w-full bg-[#f8fbff] px-6 py-20 sm:px-8 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* ================= SECTION DIVIDER ================= */}
        <div className="mb-16 h-px w-full bg-[#e2e8f0]" />

        <div className="mx-auto max-w-[1100px]">

          {/* ================= TOP PILL ================= */}
          <div className="mb-6 flex justify-center">
            <span className="rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-4 py-1 text-[11px] font-medium uppercase tracking-wider text-[#1d64ec]">
              HUMAN + AI
            </span>
          </div>


    {/* ── Heading ── */}
        <h2 className="text-center text-[30px] font-bold leading-[1.15] tracking-tight text-[#0f172a] sm:text-[38px] lg:text-[44px]">
            AI when it's repetitive.
          <br />
         Humans when it matters.
         
        </h2>


          {/* ================= FLOW DIAGRAM ================= */}
          <div className="mx-auto mt-14 flex max-w-[440px] flex-col items-center">

            {/* Customer */}
            <div className="flex h-[46px] w-full items-center justify-center rounded-[18px] border border-[#bbf7d0] bg-[#dcfce7] px-6 text-[13px] font-medium text-[#15803d] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              Customer
            </div>

            {/* Connector */}
            <div className="h-[26px] w-px bg-[#cbd5e1]" />

            {/* Sandesa AI */}
            <div className="flex h-[46px] w-full items-center justify-center rounded-[18px] border border-[#bfdbfe] bg-[#ebf3fe] px-6 text-[13px] font-semibold text-[#1d64ec] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              Sandesa AI
            </div>
          </div>

          {/* ================= OUTCOME CARDS ================= */}
          <div className="mx-auto mt-12 grid max-w-[960px] grid-cols-1 gap-5 sm:grid-cols-3">
            {outcomes.map(({ label, result }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-[24px] border border-[#eef2f6] bg-white px-6 py-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
              >
                <p className="text-[13px] font-normal text-[#475569]">
                  {label}
                </p>

                <span className="my-2.5 text-[15px] font-medium text-[#1d64ec]">
                  →
                </span>

                <p className="text-[13.5px] font-semibold text-[#1d64ec]">
                  {result}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HumanAI;