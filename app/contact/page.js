import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
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

  return (
    <>
      <PageHeader title="Contact & inquiry">
        Ask about routes, book a seat, or tell us about a stop we should add.
      </PageHeader>

      <Section className="px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Layout: Stacks vertically on mobile, splits 2-column on desktop */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          
          {/* Direct Reach Out Container */}
          <aside className="self-start rounded-3xl bg-hero p-6 text-white on-dark sm:p-8 lg:p-9 transition-colors duration-300">
            <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Reach us directly
            </h2>

            <dl className="mt-6 space-y-6">
              {/* Phone Contacts (Handles Array & Single String) */}
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
                          const sanitizedPhone = phoneNum.replace(/[^0-9+]/g, "");
                          return (
                            <div key={phoneNum} className="w-[50%] flex">
                              <a
                                href={`tel:${sanitizedPhone}`}
                                className=" transition-colors hover:text-signal hover:underline flex"
                              >
                                {phoneNum}
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <a
                        href={site.phoneHref || `tel:${site.phone.replace(/[^0-9+]/g, "")}`}
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
                  <dt className="text-xs text-white/65 sm:text-sm">Head office / station</dt>
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
                  <dt className="text-xs text-white/65 sm:text-sm">Office hours</dt>
                  <dd className="mt-1 text-sm font-medium sm:text-base">
                    {site.officeHours}
                  </dd>
                </div>
              </div>
            </dl>

            {/* Route Coverage Subsection */}
            <div className="mt-8 border-t border-white/20 pt-6">
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