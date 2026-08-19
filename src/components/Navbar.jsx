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
      setScrolled(window.scrollY > 10);
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
      className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md transition-all duration-200 ${
        scrolled
          ? "border-b border-[#e8ecf2] shadow-[0_4px_20px_rgba(19,42,75,0.06)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10 xl:px-16">

        {/* ── Logo + Sandesa ── */}
        <button
          type="button"
          onClick={() => scrollToSection("#hero")}
          className="flex shrink-0 items-center gap-3"
          aria-label="Go to Home"
        >
          {/* Circular Logo */}
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#e5e7eb] bg-white shadow-[0_4px_12px_rgba(37,99,235,0.18)]">
            <img
              src={logo}
              alt="Sandesa Logo"
              className="h-8 w-8 object-contain"
            />
          </div>

          {/* Brand Name */}
          <span className="text-[21px] font-extrabold tracking-tight text-[#2563eb]">
            Sandesa
          </span>
        </button>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              type="button"
              onClick={() => scrollToSection(href)}
              className="rounded-xl px-4 py-2.5 text-[14px] font-normal text-[#3d4f6a] transition-colors duration-150 hover:bg-slate-50 hover:text-[#0d1b3e]"
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
            className="group inline-flex items-center gap-2 rounded-[14px] bg-[#2563eb] px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_6px_20px_rgba(37,99,235,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d55d8] hover:shadow-[0_10px_26px_rgba(37,99,235,0.32)]"
          >
            <span>Contact</span>

            <ArrowRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* ── Mobile Menu Button ── */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-[#3d4f6a] transition-colors hover:bg-slate-100 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={22} strokeWidth={2} />
          ) : (
            <Menu size={22} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {isOpen && (
        <div className="border-t border-[#e8ecf2] bg-white px-4 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <button
                key={label}
                type="button"
                onClick={() => scrollToSection(href)}
                className="w-full rounded-xl px-4 py-3 text-left text-[15px] font-normal text-[#3d4f6a] transition-colors hover:bg-slate-50 hover:text-[#0d1b3e]"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* ── Mobile Contact ── */}
          <div className="mt-5">
            <button
              type="button"
              onClick={() => scrollToSection("#contact")}
              className="w-full rounded-[14px] bg-[#2563eb] py-3 text-[14px] font-medium text-white shadow-[0_6px_20px_rgba(37,99,235,0.25)] transition-colors hover:bg-[#1d55d8]"
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