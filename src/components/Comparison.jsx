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

const Comparison = () => {
  return (
    <section className="w-full bg-[#f8fbff] px-6 py-20 sm:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-[1100px]">

        {/* ── Top Pill Badge ── */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-4 py-1 text-[11px] font-medium uppercase tracking-wider text-[#1d64ec]">
            COMPARISON
          </span>
        </div>

        {/* ── Heading (Reduced Font Weight) ── */}
        <h2 className="text-center text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.15] tracking-tight text-[#0f172a]">
          WhatsApp is the channel.
          <br />
          Sandesa is the system behind it.
        </h2>

        {/* ── Comparison Table Card ── */}
        <div className="mt-14 overflow-hidden rounded-[26px] border border-[#eef2f6] bg-white shadow-[0_10px_35px_rgba(15,23,42,0.03)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#f1f5f9]">
                  <th className="py-4 px-6 sm:px-8 w-[24%]" />
                  <th className="py-4 px-6 sm:px-8 w-[38%] text-[11.5px] font-bold uppercase tracking-wider text-slate-500">
                    WHATSAPP BUSINESS
                  </th>
                  <th className="py-4 px-6 sm:px-8 w-[38%] bg-[#0d1627] text-[11.5px] font-bold uppercase tracking-wider text-white">
                    SANDESA AI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f8fafc]">
                {comparisonData.map(({ feature, whatsapp, sandesa }) => (
                  <tr key={feature} className="transition-colors hover:bg-slate-50/40">
                    {/* Feature Label */}
                    <td className="py-4 px-6 sm:px-8 text-[13.5px] font-bold text-[#0f172a]">
                      {feature}
                    </td>

                    {/* WhatsApp Business Column */}
                    <td className="py-4 px-6 sm:px-8">
                      <div className="flex items-center gap-2 text-[12.5px] sm:text-[13px] text-[#64748b]">
                        <X size={14} className="text-[#ef4444] shrink-0 stroke-[2.5]" />
                        <span>{whatsapp}</span>
                      </div>
                    </td>

                    {/* Sandesa AI Column */}
                    <td className="py-4 px-6 sm:px-8 bg-[#f8fbff]/80">
                      <div className="flex items-center gap-2 text-[12.5px] sm:text-[13px] font-semibold text-[#0f172a]">
                        <Check size={14} className="text-[#22c55e] shrink-0 stroke-[2.5]" />
                        <span>{sandesa}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Comparison;