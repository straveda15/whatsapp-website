import React, { useState } from "react";
import {
  LayoutGrid,
  Inbox,
  Users,
  Zap,
  Megaphone,
  Bot,
  BarChart2,
  Settings,
} from "lucide-react";

const sidebarNav = [
  { icon: LayoutGrid, label: "Overview" },
  { icon: Inbox, label: "Team Inbox" },
  { icon: Users, label: "Leads" },
  { icon: Zap, label: "Workflows" },
  { icon: Megaphone, label: "Campaigns" },
  { icon: Bot, label: "AI Agent" },
  { icon: BarChart2, label: "Analytics", active: true },
  { icon: Settings, label: "Settings" },
];

const topKpis = [
  { label: "Conversations", value: "12,480", change: "+18%" },
  { label: "Leads", value: "3,214", change: "+24%" },
  { label: "Qualified Leads", value: "1,096", change: "+31%" },
  { label: "Appointments", value: "412", change: "+12%" },
];

const barHeights = [45, 62, 52, 70, 60, 85, 78, 92, 70, 98, 88, 100];

const bottomKpis = [
  { label: "Pipeline", value: "₹4.8 Cr" },
  { label: "AI Resolution", value: "72%" },
  { label: "Response Time", value: "8 sec" },
];

const tableRows = [
  {
    contact: "Rahul Mehta",
    intent: "2BHK · Baner",
    stage: "Qualified",
    stageColor: "bg-[#eaf8ee] text-[#16a34a]",
    owner: "Sales · Neha",
  },
  {
    contact: "Anita Rao",
    intent: "Site visit",
    stage: "Appointment",
    stageColor: "bg-[#ebf3fe] text-[#1d64ec]",
    owner: "Sales · Vikram",
  },
  {
    contact: "Imran Shaikh",
    intent: "Pricing",
    stage: "Nurture",
    stageColor: "bg-[#fef3e2] text-[#d97706]",
    owner: "AI Agent",
  },
  {
    contact: "Priya Nair",
    intent: "Loan help",
    stage: "Handoff",
    stageColor: "bg-[#e0f2fe] text-[#0284c7]",
    owner: "Support · Ravi",
  },
];

const Analytics = () => {
  const [activeRange, setActiveRange] = useState("30D");

  return (
    <section
      id="analytics"
      className="w-full border-y border-[#e8eef5] bg-[#f8fbff] px-4 py-20 sm:px-6 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">

        {/* Section Badge */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-4 py-1 text-[11px] font-medium uppercase tracking-wider text-[#1d64ec]">
            ANALYTICS
          </span>
        </div>

     

         {/* ── Heading ── */}
        <h2 className="text-center text-[30px] font-bold leading-[1.15] tracking-tight text-[#0f172a] sm:text-[38px] lg:text-[44px]">
             Know what your conversations
          <br />
          are actually doing.
         
        </h2>

        {/* Small Divider */}
        <div className="mx-auto mt-8 h-px w-[100px] bg-[#dbe5ef]" />

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-[680px] text-center text-[13px] font-normal leading-relaxed text-[#64748b] sm:text-[14px]">
          Conversations, leads, qualified leads, appointments, pipeline, AI
          resolution and response time — in one view.
        </p>

        {/* SaaS Browser Mockup */}
        <div className="mt-12 overflow-hidden rounded-[26px] border border-[#e2e8f0] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.05)]">

          {/* Browser Header */}
          <div className="flex items-center justify-between border-b border-[#f1f5f9] bg-[#f8fafc] px-5 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>

            <div className="rounded-full border border-[#e2e8f0] bg-white px-4 py-0.5 text-[10px] font-normal text-slate-400">
              app.sandesa.ai/analytics
            </div>

            <div className="w-10" />
          </div>

          {/* Sidebar + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[210px_1fr]">

            {/* Sidebar */}
            <div className="hidden border-r border-[#f1f5f9] bg-white p-5 lg:block">
              <p className="mb-3.5 px-3 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                WORKSPACE
              </p>

              <nav className="space-y-1">
                {sidebarNav.map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2.5 rounded-full px-3.5 py-2 text-[12px] transition-all ${
                      active
                        ? "border border-[#e2e8f0] bg-[#f8fafc] font-medium text-[#0f172a]"
                        : "font-normal text-slate-500 hover:bg-[#f8fafc] hover:text-[#0f172a]"
                    }`}
                  >
                    <Icon
                      size={14}
                      className={
                        active ? "text-[#1d64ec]" : "text-slate-400"
                      }
                      strokeWidth={1.8}
                    />
                    <span>{label}</span>
                  </div>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="space-y-5 bg-white p-5 sm:p-7">

              {/* Title + Filter */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-[14px] font-medium text-[#0f172a]">
                    Conversation Performance
                  </h3>

                  <p className="text-[11px] font-normal text-slate-400">
                    Last 30 days · demo data
                  </p>
                </div>

                {/* Period Filter */}
                <div className="flex items-center rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-0.5 text-[10.5px] font-normal text-slate-500">
                  {["7D", "30D", "90D"].map((r) => (
                    <button
                      key={r}
                      onClick={() => setActiveRange(r)}
                      className={`rounded-md px-2.5 py-0.5 transition-all ${
                        activeRange === r
                          ? "bg-white font-medium text-[#0f172a] shadow-2xs"
                          : "hover:text-[#0f172a]"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Top KPI Cards */}
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {topKpis.map(({ label, value, change }) => (
                  <div
                    key={label}
                    className="rounded-[17px] border border-[#f1f5f9] bg-[#fbfcfe] p-4"
                  >
                    <p className="text-[10.5px] font-normal text-slate-400">
                      {label}
                    </p>

                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="text-[17px] font-medium text-[#0f172a]">
                        {value}
                      </span>

                      <span className="text-[10px] font-medium text-[#16a34a]">
                        {change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="rounded-[19px] border border-[#f1f5f9] bg-[#fbfcfe] p-5">
                <div className="flex h-36 items-end justify-between gap-2.5 pt-3">
                  {barHeights.map((h, i) => (
                    <div
                      key={i}
                      className="flex h-full flex-1 flex-col items-center justify-end"
                    >
                      <div
                        style={{ height: `${h}%` }}
                        className={`w-full max-w-[34px] rounded-[6px] transition-all duration-300 ${
                          i >= 9 ? "bg-[#1d64ec]" : "bg-[#c2dbfe]"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom KPI Cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {bottomKpis.map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-[17px] border border-[#f1f5f9] bg-[#fbfcfe] p-4"
                  >
                    <p className="text-[10.5px] font-normal text-slate-400">
                      {label}
                    </p>

                    <p className="mt-1 text-[16px] font-medium text-[#0f172a]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Leads Table */}
              <div className="overflow-x-auto rounded-[17px] border border-[#f1f5f9]">
                <table className="w-full text-left text-[12px]">
                  <thead>
                    <tr className="border-b border-[#f1f5f9] bg-[#f8fafc] text-[10.5px] font-medium text-slate-400">
                      <th className="px-4 py-3">Contact</th>
                      <th className="px-4 py-3">Intent</th>
                      <th className="px-4 py-3">Stage</th>
                      <th className="px-4 py-3">Owner</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#f8fafc]">
                    {tableRows.map((row) => (
                      <tr
                        key={row.contact}
                        className="transition-colors hover:bg-[#f8fafc]"
                      >
                        <td className="px-4 py-3 font-medium text-[#0f172a]">
                          {row.contact}
                        </td>

                        <td className="px-4 py-3 font-normal text-slate-500">
                          {row.intent}
                        </td>

                        <td className="px-4 py-3">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${row.stageColor}`}
                          >
                            {row.stage}
                          </span>
                        </td>

                        <td className="px-4 py-3 font-normal text-slate-500">
                          {row.owner}
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