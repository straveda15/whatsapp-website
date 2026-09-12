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
      className="w-full border-y border-[#e2e8f0] bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* ── Top Pill Badge ── */}
        <div className="mt-0 flex justify-center sm:-mt-8">
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2563eb] sm:px-4 sm:text-[11px]">
            ANALYTICS
          </span>
        </div>

        {/* ── Section Heading & Subtitle ── */}
        <div className="mx-auto mt-4 flex w-full flex-col items-center text-center sm:mt-5">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a1128] sm:text-4xl md:text-[42px] md:leading-[1.18]">
            Know what your conversations are actually doing
          </h2>

          <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-[#64748b] sm:text-[15px]">
            Conversations, leads, appointments, pipeline, AI resolution and
            response time in one view.
          </p>
        </div>

        {/* ── Dashboard Card Mockup ── */}
        <div className="mt-7 w-full overflow-hidden rounded-[22px] border border-[#e2e8f0] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:mt-10 sm:rounded-[26px]">
          {/* Browser Header Bar */}
          <div className="flex items-center justify-between border-b border-[#e2e8f0] bg-[#f8fafc] px-3 py-3 sm:px-6">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff7675]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#fdcb6e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#00b894]" />
            </div>

            <span className="max-w-[190px] truncate rounded-full border border-[#e2e8f0] bg-white px-3 py-1 text-[9.5px] text-[#64748b] shadow-2xs sm:max-w-none sm:px-4 sm:text-[11px]">
              app.sandesa.ai/analytics
            </span>

            <div className="w-6 sm:w-8" />
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
            <div className="min-w-0 p-3 sm:p-6">
              {/* Title + Filter */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-[14px] font-bold text-[#0a1128] sm:text-[15px]">
                    Conversation Performance
                  </h3>

                  <p className="mt-0.5 text-[10px] text-[#64748b] sm:text-[11px]">
                    Last 30 days · demo data
                  </p>
                </div>

                <div className="flex w-fit rounded-full border border-[#e2e8f0] bg-[#f8fafc] p-1 text-[10px] font-semibold sm:text-[11px]">
                  <span className="rounded-full px-2.5 py-0.5 text-[#64748b] sm:px-3">
                    7D
                  </span>

                  <span className="rounded-full bg-white px-2.5 py-0.5 text-[#0a1128] shadow-[0_1px_4px_rgba(0,0,0,0.06)] sm:px-3">
                    30D
                  </span>

                  <span className="rounded-full px-2.5 py-0.5 text-[#64748b] sm:px-3">
                    90D
                  </span>
                </div>
              </div>

              {/* 4 Stats Cards */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[18px] border border-[#e2e8f0] bg-white p-3 shadow-2xs sm:rounded-[20px] sm:p-3.5"
                  >
                    <p className="text-[10px] font-medium text-[#64748b] sm:text-[11.5px]">
                      {stat.label}
                    </p>

                    <p className="mt-1 text-[15px] font-bold text-[#0a1128] sm:text-[17px]">
                      {stat.value}
                    </p>

                    <p className="mt-0.5 text-[10px] font-semibold text-[#16a34a] sm:text-[11px]">
                      {stat.growth}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart Bars */}
              <div className="mt-3.5 rounded-2xl border border-[#e2e8f0] p-3 sm:p-4">
                <div className="flex h-20 items-end gap-1 sm:h-24 sm:gap-1.5">
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
              <div className="mt-3.5 grid grid-cols-3 gap-1.5 sm:gap-2.5">
                {pipelineStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-[#e2e8f0] bg-white p-2 text-center sm:p-2.5 sm:text-left"
                  >
                    <p className="text-[9px] font-medium text-[#64748b] sm:text-[10.5px]">
                      {stat.label}
                    </p>

                    <p className="mt-0.5 text-[11.5px] font-bold text-[#0a1128] sm:text-[13px]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Conversations Table */}
              <div className="mt-3.5 w-full overflow-x-auto rounded-2xl border border-[#e2e8f0]">
                <table className="w-full min-w-[430px] text-left text-[10.5px] sm:text-[11.5px]">
                  <thead className="bg-[#f8fafc] text-[#64748b]">
                    <tr>
                      <th className="px-3 py-2 font-semibold sm:px-3.5">
                        Contact
                      </th>

                      <th className="hidden px-3.5 py-2 font-semibold sm:table-cell">
                        Intent
                      </th>

                      <th className="px-3 py-2 font-semibold sm:px-3.5">
                        Stage
                      </th>

                      <th className="hidden px-3.5 py-2 font-semibold sm:table-cell">
                        Owner
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {conversations.map((conv) => (
                      <tr
                        key={conv.contact}
                        className="border-t border-[#edf2f7]"
                      >
                        <td className="px-3 py-2 font-bold text-[#0a1128] sm:px-3.5">
                          {conv.contact}
                        </td>

                        <td className="hidden px-3.5 py-2 text-[#64748b] sm:table-cell">
                          {conv.intent}
                        </td>

                        <td className="px-3 py-2 sm:px-3.5">
                          <span
                            className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-bold sm:px-2.5 sm:text-[10px] ${
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

                        <td className="hidden px-3.5 py-2 text-[#64748b] sm:table-cell">
                          {conv.owner}
                        </td>
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