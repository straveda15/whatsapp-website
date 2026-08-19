import React from "react";
import {
  Home,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Wrench,
} from "lucide-react";

const industries = [
  {
    icon: Home,
    title: "Real Estate",
    description: "Workflows tuned to this industry",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Workflows tuned to this industry",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Workflows tuned to this industry",
  },
  {
    icon: ShoppingBag,
    title: "D2C & E-commerce",
    description: "Workflows tuned to this industry",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Workflows tuned to this industry",
  },
  {
    icon: Wrench,
    title: "Service Businesses",
    description: "Workflows tuned to this industry",
  },
];

const Industries = () => {
  return (
   <section
  id="industries"
  className="w-full bg-[#f8fbff] px-6 py-20 sm:px-8 lg:px-14 lg:py-24"
>
      <div className="mx-auto max-w-[1240px]">

        {/* ── Top Pill Badge ── */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-4 py-1 text-[11px] font-medium uppercase tracking-wider text-[#1d64ec]">
            INDUSTRIES
          </span>
        </div>

        {/* ── Heading (Reduced Font Weight) ── */}
        <h2 className="text-center text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.15] tracking-tight text-[#0f172a]">
          Built around the way
          <br />
          your business works.
        </h2>

        {/* ── 6 Industry Cards Grid (3x2) ── */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-[22px] border border-[#eef2f6] bg-white p-5 sm:p-5.5 shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.05)]"
            >
              {/* Icon in soft blue circle */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ebf3fe]">
                <Icon size={20} className="text-[#1d64ec]" strokeWidth={2} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                  {title}
                </h3>
                <p className="mt-0.5 text-[12.5px] leading-snug text-[#64748b]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;