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
    question: "Can multiple employees use Sandesa?",
    answer:
      "Yes. Multiple employees can use Sandesa through team inboxes and shared workspaces, making it easy for teams to manage customer conversations together.",
  },
  {
    question: "Can AI transfer conversations to humans?",
    answer:
      "Yes. Sandesa AI can automatically hand over conversations to a human team member when a request is complex or requires personal assistance.",
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
      className="w-full bg-white py-8 px-5 sm:px-8 sm:py-10 lg:px-12 lg:py-14 border-t border-[#e2e8f0]"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* ── Top Pill Badge ── */}
        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
            FAQ
          </span>
        </div>

        {/* ── Heading ── */}
        <div className="mt-4 text-center sm:mt-5">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a1128] sm:text-4xl md:text-[42px] md:leading-[1.18]">
            Questions, answered
          </h2>
        </div>

        {/* ── FAQ List ── */}
        <div className="mx-auto mt-8 max-w-[820px] sm:mt-10">
          <div className="space-y-2.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border bg-white px-5 transition-all duration-200 ${
                    isOpen
                      ? "border-[#2563eb]/40 shadow-[0_4px_20px_rgba(37,99,235,0.06)]"
                      : "border-[#e2e8f0] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#cbd5e1]"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => handleToggle(index)}
                      className="flex w-full cursor-pointer items-center justify-between py-3.5 text-left text-[15.5px] font-semibold text-[#0a1128] transition-colors focus-visible:outline-none"
                    >
                      <span>{faq.question}</span>

                      <ChevronDown
                        size={16}
                        strokeWidth={2}
                        className={`shrink-0 text-[#64748b] transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#2563eb]" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    className={`grid transition-all duration-200 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-4"
                        : "grid-rows-[0fr] opacity-0 pb-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[13px] leading-relaxed text-[#64748b]">
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
    </section>
  );
};

export default FAQ;