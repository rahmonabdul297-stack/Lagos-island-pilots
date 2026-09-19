export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ title, children, className = "" }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {children && (
        <p className="mt-3 text-lg leading-relaxed text-muted">{children}</p>
      )}
    </div>
  );
}

export function PageHeader({ title, children }) {
  return (
    <div className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
        <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        {children && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {children}
          </p>
        )}
      </div>
    </div>
  );
}
