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
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ── Scroll shadow ──
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          {/* Circular Logo Container (Increased Size + Glow Shadow) */}
          <div className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center overflow-hidden rounded-full border border-[#dbe4f0] bg-white shadow-[0_4px_16px_rgba(37,99,235,0.14)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(37,99,235,0.22)]">
            <img
              src={logo}
              alt="Sandesa Logo"
              className="h-8.5 w-8.5 sm:h-9.5 sm:w-9.5 object-contain"
            />
          </div>

          {/* Brand Name (Increased Size & Boldness) */}
          <span className="text-[23px] sm:text-[25px] font-extrabold tracking-tight text-[#0a1128]">
            Sandesa<span className="text-[#2563eb]"></span>
          </span>
        </button>

        {/* ── Desktop Navigation Links (Increased Size) ── */}
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

        {/* ── Desktop Contact Button ── */}
        <div className="hidden items-center lg:flex">
          <button
            type="button"
            onClick={() => scrollToSection("#contact")}
            className="group inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-2.5 text-[14.5px] font-semibold text-white shadow-[0_6px_20px_rgba(37,99,235,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_10px_26px_rgba(37,99,235,0.36)] active:scale-95"
          >
            <span>Contact</span>
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

          {/* ── Mobile Contact Button ── */}
          <div className="mt-5 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => scrollToSection("#contact")}
              className="w-full rounded-full bg-[#2563eb] py-3 text-[15px] font-semibold text-white shadow-[0_6px_20px_rgba(37,99,235,0.25)] transition-colors hover:bg-[#1d4ed8]"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;