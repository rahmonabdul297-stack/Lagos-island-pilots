import Link from "next/link";

export const metadata = {
  title: "Terms & Transport Operating Guidelines",
  description:
    "Official rules, driver regulations, bus safety standards, and operational guidelines for the FSTCY School Bus Shuttle Association (Lagos Island pilots).",
};

export default function TermsPage() {
  const driverRules = [
    {
      title: "Assembly Time",
      description:
        "All drivers must assemble at the designated terminals 10 minutes before the scheduled departure time.",
    },
    {
      title: "Sign-In",
      description:
        "All drivers must sign in at the designated logbook in both the morning and afternoon.",
    },
    {
      title: "Association Banners",
      description:
        "All drivers must ensure that the official association banners are displayed prominently on the front of the buses.",
    },
    {
      title: "Students Attendance",
      description:
        "Drivers must take accurate attendance of students in both the morning and afternoon and report any discrepancies to the coordinator or management immediately.",
    },
    {
      title: "Route Adherence",
      description:
        "Drivers must adhere strictly to designated routes and schedules and avoid unauthorized deviations.",
    },
    {
      title: "Safety & Maintenance",
      description:
        "Drivers are responsible for ensuring their buses are in good working condition and reporting any maintenance issues to the coordinator or management.",
    },
    {
      title: "Student Supervision",
      description:
        "Drivers must ensure students' safety and well-being during transportation and report any incidents or concerns to management.",
    },
    {
      title: "Code of Conduct",
      description:
        "Drivers must maintain a professional and respectful demeanor at all times and adhere strictly to the association's code of conduct.",
    },
    {
      title: "Communication",
      description:
        "Drivers must keep coordinators or management informed of any changes in schedule, route, or issues affecting service.",
    },
    {
      title: "Legal Compliance",
      description:
        "Drivers must comply with all state traffic laws and regulations and avoid any behavior that brings the association into disrepute.",
    },
    {
      title: "No Unauthorized Stops",
      description:
        "Drivers must not make unauthorized stops or deviate from designated pickup and drop-off points.",
    },
    {
      title: "Mobile Phone Restrictions",
      description:
        "Drivers are strictly prohibited from using mobile phones while actively operating vehicles.",
    },
    {
      title: "Mandatory Seatbelts",
      description: "Drivers must wear seatbelts at all times while driving.",
    },
    {
      title: "Cleanliness",
      description:
        "Drivers must ensure their buses are kept neat, presentable, and hygienic at all times.",
    },
    {
      title: "Weekly Dues",
      description:
        "Each bus operator must pay weekly dues based on the amounts agreed upon by management.",
    },
    {
      title: "Registration Fees",
      description:
        "New buses must register with both Lagos Island Management and the FSTCY School Bus Shuttle Association.",
    },
    {
      title: "Incident Reporting",
      description:
        "Drivers must report any accidents, delays, or incidents to coordinators or management immediately.",
    },
  ];

  const busOperationRules = [
    {
      title: "Bus Cleanliness",
      description:
        "Buses must be cleaned regularly and maintained in clean, comfortable condition for student commuters.",
    },
    {
      title: "Bus Maintenance",
      description:
        "Buses must be serviced regularly and maintained in optimal mechanical working condition.",
    },
    {
      title: "Zero Tolerance Policy",
      description:
        "Drivers and operators must not engage in any form of harassment, intimidation, or misconduct towards students.",
    },
    {
      title: "Mandatory Safety Equipment",
      description:
        "Buses must be equipped with functional safety equipment, including fire extinguishers and verified First Aid kits.",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Page Header */}
      <div className="border-b border-border/60 pb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-soft-blue">
         Lagos Island Pilots
        </span>
        <h1 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-4xl">
          Terms & Operating Policies
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The FSTCY School Bus Shuttle Association (Lagos Island Chapter) is
          committed to providing a safe, reliable, and efficient transportation
          service to students. To ensure this, we have established the
          following rules and regulations governing our drivers and shuttle
          operations. These rules promote a safe and respectful environment
          for students, drivers, and staff while ensuring full regulatory
          compliance.
        </p>
      </div>

      <div className="mt-10 space-y-12">
        {/* Driver's Rules & Regulations */}
        <section>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-soft-blue/10 text-soft-blue font-bold text-sm">
              01
            </div>
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              Driver&apos;s Rules & Regulations
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {driverRules.map((rule, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card/60 p-4 transition-all duration-200 hover:border-soft-blue/40 hover:bg-card shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-xs font-bold text-soft-blue">
                    {index + 1}.
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">
                      {rule.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bus Operation Rules */}
        <section>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-soft-blue/10 text-soft-blue font-bold text-sm">
              02
            </div>
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              Bus Operation Rules
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {busOperationRules.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card/60 p-4 transition-all duration-200 hover:border-soft-blue/40 hover:bg-card shadow-sm"
              >
                <h3 className="text-sm font-semibold text-ink">
                  {index + 1}. {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Disciplinary Measures */}
        <section className="rounded-2xl border border-signal/30 bg-signal/10 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal/20 text-signal-ink font-bold text-sm">
              03
            </div>
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              Disciplinary Measures
            </h2>
          </div>

          <ul className="mt-4 space-y-3 text-xs text-muted sm:text-sm">
            <li className="flex items-start gap-2">
              <span className="text-signal font-bold">•</span>
              <span>
                <strong className="text-ink">First & Secondary Offenses:</strong> Failure to comply
                with these rules and regulations may result in formal
                disciplinary action, including official warnings, fines,
                temporary suspension, or withdrawal of driving privileges.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-signal font-bold">•</span>
              <span>
                <strong className="text-ink">Severe & Repeated Misconduct:</strong> Repeated
                violations or severe misconduct will result in immediate
                termination of employment and revocation of association
                operating rights.
              </span>
            </li>
          </ul>
        </section>

        {/* Return to Top / Contact Redirect */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-border bg-card p-6 sm:flex-row shadow-sm">
          <div>
            <h4 className="text-sm font-semibold text-ink">
              Have questions regarding transportation policies?
            </h4>
            <p className="text-xs text-muted">
              Get in touch with our route coordinators or administrative team.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-signal px-5 py-2.5 text-xs font-semibold text-signal-ink transition-transform duration-200 hover:scale-105"
          >
            Contact Management
          </Link>
        </div>
      </div>
    </div>
  );
}