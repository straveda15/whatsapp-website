import React from "react";

const steps = [
  { step: "STEP 1", title: "Customer Message" },
  { step: "STEP 2", title: "AI Understands" },
  { step: "STEP 3", title: "Collects Information" },
  { step: "STEP 4", title: "Qualifies Lead" },
  { step: "STEP 5", title: "Assigns Salesperson" },
  { step: "STEP 6", title: "Books Appointment" },
  { step: "STEP 7", title: "Follows Up" },
];

const CoreDifference = () => {
  return (
    <section
      id="core-difference"
      className="relative w-full bg-[#081326] px-6 py-20 sm:px-8 lg:px-14 lg:py-24"
    >
      {/* ── Section Top Line ── */}
      <div className="absolute left-0 top-0 w-full border-t border-[#1a2d50]" />

      <div className="mx-auto max-w-[1200px]">

        {/* ── Top Pill Badge ── */}
        <div className="mb-5 flex justify-center">
          <span className="rounded-full border border-[#1b3158] bg-[#0e1d3a] px-3.5 py-1 text-[10px] font-normal uppercase tracking-wider text-[#7ea4f3]">
            CORE DIFFERENCE
          </span>
        </div>

        {/* ── Heading ── */}
        <h2 className="text-center text-[26px] font-semibold leading-[1.2] tracking-tight text-white sm:text-[32px] lg:text-[38px]">
          Don't just automate replies.
          <br />
          Automate what happens next.
        </h2>

        {/* ── Subtitle ── */}
        <p className="mx-auto mt-3 text-center text-[12px] font-normal text-[#8ca0be] sm:text-[13px]">
          Talk less. Get more done.
        </p>

        {/* ── Step Cards Grid ── */}
        <div className="mx-auto mt-10 max-w-[1020px] space-y-3">

          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.slice(0, 4).map(({ step, title }) => (
              <StepCard
                key={step}
                step={step}
                title={title}
              />
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.slice(4).map(({ step, title }) => (
              <StepCard
                key={step}
                step={step}
                title={title}
              />
            ))}

            {/* Empty placeholder */}
            <div className="hidden lg:block" />
          </div>

        </div>
      </div>

      {/* ── Section Bottom Line ── */}
      <div className="absolute bottom-0 left-0 w-full border-b border-[#1a2d50]" />
    </section>
  );
};

const StepCard = ({ step, title }) => (
  <div
    className="
      rounded-[16px]
      border border-[#1a2d50]
      bg-[#0f1d38]/90
      px-4 py-3
      transition-all duration-200
      hover:border-[#274478]
      hover:bg-[#122242]
    "
  >
    {/* Step Label */}
    <p className="text-[9px] font-normal uppercase tracking-wider text-[#3b82f6]">
      {step}
    </p>

    {/* Title */}
    <p className="mt-1 text-[11.5px] font-normal leading-snug text-white sm:text-[12px]">
      {title}
    </p>
  </div>
);

export default CoreDifference;