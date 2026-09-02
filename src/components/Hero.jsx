import React from "react";
import { Sparkles, ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-white py-12 px-5 sm:px-8 lg:px-14 lg:py-20">
      
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[38rem]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, #eff6ff, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1280px] gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">

        {/* =====================================================
            LEFT SIDE (EXACT MATCH WITH SCREENSHOT)
        ===================================================== */}
        <div className="flex flex-col items-start text-left">

          {/* Top Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
            <Sparkles className="h-3.5 w-3.5 text-[#2563eb]" />
            AI WHATSAPP AUTOMATION
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-left text-[38px] font-bold leading-[1.08] tracking-tight text-[#0a1128] sm:text-[48px] lg:text-[58px]">
            Your AI Team
            <br />
            on <span className="text-[#2563eb]">WhatsApp.</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-lg text-left text-[14.5px] leading-[1.65] text-[#64748b] sm:text-[16px]">
            Sandesa turns WhatsApp conversations into automated customer
            journeys — helping your business capture leads, qualify prospects,
            follow up, answer questions and keep your team in the loop.
          </p>

          {/* Stacked CTA Buttons (Exact Screenshot Styling) */}
          <div className="mt-8 flex w-full max-w-[280px] flex-col gap-3.5 sm:max-w-none sm:flex-row sm:items-center">
            
            {/* 1. Get Started Free Button */}
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-[20px] bg-[#2563eb] px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_8px_22px_rgba(37,99,235,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] active:scale-95"
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            {/* 2. Watch 2-Min Demo Button */}
            <a
              href="#watch-demo"
              className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-[#e2e8f0] bg-white px-7 py-3.5 text-[14.5px] font-semibold text-[#0a1128] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#cbd5e1] hover:bg-[#f8fafc] active:scale-95"
            >
              <Play className="h-4 w-4 text-[#2563eb]" fill="none" strokeWidth={2.4} />
              <span>Watch 2-Min Demo</span>
            </a>

          </div>

          {/* Bottom Bullet Trust Line */}
          <div className="mt-8 flex items-center gap-2 text-left text-[13px] text-[#64748b]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#22c55e]" />
            <span>Built for businesses that run on conversations.</span>
          </div>

        </div>


        {/* =====================================================
            RIGHT SIDE (CHAT & LEAD CARD)
        ===================================================== */}
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-[1.15fr_1fr] sm:items-start lg:gap-5">

          {/* WhatsApp Chat Box */}
          <div className="overflow-hidden rounded-[22px] border border-[#e2e8f0] bg-white shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
            <div className="flex items-center gap-3 bg-[#0a1128] px-4 py-3 sm:px-5 sm:py-3.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0e2722] text-[#22c55e]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20Z" />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="truncate text-[13px] font-bold text-white">Sandesa AI</p>
                <p className="truncate text-[10.5px] text-slate-400">Business Account · online</p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 bg-[#f8fafc] px-3.5 py-4 sm:px-4 sm:py-5">
              <div className="w-fit max-w-[88%] rounded-2xl rounded-tl-xs border border-[#e5eaf2] bg-white px-3.5 py-2 shadow-xs">
                <p className="text-[12.5px] leading-relaxed text-[#0f172a]">Hi, I'm interested in your 2BHK apartments.</p>
                <div className="mt-1 flex items-center justify-end gap-1 text-[9.5px] text-slate-400">
                  <span>10:41</span>
                  <span>✓</span>
                </div>
              </div>

              <div className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-tr-xs bg-[#dcfce7] px-3.5 py-2 shadow-xs">
                <p className="text-[12.5px] leading-relaxed text-[#0f172a]">Absolutely. Which location and budget are you looking for?</p>
                <div className="mt-1 flex items-center justify-end gap-1 text-[9.5px] text-slate-500">
                  <span>10:41</span>
                  <span className="font-bold text-[#2563eb]">✓✓</span>
                </div>
              </div>

              <div className="w-fit max-w-[88%] rounded-2xl rounded-tl-xs border border-[#e5eaf2] bg-white px-3.5 py-2 shadow-xs">
                <p className="text-[12.5px] leading-relaxed text-[#0f172a]">Baner. Around ₹70L.</p>
                <div className="mt-1 flex items-center justify-end gap-1 text-[9.5px] text-slate-400">
                  <span>10:42</span>
                  <span>✓</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-[#edf2f7] bg-white px-3 py-2.5 sm:px-4 sm:py-3">
              <div className="flex-1 rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-1.5 text-[11.5px] text-slate-400">
                Type a message
              </div>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#2563eb] text-white shadow-xs">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Rahul Mehta Lead Card */}
          <div className="rounded-[22px] border border-[#e2e8f0] bg-white p-4.5 shadow-[0_16px_36px_rgba(15,23,42,0.08)] sm:mt-6 sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#eff6ff] text-[13px] font-bold text-[#2563eb]">RM</span>
                <div className="min-w-0">
                  <p className="truncate text-[13.5px] font-bold text-[#0a1128]">Rahul Mehta</p>
                  <p className="truncate text-[10.5px] text-[#64748b]">Captured via WhatsApp</p>
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-red-50 px-2 py-0.5 text-[9.5px] font-bold tracking-wider text-red-600 border border-red-200">
                🔥 HOT LEAD
              </span>
            </div>

            <dl className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-[12.5px]">
              <div className="flex items-center justify-between"><dt className="text-[#64748b]">Budget</dt><dd className="font-semibold text-[#0a1128]">₹70L</dd></div>
              <div className="flex items-center justify-between"><dt className="text-[#64748b]">Location</dt><dd className="font-semibold text-[#0a1128]">Baner</dd></div>
              <div className="flex items-center justify-between"><dt className="text-[#64748b]">Intent</dt><dd className="font-semibold text-[#0a1128]">Purchase</dd></div>
              <div className="flex items-center justify-between"><dt className="text-[#64748b]">Timeline</dt><dd className="font-semibold text-[#0a1128]">30 days</dd></div>
            </dl>

            <div className="mt-4 flex items-center justify-between rounded-xl border border-blue-100 bg-[#eff6ff] px-3 py-2">
              <span className="text-[11.5px] font-medium text-slate-600">Assigned</span>
              <span className="text-[11.5px] font-bold text-[#2563eb]">→ Sales Team</span>
            </div>

            <div className="mt-3 flex items-center gap-2.5">
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#e2e8f0]">
                <span className="block h-full w-[82%] rounded-full bg-[#2563eb]" />
              </span>
              <span className="text-[11px] font-bold text-[#0a1128]">Score 82</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;