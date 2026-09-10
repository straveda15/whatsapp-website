import React from "react";

const PlayOutlineIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const steps = [
  {
    step: "1",
    title: '“Hi”',
    description: "Customer messages your WhatsApp number",
  },
  {
    step: "2",
    title: "AI asks the right questions",
    description: "Requirement, budget, location, timeline",
  },
  {
    step: "3",
    title: "Qualified lead created",
    description: "Scored and assigned to the sales team",
  },
];

export const SeeInAction = () => {
  return (
    <section
      id="see-in-action"
      className="w-full bg-[#f8fafc] py-8 px-5 sm:px-8 sm:py-10 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* ── Main Container Card ── */}
        <div className="grid grid-cols-1 items-center gap-8 rounded-[30px] border border-[#e2e8f0] bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)] sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
          
          {/* ── Left Content ── */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0a1128] sm:text-4xl md:text-[38px] md:leading-tight">
              See Sandesa in action.
            </h2>

            <p className="mt-3.5 max-w-md text-[14px] leading-relaxed text-[#64748b] sm:text-[14.5px]">
              Watch a lead go from “Hi” to “qualified” without a salesperson
              touching the conversation.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#watch-demo"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#2563eb] px-6 py-3 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] active:scale-95"
              >
                <PlayOutlineIcon />
                <span>Watch 2-Min Demo</span>
              </a>

             <button
  type="button"
  onClick={() => window.dispatchEvent(new Event("open-live-demo"))}
  className="inline-flex items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white px-6 py-3 text-[13.5px] font-semibold text-[#0a1128] shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#cbd5e1] hover:bg-[#f8fafc] active:scale-95"
>
  <span>Book a Live Demo</span>
</button>
            </div>
          </div>

          {/* ── Right Flow Steps ── */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[420px]">
              {steps.map(({ step, title, description }, index) => (
                <div key={step} className="flex flex-col items-center">
                  
                  {/* Step Card */}
                  <div className="flex w-full items-center gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-[#cbd5e1]">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#eff6ff] text-[13px] font-bold text-[#2563eb]">
                      {step}
                    </span>

                    <div>
                      <h3 className="text-[13.5px] font-bold text-[#0a1128]">
                        {title}
                      </h3>
                      <p className="mt-0.5 text-[12px] leading-snug text-[#64748b]">
                        {description}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="h-3 w-[1px] bg-[#cbd5e1]" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SeeInAction;