import React from "react";
import { Bot, Sparkles, Users, Send, Check, ClipboardList, Calendar } from "lucide-react";

// Custom chat bubble icon (dark circle + green speech bubble outline)
const ChatOutlineIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
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

const AIAgent = () => {
  return (
    <section id="ai-agent" className="w-full bg-[#f8fbff] px-6 py-20 sm:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">

          {/* ================= LEFT COLUMN ================= */}
          <div className="max-w-[540px]">
            {/* Top Pill Badge */}
            <div className="mb-6 flex">
              <span className="rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-4 py-1 text-[11px] font-medium uppercase tracking-wider text-[#1d64ec]">
                AI AGENT
              </span>
            </div>

            {/* Heading (Reduced Font Weight) */}
            <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.12] tracking-tight text-[#0f172a]">
              Not just a chatbot.
              <br />
              An AI agent that knows
              <br />
              what to do next.
            </h2>

            {/* Feature Cards Row List */}
            <div className="mt-10 space-y-3.5">
              {features.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-[20px] border border-[#eef2f6] bg-white p-4 sm:p-4.5 shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
                >
                  {/* Icon in soft blue circle */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ebf3fe]">
                    <Icon size={18} className="text-[#1d64ec]" strokeWidth={2.2} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                      {title}
                    </h3>
                    <p className="mt-0.5 text-[12.5px] leading-snug text-[#64748b]">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN (CHAT MOCKUP + 2 BOTTOM CARDS) ================= */}
          <div className="flex flex-col gap-4">

            {/* WhatsApp Chat Mockup */}
            <div
              className="overflow-hidden rounded-[26px] border border-[#e2e8f0] bg-white"
              style={{
                boxShadow:
                  "0 20px 50px -10px rgba(15, 23, 42, 0.08), 0 4px 16px rgba(15, 23, 42, 0.03)",
              }}
            >
              {/* Header */}
              <div className="flex h-[60px] items-center gap-3 bg-[#0d1627] px-5">
                <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#0e2a2a] shadow-inner">
                  <ChatOutlineIcon size={17} />
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

              {/* Messages Body */}
              <div className="flex flex-col gap-3 bg-[#f8fafc] px-4 py-5">
                {/* Message 1 (Incoming) */}
                <div className="w-fit max-w-[80%] rounded-[18px] rounded-tl-[4px] border border-[#e8edf4] bg-white px-4 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <p className="text-[13px] leading-[1.5] text-[#1e293b]">
                    Do you have anything ready to move in?
                  </p>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-400">
                    <span>11:02</span>
                    <Check size={11} strokeWidth={2.2} />
                  </div>
                </div>

                {/* Message 2 (Outgoing WhatsApp Green) */}
                <div className="ml-auto w-fit max-w-[82%] rounded-[18px] rounded-tr-[4px] bg-[#dcfce7] px-4 py-2.5">
                  <p className="text-[13px] leading-[1.5] text-[#1e293b]">
                    Yes — two ready-possession 2BHK units in Baner. Would you like to visit this weekend?
                  </p>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[#16a34a]">
                    <span>11:02</span>
                    <span className="font-bold text-[#1d64ec]">✓✓</span>
                  </div>
                </div>

                {/* Message 3 (Incoming) */}
                <div className="w-fit max-w-[55%] rounded-[18px] rounded-tl-[4px] border border-[#e8edf4] bg-white px-4 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <p className="text-[13px] leading-[1.5] text-[#1e293b]">
                    Saturday works.
                  </p>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-400">
                    <span>11:03</span>
                    <Check size={11} strokeWidth={2.2} />
                  </div>
                </div>
              </div>

              {/* Input Bar */}
              <div className="flex items-center gap-2.5 border-t border-[#edf2f7] bg-white px-4 py-2.5">
                <div className="flex h-[34px] flex-1 items-center rounded-full border border-[#e2e8f0] px-3.5 text-[11.5px] text-slate-400">
                  Type a message
                </div>
                <button className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#1d64ec] text-white shadow-sm transition-transform active:scale-95">
                  <Send size={14} />
                </button>
              </div>
            </div>

            {/* Bottom 2 Info Cards */}
            <div className="grid grid-cols-2 gap-3.5">
              {/* Card 1: Captured */}
              <div className="rounded-[18px] border border-[#d8e6fe] bg-[#ebf3fe] p-3.5 sm:p-4">
                <ClipboardList size={17} className="text-[#1d64ec]" strokeWidth={2.2} />
                <p className="mt-2.5 text-[10px] font-bold uppercase tracking-wider text-[#1d64ec]">
                  CAPTURED
                </p>
                <p className="mt-0.5 text-[12.5px] font-bold text-[#0f172a]">
                  Requirement + budget
                </p>
              </div>

              {/* Card 2: Booked */}
              <div className="rounded-[18px] border border-[#d8e6fe] bg-[#ebf3fe] p-3.5 sm:p-4">
                <Calendar size={17} className="text-[#1d64ec]" strokeWidth={2.2} />
                <p className="mt-2.5 text-[10px] font-bold uppercase tracking-wider text-[#1d64ec]">
                  BOOKED
                </p>
                <p className="mt-0.5 text-[12.5px] font-bold text-[#0f172a]">
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