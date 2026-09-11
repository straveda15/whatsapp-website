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
    className="relative overflow-hidden border-b border-[#e2e8f0] bg-white pt-6 pb-12 px-5 sm:pt-10 sm:pb-16 sm:px-8 lg:px-14 lg:pt-12 lg:pb-16">
      <div className="mx-auto max-w-[1240px]">

        {/* ── Top Header (Shifted higher up) ── */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          
          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-[#eff6ff] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
            THE PROBLEM
          </span>

          {/* Heading */}
         <h2 className="text-3xl font-bold tracking-tight text-[#0a1128] sm:text-4xl md:text-[42px] md:leading-[1.18]">
          Your customers are
            <br />
            already on WhatsApp
            <br />
            Your business should be too
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.65] text-[#64748b] sm:text-[15.5px]">
            Customers ask questions. Leads arrive. Follow-ups get forgotten. Teams get overloaded. Sandesa brings those conversations into one intelligent system.
          </p>
        </div>

        {/* ── 4 Feature Cards ── */}
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {problems.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-start rounded-[24px] border border-[#f1f5f9] bg-white p-6.5 text-left shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(37,99,235,0.08)]"
            >
              {/* Circular Icon */}
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#eff6ff] text-[#2563eb]">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>

              {/* Title */}
              <h3 className="mt-6 text-[16px] font-bold text-[#0f172a]">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#64748b]">
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