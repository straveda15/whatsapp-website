import React from "react";
import { Clock, Repeat, RefreshCw, Database } from "lucide-react";

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
    icon: RefreshCw,
    title: "Follow-ups get forgotten",
    description: "Interested today doesn't mean interested forever.",
  },
  {
    icon: Database,
    title: "Your data is scattered",
    description: "WhatsApp. Excel. CRM. Calls. Nothing connected.",
  },
];

const ProblemSection = () => {
  return (
    <section
      id="problem"
      className="w-full border-y border-[#e2e8f0] bg-[#f8fbff] py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">

        {/* ── Top Pill Badge & Heading (Completely Left Aligned) ── */}
        <div className="flex max-w-3xl flex-col items-start text-left">
          
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
            The problem
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-left text-[30px] font-bold leading-[1.15] tracking-tight text-[#0a1128] sm:text-[38px] md:text-[44px]">
            Your customers are already on WhatsApp.
            <br />
            Your business should be too.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-2xl text-left text-[14.5px] leading-relaxed text-[#64748b] sm:text-[16px]">
            Customers ask questions. Leads arrive. Follow-ups get forgotten.
            Teams get overloaded. Sandesa brings those conversations into one
            intelligent system.
          </p>
        </div>

        {/* ── 4 Feature / Problem Cards ── */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-start text-left rounded-2xl border border-[#e8edf4] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)]"
            >
              {/* Icon */}
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>

              {/* Title */}
              <h3 className="mt-5 text-[15px] font-bold text-[#0a1128]">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[12.5px] leading-relaxed text-[#64748b]">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;