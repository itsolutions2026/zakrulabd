import type { Metadata } from "next";
import AboutPage from "@/app/(en)/about/page";
import { url } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Muhamad Zaqrul",
  description: "Kenali Muhamad Zaqrul, jurutera full-stack kanan di Selangor yang menerima projek dari Ipoh dan seluruh Malaysia. Lihat kerja sebenar dan cara menghubungi beliau.",
  alternates: { canonical: "/ms/about", languages: { en: url("/about"), ms: url("/ms/about"), "x-default": url("/about") } },
  openGraph: { title: "Tentang Muhamad Zaqrul | Zakrul", description: "Kejuruteraan full-stack kanan, SEO teknikal dan analitik untuk perniagaan di Malaysia.", url: url("/ms/about"), locale: "ms_MY" },
};

export default function MalayAboutPage() { return <AboutPage locale="ms" />; }
