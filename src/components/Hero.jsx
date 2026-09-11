import React from "react";
import { Sparkles, ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section 
    id="hero"
    className="relative overflow-hidden border-b border-[#e2e8f0] bg-white pt-6 pb-14 px-5 sm:pt-10 sm:pb-18 sm:px-8 lg:px-14 lg:py-16">

      {/* Background Soft Blue Radial Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[40rem]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, #eef6ff, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1240px] gap-10 lg:grid-cols-[1.12fr_1fr] lg:items-center lg:gap-14">

        {/* =====================================================
            LEFT SIDE: TEXT & CTA BUTTONS
        ===================================================== */}
        <div className="flex flex-col items-start text-left">

          {/* Top Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8e6fe] bg-[#eff6ff] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
            AI WHATSAPP AUTOMATION
          </span>

          {/* Main Heading */}
          <h1 className="mt-5 sm:mt-6 text-left text-[38px] font-bold leading-[1.08] tracking-tight text-[#0a1128] sm:text-[48px] lg:text-[58px]">
            Your AI Team
            <br />
            on <span className="text-[#2563eb]">WhatsApp</span>
          </h1>

          {/* Description */}
        <p className="mt-5 max-w-xl text-left text-[16px] leading-[1.65] text-[#64748b] sm:text-[17.5px] lg:text-[18.5px]">
  Sandesa turns WhatsApp conversations into automated customer
  journeys — helping your business capture leads, qualify prospects,
  follow up, answer questions and keep your team in the loop.
</p>

          {/* CTA Buttons */}
          <div className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center">

            {/* 1. Get Started Free Button */}
            {/* 1. Get Started Free Button */}
<a
  href="#contact-us"
  className="inline-flex items-center justify-center gap-2 rounded-[20px] bg-[#2563eb] px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_rgba(37,99,235,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] active:scale-95"
>
  <span>Get Started Free</span>
  <ArrowRight className="h-4 w-4" />
</a>

            {/* 2. Watch 2-Min Demo Button */}
            <a
              href="#watch-demo"
              className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-[#e2e8f0] bg-white px-7 py-3.5 text-[14.5px] font-semibold text-[#0a1128] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#cbd5e1] hover:bg-[#f8fafc] active:scale-95"
            >
              <Play
                className="h-4 w-4 text-[#2563eb]"
                fill="none"
                strokeWidth={2.4}
              />
              <span>Watch 2-Min Demo</span>
            </a>

          </div>

          {/* Bottom Trust Line */}
          <div className="mt-8 flex items-center gap-2 text-left text-[13px] text-[#64748b]">
            <span className="shrink-0 rounded-full bg-[#22c55e]" />
          </div>

        </div>


        {/* =====================================================
            RIGHT SIDE: 2 CARDS
        ===================================================== */}
        <div className="mx-auto flex w-full max-w-[540px] flex-col gap-5 sm:grid sm:max-w-none sm:grid-cols-[1.1fr_1fr] sm:items-start sm:gap-4 lg:mx-0">

          {/* =====================================================
              CARD 1: WHATSAPP CHAT MOCKUP
          ===================================================== */}
          <div className="flex h-[475px] w-full flex-col justify-between overflow-hidden rounded-[26px] border border-[#e2e8f0] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.07)]">

            {/* WhatsApp Header */}
            <div className="flex items-center gap-3 bg-[#0d1b2a] px-4.5 py-3.5">

              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#1b3830] text-[#22c55e]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20Z" />
                </svg>
              </span>

              <div className="min-w-0">
                <p className="truncate text-[13px] font-bold text-white">
                  Sandesa AI
                </p>

                <p className="truncate text-[10px] text-slate-400">
                  Business Account · online
                </p>
              </div>

            </div>


            {/* Chat Messages Area */}
            <div className="flex flex-1 flex-col justify-between bg-[#f8fafc]/60 px-3.5 py-4">

              {/* Message 1 (Incoming) */}
              <div className="w-fit max-w-[88%] rounded-[18px] rounded-tl-sm border border-[#e5eaf2] bg-white px-3.5 py-2.5 shadow-2xs">

                <p className="text-[14.5px] leading-relaxed text-[#0f172a]">
                  Hi, I'm interested in your 2BHK apartments.
                </p>

                <div className="mt-1 flex items-center justify-end gap-1 text-[9.5px] text-slate-400">
                  <span>10:41</span>
                  <span>✓</span>
                </div>

              </div>


              {/* Message 2 (Outgoing - Green) */}
              <div className="my-2 ml-auto w-fit max-w-[88%] rounded-[18px] rounded-tr-sm bg-[#dcfce7] px-3.5 py-2.5 shadow-2xs">

                <p className="text-[14.5px] leading-relaxed text-[#0f172a]">
                  Absolutely. Which location and budget are you looking for?
                </p>

                <div className="mt-1 flex items-center justify-end gap-1 text-[9.5px] text-slate-500">
                  <span>10:41</span>
                  <span className="font-bold text-[#2563eb]">
                    ✓✓
                  </span>
                </div>

              </div>


              {/* Message 3 (Incoming) */}
              <div className="w-fit max-w-[88%] rounded-[18px] rounded-tl-sm border border-[#e5eaf2] bg-white px-3.5 py-2.5 shadow-2xs">

                <p className="text-[14.5px] leading-relaxed text-[#0f172a]">
                  Baner. Around ₹70L.
                </p>

                <div className="mt-1 flex items-center justify-end gap-1 text-[9.5px] text-slate-400">
                  <span>10:42</span>
                  <span>✓</span>
                </div>

              </div>


              {/* Typing Bubble */}
              <div className="mt-1 ml-auto flex h-[30px] items-center justify-center rounded-full bg-[#dcfce7] px-3.5">

                <span className="flex items-end gap-1.5">

                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#16a34a]"
                    style={{
                      animation: "typingWave 1.2s ease-in-out infinite",
                      animationDelay: "0s",
                    }}
                  />

                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#16a34a]"
                    style={{
                      animation: "typingWave 1.2s ease-in-out infinite",
                      animationDelay: "0.15s",
                    }}
                  />

                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#16a34a]"
                    style={{
                      animation: "typingWave 1.2s ease-in-out infinite",
                      animationDelay: "0.3s",
                    }}
                  />

                </span>

              </div>

            </div>


            {/* Chat Footer Input Bar */}
            <div className="flex items-center gap-2 border-t border-[#edf2f7] bg-white px-3.5 py-3">

              <div className="flex-1 rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-1.5 text-[11.5px] text-slate-400">
                Type a message
              </div>

              <button
                type="button"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#2563eb] text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 translate-x-0.5"
                  fill="currentColor"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>

            </div>

          </div>


          {/* =====================================================
              CARD 2: RAHUL MEHTA LEAD CARD
              - Assigned & Score Bar situated right under Timeline
              - Full card height h-[475px] with clean space below
          ===================================================== */}
          <div className="flex h-[418px] w-full flex-col justify-start rounded-[26px] border border-[#e2e8f0] bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.07)] sm:mt-14">

            {/* Top Profile Header */}
            <div className="flex items-start justify-between gap-1.5">

              {/* Avatar + Info */}
              <div className="flex items-center gap-2.5">

                <span className="grid h-9.5 w-9.5 shrink-0 place-items-center rounded-full bg-[#eff6ff] text-[12.5px] font-bold text-[#2563eb]">
                  RM
                </span>

                <div>

                  <p className="text-[13.5px] font-bold text-[#0a1128]">
                    Rahul ...
                  </p>

                  <p className="text-[9.5px] leading-tight text-[#64748b]">
                    Captured<br />via <br/>WhatsApp<br />· Just now
                  </p>

                </div>

              </div>

              {/* Hot Lead Badge */}
              <span className="shrink-0 rounded-full border border-red-200 bg-[#fff1ed] px-2.5 py-0.5 text-[8.5px] font-bold tracking-wider text-red-600">
                🔥 HOT LEAD
              </span>

            </div>


            {/* Specs Table */}
            <dl className="mt-4 space-y-2 text-[12.5px]">

              <div className="flex items-center justify-between">
                <dt className="text-[#64748b]">Budget</dt>
                <dd className="font-bold text-[#0a1128]">₹70L</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-[#64748b]">Location</dt>
                <dd className="font-bold text-[#0a1128]">Baner</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-[#64748b]">Intent</dt>
                <dd className="font-bold text-[#0a1128]">Purchase</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-[#64748b]">Timeline</dt>
                <dd className="font-bold text-[#0a1128]">30 days</dd>
              </div>

            </dl>


            {/* Assigned Pill (Directly below Timeline) */}
            <div className="mt-4 flex items-center justify-between rounded-full bg-[#eff6ff] px-4 py-2 text-[12px]">

              <span className="text-[11.5px] font-medium text-[#475569]">
                Assigned
              </span>

              <span className="text-[11.5px] font-bold text-[#2563eb]">
                — Sales Team
              </span>

            </div>


            {/* Lead Score Progress Bar (Directly below Assigned pill) */}
            <div className="mt-3.5 flex items-center justify-between gap-3">

              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#e2e8f0]">
                <span className="block h-full w-[82%] rounded-full bg-[#2563eb]" />
              </span>

              <span className="text-[11px] font-bold text-[#0a1128]">
                Score 82
              </span>

            </div>

            {/* Empty space preserving full height */}
            <div className="flex-1" />

          </div>

        </div>

      </div>


      {/* =========================================================
          TYPING DOT WAVE ANIMATION
      ========================================================= */}
      <style>{`
        @keyframes typingWave {
          0%,
          60%,
          100% {
            transform: translateY(0);
            opacity: 0.55;
          }

          30% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }
      `}</style>

    </section>
  );
};

export default Hero;