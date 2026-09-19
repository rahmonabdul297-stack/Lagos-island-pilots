"use client";

import { useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

/**
 * Small notification that confirms a form result.
 * `toast` is { type: "success" | "error", title, message } or null.
 */
export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(onClose, 8000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const ok = toast.type === "success";
  const Icon = ok ? FaCheckCircle : FaExclamationCircle;

  return (
    <div
      role={ok ? "status" : "alert"}
      className="fixed inset-x-4 bottom-4 z-50 sm:left-auto sm:right-6 sm:max-w-sm"
    >
      <div
        className={`flex items-start gap-3 rounded-2xl p-4 text-white shadow-lg ${
          ok ? "bg-ok" : "bg-err"
        }`}
      >
        <Icon className="mt-0.5 shrink-0 text-xl" aria-hidden />
        <div className="flex-1">
          <p className="font-semibold">{toast.title}</p>
          <p className="mt-0.5 text-sm text-white/90">{toast.message}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss message"
          className="-m-1 rounded-full p-2 text-white/80 hover:text-white"
        >
          <FaTimes aria-hidden />
        </button>
      </div>
    </div>
  );
}
