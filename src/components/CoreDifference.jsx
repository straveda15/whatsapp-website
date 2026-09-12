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

export const CoreDifference = () => {
  return (
    <section
      id="core-difference"
      className="relative -mt-8 w-full border-y border-[#182947] bg-[#0c182e] px-4 py-8 sm:-mt-10 sm:px-6 sm:py-10 lg:-mt-12 lg:px-8 lg:py-14"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* ── Top Pill Badge ── */}
        <div className="relative sm:-mt-7 mb-6 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-[#1e345b] bg-[#112344] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8da6d8] sm:px-4 sm:text-[10.5px]">
            CORE DIFFERENCE
          </span>
        </div>

        {/* ── Heading & Subtitle ── */}
        <div className="mt-6 text-center">
          <h2 className="mx-auto max-w-[850px] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[42px] md:leading-[1.18]">
            Don't just automate replies
            <br />
            Automate what happens next
          </h2>

          <p className="mx-auto mt-2.5 max-w-2xl text-[13.5px] leading-[1.65] text-[#8ba2c7] sm:text-[15.5px]">
            Talk less. Get more done.
          </p>
        </div>

        {/* ── 7 Step Cards ── */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-4">
          {steps.map(({ step, title }) => (
            <div
              key={step}
              className="flex min-h-[82px] flex-col justify-center rounded-[20px] border border-[#1d3359]/80 bg-[#122240] px-4 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2b4c82] hover:bg-[#15284b] sm:px-5"
            >
              {/* Step Tag */}
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#3b82f6] sm:text-[11px]">
                {step}
              </span>

              {/* Step Title */}
              <h3 className="mt-1.5 text-[13.5px] font-bold text-white sm:text-[14.5px]">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreDifference;