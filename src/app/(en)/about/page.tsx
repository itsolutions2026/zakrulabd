import type { Metadata } from "next";
import Link from "next/link";
import { SvgWebDevelopment } from "iblis-react-undraw";
import { PostShell } from "@/components/post-shell";
import { ID, breadcrumb } from "@/lib/structured-data";
import { url } from "@/lib/site";
import { Mark, RevealText } from "@/components/reveal-text";
import { AsciiRipple } from "@/components/ascii-ripple";
import { tech } from "@/lib/tech";
import { SKILL_MAX, skillGroups } from "@/lib/skills";
import { wa, waMessages } from "@/lib/contact";

export const metadata: Metadata = {
  title: "About Muhamad Zaqrul",
  description:
    "Meet Muhamad Zaqrul, a Selangor-based senior full-stack engineer working with businesses in Ipoh and across Malaysia. See real projects, services and contact details.",
  alternates: { canonical: "/about", languages: { en: url("/about"), ms: url("/ms/about"), "x-default": url("/about") } },
  openGraph: {
    title: "About Muhamad Zaqrul | Zakrul",
    description:
      "Senior full-stack engineering, technical SEO and analytics for businesses in Ipoh, Selangor and across Malaysia.",
    url: url("/about"),
  },
};

export default function AboutPage({ locale = "en" }: { locale?: "en" | "ms" }) {
  const root = locale === "ms" ? "/ms" : "";
  const pagePath = `${root}/about`;
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url(pagePath)}#webpage`,
    url: url(pagePath),
    mainEntity: { "@id": ID.person },
    isPartOf: { "@id": ID.website },
    inLanguage: locale === "ms" ? "ms-MY" : "en-MY",
  };

  return (
    <PostShell locale={locale} alternatePath={locale === "ms" ? "/about" : "/ms/about"} back={{ href: root || "/", label: locale === "ms" ? "Kembali ke Laman Utama" : "Back to Home" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb(locale === "ms" ? "Tentang" : "About", pagePath)) }} />
      <main id="main" data-ripple-host className="relative isolate w-full flex-1 overflow-hidden">
        {/* The same rippling field of dots as the home hero, across the top of
            the page and fading out before the body copy. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] [mask-image:linear-gradient(to_bottom,black_45%,transparent)]">
          <AsciiRipple color="rgb(23 23 23 / 0.3)" rippleColor="#e0ad12" base={0.45} rain={0.6} />
        </div>
        <div className="mx-auto w-full max-w-3xl px-5 py-14 md:px-6 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted md:col-start-1"><RevealText text>{locale === "ms" ? "Individu di sebalik Zakrul" : "The person behind Zakrul"}</RevealText></p>
          <SvgWebDevelopment primarycolor="#f7c325" height={360} className="my-4 h-auto w-full max-w-[360px] justify-self-center md:col-start-2 md:row-span-2 md:row-start-1 md:my-0 md:w-52 md:justify-self-end md:self-center" aria-hidden="true" />
          <h1 className="font-display text-[clamp(30px,9vw,48px)] font-extrabold leading-tight tracking-tight text-navy md:col-start-1 md:mt-4"><RevealText immediate>
            {locale === "ms" ? "Tentang" : "About"}<br /><Mark className="whitespace-nowrap">Muhamad Zaqrul</Mark>
          </RevealText></h1>
        </div>
        <p className="mt-6 text-lg leading-relaxed text-body"><RevealText text immediate>
          {locale === "ms" ? "Saya jurutera full-stack kanan yang berpangkalan di Selangor, dengan pengalaman kira-kira lima tahun membina sistem produksi. Saya membina laman web dan sistem web tersuai untuk perniagaan di Malaysia, kemudian membantu mereka mengukur serta menambah baik cara pelanggan menemui dan menggunakan laman tersebut. Pelanggan " : "I am a senior full-stack engineer based in Selangor, with about five years of building production systems. I build websites and custom web systems for Malaysian businesses, then help them measure and improve how people find and use those sites. Clients "}
          <Mark>{locale === "ms" ? "berurusan terus dengan saya" : "work with me directly"}</Mark>
          {locale === "ms" ? ", daripada taklimat pertama hingga pelancaran." : ", from the first brief to launch."}
        </RevealText></p>

        <h2 id="about-work" className="mt-12 font-display text-2xl font-bold text-navy"><RevealText>{locale === "ms" ? "Bidang " : "What I "}<Mark>{locale === "ms" ? "kerja saya" : "work on"}</Mark></RevealText></h2>
        <p className="mt-4 leading-relaxed text-body"><RevealText text>
          {locale === "ms" ? "Kerja saya merangkumi aplikasi React dan Laravel, laman WordPress, SEO teknikal, Google Analytics 4 serta automasi pertanyaan. Skop bergantung pada masalah perniagaan: laman tempatan yang kecil mungkin hanya memerlukan tawaran yang jelas dan aliran pesanan WhatsApp; operasi lebih besar mungkin memerlukan sistem serta laporan tersuai. Saya juga sedang belajar GEO, iaitu cara sesebuah laman disebut dalam jawapan AI Google." : "My work covers React and Laravel applications, WordPress websites, technical SEO, Google Analytics 4 and enquiry automation. The scope depends on the business problem: a small local site may need a clear offer and a WhatsApp order flow; a larger operation may need a custom system and reporting. I am also learning GEO, which is how a site gets mentioned in the answers Google’s AI gives."}
        </RevealText></p>

        <p className="mt-4 leading-relaxed text-body"><RevealText text>
          {locale === "ms" ? "Saya juga pernah membina sistem yang lebih besar. Mulai 2021 saya menjadi satu-satunya jurutera pada sebuah platform e-dagang B2B yang besar di AWS, dengan lebih 100 juta imej produk dan lebih 10 juta transaksi, dan saya mempercepatkan pemuatan halaman daripada lebih sepuluh saat kepada kurang 200 ms. Saya juga jurutera full-stack kanan pada platform pemantauan kesihatan untuk kemudahan jagaan kejururawatan, merangkumi lima pangkalan kod dan dihoskan di Azure. Terbaharu, saya membina saluran automasi AI dengan n8n dan agen OpenAI yang mengkaji prospek jualan dan menulis hasilnya ke Google Sheets." : "I have also built larger systems. From 2021 I was the only engineer on a large B2B ecommerce platform running on AWS, with over 100 million product images and more than 10 million transactions, where I brought page loads from over ten seconds to under 200 ms. I was the senior full-stack engineer on a healthcare monitoring platform for nursing facilities, spread across five codebases and hosted on Azure. More recently I have built AI automation pipelines with n8n and OpenAI agents that research sales leads and write the results to Google Sheets."}
        </RevealText></p>

        <h2 id="about-skills" className="mt-12 font-display text-2xl font-bold text-navy"><RevealText>{locale === "ms" ? "Kemahiran dan " : "Skills and "}<Mark>{locale === "ms" ? "framework" : "frameworks"}</Mark></RevealText></h2>
        <p className="mt-4 leading-relaxed text-body"><RevealText text>
          {locale === "ms" ? "Penilaian sendiri daripada lima bintang, berdasarkan kekerapan saya menggunakan setiap alat dalam projek sebenar." : "A self-rating out of five stars, based on how often I use each tool on real projects."}
        </RevealText></p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <section key={group.label.en} className="rounded-xl border border-navy/10 bg-white p-5">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-muted">{group.label[locale]}</h3>
              <ul className="mt-3 space-y-2.5">
                {group.skills.map(({ key, level }) => {
                  const { name, Icon, color } = tech[key];
                  return (
                    <li key={key} className="flex items-center gap-3">
                      <Icon aria-hidden="true" style={{ color, width: 18, height: 18 }} className="flex-shrink-0" />
                      <span className="min-w-0 flex-1 truncate text-sm font-semibold text-navy">{name}</span>
                      {level === 1 ? (
                        <span className="flex-shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-navy">{locale === "ms" ? "Masih belajar" : "Still learning"}</span>
                      ) : (
                      <span role="img" aria-label={locale === "ms" ? `${level} daripada ${SKILL_MAX} bintang` : `${level} out of ${SKILL_MAX} stars`} className="flex flex-shrink-0 gap-0.5">
                        {Array.from({ length: SKILL_MAX }, (_, i) => (
                          <svg key={i} viewBox="0 0 20 20" aria-hidden="true" className={`h-4 w-4 ${i < level ? "text-amber-500" : "text-navy/15"}`}>
                            <path fill="currentColor" d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
                          </svg>
                        ))}
                      </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        <h2 id="about-proof" className="mt-12 font-display text-2xl font-bold text-navy"><RevealText>{locale === "ms" ? "Hasil kerja yang boleh " : "Work you can "}<Mark>{locale === "ms" ? "anda lihat" : "inspect"}</Mark></RevealText></h2>
        <p className="mt-4 leading-relaxed text-body"><RevealText text>
          {locale === "ms" ? "Untuk Sri Tanduk, perniagaan kuih di Ipoh, saya membina laman yang memaparkan produk dan menyalurkan pesanan ke WhatsApp. Dari Julai hingga September 2026, laman itu mencatatkan 3,260 impressions dan 75 klik daripada Google pada kedudukan purata 6.6, dan jawapan AI Google mula memaparkannya sejak pertengahan September. " : "For Sri Tanduk, a kuih business in Ipoh, I built a site that presents its products and routes orders to WhatsApp. From July to September 2026 it recorded 3,260 Google impressions and 75 clicks at an average position of 6.6, and Google’s AI answers have shown it since mid-September. The "}<Link href={locale === "ms" ? "/ms/notes/sri-tanduk" : "/notes/the-kuih-maker-who-had-no-time-to-market"} className="font-semibold text-primary-600 underline">{locale === "ms" ? "Catatan projek" : "project write-up"}</Link>{locale === "ms" ? " menerangkan keputusan reka bentuk, menunjukkan hasil dan melaporkan perkembangan selepas pelancaran. " : " explains the choices, shows the finished work and reports what happened after launch. My "}<Link href={`${root}/notes`} className="font-semibold text-primary-600 underline">{locale === "ms" ? "Catatan projek lain" : "other project notes"}</Link>{locale === "ms" ? " mendokumentasikan lebih banyak proses dan hasil. Sejak November 2025, saya juga menguruskan SEO teknikal, GA4 dan sembang langsung untuk sebuah hospital rawatan kanser di Malaysia. Membandingkan 3 November 2025 hingga 12 Mac 2026 dengan 139 hari sebelumnya, kedudukan purata Google bertambah baik daripada 12.1 kepada 8.7." : " document more of the process and outcomes. Since November 2025 I have also run technical SEO, GA4 and live chat for a Malaysian cancer-care hospital. Comparing 3 November 2025 to 12 March 2026 with the 139 days before, its average Google position improved from 12.1 to 8.7."}
        </RevealText></p>

        <h2 id="about-reach" className="mt-12 font-display text-2xl font-bold text-navy"><RevealText>{locale === "ms" ? "Lokasi kerja dan " : "Where I work and "}<Mark>{locale === "ms" ? "cara menghubungi saya" : "how to reach me"}</Mark></RevealText></h2>
        <p className="mt-4 leading-relaxed text-body"><RevealText text>
          {locale === "ms" ? "Saya berpangkalan di Selangor dan menerima projek di Ipoh serta kawasan lain di Malaysia. Anda boleh menghantar e-mel ke " : "I am based in Selangor and take projects in Ipoh and elsewhere in Malaysia. You can email me at "}<a href="mailto:zakrulabd@gmail.com" className="font-semibold text-primary-600 underline">zakrulabd@gmail.com</a>{locale === "ms" ? ", menelefon atau menghantar WhatsApp ke " : ", call or WhatsApp "}<a href="tel:+60102551527" className="font-semibold text-primary-600 underline">+60 10-255 1527</a>{locale === "ms" ? ", atau " : ", or "}<Link href={`${root}/contact`} className="font-semibold text-primary-600 underline">{locale === "ms" ? "hantar ringkasan projek" : "send a project brief"}</Link>.
        </RevealText></p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={wa(waMessages.hero)} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center rounded-lg bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy/90">WhatsApp</a>
          <Link href={`${root}/contact`} className="btn-primary inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-bold text-navy hover:bg-amber-600">{locale === "ms" ? "Hantar Ringkasan Projek" : "Send Brief"}</Link>
        </div>
        </div>
      </main>
    </PostShell>
  );
}
