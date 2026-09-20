import Link from "next/link";

export const metadata = {
  title: "Student & Parent Policy Rules",
  description:
    "Official rules, safety guidelines, payment terms, and responsibilities for students, parents, and drivers of the FSTCY School Bus Shuttle Association (Lagos Island Chapter).",
};

export default function SafetyPolicyPage() {
  const policySections = [
    {
      id: "general-rules",
      number: "i",
      title: "General Rules",
      rules: [
        "Students are expected to be at the designated bus terminal at least 10 minutes before the scheduled departure time (6:30 am morning and 4:00 pm afternoon).",
        "Students must board and alight from the bus in an orderly manner.",
        "Students are responsible for their personal belongings and must keep their bags and other items secure.",
        "Students must follow the instructions of the bus driver/coordinators at all times.",
        "Students are expected to behave in a respectful and courteous manner towards the bus driver, coordinator, and fellow students.",
        "Students are not allowed to bring any hazardous materials, weapons, or prohibited items into the bus.",
        "Students must keep the bus clean and tidy, and refrain from littering or causing damage to the bus.",
      ],
    },
    {
      id: "safety-rules",
      number: "ii",
      title: "Safety Rules",
      rules: [
        "Students must wear seatbelts at all times while the bus is in motion.",
        "Students are not allowed to move around while the bus is in motion.",
        "Students must keep their head, arms, and hands inside the bus windows at all times.",
        "Students are allowed to eat or drink in the bus (keeping cleanliness in mind).",
        "Students must report any damage or loss of school property to the bus driver or coordinator immediately.",
        "Students must follow emergency exit procedures in case of an emergency.",
      ],
    },
    {
      id: "route-schedule",
      number: "iii",
      title: "Bus Route and Schedule",
      rules: [
        "The bus will follow a designated route and schedule, which will be communicated to parents/guardians in advance.",
        "Any changes to the route or schedule will be communicated to parents/guardians in a timely manner.",
      ],
    },
    {
      id: "disciplinary-measures",
      number: "iv",
      title: "Disciplinary Measures",
      isWarning: true,
      rules: [
        "Any student found violating these rules and regulations may face disciplinary action, including suspension or withdrawal of bus privileges.",
        "Parents / guardians will be notified of any disciplinary action taken.",
        "Repeated misconduct may result in permanent withdrawal of bus privileges.",
      ],
    },
    {
      id: "payment-terms",
      number: "v",
      title: "Payment Terms",
      rules: [
        "Fees are payable in advance and/or as when due (between Monday and Tuesday) not in arrears.",
        "Any changes to payment terms must be approved by the management.",
        "Any student that fails to pay latest by Tuesday will be sent back by Wednesday morning.",
        "Payment is based on weekly or termly rates, not daily. If a student comes once in a week, he or she must pay fully for the week.",
      ],
    },
    {
      id: "termination",
      number: "vi",
      title: "Termination",
      rules: [
        "The bus service reserves the right to terminate service to any student who consistently violates these rules and regulations.",
        "Parents / guardians will be notified in writing of any termination of service.",
      ],
    },
    {
      id: "communication",
      number: "vii",
      title: "Communication",
      rules: [
        "Parents / guardians are required to provide updated contact information to the bus services.",
        "Any changes to bus routes or schedules will be communicated to parents / guardians in advance.",
        "Parents / guardians are encouraged to report any concerns or issues to the bus management (coordinator).",
      ],
    },
    {
      id: "driver-responsibilities",
      number: "viii",
      title: "Bus Driver / Coordinator Responsibilities",
      rules: [
        "The bus driver / coordinator is responsible for ensuring the safety and well-being of students during transportation.",
        "The bus driver will report any incident or accident to management (coordinator) immediately.",
        "The bus driver / coordinator will maintain a clean and safe bus environment.",
      ],
    },
    {
      id: "student-responsibilities",
      number: "ix",
      title: "Student Responsibilities",
      rules: [
        "Students are responsible for following all rules and regulations of the bus service.",
        "Students must behave in a respectful and courteous manner towards the bus driver, coordinator, and fellow students.",
        "Students must report any incident or concern to the bus driver / coordinator or management.",
      ],
    },
    {
      id: "parent-responsibilities",
      number: "x",
      title: "Parent / Guardian Responsibilities",
      rules: [
        "Parents / guardians are responsible for ensuring their child follows the rules and regulations of the bus services.",
        "Parents / guardians must provide updated contact information to the bus services.",
        "Parents / guardians must pay fees on time and in accordance with the payment terms.",
      ],
    },
    {
      id: "additional-rules",
      number: "xi",
      title: "Additional Rules and Regulations",
      rules: [
        "Students must dress properly to school.",
        'Students must "sign in" in the morning and "sign out" in the afternoon; do not "sign in" or "sign out" in advance (PLEASE TAKE NOTE).',
        "Any contraband items banned by the school are strictly prohibited on the bus.",
        "Students must report anybody that offends him or her to the driver / coordinator.",
        'Anybody can call to give morning or afternoon prayers, and while praying, others must be saying "AMEN".',
        "Do not use bags or any object to occupy extra seats.",
        "No permanent seat reservations for anybody.",
        "No bullying in the bus.",
        "Any offence attracts two strokes of cane.",
        "Drivers must not engage in any form of harassment, molestation, or misconduct towards students.",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Page Header */}
      <div className="border-b border-border/60 pb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-soft-blue">
          FSTCY Lagos Island Chapter
        </span>
        <h1 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-4xl">
          Rules & Regulations
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The FSTCY School Bus Shuttle Association (Lagos Island Chapter) is
          committed to providing a safe, reliable, and efficient transportation
          service to students. To ensure this, we have established the following
          rules and regulations governing students, parents, and driver
          personnel.
        </p>

        {/* Quick Table of Contents Links */}
        <div className="mt-6 flex flex-wrap gap-2 pt-2">
          {policySections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="rounded-lg border border-border bg-card/60 px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:border-soft-blue hover:text-ink"
            >
              ({sec.number}) {sec.title}
            </a>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="mt-10 space-y-10">
        {policySections.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className={`scroll-mt-24 rounded-2xl border p-6 transition-colors sm:p-8 ${
              sec.isWarning
                ? "border-signal/30 bg-signal/5"
                : "border-border bg-card/40 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-3 border-b border-border/40 pb-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-soft-blue/10 font-mono text-xs font-bold uppercase text-soft-blue">
                {sec.number}
              </span>
              <h2 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                {sec.title}
              </h2>
            </div>

            <ul className="mt-5 space-y-3">
              {sec.rules.map((ruleText, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs leading-relaxed text-muted sm:text-sm"
                >
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-soft-blue" />
                  <span className="flex-1">{ruleText}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Contact Management Footer Box */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-border bg-card p-6 shadow-sm sm:flex-row">
          <div>
            <h3 className="text-sm font-semibold text-ink sm:text-base">
              Have questions or need clarification regarding policies?
            </h3>
            <p className="mt-1 text-xs text-muted">
              Get in touch with our route coordinators or administrative team.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-signal px-5 py-2.5 text-xs font-semibold text-signal-ink transition-transform duration-200 hover:scale-105"
          >
            Contact Management
          </Link>
        </div>
      </div>
    </div>
  );
}
