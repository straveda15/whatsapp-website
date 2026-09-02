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
      className="w-full bg-white py-14 px-4 sm:py-18 sm:px-6 lg:py-24 lg:px-8 border-y border-[#e2e8f0]"
    >
      <div className="mx-auto max-w-5xl">

        {/* ── Top Badge & Heading ── */}
        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
            COMPARISON
          </span>
        </div>

        <div className="mt-5 text-center">
          <h2 className="text-[28px] font-bold leading-[1.18] tracking-tight text-[#0a1128] sm:text-[36px] md:text-[42px]">
            WhatsApp is the channel.
            <br />
            Sandesa is the system behind it.
          </h2>
        </div>

        {/* ── Comparison Table Card (Mobile & Desktop Optimized) ── */}
        <div className="mt-10 overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] sm:mt-14">

          {/* Table Header */}
          <div className="grid grid-cols-[1fr_1.1fr_1.2fr] items-stretch border-b border-[#e2e8f0] text-center">
            
            {/* Empty top-left */}
            <div className="bg-[#f8fafc] p-3 sm:p-4" />

            {/* WhatsApp Business Column Header */}
            <div className="flex items-center justify-center bg-[#f8fafc] p-3 text-[10.5px] font-bold uppercase tracking-wider text-[#64748b] sm:text-[12px] sm:p-4">
              <span>WHATSAPP<br className="sm:hidden" /> BUSINESS</span>
            </div>

            {/* Sandesa AI Column Header (Dark Navy) */}
            <div className="flex items-center justify-center bg-[#0a1128] p-3 text-[11px] font-bold uppercase tracking-wider text-white sm:text-[12.5px] sm:p-4">
              SANDESA AI
            </div>
          </div>

          {/* Table Rows */}
          {comparisonData.map(({ feature, whatsapp, sandesa }, index) => (
            <div
              key={feature}
              className={`grid grid-cols-[1fr_1.1fr_1.2fr] items-stretch text-[12px] sm:text-[13.5px] ${
                index !== 0 ? "border-t border-[#edf2f7]" : ""
              }`}
            >
              {/* Feature Name */}
              <div className="flex items-center p-3 font-bold text-[#0a1128] sm:p-4 sm:px-5">
                {feature}
              </div>

              {/* WhatsApp Business Cell */}
              <div className="flex items-start gap-1.5 p-3 text-[#64748b] sm:gap-2 sm:p-4">
                <X
                  size={14}
                  className="mt-0.5 shrink-0 text-red-400"
                  strokeWidth={2.4}
                />
                <span className="leading-snug">{whatsapp}</span>
              </div>

              {/* Sandesa AI Cell (Soft Blue Highlight Background) */}
              <div className="flex items-start gap-1.5 bg-[#eff6ff]/70 p-3 font-semibold text-[#0a1128] sm:gap-2 sm:p-4">
                <Check
                  size={14}
                  className="mt-0.5 shrink-0 text-[#16a34a]"
                  strokeWidth={2.6}
                />
                <span className="leading-snug">{sandesa}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Comparison;