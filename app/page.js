import Link from "next/link";
import { FaMapMarkerAlt, FaSchool, FaQuoteLeft } from "react-icons/fa";
import {RouteStrip, Schools} from "@/components/RouteStrip";
import RouteCard from "@/components/RouteCard";
import Section, { SectionHeading } from "@/components/Section";
import {
  dropoffPoints,
  heroFeatures,
  highlights,
  pickupPoints,
  testimonials,
} from "@/lib/site";

export default function HomePage() {
  const [featured, ...others] = testimonials;

  return (
    <>
      {/* Hero */}
      <section className="on-dark bg-hero text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Safe &amp; Punctual School Shuttle Service from Lagos Island to Yaba
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Your child is picked up at the same place and the same time every
              school day, driven by vetted drivers, and brought home on schedule.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Inquire for Routes
              </Link>
              <Link href="/about" className="btn btn-outline-light">
                Learn More
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {heroFeatures.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 font-medium">
                  <Icon className="text-signal" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <RouteStrip />
           <Schools />
        </div>
        <div className="danfo-stripe" aria-hidden />
      </section>
       
      {/* Highlights */}
      <Section>
        <SectionHeading title="A commute parents can plan around">
          Same stops, same times, same standards, every school day.
        </SectionHeading>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-t-4 border-signal pt-5">
              <Icon className="text-2xl text-brand" aria-hidden />
              <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Route overview */}
      <Section className="border-y border-line bg-surface/60">
        <SectionHeading title="Where we pick up and drop off">
          Children board on Lagos Island and are dropped at their schools in Yaba.
          The afternoon run follows the same route in reverse.
        </SectionHeading>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <RouteCard
            icon={FaMapMarkerAlt}
            title="Pickup points from Lagos Island"
            description="Morning boarding points, in the order the bus reaches them."
            stops={pickupPoints}
            ordered
          />
          <RouteCard
            icon={FaSchool}
            title="Drop-off points in Yaba and the mainland"
            description="Where students are dropped each morning and collected each afternoon."
            stops={dropoffPoints}
          />
        </div>

        <p className="mt-8 text-muted">
          Don&apos;t see your stop?{" "}
          <Link
            href="/contact"
            className="font-semibold text-brand underline underline-offset-4"
          >
            Ask us about it
          </Link>
          .
        </p>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading title="Peace of mind for parents" />
        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <figure className="rounded-3xl bg-hero p-8 text-white on-dark lg:col-span-3 lg:p-10">
            <FaQuoteLeft className="text-2xl text-signal" aria-hidden />
            <blockquote className="mt-5 font-display text-2xl font-medium leading-snug sm:text-3xl">
              {featured.quote}
            </blockquote>
            <figcaption className="mt-6 text-white/70">{featured.who}</figcaption>
          </figure>

          <div className="grid gap-6 lg:col-span-2">
            {others.map((item) => (
              <figure
                key={item.who}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <blockquote className="leading-relaxed">{item.quote}</blockquote>
                <figcaption className="mt-4 text-sm text-muted">{item.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      {/* Closing call to action */}
      <Section className="pt-0 md:pt-0">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-surface p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Find a seat for your child
            </h2>
            <p className="mt-2 max-w-lg text-muted">
              Tell us where you live and which school in Yaba. We will confirm the
              stop and the time.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary shrink-0">
            Book Shuttle / Inquire
          </Link>
        </div>
      </Section>
    </>
  );
}
