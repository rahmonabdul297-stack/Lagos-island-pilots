import {
  FaClock,
  FaCreditCard,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaUniversity,
} from "react-icons/fa";
import Section, { PageHeader } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { pickupPoints, site } from "@/lib/site";

export const metadata = {
  title: "Contact & Inquiry",
  description:
    "Call, email or send an inquiry to book a school shuttle between Lagos Island and Yaba.",
};

export default function ContactPage() {
  const isPhoneArray = Array.isArray(site.phone);

  // Fallback payment values if site.payment is not configured in site.js
  const bankDetails = site.payment || {
    bankName: "ACCESS BANK",
    accountName: "YEKINI WASIU KOLAWOLE",
    accountNumber: "1403646981",
    amount: 2000.0,
  };

  return (
    <>
      <PageHeader title="Contact & inquiry">
        Ask about routes, book a seat, or tell us about a stop we should add.
      </PageHeader>

      <Section className="px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          {/* Direct Reach Out Container */}
          <aside className="self-start rounded-3xl bg-hero p-6 text-white on-dark sm:p-8 lg:p-9 transition-colors duration-300">
            <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Reach us directly
            </h2>

            <dl className="mt-6 space-y-6">
              {/* Phone Contacts */}
              <div className="flex gap-3.5 sm:gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-signal text-signal-ink">
                  <FaPhone aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <dt className="text-xs text-white/65 sm:text-sm">Phone</dt>
                  <dd className="mt-1 font-medium">
                    {isPhoneArray ? (
                      <div className="space-y-1.5 text-sm sm:text-base flex flex-wrap">
                        {site.phone.map((phoneNum) => {
                          const sanitizedPhone = phoneNum.replace(
                            /[^0-9+]/g,
                            "",
                          );
                          return (
                            <div key={phoneNum} className="w-[50%] flex">
                              <a
                                href={`tel:${sanitizedPhone}`}
                                className="transition-colors hover:text-signal hover:underline flex"
                              >
                                {phoneNum}
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <a
                        href={
                          site.phoneHref ||
                          `tel:${site.phone.replace(/[^0-9+]/g, "")}`
                        }
                        className="inline-block break-all text-sm sm:text-base transition-colors hover:text-signal hover:underline"
                      >
                        {site.phone}
                      </a>
                    )}
                  </dd>
                </div>
              </div>

              {/* Email Contact */}
              <div className="flex gap-3.5 sm:gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-signal text-signal-ink">
                  <FaEnvelope aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <dt className="text-xs text-white/65 sm:text-sm">Email</dt>
                  <dd className="mt-1 font-medium">
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-block break-all text-sm sm:text-base transition-colors hover:text-signal hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>

              {/* Head Office / Station */}
              <div className="flex gap-3.5 sm:gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-signal text-signal-ink">
                  <FaMapMarkerAlt aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <dt className="text-xs text-white/65 sm:text-sm">
                    Head office / station
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-snug sm:text-base">
                    {site.address}
                  </dd>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex gap-3.5 sm:gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-signal text-signal-ink">
                  <FaClock aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <dt className="text-xs text-white/65 sm:text-sm">
                    Office hours
                  </dt>
                  <dd className="mt-1 text-sm font-medium sm:text-base">
                    {site.officeHours}
                  </dd>
                </div>
              </div>
            </dl>

            {/* Official Payment & Bank Details Card */}
            <div className="mt-8 border-t border-white/20 pt-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-sm">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-signal/20 text-signal">
                    <FaCreditCard aria-hidden className="text-xs" />
                  </span>
                  <h3 className="font-display text-sm font-semibold tracking-wide text-white sm:text-base">
                    Official Bank & Payment Details For Application Form
                  </h3>
                </div>

                <dl className="mt-4 space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <dt className="text-white/65">Bank Name:</dt>
                    <dd className="font-medium text-white flex items-center gap-1.5">
                      <FaUniversity className="text-signal text-xs" />
                      {bankDetails.bankName}
                    </dd>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <dt className="text-white/65">Account Name:</dt>
                    <dd className="font-medium text-white text-right">
                      {bankDetails.accountName}
                    </dd>
                  </div>
                  <div className="flex justify-between pt-0.5">
                    <dt className="text-white/65">Account Number:</dt>
                    <dd className="font-mono text-sm font-bold tracking-wider text-signal sm:text-base">
                      {bankDetails.accountNumber}
                    </dd>
                  </div>

                  <div className="flex justify-between pt-0.5">
                    <dt className="text-white/65">Amount:</dt>
                    <dd className="font-mono text-sm font-bold tracking-wider text-signal sm:text-base">
                      {bankDetails.amount}
                    </dd>
                  </div>
                </dl>
                <p className="mt-3 text-[15px] leading-tight text-white/70">
                 {` Send your receipt to our whatsApp number.\n Note: Use student
                  name transaction remark.`}
                </p>
              </div>
            </div>

            {/* Route Coverage Subsection */}
            <div className="mt-6 border-t border-white/20 pt-6">
              <h3 className="font-display text-base font-semibold sm:text-lg">
                Route coverage
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80 sm:text-sm">
                Lagos Island to Yaba (Mainland) in the morning, and back in the
                afternoon. Pickups at {pickupPoints.slice(0, -1).join(", ")} and{" "}
                {pickupPoints.at(-1)}.
              </p>
            </div>
          </aside>

          {/* Form Container */}
          <div className="rounded-3xl border border-line bg-surface p-5 sm:p-8 transition-colors duration-300">
            <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
              Send an inquiry
            </h2>
            <p className="mb-6 mt-2 text-xs text-muted sm:text-sm">
              Fill in the form and we will get back to you. Fields marked
              optional can be skipped.
            </p>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
