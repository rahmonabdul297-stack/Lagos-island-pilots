import {
  FaBus,
  FaHandshake,
  FaTicketAlt,
  FaCalendarAlt,
  FaUserShield,
  FaClock,
  FaShieldAlt,
  FaTools,
  FaClipboardCheck,
} from "react-icons/fa";

/* -------------------------------------------------------------------------
   EDIT THIS FILE to change contact details, routes, times and copy.
   Anything marked TODO is placeholder content to replace before launch.
   ------------------------------------------------------------------------- */

export const site = {
  name: "LAGOS ISLAND PILOTS",
  badge: "Subsidiary of FSTCY School Bus Shuttle Operators Association",
  parent: "FSTCY School Bus Shuttle Operators Association",
  fullName:
    "LAGOS ISLAND PILOTS - A SUBSIDIARY OF FSTCY SCHOOL BUS SHUTTLE OPERATORS ASSOCIATION",
  // TODO: replace with the association's real contact details
  phone: [
    "+2347013320511",
    "+2348056174401",
    "+2349092794351",
    "+2348035834195",
    "+2348055262505",
  ],
  phoneHref: "tel:+2348000000000",
  email: "lagosislandpilots@gmail.com",
  address: "Head office / station address, Lagos Island, Lagos, Nigeria",
  officeHours: "Monday to Friday, 6:00 am to 6:00 pm",
  schools:["",],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact us" },
];

export const pickupPoints = ["Towry Street, beside LAWA hotel, Igbosere Road", "Foresythe Junction By Simpson Road."];

// TODO: list the Yaba / mainland schools you drop at
export const dropoffPoints = [
  "Schools across Yaba",
  "Other mainland schools, by arrangement",
];

/* Sample times: TODO confirm and replace. */
export const schedule = {
  morning: {
    title: "Morning run",
    direction: "Lagos Island to Yaba",
    stops: [
      {
        place: "Towry Street, beside LAWA hotel, Igbosere Road.",
        time: "6:00 am",
        note: "Pickup",
      },
      {
        place: "Foresythe Junction By Simpson Road.",
        time: "6:00 am",
        note: "Pickup",
      },
    ],
    end: {
      place: "Respective schools",
      time: "7:30 am",
      note: "Arrive at school",
    },
  },
  afternoon: {
    title: "Afternoon return",
    direction: "Yaba to Lagos Island",
    start: {
      place: "Respective schools",
      time: "3:30 pm",
      note: "Depart school",
    },
    stops: [{ place: "Upper campus", time: "5:00 pm", note: "Drop-off" }],
  },
};

export const highlights = [
  {
    icon: FaBus,
    title: "Two runs every school day",
    text: "A morning run from the Island to Yaba and an afternoon run back, at the same times each day.",
  },
  {
    icon: FaUserShield,
    title: "Drivers parents can trust",
    text: "Every driver is vetted by the association before carrying a single student.",
  },
  {
    icon: FaShieldAlt,
    title: "Safety comes first",
    text: "Regular vehicle checks and clear conduct rules for every driver and every bus.",
  },
];

export const heroFeatures = [
  { icon: FaUserShield, label: "Vetted drivers" },
  { icon: FaClock, label: "Fixed timings" },
  { icon: FaShieldAlt, label: "Safe vehicles" },
];

/* Service tiers. `value` feeds the inquiry form select and the ?service= link. */
export const serviceTiers = [
  { value: "daily", label: "Daily school commute" },
  { value: "partnership", label: "School transport partnership" },
  { value: "monthly", label: "Monthly bus pass" },
  { value: "termly", label: "Termly bus pass" },
  { value: "charter", label: "Event or excursion charter" },
];

export const services = [
  {
    value: "daily",
    icon: FaBus,
    title: "Daily morning and afternoon commutes",
    text: "Door-to-school shuttle between Lagos Island and Yaba every school day, with fixed pickup points and times.",
  },
  {
    value: "partnership",
    icon: FaHandshake,
    title: "Dedicated school partnerships",
    text: "A regular arrangement with your school, with buses and timings planned around its calendar.",
  },
  {
    value: "monthly",
    icon: FaTicketAlt,
    title: "Termly and monthly bus passes",
    text: "Pay once for the month or the whole term and stop worrying about daily fares.",
  },
  {
    value: "charter",
    icon: FaCalendarAlt,
    title: "Events and excursion charters",
    text: "Hire a bus and driver for school trips, sports days and other events.",
  },
];

export const contactServiceTypes = [
  "Daily commute",
  "Monthly Pass",
  "Termly Pass",
  "General Inquiry",
];

export const standards = [
  {
    icon: FaShieldAlt,
    title: "Safety protocols",
    text: "Students are seated and belted before we move, buses are never overloaded, and drivers follow clear conduct rules on every trip.",
  },
  {
    icon: FaClipboardCheck,
    title: "Driver background checks",
    text: "Drivers are vetted and their records checked before they join the association, and reviewed regularly after.",
  },
  {
    icon: FaTools,
    title: "Scheduled vehicle maintenance",
    text: "Every bus goes through routine servicing and inspection, so problems are fixed before they reach the road.",
  },
];

/* SAMPLE quotes: TODO replace with real feedback from parents before launch. */
export const testimonials = [
  {
    quote:
      "I used to worry every morning about getting my child across to Yaba on time. Now the bus is so steady that I plan my own day around it.",
    who: "Parent, Lagos Island",
    featured: true,
  },
  {
    quote: "The drivers know the children by name. That matters to me.",
    who: "Parent ",
  },
  {
    quote: "Pickup and drop-off are on time, and the buses are always clean.",
    who: "Parent",
  },
];
