import React from "react";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logosandesa.png";

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

/* =========================
   Social Media Custom Icons
========================= */
const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324z" />
    <circle cx="18.406" cy="5.594" r="1.44" fill="currentColor" />
  </svg>
);

const socials = [
  {
    Icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    Icon: InstagramIcon,
    label: "Instagram",
    href: "https://instagram.com",
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
                Sandesa
              </span>
            </button>

            <p className="max-w-[240px] text-[13px] leading-relaxed text-[#64748b]">
              AI-powered WhatsApp automation that turns conversations
              into pipeline, customers, and revenue.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2.5">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8e6fe] bg-white text-[#64748b] transition-all hover:border-[#2563eb] hover:bg-[#2563eb] hover:text-white"
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
          <div>
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

              {/* Location */}
              <div className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#64748b]">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#2563eb]" />
                <span>
                  Pune, Maharashtra
                  <br />
                  411001, India
                </span>
              </div>
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