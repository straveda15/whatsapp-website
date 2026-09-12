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
      className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* ── Top Content ── */}
        <div className="mt-0 mx-auto flex w-full max-w-4xl flex-col items-center gap-3 text-center sm:-mt-8">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2563eb] sm:text-[11px]">
            INDUSTRIES
          </span>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-[1.18] tracking-tight text-[#0a1128] sm:text-4xl md:whitespace-nowrap md:text-[42px]">
            Built around the way your business works
          </h2>
        </div>

        {/* ── Industry Cards ── */}
        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:mt-9 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5">
          {industries.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex min-w-0 items-center gap-4 rounded-2xl border border-[#dbe3ee] bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/25 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:p-5"
            >
              {/* Icon */}
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#eff6ff] text-[#1d4ed8] sm:h-11 sm:w-11">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>

              {/* Text */}
              <div className="min-w-0">
                <p className="text-[14px] font-semibold text-[#0d1627]">
                  {title}
                </p>

                <p className="text-[12px] text-[#64748b] sm:text-xs">
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