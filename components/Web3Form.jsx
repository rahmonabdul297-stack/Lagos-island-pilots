"use client";

import { useCallback, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Toast from "@/components/Toast";

const ENDPOINT = "https://api.web3forms.com/submit";
const PLACEHOLDER_KEY = "YOUR_ACCESS_KEY_HERE";

// Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local (see .env.example).
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || PLACEHOLDER_KEY;

/**
 * One handler for every form on the site.
 *
 * Props
 *  - subject:        email subject you will see in your inbox
 *  - formName:       who the message is "from" (shows which form was used)
 *  - submitLabel:    button text when idle
 *  - loadingLabel:   button text while sending
 *  - successMessage: text shown in the success toast
 *  - compact:        fields and button stacked with tight spacing (newsletter style)
 *  - buttonClassName: extra classes for the button
 */
export default function Web3Form({
  subject,
  formName,
  submitLabel = "Send message",
  loadingLabel = "Sending...",
  successMessage = "Thanks. We have your message and will reply soon.",
  compact = false,
  className = "",
  buttonClassName = "",
  children,
}) {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [toast, setToast] = useState(null);
  const closeToast = useCallback(() => setToast(null), []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "loading") return;

    // Keep a reference: event.currentTarget is cleared after the first await.
    const form = event.currentTarget;

    if (ACCESS_KEY === PLACEHOLDER_KEY) {
      setStatus("error");
      setToast({
        type: "error",
        title: "Form not connected yet",
        message:
          "Add your Web3Forms access key to .env.local, then restart the dev server.",
      });
      return;
    }

    setStatus("loading");
    setToast(null);

    try {
      const payload = Object.fromEntries(new FormData(form).entries());

      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        form.reset();
        setStatus("success");
        setToast({ type: "success", title: "Message sent", message: successMessage });
      } else {
        throw new Error(result.message || "The form service rejected the message.");
      }
    } catch (error) {
      const offline = error instanceof TypeError;
      setStatus("error");
      setToast({
        type: "error",
        title: "Message not sent",
        message: offline
          ? "We could not reach the server. Check your connection and try again."
          : `${error.message} Please try again, or call us instead.`,
      });
    }
  }

  const loading = status === "loading";

  const button = (
    <button
      type="submit"
      disabled={loading}
      className={`btn btn-primary ${buttonClassName}`}
    >
      {loading ? (
        <>
          <FaSpinner className="animate-spin" aria-hidden />
          {loadingLabel}
        </>
      ) : (
        submitLabel
      )}
    </button>
  );

  return (
    <>
      <form onSubmit={handleSubmit} className={className} aria-busy={loading}>
        {/* Web3Forms configuration */}
        <input type="hidden" name="access_key" value={ACCESS_KEY} />
        <input type="hidden" name="subject" value={subject} />
        <input type="hidden" name="from_name" value={formName} />
        {/* Spam trap: real visitors never see or tick this */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {compact ? (
          <div className="flex flex-col gap-3">
            {children}
            {button}
          </div>
        ) : (
          <>
            {children}
            <div className="mt-6">{button}</div>
          </>
        )}
      </form>
      <Toast toast={toast} onClose={closeToast} />
    </>
  );
}
