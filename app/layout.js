import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import AppWrapper from "@/components/AppWrapper";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} | School Shuttle Service from Lagos Island to Yaba`,
    template: `%s | ${site.name}`,
  },
  description:
    "Safe, reliable, and punctual daily student transportation connecting Lagos Island to Lagos Mainland (Yaba). An official subsidiary of FSTCY School Bus Shuttle Operators Association.",

  verification: {
    google: "q9wFkqWYPnxee4mgBMDVqUHCKwlG8qK-0IYfwzsQsTo",
  },

  icons: {
    icon: "/images/logo.png",
  },
  keywords: [
    "Lagos Island Pilots",
    "FSTCY School Bus Shuttle Operators Association",
    "School bus shuttle Lagos Island to Yaba",
    "Student transport Lagos Island",
    "School commute Lagos Mainland",
    "Yaba school bus service",
    "Lagos student shuttle",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: "FSTCY School Bus Shuttle Operators Association",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} | Student Transport Lagos Island to Yaba`,
    description:
      "Safe, reliable, and punctual student transport connecting Lagos Island to Yaba (Mainland). Subsidiary of FSTCY.",
    url: baseUrl,
    siteName: site.name,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} - Student Transportation Service`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | School Shuttle Lagos Island to Yaba`,
    description:
      "Punctual student shuttle service between Lagos Island and Yaba. Official subsidiary of FSTCY.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "NG-LA",
    "geo.placename": "Lagos Island",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#091540" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BusReservation",
    name: site.fullName || site.name,
    description:
      "Safe, reliable and punctual student transport from Lagos Island to Lagos Mainland (Yaba).",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    telephone: Array.isArray(site.phone) ? site.phone[0] : site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address || "Lagos Island",
      addressLocality: "Lagos Island",
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Lagos Island",
      },
      {
        "@type": "AdministrativeArea",
        name: "Yaba",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "FSTCY School Bus Shuttle Operators Association",
    },
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Fixed PNG icon mimetype */}
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <meta
          name="google-site-verification"
          content="XihMyKmfq8q0W_FY83QaxO-9JJZCGVUadwj4Ph3awoI"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-bg font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only rounded-full bg-signal px-4 py-2 font-semibold text-signal-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
        >
          Skip to main content
        </a>
        <AppWrapper>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}
