/* =========================
   WhatsApp Deep Link Helpers
   - wa.me works for both regular WhatsApp and
     WhatsApp Business numbers, as long as the
     number is digits-only (country code + number,
     no "+", spaces, dashes, or leading zeros).
========================= */

export const WHATSAPP_NUMBER = "919623095766";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi! I'd like to know more about Sandesa and its features.";

export const getWhatsAppLink = (
  rawNumber = WHATSAPP_NUMBER,
  message = WHATSAPP_DEFAULT_MESSAGE
) => {
  const digitsOnly = rawNumber.replace(/\D/g, "");
  const base = `https://wa.me/${digitsOnly}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const isMobileDevice = () => {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};
