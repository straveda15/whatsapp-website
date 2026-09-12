import React from "react";

import { ArrowRight } from "lucide-react";

const useCases = [
  { title: "Generate Leads" },
  { title: "Qualify Leads" },
  { title: "Follow Up" },
  { title: "Book Appointments" },
  { title: "Run Campaigns" },
  { title: "Answer Customers" },
  { title: "Collect Information" },
  { title: "Update Customers" },
];

export const UseCases = () => {
  return (
    <section
      id="use-cases"
      className="w-full border-y border-[#e2e8f0] bg-[#f8fafc] px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-10 lg:px-8 lg:pb-16 lg:pt-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* ── Top Pill Badge ── */}
        <div className="mt-0 flex justify-center sm:-mt-8">
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2563eb] sm:text-[11px]">
            USE CASES
          </span>
        </div>

        {/* ── Heading ── */}
        <div className="mt-3.5 text-center sm:mt-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a1128] sm:text-4xl md:text-[42px] md:leading-[1.18]">
            What do you want WhatsApp to do?
          </h2>
        </div>

        {/* ── 8 Use Cases Grid ── */}
        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:mt-9 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map(({ title }) => (
            <div
              key={title}
              className="group flex h-[52px] cursor-pointer items-center justify-between rounded-2xl border border-[#e8edf4] bg-white px-4 shadow-[0_4px_14px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#cbd5e1] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:px-5"
            >
              {/* Card Title */}
              <span className="text-[13px] font-medium text-[#0f172a] sm:text-[13.5px]">
                {title}
              </span>

              {/* Blue Right Arrow */}
              <ArrowRight
                size={14}
                className="shrink-0 text-[#2563eb] transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;