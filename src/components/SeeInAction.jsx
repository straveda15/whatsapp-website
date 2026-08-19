import React from "react";
import { Play } from "lucide-react";

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

const SeeInAction = () => {
  return (
  <section
  id="see-in-action"
  className="w-full bg-[#f8fbff] px-6 py-16 sm:px-8 lg:px-14 lg:py-20"
>
      <div className="mx-auto max-w-[1240px]">

        {/* ── Main Banner Box ── */}
        <div className="rounded-[30px] border border-[#eef2f6] bg-white p-8 sm:p-12 lg:p-14 shadow-[0_10px_35px_rgba(15,23,42,0.03)]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">

            {/* ── Left Column: Headline & Action Buttons ── */}
            <div className="max-w-[480px]">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.15] tracking-tight text-[#0f172a]">
                See Sandesa in action.
              </h2>

              <p className="mt-4 text-[13.5px] sm:text-[14.5px] leading-[1.65] text-[#64748b]">
                Watch a lead go from “Hi” to “qualified” without a salesperson touching the conversation.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-3.5">
                {/* Watch Demo Button */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d64ec] px-6 py-2.5 sm:py-3 text-[13.5px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1554cb]"
                >
                  <Play size={14} strokeWidth={2.4} />
                  <span>Watch 2-Min Demo</span>
                </button>

                {/* Book Live Demo Button */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-[#e2e8f0] bg-white px-6 py-2.5 sm:py-3 text-[13.5px] font-semibold text-[#0f172a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f8fafc] hover:border-[#cbd5e1]"
                >
                  <span>Book a Live Demo</span>
                </button>
              </div>
            </div>

            {/* ── Right Column: 3 Vertical Step Cards ── */}
            <div className="flex flex-col items-center max-w-[440px] w-full ml-auto">
              {steps.map(({ step, title, description }, index) => (
                <React.Fragment key={step}>
                  {/* Step Card */}
                  <div className="flex w-full items-center gap-4 rounded-[20px] border border-[#eef2f6] bg-white p-4 sm:p-4.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-[#e2e8f0]">
                    {/* Number Badge */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ebf3fe] text-[12px] font-bold text-[#1d64ec]">
                      {step}
                    </div>

                    {/* Text Details */}
                    <div>
                      <h3 className="text-[13.5px] font-bold text-[#0f172a]">
                        {title}
                      </h3>
                      <p className="mt-0.5 text-[11.5px] sm:text-[12px] text-[#64748b]">
                        {description}
                      </p>
                    </div>
                  </div>

                  {/* Vertical Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="h-3.5 w-[1px] bg-[#e2e8f0]" />
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SeeInAction;