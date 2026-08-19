import React from "react";

const WorkflowBuilder = () => {
  return (
    <section
      id="workflow-builder"
      className="relative w-full bg-[#f8fbff] px-6 py-20 sm:px-8 lg:px-14 lg:py-24"
    >
      {/* ── Section Top Line ── */}
      <div className="absolute left-0 top-0 w-full border-t border-[#e2e8f0]" />

      <div className="mx-auto max-w-[1060px]">

        {/* ── Top Pill Badge ── */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-4 py-1 text-[11px] font-medium uppercase tracking-wider text-[#1d64ec]">
            WORKFLOW BUILDER
          </span>
        </div>

        {/* ── Heading ── */}
        <h2 className="text-center text-[30px] font-bold leading-[1.15] tracking-tight text-[#0f172a] sm:text-[38px] lg:text-[44px]">
          Build the workflow once.
          <br />
          Let it run every day.
        </h2>

        {/* ── Visual Dotted Canvas Mockup ── */}
        <div
          className="mt-14 overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.03)] sm:p-10 lg:p-12"
          style={{
            backgroundImage:
              "radial-gradient(#e2e8f0 1.2px, transparent 1.2px)",
            backgroundSize: "20px 20px",
          }}
        >
          {/* ── Header Bar ── */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff7675]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#fdcb6e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#00b894]" />

              <span className="ml-2 text-[12px] font-semibold text-[#0f172a]">
                Real Estate — Lead Journey
              </span>
            </div>

            <span className="rounded-full border border-[#bbf7d0] bg-[#dcfce7] px-2.5 py-0.5 text-[10px] font-bold text-[#16a34a]">
              LIVE
            </span>
          </div>

          {/* ── Workflow Diagram ── */}
          <div className="mx-auto flex max-w-[420px] flex-col items-center">

            {/* New Lead */}
            <div className="w-full rounded-[14px] border border-[#d8e6fe] bg-[#ebf3fe] py-2.5 text-center text-[13px] font-semibold text-[#1d64ec]">
              New Lead
            </div>

            {/* Connector */}
            <div className="h-4 w-px bg-[#cbd5e1]" />

            {/* Ask Requirement */}
            <div className="w-full rounded-[14px] border border-[#eef2f6] bg-white py-2.5 text-center text-[13px] font-semibold text-[#0f172a] shadow-2xs">
              Ask Requirement
            </div>

            {/* Connector */}
            <div className="h-4 w-px bg-[#cbd5e1]" />

            {/* Budget */}
            <div className="w-full rounded-[14px] border border-[#eef2f6] bg-white py-2.5 text-center text-[13px] font-semibold text-[#0f172a] shadow-2xs">
              Budget
            </div>

            {/* ── Branch Split ── */}
            <div className="relative flex h-6 w-full items-center justify-center">
              <svg
                className="h-full w-full"
                viewBox="0 0 380 24"
                fill="none"
                preserveAspectRatio="none"
              >
                <line
                  x1="190"
                  y1="0"
                  x2="190"
                  y2="8"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                />

                <line
                  x1="95"
                  y1="8"
                  x2="285"
                  y2="8"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                />

                <line
                  x1="95"
                  y1="8"
                  x2="95"
                  y2="24"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                />

                <line
                  x1="285"
                  y1="8"
                  x2="285"
                  y2="24"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* High / Low */}
            <div className="grid w-full grid-cols-2 gap-3.5">
              <div className="rounded-[14px] border border-[#bbf7d0] bg-[#dcfce7] py-2 text-center text-[12.5px] font-semibold text-[#15803d]">
                High
              </div>

              <div className="rounded-[14px] border border-[#fde68a] bg-[#fef3c7] py-2 text-center text-[12.5px] font-semibold text-[#b45309]">
                Low
              </div>
            </div>

            {/* Connectors */}
            <div className="grid w-full grid-cols-2 gap-3.5">
              <div className="flex justify-center">
                <div className="h-3.5 w-px bg-[#cbd5e1]" />
              </div>

              <div className="flex justify-center">
                <div className="h-3.5 w-px bg-[#cbd5e1]" />
              </div>
            </div>

            {/* Sales / Nurture */}
            <div className="grid w-full grid-cols-2 gap-3.5">
              <div className="rounded-[14px] border border-[#eef2f6] bg-white py-2 text-center text-[12.5px] font-semibold text-[#0f172a] shadow-2xs">
                Sales
              </div>

              <div className="rounded-[14px] border border-[#eef2f6] bg-white py-2 text-center text-[12.5px] font-semibold text-[#0f172a] shadow-2xs">
                Nurture
              </div>
            </div>

            {/* ── Branch Merge ── */}
            <div className="relative flex h-6 w-full items-center justify-center">
              <svg
                className="h-full w-full"
                viewBox="0 0 380 24"
                fill="none"
                preserveAspectRatio="none"
              >
                <line
                  x1="95"
                  y1="0"
                  x2="95"
                  y2="12"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                />

                <line
                  x1="285"
                  y1="0"
                  x2="285"
                  y2="12"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                />

                <line
                  x1="95"
                  y1="12"
                  x2="285"
                  y2="12"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                />

                <line
                  x1="190"
                  y1="12"
                  x2="190"
                  y2="24"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Book Meeting */}
            <div className="w-full rounded-[14px] border border-[#d8e6fe] bg-[#ebf3fe] py-2.5 text-center text-[13px] font-semibold text-[#1d64ec]">
              Book Meeting
            </div>

            {/* Connector */}
            <div className="h-4 w-px bg-[#cbd5e1]" />

            {/* Reminder */}
            <div className="w-full rounded-[14px] border border-[#eef2f6] bg-white py-2.5 text-center text-[13px] font-semibold text-[#0f172a] shadow-2xs">
              Reminder
            </div>
          </div>
        </div>
      </div>

      {/* ── Section Bottom Line ── */}
      <div className="absolute bottom-0 left-0 w-full border-b border-[#e2e8f0]" />
    </section>
  );
};

export default WorkflowBuilder;