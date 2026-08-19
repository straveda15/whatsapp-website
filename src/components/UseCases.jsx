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

const UseCases = () => {
  return (
    <section
      id="use-cases"
      className="w-full border-y border-[#e8eef5] bg-[#f8fbff] px-6 py-20 sm:px-8 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* Section Top Label */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-4 py-1 text-[11px] font-medium uppercase tracking-wider text-[#1d64ec]">
            USE CASES
          </span>
        </div>

      
        {/* ── Heading ── */}
        <h2 className="text-center text-[30px] font-bold leading-[1.15] tracking-tight text-[#0f172a] sm:text-[38px] lg:text-[44px]">
        What do you want WhatsApp to do?
       
        </h2>


        {/* Use Cases Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map(({ title }) => (
            <div
              key={title}
              className="group flex cursor-pointer items-center justify-between rounded-[20px] border border-[#e8eef5] bg-white px-5 py-4 shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#cbd5e1] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
            >
              <span className="text-[13px] font-medium text-[#0f172a]">
                {title}
              </span>

              <ArrowRight
                size={14}
                className="text-[#1d64ec] transition-transform duration-200 group-hover:translate-x-1"
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