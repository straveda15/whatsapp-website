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
      className="w-full bg-[#0c182e] py-14 px-4 sm:py-18 sm:px-6 lg:py-24 lg:px-8 border-y border-[#182947]"
    >
      <div className="mx-auto max-w-6xl">

        {/* ── Top Pill Badge ── */}
        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-[#1e345b] bg-[#112344] px-4 py-1 text-[10.5px] font-bold uppercase tracking-wider text-[#8da6d8]">
            CORE DIFFERENCE
          </span>
        </div>

        {/* ── Heading & Subtitle (Exact Mobile Typography) ── */}
        <div className="mt-6 text-center">
          <h2 className="mx-auto max-w-xl text-[28px] font-bold leading-[1.18] tracking-tight text-white sm:text-[36px] md:text-[42px]">
            Don't just
            <br />
            automate replies
            <br />
            Automate what happens
            <br />
            next
          </h2>

          <p className="mx-auto mt-4 text-[14px] font-normal text-[#8ba2c7] sm:text-[15px]">
            Talk less. Get more done.
          </p>
        </div>

        {/* ── 7 Step Cards (Full width on Mobile, 4-Cols on Desktop) ── */}
        <div className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ step, title }) => (
            <div
              key={step}
              className="flex flex-col justify-center rounded-[20px] border border-[#1d3359]/80 bg-[#122240] px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2b4c82] hover:bg-[#15284b]"
            >
              {/* Step Tag */}
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3b82f6]">
                {step}
              </span>

              {/* Step Title (Extra Bold White Text) */}
              <h3 className="mt-1.5 text-[14.5px] font-bold text-white">
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