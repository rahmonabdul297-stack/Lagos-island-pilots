import Section, { PageHeader, SectionHeading } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import ScheduleTable from "@/components/ScheduleTable";
import InquiryForm from "@/components/InquiryForm";
import { services } from "@/lib/site";
import { Schools } from "@/components/RouteStrip";

export const metadata = {
  title: "Services",
  description:
    "Daily school commutes, school partnerships, monthly and termly bus passes and event charters between Lagos Island and Yaba.",
};

export default async function ServicesPage({ searchParams }) {
  // Cards link here with ?service=monthly so the form opens with that service chosen.
  const { service } = await searchParams;
  const selected = Array.isArray(service) ? service[0] : service;

  return (
    <>
      <PageHeader title="Shuttle services">
        Choose a daily commute, a pass, or a school partnership. Every option
        runs on the Lagos Island to Yaba route.
      </PageHeader>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((item) => (
            <ServiceCard key={item.value} {...item} />
          ))}
        </div>
      </Section>

      <Section className="border-y border-line bg-surface/60">
        <SectionHeading title="Route schedule and timings">
          Morning departures from the Island and afternoon returns from Yaba.
          Exact pickup times are confirmed with you when you book.
        </SectionHeading>
        <div className="m-10">
          <ScheduleTable />
        </div>
        <Schools />
      </Section>

      {/* <Section id="inquiry">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading title="Ask about a service">
            Pick the service you want and tell us where your child boards and
            which school in Yaba they attend. We will reply with availability and
            the pickup time.
          </SectionHeading>
          <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
            <InquiryForm key={selected ?? "none"} defaultService={selected} />
          </div>
        </div>
      </Section> */}
    </>
  );
}
