import React from "react";
import {
  SendHorizonal,
  Users,
  RefreshCw,
  FileSpreadsheet,
  BarChart2,
  ArrowRight,
} from "lucide-react";

// ── Step Flow sequence ──
const stepsRow1 = ["Send", "Understand", "Respond"];
const stepsRow2 = ["Qualify", "Follow Up", "Convert"];

// ── Campaign rows ──
const campaigns = [
  {
    name: "Diwali Offer — Baner",
    sent: "8,420",
    replies: "1,932",
    status: "Running",
  },
  {
    name: "Site Visit Reminder",
    sent: "2,140",
    replies: "788",
    status: "Scheduled",
  },
  {
    name: "Price Drop Alert",
    sent: "5,610",
    replies: "1,204",
    status: "Completed",
  },
];

// ── Right feature items ──
const features = [
  {
    icon: SendHorizonal,
    title: "Campaigns",
    desc: "Segmented sends that start real conversations.",
  },
  {
    icon: Users,
    title: "Segmentation",
    desc: "Target by intent, stage, location or behaviour.",
  },
  {
    icon: RefreshCw,
    title: "Automated Follow-ups",
    desc: "Scheduled nudges based on customer timeline.",
  },
  {
    icon: FileSpreadsheet,
    title: "Lead Capture",
    desc: "Every reply becomes structured lead data.",
  },
  {
    icon: BarChart2,
    title: "Analytics",
    desc: "See replies, leads and pipeline per campaign.",
  },
];

export const Marketing = () => {
  return (
    <section
      id="marketing"
      className="w-full bg-white py-8 px-5 sm:px-8 sm:py-10 lg:px-12 lg:py-14 border-y border-[#e2e8f0]"
    >
      <div className="mx-auto max-w-6xl">

        {/* ── Top Pill Badge ── */}
        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
            MARKETING
          </span>
        </div>

        {/* ── Heading ── */}
        <div className="mt-4 text-center sm:mt-5">
          <h2 className="text-[28px] font-bold tracking-tight text-[#0a1128] sm:text-[36px] md:text-[42px] leading-[1.18]">
            Stop broadcasting. Start
            <br />
            having conversations.
          </h2>
        </div>

        {/* ── Step Flow Sequence ── */}
        <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center">
          
          {/* Row 1 */}
          <div className="flex items-center gap-2">
            {stepsRow1.map((step) => (
              <React.Fragment key={step}>
                <div className="flex h-9 items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white px-3.5 text-[12.5px] font-medium text-[#0f172a] shadow-xs">
                  {step}
                </div>
                <ArrowRight size={13} className="text-[#2563eb]" strokeWidth={2.2} />
              </React.Fragment>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-2">
            {stepsRow2.map((step, i) => (
              <React.Fragment key={step}>
                <div className="flex h-9 items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white px-3.5 text-[12.5px] font-medium text-[#0f172a] shadow-xs">
                  {step}
                </div>
                {i < stepsRow2.length - 1 && (
                  <ArrowRight size={13} className="text-[#2563eb]" strokeWidth={2.2} />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

        {/* ── Two Column Content ── */}
        <div className="mt-9 grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:mt-11">

          {/* ── Left: Campaigns Card ── */}
          <div className="rounded-[24px] border border-[#e8edf4] bg-white p-5 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
            
            {/* Header Row */}
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-bold text-[#0a1128]">
                Campaigns
              </h3>

              <button
  type="button"
  onClick={() => alert("New campaign button clicked!")}
  className="rounded-full bg-[#2563eb] px-4 py-1.5 text-[12px] font-medium text-white shadow-sm transition-all hover:bg-[#1d4ed8] active:scale-95"
>
  New campaign
</button>
            </div>

            {/* Campaign Rows */}
            <div className="mt-4 space-y-3 sm:mt-5">
              {campaigns.map((camp) => (
                <div
                  key={camp.name}
                  className="flex flex-col gap-2 rounded-2xl border border-[#edf2f7] bg-white p-3.5 transition-all hover:border-[#cbd5e1] sm:flex-row sm:items-center sm:justify-between"
                >
                  {/* Name */}
                  <span className="text-[13.5px] font-medium text-[#0a1128]">
                    {camp.name}
                  </span>

                  {/* Sent & Replies stats */}
                  <div className="flex items-center justify-between gap-4 text-[12px] text-slate-500 sm:justify-start">
                    <span>Sent <strong className="font-semibold text-slate-800">{camp.sent}</strong></span>
                    <span>Replies <strong className="font-semibold text-slate-800">{camp.replies}</strong></span>
                  </div>

                  {/* Status pill */}
                  <span className="w-fit rounded-full bg-[#eff6ff] px-3 py-0.5 text-[11px] font-semibold text-[#2563eb]">
                    {camp.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: 5 Feature Cards ── */}
          <div className="flex flex-col gap-2.5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-3.5 rounded-2xl border border-[#e8edf4] bg-white p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)]"
              >
                {/* Icon */}
                <div className="mt-0.5 flex shrink-0 items-center justify-center text-[#2563eb]">
                  <Icon size={17} strokeWidth={2.2} />
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-[13.5px] font-medium text-[#0a1128]">
                    {title}
                  </h4>

                  <p className="mt-0.5 text-[12.5px] font-normal leading-relaxed text-[#64748b]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Marketing;