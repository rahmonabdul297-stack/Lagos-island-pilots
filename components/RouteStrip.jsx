import { FaBus, FaCheckCircle, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { schedule, site } from "@/lib/site";

/**
 * The hero's signature element: the morning run drawn as a line of stops,
 * from the first Island pickup to the drop at school in Yaba.
 */
export  function RouteStrip() {
  const run = schedule.morning;
  const stops = [...run.stops, run.end];

  return (
    <div className="rounded-3xl bg-white/[0.07] p-6 ring-1 ring-white/15 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-full bg-signal text-signal-ink">
          <FaBus aria-hidden />
        </span>
        <div>
          <p className="font-display text-lg font-semibold">{run.title}</p>
          <p className="text-sm text-white/70">{run.direction}</p>
        </div>
      </div>

      <ol className="mt-7">
        {stops.map((stop, index) => {
          const last = index === stops.length - 1;
          return (
            <li key={stop.place} className="relative flex gap-4 pb-8 last:pb-0">
              {!last && (
                <span
                  aria-hidden
                  className="absolute bottom-0 left-[11px] top-6 w-0.5 bg-white/30"
                />
              )}
              <span
                aria-hidden
                className={`relative z-10 mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-[0.7rem] ${
                  last
                    ? "bg-signal text-signal-ink"
                    : "border-2 border-signal bg-hero"
                }`}
              >
                {last && <FaMapMarkerAlt />}
              </span>
              <div className="flex flex-1 items-baseline justify-between gap-4">
                <div>
                  <p className="font-medium">{stop.place}</p>
                  <p className="text-sm text-white/65">{stop.note}</p>
                </div>
                <p className="font-display text-lg font-semibold tabular-nums">
                  {stop.time}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
export  function Schools() {
  const schoolsList = site.schools || [];

  return (
    <div className="rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-8 transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-line pb-5">
        <span className="grid size-11 place-items-center rounded-2xl bg-brand/10 text-xl text-brand">
          <FaGraduationCap aria-hidden />
        </span>
        <div>
          <h3 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
            Schools Served & Destinations
          </h3>
          <p className="text-xs font-medium text-muted sm:text-sm">
            Primary destination corridors & partner schools in Yaba (Mainland)
          </p>
        </div>
      </div>

      {/* Mapped Schools List */}
      {schoolsList.length > 0 ? (
        <ol className="mt-7">
          {schoolsList.map((school, index) => {
            const isLast = index === schoolsList.length - 1;
            const schoolName = typeof school === "string" ? school : school.name;
            const schoolLocation = typeof school === "object" ? school.location || school.note : "Yaba, Lagos Mainland";
            const arrivalTime = typeof school === "object" ? school.time : null;

            return (
              <li key={schoolName || index} className="relative flex gap-4 pb-7 last:pb-0">
                {/* Vertical Connector Line */}
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-[11px] top-6 w-0.5 bg-line"
                  />
                )}

                {/* Node Bullet */}
                <span
                  aria-hidden
                  className={`relative z-10 mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-[0.7rem] transition-transform duration-200 ${
                    isLast
                      ? "bg-brand text-white shadow-xs"
                      : "border-2 border-brand bg-surface text-brand"
                  }`}
                >
                  {isLast ? <FaCheckCircle /> : <FaCheckCircle className="text-[10px]" />}
                </span>

                {/* Content */}
                <div className="flex flex-1 items-baseline justify-between gap-4">
                  <div>
                    <p className="font-display font-bold text-ink sm:text-base">
                      {schoolName}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">
                      {schoolLocation}
                    </p>
                  </div>

                  {arrivalTime && (
                    <p className="font-display text-sm font-semibold tabular-nums text-brand sm:text-base">
                      {arrivalTime}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      ) : (
        <p className="mt-6 text-center text-sm text-muted">
          School destination list is being updated for the upcoming term.
        </p>
      )}
    </div>
  );
}