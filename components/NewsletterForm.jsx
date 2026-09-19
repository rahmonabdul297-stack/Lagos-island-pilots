"use client";

import Web3Form from "@/components/Web3Form";

export default function NewsletterForm() {
  return (
    <Web3Form
      subject="New updates sign-up from the Lagos Island Pilots website"
      formName="Lagos Island Pilots - Updates sign-up"
      submitLabel="Get updates"
      loadingLabel="Signing up..."
      successMessage="You are on the list. We will email you about schedule and route changes."
      compact
    >
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          className="min-h-11 w-full rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-white placeholder:text-white/60 focus-visible:border-white"
        />
      </div>
    </Web3Form>
  );
}
