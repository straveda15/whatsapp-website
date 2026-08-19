import React from "react";
import { Clock, Repeat, RotateCw, Database } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Leads go cold",
    description: "Delayed replies turn opportunities into lost customers.",
  },
  {
    icon: Repeat,
    title: "Your team repeats everything",
    description: "The same questions. The same answers. Every day.",
  },
  {
    icon: RotateCw,
    title: "Follow-ups get forgotten",
    description: "Interested today doesn't mean interested forever.",
  },
  {
    icon: Database,
    title: "Your data is scattered",
    description: "WhatsApp. Excel. CRM. Calls. Nothing connected.",
  },
];

const Problem = () => {
  return (
    <section
      id="problem"
      className="w-full border-y border-[#e5eaf1] bg-[#f8fbff] px-6 py-20 sm:px-8 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* ── Top Pill Badge ── */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-4 py-1 text-[11px] font-medium uppercase tracking-wider text-[#1d64ec]">
            THE PROBLEM
          </span>
        </div>

        {/* ── Heading ── */}
        <h2 className="text-center text-[30px] font-bold leading-[1.15] tracking-tight text-[#0f172a] sm:text-[38px] lg:text-[44px]">
          Your customers are
          <br />
          already on WhatsApp.
          <br />
          Your business should be too.
        </h2>

        {/* ── Subtitle ── */}
        <p className="mx-auto mt-4 max-w-[720px] text-center text-[13.5px] leading-relaxed text-[#64748b] sm:text-[14.5px]">
          Customers ask questions. Leads arrive. Follow-ups get forgotten.
          Teams get overloaded. Sandesa
          <br className="hidden sm:inline" />
          brings those conversations into one intelligent system.
        </p>

        {/* ── 4 Feature / Problem Cards ── */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col justify-start rounded-[22px] border border-[#eef2f6] bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.05)]"
            >
              {/* Icon */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ebf3fe]">
                <Icon
                  size={17}
                  className="text-[#1d64ec]"
                  strokeWidth={2.2}
                />
              </div>

              {/* Title & Description */}
              <div className="mt-6">
                <h3 className="text-[14px] font-bold text-[#0f172a]">
                  {title}
                </h3>

                <p className="mt-1.5 text-[12px] leading-[1.55] text-[#64748b] sm:text-[12.5px]">
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

export default Problem;