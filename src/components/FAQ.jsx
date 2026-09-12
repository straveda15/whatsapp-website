import React, { useState } from "react";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Sandesa?",
    answer:
      "Sandesa is an AI-powered WhatsApp automation platform that helps businesses manage conversations, qualify leads, automate follow-ups, and provide customer support.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. Sandesa is designed to be easy to use. You can create workflows, manage conversations, and automate customer interactions without advanced technical knowledge.",
  },
  {
    question: "Can I run WhatsApp campaigns?",
    answer:
      "Yes. Sandesa supports WhatsApp campaigns that help businesses engage customers, send updates, and follow up with leads at the right time.",
  },
  {
    question: "Can Sandesa integrate with my CRM?",
    answer:
      "Yes. Sandesa can connect with your CRM and other business tools so that customer conversations and lead information can be managed in one workflow.",
  },
  {
    question: "Can I automate follow-ups?",
    answer:
      "Yes. You can automate follow-ups based on customer actions, conversations, and workflow conditions so that important leads do not get missed.",
  },
  {
    question: "Can I build workflows?",
    answer:
      "Yes. Sandesa includes a workflow builder that lets you create automated customer journeys based on your business requirements.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full border-t border-[#e2e8f0] bg-white px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-10"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* ── Top Pill Badge ── */}
        <div className="-mt-4 flex justify-start">
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2563eb] sm:text-[11px]">
            FAQ
          </span>
        </div>

        {/* ── FAQ Content ── */}
        <div className="mt-4 grid items-start gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
          {/* ── Left Heading ── */}
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#0a1128] sm:text-4xl md:text-[42px] md:leading-[1.18]">
              Frequently
              <br />
              Asked Questions
            </h2>

            <p className="mt-3 max-w-2xl text-[14px] leading-[1.65] text-[#64748b] sm:mt-4 sm:text-[15.5px]">
              Everything you need to know about Sandesa.
            </p>
          </div>

          {/* ── FAQ List ── */}
          <div className="w-full min-w-0">
            <div className="space-y-1.5 sm:space-y-2.5">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden bg-white transition-all duration-200"
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => handleToggle(index)}
                        className="flex w-full cursor-pointer items-center justify-between gap-4 py-2.5 text-left text-[14px] font-semibold text-[#0a1128] transition-colors focus-visible:outline-none sm:py-3.5 sm:text-[15.5px]"
                      >
                        <span>{faq.question}</span>

                        <ChevronDown
                          size={15}
                          strokeWidth={2}
                          className={`shrink-0 text-[#64748b] transition-transform duration-200 sm:h-4 sm:w-4 ${
                            isOpen ? "rotate-180 text-[#2563eb]" : ""
                          }`}
                        />
                      </button>
                    </h3>

                    <div
                      className={`grid transition-all duration-200 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pb-3 sm:pb-4"
                          : "grid-rows-[0fr] opacity-0 pb-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[13.5px] leading-[1.65] text-[#64748b] sm:text-[15.5px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;