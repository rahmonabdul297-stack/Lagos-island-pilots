import Link from "next/link";

export default function ServiceCard({ icon: Icon, title, text, value }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-7">
      <span className="grid size-12 place-items-center rounded-xl bg-signal text-xl text-signal-ink">
        <Icon aria-hidden />
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-muted">{text}</p>
      <Link
        href={`/services?service=${value}#inquiry`}
        className="mt-5 inline-block font-semibold text-brand underline-offset-4 hover:underline"
      >
        Ask about this service
      </Link>
    </article>
  );
}
