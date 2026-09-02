import React from "react";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section
      id="final-cta"
      className="relative w-full overflow-hidden bg-[#071328] py-16 px-4 sm:py-20 sm:px-6 lg:py-28 lg:px-8 text-white"
    >
      {/* ── Ambient Radial Glow ── */}
      <div
        className="pointer-events-none absolute right-[-15%] bottom-[-10%] h-[420px] w-[420px] rounded-full sm:h-[550px] sm:w-[550px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">

        {/* ── Heading (Exact Mobile Line Breaks) ── */}
        <h2 className="mx-auto max-w-lg text-[28px] font-bold leading-[1.18] tracking-tight text-white sm:text-[38px] md:text-[44px]">
          Your customers
          <br />
          are already talking.
          <br />
          It's time your business
          <br />
          started listening — and
          <br />
          acting.
        </h2>

        {/* ── Subtitle ── */}
        <p className="mx-auto mt-4 max-w-sm text-[13.5px] leading-relaxed text-[#94a3b8] sm:max-w-md sm:text-[15px]">
          Build your first automated WhatsApp journey with
          <br className="sm:hidden" /> Sandesa.
        </p>

        {/* ── Action Buttons (Side by Side in Mobile) ── */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          
          {/* 1. Primary White Button */}
          <a
            href="#get-started"
            className="group inline-flex items-center justify-center gap-2 rounded-[20px] bg-white px-5 py-3 text-[13.5px] font-bold text-[#071328] shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 active:scale-95"
          >
            <span>Start with Sandesa</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={2.6}
            />
          </a>

          {/* 2. Secondary Translucent Navy Button */}
          <a
            href="#book-demo"
            className="inline-flex items-center justify-center rounded-[20px] border border-[#233b68] bg-[#142647] px-5 py-3 text-[13.5px] font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1a315c] hover:border-[#32528e] active:scale-95"
          >
            <span>Book a Demo</span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;