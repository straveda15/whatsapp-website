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
   LinkedIn Custom Icon
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

/* =========================
   Instagram Custom Icon
========================= */
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324z" />

    <circle
      cx="18.406"
      cy="5.594"
      r="1.44"
      fill="currentColor"
    />
  </svg>
);

/* =========================
   Social Links
========================= */
const socials = [
  {
    Icon: LinkedInIcon,
    label: "LinkedIn",
    href: "#",
  },
  {
    Icon: InstagramIcon,
    label: "Instagram",
    href: "#",
  },
];

const Footer = () => {
  /* =========================
     Scroll To Section
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
    <footer className="relative w-full overflow-hidden bg-[#EAF3FF] px-6 pt-16 pb-8 text-[#102A43] sm:px-8 lg:px-14">
      <div className="relative z-10 mx-auto max-w-[1240px]">

        {/* =========================
            Back To Top
        ========================= */}
        <div className="mb-10 flex justify-end">
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5B6B7A] transition-colors hover:text-[#1D64EC]"
          >
            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-1"
            />

            Back to Top
          </button>
        </div>

        {/* =========================
            Main Footer
        ========================= */}
        <div className="grid grid-cols-1 gap-12 border-b border-[#102A43]/10 pb-14 sm:grid-cols-2 lg:grid-cols-5">

          {/* =========================
              Brand
          ========================= */}
          <div className="lg:col-span-1">

            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              className="mb-6 flex cursor-pointer items-center gap-3"
            >
              {/* Actual Sandesa Logo */}
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_4px_14px_rgba(29,100,236,0.18)]">
                <img
                  src={logo}
                  alt="Sandesa"
                  className="h-full w-full object-contain p-1"
                />
              </div>

              {/* Sandesa Name */}
              <span className="text-xl font-extrabold tracking-tight text-[#1D64EC]">
                Sandesa
              </span>
            </button>

            <p className="max-w-[220px] text-[13px] leading-6 text-[#5B6B7A]">
              AI-powered WhatsApp automation that turns conversations
              into pipeline, customers, and revenue.
            </p>

            {/* =========================
                Socials
            ========================= */}
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#102A43]/10 bg-white/60 text-[#5B6B7A] transition-all hover:border-[#1D64EC] hover:bg-[#1D64EC] hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* =========================
              Footer Link Sections
          ========================= */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>

              <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1D64EC]">
                {category}
              </h4>

              <ul className="space-y-3.5">
                {links.map(({ label, id }) => (
                  <li key={label}>

                    <button
                      type="button"
                      onClick={() => scrollToSection(id)}
                      className="group flex items-center text-left text-[13px] text-[#5B6B7A] transition-all hover:text-[#102A43]"
                    >
                      <span className="mr-2 text-[#1D64EC] opacity-0 transition-all group-hover:opacity-100">
                        →
                      </span>

                      <span className="transition-transform group-hover:translate-x-1">
                        {label}
                      </span>
                    </button>

                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* =========================
              Contact Us
          ========================= */}
          <div>

            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1D64EC]">
              Contact Us
            </h4>

            <div className="space-y-5">

              {/* Email */}
              <a
                href="mailto:sandesa@gmail.com"
                className="flex items-start gap-3 text-[13px] text-[#5B6B7A] transition-colors hover:text-[#102A43]"
              >
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <span>
                  sandesa@gmail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+917666534888"
                className="flex items-start gap-3 text-[13px] text-[#5B6B7A] transition-colors hover:text-[#102A43]"
              >
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <span>
                  +91 76665 34888
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 text-[13px] leading-5 text-[#5B6B7A]">

                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <span>
                  Pune, Maharashtra
                  <br />
                  411001, India
                </span>

              </div>

            </div>
          </div>
        </div>

        {/* =========================
            Bottom Footer
        ========================= */}
        <div className="flex flex-col gap-5 pt-7 text-[11px] uppercase tracking-[0.12em] text-[#718096] sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} Sandesa. All Rights Reserved.
          </p>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center gap-6">

            <button
              type="button"
              onClick={() => scrollToSection("faq")}
              className="transition-colors hover:text-[#1D64EC]"
            >
              FAQs
            </button>

            <a
              href="#"
              className="transition-colors hover:text-[#1D64EC]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[#1D64EC]"
            >
              Terms of Service
            </a>

          </div>

          {/* Bottom Arrow */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#FF5A1F] text-[#FF5A1F] transition-all hover:bg-[#FF5A1F] hover:text-white"
          >
            <ArrowUp size={15} />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;