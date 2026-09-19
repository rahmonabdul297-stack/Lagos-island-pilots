import { FaMapMarkerAlt } from "react-icons/fa";

/**
 * A list of stops on one end of the route.
 * Set `ordered` for pickup points that are visited in sequence.
 */
export default function RouteCard({
  icon: Icon,
  title,
  description,
  stops,
  ordered = false,
}) {
  return (
    <article className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-lg text-brand">
          <Icon aria-hidden />
        </span>
        <h3 className="font-display text-xl font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-muted">{description}</p>

      <ol className="mt-6 space-y-2.5">
        {stops.map((stop, index) => (
          <li
            key={stop}
            className="flex items-center gap-3 rounded-xl bg-bg px-4 py-3"
          >
            {ordered ? (
              <span
                aria-label={`Stop ${index + 1}`}
                className="grid size-6 shrink-0 place-items-center rounded-full bg-signal text-xs font-bold text-signal-ink"
              >
                {index + 1}
              </span>
            ) : (
              <FaMapMarkerAlt className="shrink-0 text-brand" aria-hidden />
            )}
            <span className="font-medium">{stop}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}
