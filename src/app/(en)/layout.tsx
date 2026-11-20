import type { Metadata } from "next";
import "../globals.css";
import { SiteDocument } from "@/components/site-document";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Senior Full-Stack Web Developer, 5 Years | Ipoh & Selangor | Zakrul",
    template: "%s | Zakrul",
  },
  description:
    "Muhamad Zaqrul builds websites and custom web systems for businesses in Ipoh, Selangor and across Malaysia, with technical SEO, GA4 and automation.",
  keywords: [
    /* Zakrul is the site name; zakrulabd is only a social username. */
    "zakrul",
    "zakrulabd",
    "Muhamad Zaqrul",
    "Freelance Web Developer Malaysia",
    "Web Developer Malaysia",
    "Web Developer Ipoh",
    "Web Developer Selangor",
    "React Developer Malaysia",
    "Laravel Developer Malaysia",
    "WordPress Developer Malaysia",
    "SEO Specialist Malaysia",
    "GA4 Setup Malaysia",
    "Healthcare Digital Marketing",
    "SME Web Development Malaysia",
    "Full Stack Developer",
  ],
  authors: [{ name: "Muhamad Zaqrul", url: `${SITE_URL}/about` }],
  creator: "Muhamad Zaqrul",
  publisher: "Zakrul",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      en: SITE_URL,
      ms: `${SITE_URL}/ms`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: SITE_URL,
    siteName: "Zakrul",
    title: "Senior Full-Stack Web Developer, 5 Years | Ipoh & Selangor | Zakrul",
    description:
      "Websites and custom web systems for businesses in Ipoh, Selangor and across Malaysia, with technical SEO, GA4 and automation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Full-Stack Web Developer, 5 Years | Ipoh & Selangor | Zakrul",
    description:
      "Websites and custom web systems for businesses in Ipoh, Selangor and across Malaysia, with technical SEO, GA4 and automation.",
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
  /* Search Console's meta-tag method. Set the env var to the token's content
     value only, not the whole tag. Verifying by DNS TXT in Cloudflare instead
     is fine — then leave this unset and no tag is emitted. */
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="en">{children}</SiteDocument>;
}
