import React from "react";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
   <section
  id="final-cta"
  className="relative w-full overflow-hidden bg-[#071124] px-6 py-24 text-white sm:px-8 lg:px-14 lg:py-28"
>
      
      {/* ── Ambient Radial Glows ── */}
      <div
        className="pointer-events-none absolute right-[-5%] bottom-[-20%] h-[550px] w-[550px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(29,100,236,0.35) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="pointer-events-none absolute left-[-5%] top-[-10%] h-[400px] w-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(29,100,236,0.15) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative mx-auto max-w-[900px] text-center">

        {/* ── Headline (Reduced Font Weight) ── */}
        <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.18] tracking-tight text-white">
          Your customers are already talking.
          <br />
          It's time your business started listening
          <br />
          — and acting.
        </h2>

        {/* ── Subtitle ── */}
        <p className="mx-auto mt-4 max-w-[560px] text-[14px] sm:text-[15px] font-normal leading-relaxed text-[#8da2c0]">
          Build your first automated WhatsApp journey with Sandesa.
        </p>

        {/* ── Action Buttons ── */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          
          {/* Primary White Button */}
          <button
            type="button"
            className="group inline-flex items-center justify-center gap-2 rounded-[16px] bg-white px-6 py-3 text-[14px] font-semibold text-[#071124] shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            <span>Start with Sandesa</span>
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2.2}
            />
          </button>

          {/* Secondary Navy Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-[16px] border border-[#1d335c] bg-[#11213f] px-6 py-3 text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#162b52]"
          >
            <span>Book a Demo</span>
          </button>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;