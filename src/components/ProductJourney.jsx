import React from "react";
import {
  Megaphone,
  Sparkles,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

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

const ProductJourney = () => {
  return (
    <section
      id="product-journey"
      className="w-full border-y border-[#e5eaf1] bg-[#f8fbff] px-6 py-20 sm:px-8 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* ── Top Pill Badge ── */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-4 py-1 text-[11px] font-medium uppercase tracking-wider text-[#1d64ec]">
            PRODUCT JOURNEY
          </span>
        </div>

        {/* ── Heading ── */}
        <h2 className="text-center text-[30px] font-bold leading-[1.15] tracking-tight text-[#0f172a] sm:text-[38px] lg:text-[44px]">
          One conversation. A
          <br />
          complete customer journey.
        </h2>

        {/* ── Subtitle ── */}
        <p className="mx-auto mt-4 max-w-[680px] text-center text-[13.5px] leading-relaxed text-[#64748b] sm:text-[14.5px]">
          Sandesa doesn't just send messages. It helps your business move
          conversations forward.
        </p>

        {/* ── Flow Diagram ── */}
        <div className="mx-auto mt-14 flex max-w-[540px] flex-col items-center">

          {/* Node 1 */}
          <div className="flex w-full items-center justify-center rounded-[16px] border border-[#eef2f6] bg-white py-2.5 text-[13px] font-semibold text-[#0f172a] shadow-2xs">
            Ads / Website / QR / Social
          </div>

          {/* Connector */}
          <div className="h-4 w-[1px] bg-[#e2e8f0]" />

          {/* Node 2 */}
          <div className="flex w-full items-center justify-center rounded-[16px] border border-[#bbf7d0] bg-[#dcfce7] py-2.5 text-[13px] font-semibold text-[#15803d]">
            WhatsApp
          </div>

          {/* Connector */}
          <div className="h-4 w-[1px] bg-[#e2e8f0]" />

          {/* Node 3 */}
          <div className="flex w-full items-center justify-center rounded-[16px] border border-[#d8e6fe] bg-[#ebf3fe] py-2.5 text-[13px] font-semibold text-[#1d64ec]">
            Sandesa AI
          </div>

          {/* Connector */}
          <div className="h-4 w-[1px] bg-[#e2e8f0]" />

          {/* Split Flow */}
          <div className="grid w-full grid-cols-3 gap-3">
            {["Attract", "Convert", "Serve"].map((label) => (
              <div
                key={label}
                className="flex items-center justify-center rounded-[14px] border border-[#eef2f6] bg-white py-2 text-[12.5px] font-semibold text-[#0f172a] shadow-2xs"
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ── 3 Bottom Action Cards ── */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.label}
                className="group flex flex-col justify-between rounded-[24px] border border-[#eef2f6] bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.05)] sm:p-7"
              >
                <div>

                  {/* Icon & Label */}
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0d1627] text-white shadow-2xs">
                      <Icon size={15} strokeWidth={2.2} />
                    </div>

                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#1d64ec]">
                      {card.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-[15px] font-bold leading-snug text-[#0f172a]">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[12.5px] leading-[1.6] text-[#64748b]">
                    {card.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="mt-7 flex items-center gap-1 text-[12.5px] font-semibold text-[#0f172a] transition-colors group-hover:text-[#1d64ec]">
                  <span>Explore</span>

                  <ArrowRight
                    size={13}
                    strokeWidth={2.2}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
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