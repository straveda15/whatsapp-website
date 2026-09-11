import React from "react";
import { Bot, Sparkles, Users, Check, ClipboardList, Calendar } from "lucide-react";

// WhatsApp Style Green Outline Bubble Icon
const WhatsAppIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#22c55e"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

// Straight (Seedha) Right-Pointing Send Icon - WhatsApp Style
const StraightSendIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white"
  >
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const features = [
  {
    icon: Bot,
    title: "Understand",
    desc: "Understand natural customer conversations.",
  },
  {
    icon: Sparkles,
    title: "Act",
    desc: "Capture data, qualify leads and trigger the next step.",
  },
  {
    icon: Users,
    title: "Handoff",
    desc: "Bring humans into important conversations without losing context.",
  },
];

export const AIAgent = () => {
  return (
    <section id="ai-agent" className="w-full bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-18 px-4 sm:px-6 lg:px-8 border-b border-[#e2e8f0]">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">

          {/* ================= LEFT COLUMN (TEXT SHIFTED HIGHER UP) ================= */}
          <div className="flex flex-col items-start text-left">
            {/* Top Pill Badge */}
            <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
              AI AGENT
            </span>

            {/* Heading */}
            <h2 className="mt-3.5 text-left text-[30px] font-bold tracking-tight text-[#0a1128] sm:mt-4 sm:text-4xl md:text-[42px] md:leading-[1.15]">
              Not just a chatbot
              <br />
              An AI agent that knows
              <br />
              what to do next
            </h2>

            {/* Feature Cards List */}
            <div className="mt-6 w-full space-y-3 sm:mt-8">
              {features.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-2xl border border-[#e8edf4] bg-white p-4.5 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)]"
                >
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                    <Icon size={19} strokeWidth={2.4} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-[15px] font-medium text-[#0a1128]">
                      {title}
                    </h3>
                    <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#64748b]">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN (CHAT MOCKUP + 2 INFO CARDS) ================= */}
          <div className="flex flex-col gap-4">

            {/* WhatsApp Chat Box */}
            <div className="overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white shadow-[0_20px_50px_-10px_rgba(15,23,42,0.08),0_4px_16px_rgba(15,23,42,0.02)]">
              
              {/* Chat Header */}
              <div className="flex h-[60px] items-center gap-3 bg-[#0a1128] px-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0e2722]">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="text-[13.5px] font-bold leading-tight text-white">
                    Sandesa AI · Sales Agent
                  </p>
                  <p className="mt-0.5 text-[11px] leading-tight text-slate-400">
                    Business Account · online
                  </p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex flex-col gap-3.5 bg-[#f8fafc] px-4 py-5 sm:px-5">
                
                {/* Message 1 (Incoming) */}
                <div className="w-fit max-w-[82%] rounded-2xl rounded-tl-sm border border-[#e5eaf2] bg-white px-4 py-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                  <p className="text-[13px] leading-relaxed text-[#0f172a]">
                    Do you have anything ready to move in?
                  </p>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-400">
                    <span>11:02</span>
                    <Check size={11} strokeWidth={2.2} />
                  </div>
                </div>

                {/* Message 2 (Outgoing WhatsApp Green) */}
                <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-[#dcfce7] px-4 py-2.5">
                  <p className="text-[13px] leading-relaxed text-[#0f172a]">
                    Yes two ready-possession 2BHK units in Baner. Would you like to visit this weekend?
                  </p>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-500">
                    <span>11:02</span>
                    <span className="font-bold text-[#2563eb]">✓✓</span>
                  </div>
                </div>

                {/* Message 3 (Incoming) */}
                <div className="w-fit max-w-[60%] rounded-2xl rounded-tl-sm border border-[#e5eaf2] bg-white px-4 py-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                  <p className="text-[13px] leading-relaxed text-[#0f172a]">
                    Saturday works.
                  </p>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-400">
                    <span>11:03</span>
                    <Check size={11} strokeWidth={2.2} />
                  </div>
                </div>
              </div>

              {/* Input Bar */}
              <div className="flex items-center gap-2.5 border-t border-[#f1f5f9] bg-white px-4 py-3">
                <div className="flex h-9 flex-1 items-center rounded-full border border-[#e2e8f0] px-4 text-[12px] text-slate-400">
                  Type a message
                </div>

                <button
                  type="button"
                  aria-label="Send"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2563eb] shadow-sm transition-transform active:scale-95 hover:bg-[#1d4ed8]"
                >
                  <div className="flex items-center justify-center pl-0.5">
                    <StraightSendIcon />
                  </div>
                </button>
              </div>
            </div>

            {/* Bottom 2 Info Cards */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              
              {/* Card 1: Captured */}
              <div className="rounded-2xl border border-[#d8e6fe] bg-[#edf4fe] p-4">
                <ClipboardList size={18} className="text-[#2563eb]" strokeWidth={2.2} />
                <p className="mt-2.5 text-[10.5px] font-bold uppercase tracking-wider text-[#2563eb]">
                  CAPTURED
                </p>
                <p className="mt-0.5 text-[13px] font-medium text-[#0a1128]">
                  Requirement + budget
                </p>
              </div>

              {/* Card 2: Booked */}
              <div className="rounded-2xl border border-[#d8e6fe] bg-[#edf4fe] p-4">
                <Calendar size={18} className="text-[#2563eb]" strokeWidth={2.2} />
                <p className="mt-2.5 text-[10.5px] font-bold uppercase tracking-wider text-[#2563eb]">
                  BOOKED
                </p>
                <p className="mt-0.5 text-[13px] font-medium text-[#0a1128]">
                  Site visit · Sat 11:00
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgent;