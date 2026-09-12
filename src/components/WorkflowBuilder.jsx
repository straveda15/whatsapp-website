import React from "react";

export const WorkflowBuilder = () => {
  return (
    <section
      id="workflow-builder"
      className="w-full bg-white py-8 px-5 sm:px-8 sm:py-10 lg:px-12 lg:py-14 border-y border-[#e2e8f0]"
    >
      <div className="mx-auto max-w-5xl">

        {/* ── Top Pill Badge ── */}
        <div className="-mt-8 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
            WORKFLOW BUILDER
          </span>
        </div>

        {/* ── Heading ── */}
        <div className="text-center sm:mt-5">
          <h2 className="text-[28px] font-bold tracking-tight text-[#0a1128] sm:text-[36px] md:text-[42px] leading-[1.18]">
            Build the workflow once Let it run every day
          </h2>
        </div>

        {/* ── Dotted Canvas Card ── */}
        <div
          className="mt-8 overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-white p-5 sm:p-7 lg:p-10 shadow-[0_10px_35px_rgba(15,23,42,0.03)] sm:mt-10"
          style={{
            backgroundImage:
              "radial-gradient(#cbd5e1 1.2px, transparent 1.2px)",
            backgroundSize: "22px 22px",
          }}
        >
          {/* ── Header Bar inside Canvas ── */}
          <div className="mb-6 flex items-center justify-between sm:mb-8">
            {/* 3 Window Dots & Title */}
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff7675]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#fdcb6e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#00b894]" />

              <span className="ml-2 text-[11.5px] font-semibold text-[#0a1128] sm:text-[12px]">
                Real Estate Lead Journey
              </span>
            </div>

            {/* Live Tag */}
            <span className="rounded-full border border-[#bbf7d0] bg-[#dafbe4] px-2.5 py-0.5 text-[10px] font-bold text-[#16a34a]">
              LIVE
            </span>
          </div>

          {/* ── Workflow Diagram Flow ── */}
          <div className="mx-auto flex max-w-[380px] flex-col items-center">

            {/* Node 1: New Lead */}
            <div className="flex h-10 w-full items-center justify-center rounded-2xl border border-[#bfdbfe] bg-[#e6f0fd] text-[13.5px] font-medium text-[#1d4ed8] shadow-xs">
              New Lead
            </div>

            {/* Connector */}
            <div className="h-3.5 w-[1px] bg-[#cbd5e1]" />

            {/* Node 2: Ask Requirement */}
            <div className="flex h-10 w-full items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white text-[13.5px] font-medium text-[#0a1128] shadow-xs">
              Ask Requirement
            </div>

            {/* Connector */}
            <div className="h-3.5 w-[1px] bg-[#cbd5e1]" />

            {/* Node 3: Budget */}
            <div className="flex h-10 w-full items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white text-[13.5px] font-medium text-[#0a1128] shadow-xs">
              Budget
            </div>

            {/* ── Branch Split SVG Connector ── */}
            <div className="relative flex h-5 w-full items-center justify-center">
              <svg
                className="h-full w-full"
                viewBox="0 0 380 20"
                fill="none"
                preserveAspectRatio="none"
              >
                <line x1="190" y1="0" x2="190" y2="10" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="95" y1="10" x2="285" y2="10" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="95" y1="10" x2="95" y2="20" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="285" y1="10" x2="285" y2="20" stroke="#cbd5e1" strokeWidth="1" />
              </svg>
            </div>

            {/* High / Low Split Nodes */}
            <div className="grid w-full grid-cols-2 gap-3.5">
              <div className="flex h-9.5 items-center justify-center rounded-2xl border border-[#bbf7d0] bg-[#dafbe4] text-[13px] font-medium text-[#15803d]">
                High
              </div>

              <div className="flex h-9.5 items-center justify-center rounded-2xl border border-[#fed7aa] bg-[#fff7ed] text-[13px] font-medium text-[#c2410c]">
                Low
              </div>
            </div>

            {/* Straight Connectors below High & Low */}
            <div className="grid w-full grid-cols-2 gap-3.5">
              <div className="flex justify-center">
                <div className="h-3 w-[1px] bg-[#cbd5e1]" />
              </div>
              <div className="flex justify-center">
                <div className="h-3 w-[1px] bg-[#cbd5e1]" />
              </div>
            </div>

            {/* Sales / Nurture Nodes */}
            <div className="grid w-full grid-cols-2 gap-3.5">
              <div className="flex h-9.5 items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white text-[13px] font-medium text-[#0a1128] shadow-xs">
                Sales
              </div>

              <div className="flex h-9.5 items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white text-[13px] font-medium text-[#0a1128] shadow-xs">
                Nurture
              </div>
            </div>

            {/* ── Branch Merge SVG Connector ── */}
            <div className="relative flex h-5 w-full items-center justify-center">
              <svg
                className="h-full w-full"
                viewBox="0 0 380 20"
                fill="none"
                preserveAspectRatio="none"
              >
                <line x1="95" y1="0" x2="95" y2="10" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="285" y1="0" x2="285" y2="10" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="95" y1="10" x2="285" y2="10" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="190" y1="10" x2="190" y2="20" stroke="#cbd5e1" strokeWidth="1" />
              </svg>
            </div>

            {/* Node 4: Book Meeting */}
            <div className="flex h-10 w-full items-center justify-center rounded-2xl border border-[#bfdbfe] bg-[#e6f0fd] text-[13.5px] font-medium text-[#1d4ed8] shadow-xs">
              Book Meeting
            </div>

            {/* Connector */}
            <div className="h-3.5 w-[1px] bg-[#cbd5e1]" />

            {/* Node 5: Reminder */}
            <div className="flex h-10 w-full items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white text-[13.5px] font-medium text-[#0a1128] shadow-xs">
              Reminder
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkflowBuilder;