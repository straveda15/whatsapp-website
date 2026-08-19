import React from "react";
import {
  Send,
  Users,
  RotateCw,
  FileSpreadsheet,
  BarChart2,
  ArrowRight,
} from "lucide-react";

// ── Step Flow sequence ──
const steps = [
  "Send",
  "Understand",
  "Respond",
  "Qualify",
  "Follow Up",
  "Convert",
];

// ── Campaign rows ──
const campaigns = [
  {
    name: "Diwali Offer — Baner",
    sent: "Sent 8,420",
    replies: "Replies 1,932",
    status: "Running",
  },
  {
    name: "Site Visit Reminder",
    sent: "Sent 2,140",
    replies: "Replies 788",
    status: "Scheduled",
  },
  {
    name: "Price Drop Alert",
    sent: "Sent 5,610",
    replies: "Replies 1,204",
    status: "Completed",
  },
];

// ── Right feature items ──
const features = [
  {
    icon: Send,
    title: "Campaigns",
    desc: "Segmented sends that start real conversations.",
  },
  {
    icon: Users,
    title: "Segmentation",
    desc: "Target by intent, stage, location or behaviour.",
  },
  {
    icon: RotateCw,
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

const Marketing = () => {
  return (
    <section
      id="marketing"
      className="relative w-full bg-[#f8fbff] px-6 py-20 sm:px-8 lg:px-14 lg:py-24"
    >
      {/* ── Section Top Line ── */}
      <div className="absolute left-0 top-0 w-full border-t border-[#e2e8f0]" />

      <div className="mx-auto max-w-[1240px]">

        {/* ── Top Pill Badge ── */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-4 py-1 text-[11px] font-medium uppercase tracking-wider text-[#1d64ec]">
            MARKETING
          </span>
        </div>


 {/* ── Heading ── */}
        <h2 className="text-center text-[30px] font-bold leading-[1.15] tracking-tight text-[#0f172a] sm:text-[38px] lg:text-[44px]">
              Stop broadcasting. Start
          <br />
         having conversations.
         
        </h2>


        {/* ── Step Flow Bar ── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {steps.map((step, i) => (
            <React.Fragment key={step}>
              <div className="flex h-[38px] items-center rounded-full border border-[#e2e8f0] bg-white px-4 text-[12px] font-normal text-slate-700 shadow-[0_2px_6px_rgba(0,0,0,0.02)]">
                {step}
              </div>

              {i < steps.length - 1 && (
                <ArrowRight
                  size={13}
                  className="text-slate-400"
                  strokeWidth={2}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ── Two Column Content ── */}
        <div className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          {/* ── Left: Campaigns Card ── */}
          <div className="rounded-[26px] border border-[#eef2f6] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] sm:p-7">

            {/* Header Row */}
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-semibold text-[#0f172a]">
                Campaigns
              </h3>

              <button className="rounded-full bg-[#1d64ec] px-4 py-1.5 text-[12px] font-medium text-white shadow-sm transition-all hover:bg-[#1554cb]">
                New campaign
              </button>
            </div>

            {/* Campaign Rows */}
            <div className="mt-6 space-y-3.5">
              {campaigns.map((camp) => (
                <div
                  key={camp.name}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-[18px] border border-[#f1f5f9] bg-white p-4 transition-all hover:border-[#e2e8f0]"
                >
                  {/* Name */}
                  <span className="text-[13px] font-medium text-[#0f172a]">
                    {camp.name}
                  </span>

                  {/* Sent & Replies stats */}
                  <div className="flex items-center gap-4 text-[12px] font-normal text-slate-500">
                    <span>{camp.sent}</span>
                    <span>{camp.replies}</span>
                  </div>

                  {/* Status pill */}
                  <span className="rounded-full bg-[#ebf3fe] px-3 py-1 text-[11px] font-medium text-[#1d64ec]">
                    {camp.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: 5 Feature Cards ── */}
          <div className="flex flex-col gap-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-3.5 rounded-[18px] border border-[#eef2f6] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.04)]"
              >
                {/* Icon */}
                <div className="mt-0.5 flex shrink-0 items-center justify-center text-[#1d64ec]">
                  <Icon size={16} strokeWidth={2.2} />
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-[13.5px] font-medium text-[#0f172a]">
                    {title}
                  </h4>

                  <p className="mt-0.5 text-[12.5px] font-normal leading-snug text-[#64748b]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Section Bottom Line ── */}
      <div className="absolute bottom-0 left-0 w-full border-b border-[#e2e8f0]" />
    </section>
  );
};

export default Marketing;