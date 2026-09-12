import React from "react";

import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Conversations",
    whatsapp: "Handled manually",
    sandesa: "AI-assisted, always on",
  },
  {
    feature: "Follow-ups",
    whatsapp: "Remembered by people",
    sandesa: "Automated and scheduled",
  },
  {
    feature: "Lead handling",
    whatsapp: "Basic chat replies",
    sandesa: "Qualification and scoring",
  },
  {
    feature: "Visibility",
    whatsapp: "Limited insight",
    sandesa: "Full funnel analytics",
  },
  {
    feature: "Teamwork",
    whatsapp: "Individual devices",
    sandesa: "Shared inbox and workflows",
  },
];

export const Comparison = () => {
  return (
    <section
      id="comparison"
      className="w-full border-y border-[#e2e8f0] bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* ── Top Badge & Heading ── */}
        <div className="-mt-8 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2563eb] sm:px-4 sm:text-[11px]">
            COMPARISON
          </span>
        </div>

        <div className="mt-4 text-center sm:mt-5">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a1128] sm:text-4xl md:text-[42px] md:leading-[1.18]">
            WhatsApp is the channel
            <br />
            Sandesa is the system behind it
          </h2>
        </div>

        {/* ── Comparison Table Card ── */}
        <div className="mt-7 w-full overflow-x-auto rounded-[22px] border border-[#e2e8f0] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] sm:mt-10 sm:rounded-[24px]">
          <div className="min-w-[520px]">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_1.1fr_1.2fr] items-stretch border-b border-[#e2e8f0] text-center">
              <div className="bg-[#f8fafc] p-3 sm:p-3.5" />

              <div className="flex items-center justify-center bg-[#f8fafc] p-3 text-[10px] font-bold uppercase tracking-wider text-[#64748b] sm:p-3.5 sm:text-[12px]">
                <span>
                  WHATSAPP
                  <br className="sm:hidden" /> BUSINESS
                </span>
              </div>

              <div className="flex items-center justify-center bg-[#0a1128] p-3 text-[10.5px] font-bold uppercase tracking-wider text-white sm:p-3.5 sm:text-[12.5px]">
                SANDESA AI
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map(({ feature, whatsapp, sandesa }, index) => (
              <div
                key={feature}
                className={`grid grid-cols-[1fr_1.1fr_1.2fr] items-stretch text-[11px] sm:text-[13.5px] ${
                  index !== 0 ? "border-t border-[#edf2f7]" : ""
                }`}
              >
                <div className="flex items-center p-3 font-bold text-[#0a1128] sm:p-3.5 sm:px-5">
                  {feature}
                </div>

                <div className="flex items-start gap-1.5 p-3 text-[#64748b] sm:gap-2 sm:p-3.5">
                  <X
                    size={13}
                    className="mt-0.5 shrink-0 text-red-400 sm:h-[14px] sm:w-[14px]"
                    strokeWidth={2.4}
                  />
                  <span className="leading-snug">{whatsapp}</span>
                </div>

                <div className="flex items-start gap-1.5 bg-[#eff6ff]/70 p-3 font-semibold text-[#0a1128] sm:gap-2 sm:p-3.5">
                  <Check
                    size={13}
                    className="mt-0.5 shrink-0 text-[#16a34a] sm:h-[14px] sm:w-[14px]"
                    strokeWidth={2.6}
                  />
                  <span className="leading-snug">{sandesa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;