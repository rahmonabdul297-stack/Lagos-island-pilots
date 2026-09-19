import Link from "next/link";
import Image from "next/image";
import { FaUserShield, FaIdCard, FaBus } from "react-icons/fa";
import Section, { PageHeader, SectionHeading } from "@/components/Section";
import { site, standards } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "Who Lagos Island Pilots are, our dedicated drivers and leadership team, how we relate to the FSTCY Association, and the standards we hold ourselves to.",
};

// Pilots & Crew Data Array
const pilots = [
  {
    id: "PILOT-01",
    name: "MR. OLASUNKANMI IDOWU SAKIRU",
    role: "The originator, Pioneer And Founder of FSTCY Terminal in Upper Campus",
    experience: "",
    route: "",
    image: "/images/D1.jpeg",
  },
  {
    id: "PILOT-02",
    name: "MR. SHITTU ADEBAYO",
    role: "THE CHAIRMAN AND PIONEER MEMBER OF FSTCY TERMINAL IN UPPER CAMPUS AND TOWRY TERMINAL  (UP TO DATE).",
    experience: "",
    route: "",
    image: "/images/D2.jpeg",
  },
  {
    id: "PILOT-03",
    name: " MR. NOFIU IBRAHIM IDOWU ",
    role: "THE ORIGINATOR AND FOUNDER OF YABATECH, FCE AND OTHER SCHOOLS TERMINAL IN A.P FILLING STATION UPPER CAMPUS AND NOW VICE CHAIRMAN IN TOWRY TERMINAL, (UP TO DATE).",
    experience: "",
    route: "",
    image: "/images/D3.jpeg",
  },
  {
    id: "PILOT-04",
    name: "MR YEKINI WASIU KOLAWOLE  (KK)",
    role: "BUS COORDINATOR 1 / SECRETARY ",
    experience: "",
    route: "",
    image: "/images/D4.jpeg",
  },
  {
    id: "PILOT-05",
    name: "MR. THOMPSON ADEWALE. O",
    role: "FINANCIAL SECRETARY",
    experience: "",
    route: "",
    image: "/images/D5.jpeg",
  },
  {
    id: "PILOT-06",
    name: " MR. ISSA MUIZ. O",
    role: "BUS COORDINATOR 2 / P. R. O",
    experience: "",
    route: "",
    image: "/images/D6.jpeg",
  },
  {
    id: "PILOT-07",
    name: "MR  KAFOO FARUQ",
    role: "PILOT MEMBER",
    experience: "",
    route: "",
    image: "/images/D7.jpeg",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Lagos Island Pilots">
        A school shuttle service built to make the trip between Lagos Island and
        Yaba one less thing for families to worry about.
      </PageHeader>

      {/* Story and identity */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading title="Who we are" />
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
            <p>
              {site.name} is a school shuttle service carrying students between
              Lagos Island and Yaba on the mainland. We are an official
              subsidiary of the {site.parent}, and we operate under its
              standards for drivers, vehicles and conduct.
            </p>
            <p className="text-muted">
              That affiliation matters to parents: our drivers and buses answer
              to an association, not just to an individual operator, so there is
              always someone accountable for how your child travels.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission and vision */}
      <Section className="border-y border-line bg-surface/60">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-line bg-surface p-7 md:p-9">
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Our mission
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              To ease the school commute for families travelling between Lagos
              Island and Yaba, with a shuttle that is safe, on time and
              predictable.
            </p>
          </article>
          <article className="rounded-2xl bg-hero p-7 text-white on-dark md:p-9">
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Our vision
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-white/80">
              A school run that parents no longer have to think about: children
              arrive ready to learn, and families get their mornings back.
            </p>
          </article>
        </div>
      </Section>

      {/* OUR PILOTS & CREW SECTION */}
      <Section>
        <SectionHeading title="Meet Our Pilots">
          Vetted, experienced, and association-certified drivers dedicated to
          your children's daily safety.
        </SectionHeading>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pilots.map((pilot) => (
            <article
              key={pilot.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand/40"
            >
              {/* Pilot Image Container */}
              <div className="relative w-full overflow-hidden bg-brand/5">
                <img
                  src={pilot.image}
                  alt={pilot.name}
                  className="transition-transform duration-500 group-hover:scale-105"
                 
                />
                
                {/* Fallback avatar icon container */}
                <div className="absolute inset-0 -z-10 grid place-items-center bg-brand/10 text-brand/40">
                  <FaUserShield className="text-6xl" />
                </div>

                {/* Driver ID Tag */}
                {/* <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-hero/80 backdrop-blur px-3 py-1 text-[11px] font-semibold text-white">
                  <FaIdCard className="text-soft-blue" />
                  {pilot.id}
                </span> */}
              </div>

              {/* Pilot Information */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="font-display capitalize text-lg font-bold tracking-tight text-ink group-hover:text-brand transition-colors">
                    {pilot.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-brand lowercase">
                    {pilot.role}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-line/60 space-y-1.5 text-xs text-muted">
                  <p className="flex items-center gap-1.5">
                    <FaBus className="text-brand shrink-0" />
                    <span>{pilot.route}</span>
                  </p>
                  <p className="font-medium text-ink/80">
                    {pilot.experience}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Standards */}
      <Section className="border-t border-line">
        <SectionHeading title="Our standards">
          Three things we do not compromise on.
        </SectionHeading>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {standards.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="grid gap-4 py-7 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-10"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-lg text-brand">
                  <Icon aria-hidden />
                </span>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Leadership note */}
      <Section className="pt-0 md:pt-0">
        <figure className="max-w-3xl rounded-3xl border border-line bg-surface p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            A note from the association leadership
          </h2>
          <blockquote className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Parents trust us with what matters most to them. We take that
              seriously, and we hold every driver and every bus to the standard
              we would want for our own children.
            </p>
            <p>
              If you ever have a concern about a trip, tell us. We would rather
              hear it early and fix it.
            </p>
          </blockquote>
          <figcaption className="mt-6 font-semibold">
            Leadership, {site.parent}
          </figcaption>
        </figure>

        <div className="mt-8">
          <Link href="/contact" className="btn btn-primary">
            Book Shuttle / Inquire
          </Link>
        </div>
      </Section>
    </>
  );
}