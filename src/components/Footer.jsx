import React from "react";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/logosandesa.png";
import stravedaLogo from "../assets/Straveda Logo.png"

const footerLinks = {
  Explore: [
    { label: "Home", id: "hero" },
    { label: "The Problem", id: "problem" },
    { label: "Why Sandesa", id: "why-sandesa" },
    { label: "See It in Action", id: "see-in-action" },
    { label: "Supported Industries", id: "industries" },
    { label: "Use Cases", id: "use-cases" },
  ],

  Platform: [
    { label: "Product Journey", id: "product-journey" },
    { label: "AI Agent", id: "ai-agent" },
    { label: "Human + AI Inbox", id: "human-ai" },
    { label: "Workflow Builder", id: "workflow-builder" },
    { label: "Marketing Campaigns", id: "marketing" },
    { label: "Analytics & Reports", id: "analytics" },
  ],

  Resources: [
    { label: "Platform Comparison", id: "comparison" },
    { label: "Pricing Plans", id: "pricing" },
    { label: "Frequently Asked Questions", id: "faq" },
    { label: "Get Started Free", id: "final-cta" },
  ],
};

const socials = [
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: " https://www.linkedin.com/showcase/sandesa-ai/",
    color: "text-[#0A66C2]",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: " https://www.instagram.com/sandesa.ai/",
    color: "text-[#E4405F]",
  },
];


const Footer = () => {
  /* =========================
     Smooth Scroll To Section
  ========================= */
  const scrollToSection = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    } else {
      window.location.hash = targetId;
    }
  };

  /* =========================
     Back To Top
  ========================= */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full border-t border-[#d8e6fe] bg-[#f0f6ff] px-5 pt-14 pb-8 text-[#0a1128] sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1240px]">

        {/* ── Top Row: Back to Top ── */}
        <div className="mb-8 flex justify-end">
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#64748b] transition-colors hover:text-[#2563eb]"
          >
            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-1"
            />
            <span>Back to Top</span>
          </button>
        </div>

        {/* ── Main Footer Grid ── */}
        <div className="grid grid-cols-1 gap-10 border-b border-[#d8e6fe] pb-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">

          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-1">
            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              className="mb-4 flex cursor-pointer items-center gap-2.5"
            >
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_2px_8px_rgba(37,99,235,0.15)]">
                <img
                  src={logo}
                  alt="Sandesa"
                  className="h-full w-full object-contain p-1"
                />
              </div>

              <span className="text-xl font-bold tracking-tight text-[#0a1128]">
                Sandesa<span className="text-[#2563eb]"></span>
              </span>
            </button>

            <p className="max-w-[240px] text-[13px] leading-relaxed text-[#64748b]">
              AI-powered WhatsApp automation that turns conversations
              into pipeline, customers, and revenue.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2.5">
             {socials.map(({ Icon, label, href, color }) => (
  <a
    key={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`flex h-8 w-8 items-center justify-center rounded-full border border-[#d8e6fe] bg-white ${color} transition-all duration-200 hover:scale-105`}
  >
    <Icon />
  </a>
))}
            </div>
          </div>

          {/* Columns 2, 3, 4: Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                {category}
              </h4>

              <ul className="space-y-2.5">
                {links.map(({ label, id }) => (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(id)}
                      className="text-left text-[13px] text-[#64748b] transition-colors hover:text-[#0a1128]"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Contact Us */}
        
<div id="contact-us">
  <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
    Contact Us
  </h4>

            <div className="space-y-3.5">
              {/* Email */}
              <a
                href="mailto:sandesa@gmail.com"
                className="flex items-start gap-2.5 text-[13px] text-[#64748b] transition-colors hover:text-[#0a1128]"
              >
                <Mail size={15} className="mt-0.5 shrink-0 text-[#2563eb]" />
                <span>sandesa@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+917666534888"
                className="flex items-start gap-2.5 text-[13px] text-[#64748b] transition-colors hover:text-[#0a1128]"
              >
                <Phone size={15} className="mt-0.5 shrink-0 text-[#2563eb]" />
                <span>+91 76665 34888</span>
              </a>

                {/* Powered By Straveda */}
<a
  href="https://stravedatech.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 flex w-full max-w-[270px] flex-col items-center justify-center transition-all duration-200 hover:scale-[1.02]"
>
  <div className="flex w-[250px] items-center justify-center">
    <img
      src={stravedaLogo}
      alt="Straveda"
      className="h-auto w-[180px] object-contain"
    />
  </div>

  <span className=" text-[13px] font-medium tracking-wide text-[#64748b]">
    Powered by
  </span>
</a>
  </div>
          </div>

        </div>

        {/* ── Bottom Row: Copyright & Legal Links ── */}
        <div className="flex flex-col gap-4 pt-6 text-[11.5px] font-medium text-[#64748b] sm:flex-row sm:items-center sm:justify-between">
          
          <p>© {new Date().getFullYear()} Sandesa. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => scrollToSection("faq")}
              className="transition-colors hover:text-[#2563eb]"
            >
              FAQs
            </button>
            <a href="#privacy" className="transition-colors hover:text-[#2563eb]">
              Privacy Policy
            </a>
            <a href="#terms" className="transition-colors hover:text-[#2563eb]">
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;