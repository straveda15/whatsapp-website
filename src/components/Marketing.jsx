import React from "react";

import {
  SendHorizontal,
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
    name: "Diwali Offer, Baner",
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
    icon: SendHorizontal,
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
      className="w-full border-y border-[#e2e8f0] bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* ── Top Pill Badge ── */}
        <div className="mt-0 flex justify-center sm:-mt-8">
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2563eb] sm:px-4 sm:text-[11px]">
            MARKETING
          </span>
        </div>

        {/* ── Heading ── */}
        <div className="mt-4 text-center sm:mt-5">
          <h2 className="text-3xl font-bold leading-[1.18] tracking-tight text-[#0a1128] sm:text-4xl md:text-[42px]">
            Stop broadcasting
            <br className="sm:hidden" /> Start having conversations
          </h2>
        </div>

        {/* ── Step Flow Sequence ── */}
        <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {stepsRow1.map((step, index) => (
              <React.Fragment key={step}>
                <div className="flex h-9 items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white px-3 text-[11.5px] font-medium text-[#0f172a] shadow-xs sm:px-3.5 sm:text-[12.5px]">
                  {step}
                </div>

                {index < stepsRow1.length - 1 && (
                  <ArrowRight
                    size={13}
                    className="text-[#2563eb]"
                    strokeWidth={2.2}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {stepsRow2.map((step, index) => (
              <React.Fragment key={step}>
                <div className="flex h-9 items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white px-3 text-[11.5px] font-medium text-[#0f172a] shadow-xs sm:px-3.5 sm:text-[12.5px]">
                  {step}
                </div>

                {index < stepsRow2.length - 1 && (
                  <ArrowRight
                    size={13}
                    className="text-[#2563eb]"
                    strokeWidth={2.2}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── Two Column Content ── */}
        <div className="mt-8 grid w-full grid-cols-1 items-start gap-6 sm:mt-9 lg:mt-11 lg:grid-cols-2">
          {/* ── Left: Campaigns Card ── */}
          <div className="w-full min-w-0 rounded-[24px] border border-[#e8edf4] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] sm:p-7">
            {/* Header Row */}
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[15px] font-bold text-[#0a1128] sm:text-[16px]">
                Campaigns
              </h3>

              <button
                type="button"
                onClick={() => alert("New campaign button clicked!")}
                className="shrink-0 rounded-full bg-[#2563eb] px-3.5 py-1.5 text-[11px] font-medium text-white shadow-sm transition-all hover:bg-[#1d4ed8] active:scale-95 sm:px-4 sm:text-[12px]"
              >
                New campaign
              </button>
            </div>

            {/* Campaign Rows */}
            <div className="mt-4 space-y-3 sm:mt-5">
              {campaigns.map((camp) => (
                <div
                  key={camp.name}
                  className="grid grid-cols-[minmax(0,1.5fr)_0.8fr_0.8fr_auto] items-center gap-2 rounded-2xl border border-[#edf2f7] bg-white p-3 transition-all hover:border-[#cbd5e1] sm:grid-cols-[1.5fr_0.8fr_0.8fr_0.7fr] sm:gap-3 sm:p-3.5"
                >
                  {/* Name */}
                  <span className="min-w-0 truncate text-[12px] font-medium text-[#0a1128] sm:text-[13.5px]">
                    {camp.name}
                  </span>

                  {/* Sent */}
                  <span className="text-left text-[10.5px] text-slate-500 sm:text-[12px]">
                    Sent{" "}
                    <strong className="font-semibold text-slate-800">
                      {camp.sent}
                    </strong>
                  </span>

                  {/* Replies */}
                  <span className="text-left text-[10.5px] text-slate-500 sm:text-[12px]">
                    Replies{" "}
                    <strong className="font-semibold text-slate-800">
                      {camp.replies}
                    </strong>
                  </span>

                  {/* Status */}
                  <span className="justify-self-end rounded-full bg-[#eff6ff] px-2 py-0.5 text-[9.5px] font-semibold text-[#2563eb] sm:px-3 sm:text-[11px]">
                    {camp.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: 5 Feature Cards ── */}
          <div className="flex w-full min-w-0 flex-col gap-2.5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex min-w-0 items-start gap-3 rounded-2xl border border-[#e8edf4] bg-white p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] sm:gap-3.5"
              >
                {/* Icon */}
                <div className="mt-0.5 flex shrink-0 items-center justify-center text-[#2563eb]">
                  <Icon size={16} strokeWidth={2.2} />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h4 className="text-[13px] font-medium text-[#0a1128] sm:text-[13.5px]">
                    {title}
                  </h4>

                  <p className="mt-0.5 text-[11.5px] font-normal leading-relaxed text-[#64748b] sm:text-[12.5px]">
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