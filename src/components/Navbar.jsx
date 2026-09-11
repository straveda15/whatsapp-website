import React, { useState, useEffect } from "react";

import { Menu, X, ArrowRight } from "lucide-react";

import logo from "../assets/logosandesa.png";

// ── Navbar Links ──

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Product", href: "#product-journey" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Us", href: "#contact-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [selectedTime, setSelectedTime] = useState(
  new Date().toTimeString().slice(0, 5)
);

useEffect(() => {
  if (showDemo) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [showDemo]);

// ── Date Validation ──
const today = new Date().toISOString().split("T")[0];
  // ── Scroll shadow + Open Live Demo Event ──

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    const openDemo = () => {
      setShowDemo(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("open-live-demo", openDemo);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-live-demo", openDemo);
    };
  }, []);

  // ── Smooth scroll ──

  const scrollToSection = (href) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[#e2e8f0]/80 bg-white/90 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.06)] py-3 sm:py-3.5"
            : "border-b border-transparent bg-white/70 backdrop-blur-sm py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* ── Logo + Brand Name ── */}

          <button
            type="button"
            onClick={() => scrollToSection("#hero")}
            className="group flex shrink-0 items-center gap-3 transition-transform active:scale-95"
            aria-label="Go to Home"
          >
            {/* Circular Logo Container */}

            <div className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center overflow-hidden rounded-full border border-[#dbe4f0] bg-white shadow-[0_4px_16px_rgba(37,99,235,0.14)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(37,99,235,0.22)]">
              <img
                src={logo}
                alt="Sandesa Logo"
                className="h-8.5 w-8.5 sm:h-9.5 sm:w-9.5 object-contain"
              />
            </div>

            {/* Brand Name */}

            <span className="text-[23px] sm:text-[25px] font-extrabold tracking-tight text-[#0a1128]">
              Sandesa<span className="text-[#2563eb]">.</span>
            </span>
          </button>

          {/* ── Desktop Navigation Links ── */}

          <nav className="hidden items-center gap-1.5 lg:flex">
            {navLinks.map(({ label, href }) => (
              <button
                key={label}
                type="button"
                onClick={() => scrollToSection(href)}
                className="rounded-full px-4.5 py-2 text-[15px] font-medium text-[#475569] transition-all duration-150 hover:bg-[#eff6ff] hover:text-[#2563eb]"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* ── Desktop Live Demo Button ── */}

          <div className="hidden items-center lg:flex">
            <button
              type="button"
              onClick={() => setShowDemo(true)}
              className="group inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-2.5 text-[14.5px] font-semibold text-white shadow-[0_6px_20px_rgba(37,99,235,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_10px_26px_rgba(37,99,235,0.36)] active:scale-95"
            >
              <span>Live Demo</span>

              <ArrowRight
                size={15}
                strokeWidth={2.4}
                className="transition-transform duration-150 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* ── Mobile Menu Toggle Button ── */}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-[#0a1128] transition-colors hover:bg-slate-100 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={24} strokeWidth={2.2} />
            ) : (
              <Menu size={24} strokeWidth={2.2} />
            )}
          </button>
        </div>

        {/* ── Mobile Dropdown Menu ── */}

        {isOpen && (
          <div className="border-t border-[#e2e8f0] bg-white/95 px-5 pb-6 pt-4 backdrop-blur-lg shadow-xl lg:hidden">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map(({ label, href }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => scrollToSection(href)}
                  className="w-full rounded-xl px-4 py-3 text-left text-[16px] font-medium text-[#334155] transition-colors hover:bg-[#eff6ff] hover:text-[#2563eb]"
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* ── Mobile Live Demo Button ── */}

            <div className="mt-5 border-t border-slate-100 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowDemo(true);
                  setIsOpen(false);
                }}
                className="w-full rounded-full bg-[#2563eb] py-3 text-[15px] font-semibold text-white shadow-[0_6px_20px_rgba(37,99,235,0.25)] transition-colors hover:bg-[#1d4ed8]"
              >
                Live Demo
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── Live Demo Popup ── */}

      {showDemo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
          onClick={() => setShowDemo(false)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}

            <button
              type="button"
              onClick={() => setShowDemo(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
              aria-label="Close demo"
            >
              <X size={20} />
            </button>

            {/* Popup Content */}

            <div className="pr-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#2563eb]">
                Live Demo
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#0a1128] sm:text-3xl">
                See Sandesa AI in Action
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
                Experience how Sandesa automates WhatsApp conversations,
                captures leads and helps your team engage with customers.
              </p>
            </div>

            {/* ── Demo Form ── */}

            <form
  className="space-y-6"
  onSubmit={(e) => {
    e.preventDefault();
    alert("Live Demo request submitted!");
  }}
>
              {/* Name */}

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0a1128] outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
              />

              {/* Email */}

              <input
                type="email"
                placeholder="Enter your email"
                required
                title="Please enter a valid email address"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0a1128] outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
              />

              {/* Phone Number */}

              <input
                type="tel"
                placeholder="Enter your phone number"
                maxLength="10"
                pattern="[0-9]{10}"
                title="Phone number must be exactly 10 digits"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0a1128] outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
              />

              {/* Date + Time */}

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  min={today}
                  required
                  title="Please select today or a future date"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0a1128] outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
                />

                <input
  type="time"
  value={selectedTime}
  onChange={(e) => setSelectedTime(e.target.value)}
  required
  title="Please select a time"
  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0a1128] outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
/>
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#2563eb] py-3 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(37,99,235,0.25)] transition-all hover:bg-[#1d4ed8] active:scale-[0.98]"
              >
                Request Live Demo
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;