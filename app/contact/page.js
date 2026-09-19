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
  const details = [
    {
      icon: FaPhone,
      label: "Phone",
      value: site.phone,
      href: site.phoneHref,
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: "Head office / station",
      value: site.address,
    },
    {
      icon: FaClock,
      label: "Office hours",
      value: site.officeHours,
    },
  ];

  return (
    <>
      <PageHeader title="Contact & inquiry">
        Ask about routes, book a seat, or tell us about a stop we should add.
      </PageHeader>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="self-start rounded-3xl bg-hero p-7 text-white on-dark sm:p-9">
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Reach us directly
            </h2>
            <dl className="mt-6 space-y-5">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-signal text-signal-ink">
                    <Icon aria-hidden />
                  </span>
                  <div>
                    <dt className="text-sm text-white/65">{label}</dt>
                    <dd className="font-medium">
                      {href ? (
                        <a href={href} className="hover:underline">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-8 border-t border-white/20 pt-6">
              <h3 className="font-display text-lg font-semibold">Route coverage</h3>
              <p className="mt-2 text-white/80">
                Lagos Island to Yaba (Mainland) in the morning, and back in the
                afternoon. Pickups at {pickupPoints.slice(0, -1).join(", ")} and{" "}
                {pickupPoints.at(-1)}.
              </p>
            </div>
          </aside>

          <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Send an inquiry
            </h2>
            <p className="mb-6 mt-2 text-muted">
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
