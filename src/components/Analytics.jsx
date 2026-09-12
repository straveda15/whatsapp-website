import React from "react";
import {
  LayoutGrid,
  Inbox,
  Users,
  Zap,
  MessageSquare,
  Bot,
  ChartColumn,
  Settings,
} from "lucide-react";

const Analytics = () => {
  const navigationItems = [
    { icon: LayoutGrid, label: "Overview" },
    { icon: Inbox, label: "Team Inbox" },
    { icon: Users, label: "Leads" },
    { icon: Zap, label: "Workflows" },
    { icon: MessageSquare, label: "Campaigns" },
    { icon: Bot, label: "AI Agent" },
    { icon: ChartColumn, label: "Analytics", active: true },
    { icon: Settings, label: "Settings" },
  ];

  const stats = [
    {
      label: "Conversations",
      value: "12,480",
      growth: "+18%",
    },
    {
      label: "Leads",
      value: "3,214",
      growth: "+24%",
    },
    {
      label: "Qualified Leads",
      value: "1,096",
      growth: "+31%",
    },
    {
      label: "Appointments",
      value: "412",
      growth: "+12%",
    },
  ];

  const pipelineStats = [
    {
      label: "Pipeline",
      value: "₹4.8 Cr",
    },
    {
      label: "AI Resolution",
      value: "72%",
    },
    {
      label: "Response Time",
      value: "8 sec",
    },
  ];

  const conversations = [
    {
      contact: "Rahul Mehta",
      intent: "2BHK · Baner",
      stage: "Qualified",
      stageType: "qualified",
      owner: "Sales · Neha",
    },
    {
      contact: "Anita Rao",
      intent: "Site visit",
      stage: "Appointment",
      stageType: "appointment",
      owner: "Sales · Vikram",
    },
    {
      contact: "Imran Shaikh",
      intent: "Pricing",
      stage: "Nurture",
      stageType: "nurture",
      owner: "AI Agent",
    },
    {
      contact: "Priya Nair",
      intent: "Loan help",
      stage: "Handoff",
      stageType: "handoff",
      owner: "Support · Ravi",
    },
  ];

  const chartHeights = [
    38, 52, 44, 66, 58, 78, 72, 88, 64, 92, 80, 96,
  ];

  return (
    <section
      id="analytics"
      className="w-full bg-white py-8 px-5 sm:px-8 sm:py-10 lg:px-12 lg:py-14 border-y border-[#e2e8f0]"
    >
      <div className="mx-auto max-w-6xl">

        {/* ── Top Pill Badge ── */}
        <div className="-mt-8 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
            ANALYTICS
          </span>
        </div>

        {/* ── Section Heading & Subtitle ── */}
       <div className="mx-auto mt-4 flex w-full flex-col items-center text-center sm:mt-5">
  <h2 className="text-3xl font-bold tracking-tight text-[#0a1128] sm:text-4xl md:text-[42px] md:leading-[1.18]">
  Know what your conversations are actually doing
</h2>


          <p className="mt-3 text-[14px] leading-relaxed text-[#64748b] sm:text-[15px]">
            Conversations, leads, appointments, pipeline, AI
            resolution and response time in one view.
          </p>
        </div>

        {/* ── Dashboard Card Mockup ── */}
        <div className="mt-8 overflow-hidden rounded-[26px] border border-[#e2e8f0] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:mt-10">

          {/* Browser Header Bar */}
          <div className="flex items-center justify-between border-b border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 sm:px-6">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff7675]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#fdcb6e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#00b894]" />
            </div>

            <span className="rounded-full border border-[#e2e8f0] bg-white px-4 py-1 text-[11px] text-[#64748b] shadow-2xs">
              app.sandesa.ai/analytics
            </span>

            <div className="w-8" />
          </div>

          <div className="grid md:grid-cols-[13rem_1fr]">

            {/* Sidebar (Desktop Only) */}
            <aside className="hidden border-r border-[#e2e8f0] bg-[#f8fafc] p-4 md:block">
              <p className="px-2 text-[10.5px] font-bold uppercase tracking-wider text-slate-400">
                Workspace
              </p>

              <nav className="mt-3 space-y-1">
                {navigationItems.map(({ icon: Icon, label, active }) => (
                  <span
                    key={label}
                    className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-[12.5px] font-medium transition-colors ${
                      active
                        ? "bg-white text-[#2563eb] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                        : "text-[#64748b] hover:text-[#0a1128]"
                    }`}
                  >
                    <Icon size={16} strokeWidth={2} />
                    {label}
                  </span>
                ))}
              </nav>
            </aside>

            {/* Dashboard Content Area */}
            <div className="p-4 sm:p-6">

              {/* Title + Filter */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-[15px] font-bold text-[#0a1128]">
                    Conversation Performance
                  </h3>
                  <p className="mt-0.5 text-[11px] text-[#64748b]">
                    Last 30 days · demo data
                  </p>
                </div>

                <div className="flex rounded-full border border-[#e2e8f0] bg-[#f8fafc] p-1 text-[11px] font-semibold">
                  <span className="rounded-full px-3 py-0.5 text-[#64748b]">
                    7D
                  </span>
                  <span className="rounded-full bg-white px-3 py-0.5 text-[#0a1128] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
                    30D
                  </span>
                  <span className="rounded-full px-3 py-0.5 text-[#64748b]">
                    90D
                  </span>
                </div>
              </div>

              {/* 4 Stats Cards */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[20px] border border-[#e2e8f0] bg-white p-3.5 shadow-2xs"
                  >
                    <p className="text-[11.5px] font-medium text-[#64748b]">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-[17px] font-bold text-[#0a1128]">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[11px] font-semibold text-[#16a34a]">
                      {stat.growth}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart Bars */}
              <div className="mt-3.5 rounded-2xl border border-[#e2e8f0] p-4">
                <div className="flex h-20 items-end gap-1.5 sm:h-24">
                  {chartHeights.map((height, index) => (
                    <span
                      key={index}
                      className={`flex-1 rounded-t-md transition-all ${
                        index >= 9
                          ? "bg-[#2563eb]"
                          : "bg-[#2563eb]/25"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Pipeline Stats */}
              <div className="mt-3.5 grid grid-cols-3 gap-2.5">
                {pipelineStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-[#e2e8f0] bg-white p-2.5 text-center sm:text-left"
                  >
                    <p className="text-[10.5px] font-medium text-[#64748b]">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-[13px] font-bold text-[#0a1128]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Conversations Table */}
              <div className="mt-3.5 overflow-hidden rounded-2xl border border-[#e2e8f0]">
                <table className="w-full text-left text-[11.5px]">
                  <thead className="bg-[#f8fafc] text-[#64748b]">
                    <tr>
                      <th className="px-3.5 py-2 font-semibold">Contact</th>
                      <th className="hidden px-3.5 py-2 font-semibold sm:table-cell">Intent</th>
                      <th className="px-3.5 py-2 font-semibold">Stage</th>
                      <th className="hidden px-3.5 py-2 font-semibold sm:table-cell">Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {conversations.map((conv) => (
                      <tr key={conv.contact} className="border-t border-[#edf2f7]">
                        <td className="px-3.5 py-2 font-bold text-[#0a1128]">{conv.contact}</td>
                        <td className="hidden px-3.5 py-2 text-[#64748b] sm:table-cell">{conv.intent}</td>
                        <td className="px-3.5 py-2">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                              conv.stageType === "qualified"
                                ? "bg-[#dafbe4] text-[#15803d]"
                                : conv.stageType === "nurture"
                                ? "bg-[#fff7ed] text-[#c2410c]"
                                : "bg-[#eff6ff] text-[#2563eb]"
                            }`}
                          >
                            {conv.stage}
                          </span>
                        </td>
                        <td className="hidden px-3.5 py-2 text-[#64748b] sm:table-cell">{conv.owner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Analytics;