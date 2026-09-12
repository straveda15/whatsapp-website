import React from "react";

import { ArrowUp, Mail, Phone } from "lucide-react";

import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

import logo from "../assets/logosandesa.png";

import stravedaLogo from "../assets/Straveda logo.png";

const footerLinks = {
  Explore: [
    { label: "Home", id: "hero" },
    { label: "Product", id: "product-journey" },
    { label: "Use Cases", id: "use-cases" },
    { label: "Industries", id: "industries" },
  ],

  Resources: [
    { label: "Platform Comparison", id: "comparison" },
    { label: "Pricing Plans", id: "pricing" },
    { label: "Frequently Asked Questions", id: "faq" },
  ],
};

const socials = [
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/showcase/sandesa-ai/",
    color: "text-[#0A66C2]",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/sandesa.ai/",
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
      const topOffset =
        el.getBoundingClientRect().top + window.pageYOffset - 70;

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
    <footer className="relative w-full border-t border-[#d8e6fe] bg-[#f0f6ff] px-4 text-[#0a1128] sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-6xl">
        {/* ── Back To Top ── */}
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#64748b] sm:text-[11px]"
          >
            <ArrowUp size={14} />
            <span>Back to Top</span>
          </button>
        </div>

        {/* ── Main Footer Grid ── */}
        <div className="grid grid-cols-1 gap-5 border-b border-[#d8e6fe] pb-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5 lg:gap-8">
          {/* ── Column 1: Brand & Bio ── */}
          <div className="lg:col-span-1">
            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              className="mb-3 flex cursor-pointer items-center gap-2.5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_2px_8px_rgba(37,99,235,0.15)]">
                <img
                  src={logo}
                  alt="Sandesa"
                  className="h-full w-full object-contain p-1"
                />
              </div>

              <span className="text-xl font-bold tracking-tight text-[#0a1128]">
                Sandesa<span className="text-[#2563eb]">.</span>
              </span>
            </button>

            <p className="max-w-[240px] text-[13px] leading-relaxed text-[#64748b]">
              AI-powered WhatsApp automation that turns conversations into
              pipeline, customers, and revenue.
            </p>

            {/* ── Social Icons ── */}
            <div className="mt-4 flex items-center gap-2.5">
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

          {/* ── Columns: Links Sections ── */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-3 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#2563eb] sm:text-[11px]">
                {category}
              </h4>

              <ul className="space-y-2">
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

          {/* ── Column 5: Contact Us ── */}
          <div id="contact-us">
            <h4 className="mb-3 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#2563eb] sm:text-[11px]">
              Contact Us
            </h4>

            <div className="space-y-3">
              {/* ── Email ── */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.sandesaai@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-[13px] text-[#64748b] transition-colors hover:text-[#0a1128]"
              >
                <Mail
                  size={15}
                  className="mt-0.5 shrink-0 text-[#2563eb]"
                />

                <span className="break-all">
                  contact.sandesaai@gmail.com
                </span>
              </a>

              {/* ── Phone ── */}
              <a
                href="tel:+919623095766"
                className="flex items-start gap-2.5 text-[13px] text-[#64748b] transition-colors hover:text-[#0a1128]"
              >
                <Phone
                  size={15}
                  className="mt-0.5 shrink-0 text-[#2563eb]"
                />

                <span>+919623095766</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Row: Copyright & Legal Links ── */}
        <div className="flex flex-col gap-3 py-4 text-[11px] font-medium text-[#64748b] sm:flex-row sm:items-center sm:justify-between sm:text-[11.5px]">
          <p>© {new Date().getFullYear()} Sandesa. All Rights Reserved.</p>

          <a
            href="https://stravedatech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <span className="text-[12px] font-medium tracking-wide text-[#64748b] sm:text-[13px]">
              Powered by
            </span>

            <img
              src={stravedaLogo}
              alt="Straveda"
              className="h-auto w-[90px] object-contain sm:w-[100px]"
            />
          </a>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#privacy"
              className="transition-colors hover:text-[#2563eb]"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="transition-colors hover:text-[#2563eb]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;