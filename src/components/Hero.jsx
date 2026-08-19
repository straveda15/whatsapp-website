import React from "react";
import {
  Sparkles,
  Play,
  ArrowRight,
  Check,
  Send,
} from "lucide-react";

// Custom chat bubble icon
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
    aria-hidden="true"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const Hero = () => {
  // Scroll to any section
  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 70;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#f8fbff]"
      style={{
        background:
          "linear-gradient(135deg, #f0f6ff 0%, #f7faff 45%, #ffffff 100%)",
      }}
    >
      {/* =========================
          Soft Ambient Background Glows
      ========================= */}
      <div
        className="pointer-events-none absolute right-[-5%] top-[-10%] h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(215,232,255,0.6) 0%, rgba(240,247,255,0) 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[450px] w-[450px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(220,238,255,0.4) 0%, rgba(240,247,255,0) 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-6 py-16 sm:px-8 lg:px-14 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1.15fr] lg:gap-8">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-[540px]">

            {/* AI Badge */}
            <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-3.5 py-1 text-[11px] font-bold tracking-wider text-[#1d64ec]">
              <Sparkles size={13} strokeWidth={2.4} />
              <span>AI WHATSAPP AUTOMATION</span>
            </div>

            {/* Heading */}
            <h1 className="text-[38px] font-black leading-[1.08] tracking-tight text-[#0f172a] sm:text-[48px] lg:text-[54px]">
              Your AI Team
              <br />
              on <span className="text-[#1d64ec]">WhatsApp.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[480px] text-[13.5px] leading-[1.65] text-[#556477] sm:text-[14.5px]">
              Sandesa turns WhatsApp conversations into automated customer
              journeys — helping your business capture leads, qualify
              prospects, follow up, answer questions and keep your team in
              the loop.
            </p>

            {/* =========================
                CTA Buttons
            ========================= */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">

              {/* Get Started Free */}
              <button
                type="button"
                onClick={() => scrollToSection("final-cta")}
                className="group flex h-[46px] items-center justify-center gap-2 rounded-[16px] bg-[#1d64ec] px-6 text-[14px] font-semibold text-white shadow-[0_6px_20px_rgba(29,100,236,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1554cb]"
              >
                <span>Get Started Free</span>

                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>

              {/* Watch Demo */}
              <button
                type="button"
                onClick={() => scrollToSection("see-in-action")}
                className="flex h-[46px] items-center justify-center gap-2 rounded-[16px] border border-[#e2e8f0] bg-white px-5.5 text-[14px] font-semibold text-[#0f172a] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#cbd5e1] hover:bg-[#f8fafc]"
              >
                <Play
                  size={13}
                  className="text-[#1d64ec]"
                  strokeWidth={2.5}
                />

                <span>Watch 2-Min Demo</span>
              </button>
            </div>

            {/* Trust Bullet */}
            <div className="mt-8 flex items-center gap-2 text-[12.5px] text-[#64748b]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />

              <span>
                Built for businesses that run on conversations.
              </span>
            </div>
          </div>

          {/* =========================
              RIGHT VISUAL CARDS
          ========================= */}
          <div className="relative mx-auto flex w-full max-w-[620px] items-center justify-center lg:justify-end">

            <div className="relative flex items-start gap-4 sm:gap-5">

              {/* =========================
                  WHATSAPP CHAT MOCKUP
              ========================= */}
              <div
                className="relative z-10 w-[275px] overflow-hidden rounded-[26px] border border-[#e2e8f0] bg-white sm:w-[295px]"
                style={{
                  boxShadow:
                    "0 20px 50px -10px rgba(15, 23, 42, 0.10), 0 4px 16px rgba(15, 23, 42, 0.04)",
                }}
              >

                {/* Header */}
                <div className="flex h-[60px] items-center gap-3 bg-[#0d1627] px-4">

                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#0e2a2a] shadow-inner">
                    <ChatOutlineIcon size={17} />
                  </div>

                  <div>
                    <p className="text-[13.5px] font-bold leading-tight text-white">
                      Sandesa AI
                    </p>

                    <p className="mt-0.5 text-[10.5px] leading-tight text-slate-400">
                      Business Account · online
                    </p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="relative flex min-h-[330px] flex-col justify-end gap-3 bg-[#f8fafc] px-3.5 py-4">

                  {/* Incoming */}
                  <div className="w-[205px] rounded-[18px] rounded-tl-[4px] border border-[#e8edf4] bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <p className="text-[12.5px] leading-[1.5] text-[#1e293b]">
                      Hi, I'm interested in your
                      <br />
                      2BHK apartments.
                    </p>

                    <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-400">
                      <span>10:41</span>
                      <Check size={11} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Outgoing */}
                  <div className="ml-auto w-[215px] rounded-[18px] rounded-tr-[4px] bg-[#dcfce7] px-3.5 py-2.5">
                    <p className="text-[12.5px] leading-[1.5] text-[#1e293b]">
                      Absolutely. Which location
                      <br />
                      and budget are you looking
                      <br />
                      for?
                    </p>

                    <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[#16a34a]">
                      <span>10:41</span>
                      <span className="font-bold text-[#1d64ec]">
                        ✓✓
                      </span>
                    </div>
                  </div>

                  {/* Incoming */}
                  <div className="w-[165px] rounded-[18px] rounded-tl-[4px] border border-[#e8edf4] bg-white px-3.5 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <p className="text-[12.5px] leading-[1.5] text-[#1e293b]">
                      Baner. Around ₹70L.
                    </p>

                    <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-400">
                      <span>10:42</span>
                      <Check size={11} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Typing */}
                  <div className="ml-auto flex h-7 w-[52px] items-center justify-center gap-1.5 rounded-[14px] rounded-tr-[4px] bg-[#dcfce7]">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="h-[4.5px] w-[4.5px] rounded-full bg-[#16a34a]"
                        style={{
                          animation: `dotPulse 1.4s ${
                            dot * 0.2
                          }s infinite ease-in-out`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="flex items-center gap-2 border-t border-[#edf2f7] bg-white px-3 py-2.5">

                  <div className="flex h-[34px] flex-1 items-center rounded-full border border-[#e2e8f0] px-3.5 text-[11.5px] text-slate-400">
                    Type a message
                  </div>

                  <button
                    type="button"
                    className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#1d64ec] text-white shadow-sm transition-transform active:scale-95"
                  >
                    <Send size={14} />
                  </button>
                </div>
              </div>

              {/* =========================
                  LEAD QUALIFICATION CARD
              ========================= */}
              <div
                className="relative z-20 mt-8 hidden w-[235px] rounded-[24px] border border-[#e2e8f0] bg-white px-4.5 py-4.5 sm:w-[250px] lg:mt-10 lg:block"
                style={{
                  boxShadow:
                    "0 20px 50px -10px rgba(15, 23, 42, 0.08), 0 4px 16px rgba(15, 23, 42, 0.03)",
                }}
              >

                {/* Lead Header */}
                <div className="flex items-start justify-between gap-1.5">

                  <div className="flex items-center gap-2">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ebf3fe] text-[11px] font-bold text-[#1d64ec]">
                      RM
                    </div>

                    <div>
                      <p className="text-[12.5px] font-bold text-[#0f172a]">
                        Rahul...
                      </p>

                      <p className="text-[9.5px] leading-[1.25] text-slate-400">
                        Captured
                        <br />
                        via WhatsApp
                        <br />
                        · Just now
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 rounded-full border border-[#fed7aa] bg-[#fef3e2] px-2 py-0.5 text-[9px] font-bold text-[#d97706]">
                    🔥 HOT LEAD
                  </div>
                </div>

                {/* Lead Values */}
                <div className="mt-4 space-y-2">
                  {[
                    { label: "Budget", value: "₹70L" },
                    { label: "Location", value: "Baner" },
                    { label: "Intent", value: "Purchase" },
                    { label: "Timeline", value: "30 days" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between text-[12px]"
                    >
                      <span className="text-slate-500">
                        {label}
                      </span>

                      <span className="font-bold text-[#0f172a]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Assigned */}
                <div className="mt-4 flex items-center justify-between rounded-full bg-[#ebf3fe] px-3 py-1.5 text-[10.5px]">
                  <span className="text-slate-600">
                    Assigned
                  </span>

                  <span className="font-bold text-[#1d64ec]">
                    → Sales Team
                  </span>
                </div>

                {/* Score */}
                <div className="mt-3 flex items-center gap-2">

                  <div className="h-[4.5px] flex-1 overflow-hidden rounded-full bg-[#f1f5f9]">
                    <div
                      className="h-full rounded-full bg-[#1d64ec]"
                      style={{ width: "82%" }}
                    />
                  </div>

                  <span className="text-[10px] font-medium text-slate-600">
                    Score 82
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dot Animation */}
      <style>{`
        @keyframes dotPulse {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }

          40% {
            transform: translateY(-2.5px);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;