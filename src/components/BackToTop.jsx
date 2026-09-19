import React, { useEffect, useState } from "react";

import { ArrowUp } from "lucide-react";

const SHOW_AFTER_PX = 400;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-[76px] right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#d8e6fe] bg-white text-[#2563eb] shadow-[0_6px_20px_rgba(15,23,42,0.15)] transition-all duration-300 hover:scale-110 sm:bottom-[92px] sm:right-6 sm:h-14 sm:w-14 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={22} strokeWidth={2.4} />
    </button>
  );
};

export default BackToTop;
