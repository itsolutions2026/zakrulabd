import type { Metadata } from "next";
import "../globals.css";
import { SiteDocument } from "@/components/site-document";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Khidmat Bina Laman Web di Ipoh dan Selangor | Zakrul",
    template: "%s | Zakrul",
  },
  description:
    "Muhamad Zaqrul, jurutera full-stack kanan, membina laman web dan sistem web untuk perniagaan di Ipoh, Selangor dan seluruh Malaysia. Khidmat SEO teknikal, analitik dan automasi turut disediakan.",
  authors: [{ name: "Muhamad Zaqrul", url: `${SITE_URL}/ms/about` }],
  creator: "Muhamad Zaqrul",
  publisher: "Zakrul",
  alternates: {
    canonical: "/ms",
    languages: {
      en: SITE_URL,
      ms: `${SITE_URL}/ms`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    url: `${SITE_URL}/ms`,
    siteName: "Zakrul",
    title: "Khidmat Bina Laman Web di Ipoh dan Selangor | Zakrul",
    description:
      "Laman web dan sistem web untuk perniagaan di Ipoh, Selangor dan seluruh Malaysia. Dibina terus oleh Muhamad Zaqrul, jurutera full-stack kanan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khidmat Bina Laman Web di Ipoh dan Selangor | Zakrul",
    description: "Laman web, sistem web dan SEO teknikal untuk perniagaan di Malaysia.",
  },
  robots: { index: true, follow: true },
};

export default function MalayLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="ms">{children}</SiteDocument>;
}
