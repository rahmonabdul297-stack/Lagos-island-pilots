import { FaBus, FaMapMarkerAlt } from "react-icons/fa";
import { schedule } from "@/lib/site";

/**
 * The hero's signature element: the morning run drawn as a line of stops,
 * from the first Island pickup to the drop at school in Yaba.
 */
export default function RouteStrip() {
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
