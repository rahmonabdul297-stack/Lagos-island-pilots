"use client";

import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/site";

export default function WhatsAppButton() {
  // Get phone number from site config (or fallback if empty)
  const rawPhone = Array.isArray(site?.phone) ? site.phone[2] : site?.phone || "";
  
  // Format phone number to international standard (remove leading 0 and non-digits)
  let cleanPhone = rawPhone.replace(/[^0-9]/g, "");
  if (cleanPhone.startsWith("0")) {
    cleanPhone = "234" + cleanPhone.slice(1);
  } else if (!cleanPhone.startsWith("234") && cleanPhone.length === 10) {
    cleanPhone = "234" + cleanPhone;
  }

  const defaultMessage = encodeURIComponent(
    "Hello Lagos Island Pilots! I would like to make an inquiry about your school shuttle service."
  );

  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none"
    >
      {/* Outer Pulse Rings */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
      
      {/* Button Background */}
      <span className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-950/20 transition-all duration-300 group-hover:bg-[#20ba5a] group-hover:shadow-emerald-500/40">
        <FaWhatsapp className="size-8 transition-transform duration-300 group-hover:rotate-12" />
      </span>

      {/* Hover Tooltip Label */}
      <span className="absolute right-16 whitespace-nowrap rounded-lg bg-surface border border-line px-3 py-1.5 text-xs font-semibold text-ink opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 sm:inline-block hidden">
        Chat with us
      </span>
    </a>
  );
}