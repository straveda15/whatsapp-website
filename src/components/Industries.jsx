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
      className="w-full bg-white px-6 py-20 sm:px-8 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* ── Top Content ── */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dbe3ee] bg-[#eff6ff] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1d4ed8]">
            Industries
          </span>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-[1.12] text-[#0d1627] sm:text-4xl md:text-[2.75rem]">
            Built around the way 
            <br/>
            your business works.
          </h2>
        </div>

        {/* ── Industry Cards ── */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-2xl border border-[#dbe3ee] bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/25 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
            >
              {/* Icon */}
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#eff6ff] text-[#1d4ed8]">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>

              {/* Text */}
              <div className="min-w-0">
                <p className="font-semibold text-[#0d1627]">
                  {title}
                </p>

                <p className="text-xs text-[#64748b]">
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