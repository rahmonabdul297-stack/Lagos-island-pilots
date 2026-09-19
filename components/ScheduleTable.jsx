import { schedule } from "@/lib/site";

function Table({ title, direction, rows }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <table className="w-full text-left">
        <caption className="border-b border-line px-5 py-4 text-left">
          <span className="block font-display text-lg font-semibold">{title}</span>
          <span className="text-sm text-muted">{direction}</span>
        </caption>
        <thead className="sr-only">
          <tr>
            <th scope="col">Stop</th>
            <th scope="col">What happens</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row) => (
            <tr key={row.place}>
              <th scope="row" className="px-5 py-3.5 font-medium">
                {row.place}
              </th>
              <td className="px-2 py-3.5 text-sm text-muted">{row.note}</td>
              <td className="px-5 py-3.5 text-right font-semibold tabular-nums">
                {row.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ScheduleTable() {
  const { morning, afternoon } = schedule;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Table
        title={morning.title}
        direction={morning.direction}
        rows={[...morning.stops, morning.end]}
      />
      <Table
        title={afternoon.title}
        direction={afternoon.direction}
        rows={[afternoon.start, ...afternoon.stops]}
      />
    </div>
  );
}
