import React from "react";
import { Megaphone, Sparkles, MessageSquare, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Megaphone,
    label: "ATTRACT",
    title: "Turn attention into conversations.",
    description:
      "Campaigns, lead capture, segmentation, personalization, retargeting and automated follow-ups.",
  },
  {
    icon: Sparkles,
    label: "CONVERT",
    title: "Turn conversations into customers.",
    description:
      "AI qualification, lead scoring, appointments, follow-ups, routing and human handoff.",
  },
  {
    icon: MessageSquare,
    label: "SERVE",
    title: "Turn support into a better experience.",
    description:
      "FAQs, appointments, orders, payments, service requests, notifications and customer updates.",
  },
];

export const ProductJourney = () => {
  return (
    <section
      id="product-journey"
      className="w-full bg-white pt-6 pb-14 px-4 sm:pt-10 sm:pb-18 sm:px-6 lg:pt-12 lg:pb-20 lg:px-8 border-b border-[#e2e8f0]"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* ── Top Pill Badge (Shifted Upwards) ── */}
        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
            PRODUCT JOURNEY
          </span>
        </div>

        {/* ── Heading & Subtitle (Shifted Upwards) ── */}
        <div className="mt-3.5 text-center sm:mt-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a1128] sm:text-4xl md:text-[42px] md:leading-[1.18]">
            One conversation. A
            <br />
            complete customer journey.
          </h2>

          <p className="mx-auto mt-2.5 max-w-2xl text-[14px] leading-relaxed text-[#64748b] sm:text-[15px]">
            Sandesa doesn't just send messages. It helps your business move
            conversations forward.
          </p>
        </div>

        {/* ── Flow Diagram ── */}
        <div className="mx-auto mt-8 flex max-w-[640px] flex-col items-center sm:mt-10">
          
          {/* Node 1: Ads / Website */}
          <div className="flex h-10 w-full items-center justify-center rounded-xl border border-[#e2e8f0] bg-white text-center text-[13px] font-medium text-[#0f172a] shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
            Ads / Website / QR / Social
          </div>

          {/* Connector Line */}
          <div className="h-4.5 w-[1px] bg-[#cbd5e1]" />

          {/* Node 2: WhatsApp */}
          <div className="flex h-10 w-full items-center justify-center rounded-xl border border-[#bbf7d0] bg-[#dcfce7] text-center text-[13px] font-medium text-[#0f172a]">
            WhatsApp
          </div>

          {/* Connector Line */}
          <div className="h-4.5 w-[1px] bg-[#cbd5e1]" />

          {/* Node 3: Sandesa AI */}
          <div className="flex h-10 w-full items-center justify-center rounded-xl border border-[#bfdbfe] bg-[#eff6ff] text-center text-[13px] font-semibold text-[#1d4ed8]">
            Sandesa AI
          </div>

          {/* Connector Line */}
          <div className="h-4.5 w-[1px] bg-[#cbd5e1]" />

          {/* 3 Split Buttons */}
          <div className="grid w-full grid-cols-3 gap-4">
            {["Attract", "Convert", "Serve"].map((label) => (
              <div
                key={label}
                className="flex h-9 w-full items-center justify-center rounded-xl border border-[#e2e8f0] bg-white text-center text-[12.5px] font-medium text-[#0f172a] shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ── 3 Action Cards ── */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.label}
                className="group flex flex-col justify-between rounded-[22px] border border-[#e8edf4] bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/30 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
              >
                <div>
                  {/* Icon & Label */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0a1128] text-white">
                      <Icon size={17} strokeWidth={2.2} />
                    </div>
                    <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                      {card.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-[15.5px] font-bold leading-snug text-[#0a1128]">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#64748b]">
                    {card.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="mt-6 flex items-center gap-1.5 self-start text-[13px] font-semibold text-[#0a1128] transition-colors duration-200 group-hover:text-[#2563eb]">
                  <span>Explore</span>
                  <ArrowRight
                    size={14}
                    strokeWidth={2.4}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProductJourney;