import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Sandesa?",
    answer:
      "Sandesa is an AI-powered WhatsApp automation platform that turns everyday conversations into structured customer journeys — capturing leads, qualifying them, booking appointments and supporting customers.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No technical knowledge is required. Sandesa comes with ready-to-use templates, a visual workflow builder, and a dedicated onboarding team to set up your entire system in minutes.",
  },
  {
    question: "Can multiple employees use Sandesa?",
    answer:
      "Yes! Sandesa includes a shared team inbox where multiple team members can view chats, take over conversations from AI, assign leads, and collaborate seamlessly from one number.",
  },
  {
    question: "Can AI transfer conversations to humans?",
    answer:
      "Absolutely. Whenever a lead is hot, asks a complex custom request, or requests a human agent, Sandesa instantly notifies your sales or support reps with the complete context.",
  },
  {
    question: "Can I run WhatsApp campaigns?",
    answer:
      "Yes, you can broadcast targeted, segmented campaigns on WhatsApp to previous leads and customers, and let AI automatically handle all incoming replies in real-time.",
  },
  {
    question: "Can Sandesa integrate with my CRM?",
    answer:
      "Yes, Sandesa integrates seamlessly with leading CRMs (HubSpot, Salesforce, Zoho, LeadSquared), Google Sheets, Webhooks, and Zapier for real-time lead sync.",
  },
  {
    question: "Can I automate follow-ups?",
    answer:
      "Yes, you can schedule automated smart nudges and multi-step follow-up sequences based on customer interest, stage, and custom timelines.",
  },
  {
    question: "Can I build workflows?",
    answer:
      "Yes, our visual workflow builder allows you to drag-and-drop conversational logic, qualification rules, conditional branching, and automatic action triggers easily.",
  },
];

const FAQ = () => {
  // First item open by default to match the reference screenshot exactly
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#f8fbff] px-6 py-20 sm:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-[860px]">

        {/* ── Top Pill Badge ── */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-[#d8e6fe] bg-[#ebf3fe] px-4 py-1 text-[11px] font-medium uppercase tracking-wider text-[#1d64ec]">
            FAQ
          </span>
        </div>

        {/* ── Heading (Reduced Font Weight) ── */}
        <h2 className="text-center text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.15] tracking-tight text-[#0f172a]">
          Questions, answered.
        </h2>

        {/* ── FAQ Accordion List ── */}
        <div className="mt-12 space-y-3 sm:space-y-3.5">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={question}
                className="overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-[#e2e8f0]"
              >
                {/* Question Button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-4.5 sm:px-7 sm:py-5 text-left transition-colors cursor-pointer"
                >
                  <span className="text-[14px] sm:text-[14.5px] font-bold text-[#0f172a]">
                    {question}
                  </span>
                  <ChevronDown
                    size={17}
                    className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-slate-600" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-6 pb-5 sm:px-7 sm:pb-6 text-[13px] sm:text-[13.5px] leading-[1.65] text-[#64748b]">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;