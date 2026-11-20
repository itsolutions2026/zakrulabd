import type { waMessages } from "@/lib/contact";

type Lang = { en: string; ms: string };

/* What a suggestion chip does when tapped. `scroll` jumps to a section on the
   current page. `page` opens another page, with /ms put in front for Malay
   unless `localized` is false (the demo pages exist once, in English). `wa`
   opens WhatsApp with one of the ready-made Malay messages. */
export type SuggestionAction =
  | { kind: "scroll"; id: string }
  | { kind: "page"; path: string; localized?: boolean }
  | { kind: "wa"; message: keyof typeof waMessages };

export type SectionSummary = {
  id: string;
  label: Lang;
  /* The summary itself, typed out in the bubble. */
  text: Lang;
  /* Short phrases that appear under it once it has been written, so the
     section can be scanned without reading the sentence. */
  points?: { en: string[]; ms: string[] };
  /* Follow-ups offered after the summary, the way a chat assistant offers
     next questions: where to go from here, or what to ask me. */
  suggestions: { label: Lang; action: SuggestionAction }[];
};

/* What the contact deck says when a visitor scrolls into a section. One entry
   per section, each summarising only that section and nothing about the rest of
   the page. Written by hand rather than generated on the fly, so the deck never
   says anything the page itself does not, and costs nothing per visit. Keys are
   element ids on the page; a page with none of them gets no summaries. Keep each
   to a sentence or two, and change it when its section changes. Order matters:
   it is the order the sections appear on the page, because the section currently
   in view is the last one in this list whose top has scrolled past the line near
   the top of the screen. The homepage sections come first, then the About page. */
export const sectionSummaries: SectionSummary[] = [
  {
    id: "main",
    label: { en: "Introduction", ms: "Pengenalan" },
    text: {
      en: "I help businesses get more customers and spend less time on admin, with websites, booking and customer systems, and automation. You work with me directly.",
      ms: "Saya membantu perniagaan mendapatkan lebih ramai pelanggan dan mengurangkan kerja pentadbiran, dengan laman web, sistem tempahan dan pelanggan, serta automasi. Anda berurusan terus dengan saya.",
    },
    points: {
      en: ["You work with me directly", "Prototype, build, launch", "SEO and GA4 for healthcare clients"],
      ms: ["Berurusan terus dengan saya", "Prototaip, bina, lancar", "SEO dan GA4 untuk klien kesihatan"],
    },
    suggestions: [
      { label: { en: "See what I do", ms: "Lihat apa yang saya buat" }, action: { kind: "scroll", id: "services" } },
      { label: { en: "Get a free quote", ms: "Dapatkan sebut harga" }, action: { kind: "wa", message: "quote" } },
    ],
  },
  {
    id: "services",
    label: { en: "What I do", ms: "Apa yang saya buat" },
    text: {
      en: "Four things I do for your business: websites and mobile and desktop apps, more customers through Google and follow-ups, less manual work with automation and AI, and custom systems connected to your CRM, ERP and cloud tools.",
      ms: "Empat perkara yang saya buat untuk perniagaan anda: laman web serta aplikasi mudah alih dan desktop, lebih ramai pelanggan melalui Google dan susulan, kurang kerja manual dengan automasi dan AI, serta sistem tersuai yang disambungkan kepada CRM, ERP dan alat awan anda.",
    },
    points: {
      en: ["Websites and apps", "More customers", "Less manual work", "Systems and integrations"],
      ms: ["Laman web dan aplikasi", "Lebih ramai pelanggan", "Kurang kerja manual", "Sistem dan integrasi"],
    },
    suggestions: [
      { label: { en: "What can I build?", ms: "Apa yang boleh dibina?" }, action: { kind: "scroll", id: "projects" } },
      { label: { en: "Ask about a service", ms: "Tanya tentang perkhidmatan" }, action: { kind: "wa", message: "hero" } },
    ],
  },
  {
    id: "projects",
    label: { en: "What I can build", ms: "Apa yang boleh saya bina" },
    text: {
      en: "Seven workflows, step by step: lead generation, enquiries, reservations and memberships, sales to accounts, an AI assistant, data and analytics, and websites and apps, with the tools each one works with.",
      ms: "Tujuh aliran kerja, langkah demi langkah: penjanaan prospek, pertanyaan, tempahan dan keahlian, jualan ke akaun, pembantu AI, data dan analitik, serta laman web dan aplikasi, dengan alat yang digunakan setiap satu.",
    },
    points: {
      en: ["Lead generation", "Enquiries", "Reservations and memberships", "Sales to accounts", "AI assistant", "Data and analytics"],
      ms: ["Penjanaan prospek", "Pertanyaan", "Tempahan dan keahlian", "Jualan ke akaun", "Pembantu AI", "Data dan analitik"],
    },
    suggestions: [
      { label: { en: "Try the store demo", ms: "Cuba demo kedai" }, action: { kind: "page", path: "/showcase/online-store", localized: false } },
      { label: { en: "Ask about a custom build", ms: "Tanya tentang sistem tersuai" }, action: { kind: "wa", message: "custom" } },
    ],
  },
  {
    id: "process",
    label: { en: "How I work", ms: "Cara saya bekerja" },
    text: {
      en: "Six stages: discover what your business needs, plan and design, build with regular check-ins, test and QA, deploy and host, then launch and keep supporting it.",
      ms: "Enam peringkat: fahami keperluan perniagaan anda, rancang dan reka, bina dengan semakan berkala, uji dan QA, hantar dan hosting, kemudian lancarkan dan terus beri sokongan.",
    },
    points: {
      en: ["Discover", "Design and prototype", "Build", "Launch and grow"],
      ms: ["Fahami", "Reka dan prototaip", "Bina", "Lancar dan kembangkan"],
    },
    suggestions: [
      { label: { en: "See the packages", ms: "Lihat pakej" }, action: { kind: "scroll", id: "pricing" } },
      { label: { en: "Get a free quote", ms: "Dapatkan sebut harga" }, action: { kind: "wa", message: "quote" } },
    ],
  },
  {
    id: "pricing",
    label: { en: "Packages", ms: "Pakej" },
    text: {
      en: "Three packages: Starter for getting online quickly, Professional for established businesses, and Advanced for custom systems. Each includes everything in the one before it.",
      ms: "Tiga pakej: Starter untuk mula atas talian dengan cepat, Professional untuk perniagaan yang sudah mantap, dan Advanced untuk sistem tersuai. Setiap pakej termasuk semua yang ada dalam pakej sebelumnya.",
    },
    points: {
      en: ["Starter", "Professional", "Advanced"],
      ms: ["Starter", "Professional", "Advanced"],
    },
    suggestions: [
      { label: { en: "Compare what each builds", ms: "Bandingkan setiap pakej" }, action: { kind: "page", path: "/compare" } },
      { label: { en: "Ask about Professional", ms: "Tanya tentang Professional" }, action: { kind: "wa", message: "business" } },
    ],
  },
  {
    id: "results",
    label: { en: "Results", ms: "Hasil" },
    text: {
      en: "Two real cases: SEO and GA4 work for a cancer-care hospital, and a kuih business in Ipoh whose new site passed 100 Google impressions a day within three months.",
      ms: "Dua kes sebenar: kerja SEO dan GA4 untuk sebuah hospital rawatan kanser, dan perniagaan kuih di Ipoh yang laman barunya melepasi 100 impressions Google sehari dalam tiga bulan.",
    },
    points: {
      en: ["Average position 12.1 to 8.7", "Impressions up 13% a day", "Sri Tanduk: 100+ impressions a day"],
      ms: ["Kedudukan purata 12.1 ke 8.7", "Impressions naik 13% sehari", "Sri Tanduk: 100+ impressions sehari"],
    },
    suggestions: [
      { label: { en: "Read the project notes", ms: "Baca nota projek" }, action: { kind: "page", path: "/notes" } },
      { label: { en: "Get results like this", ms: "Dapatkan hasil seperti ini" }, action: { kind: "wa", message: "quote" } },
    ],
  },
  {
    id: "stack",
    label: { en: "Built with", ms: "Dibina dengan" },
    text: {
      en: "The tools I work with, from JavaScript, TypeScript and PHP to React, Next.js, Laravel and WordPress, plus Supabase, Vercel and Google Analytics.",
      ms: "Alatan yang saya guna, daripada JavaScript, TypeScript dan PHP kepada React, Next.js, Laravel dan WordPress, serta Supabase, Vercel dan Google Analytics.",
    },
    points: {
      en: ["React and Next.js", "Laravel and WordPress", "Supabase", "Vercel"],
      ms: ["React dan Next.js", "Laravel dan WordPress", "Supabase", "Vercel"],
    },
    suggestions: [
      { label: { en: "See my technology services", ms: "Lihat perkhidmatan teknologi saya" }, action: { kind: "page", path: "/about#about-skills" } },
    ],
  },
  {
    id: "reviews",
    label: { en: "Client feedback", ms: "Maklum balas pelanggan" },
    text: {
      en: "What clients say about the sites I have built, fixed and launched for their businesses.",
      ms: "Apa kata pelanggan tentang laman yang saya bina, baiki dan lancarkan untuk perniagaan mereka.",
    },
    suggestions: [
      { label: { en: "See the results", ms: "Lihat hasil" }, action: { kind: "scroll", id: "results" } },
      { label: { en: "Work with me", ms: "Bekerja dengan saya" }, action: { kind: "wa", message: "hero" } },
    ],
  },
  {
    id: "notes",
    label: { en: "Notes", ms: "Nota" },
    text: {
      en: "Write-ups of real projects: what the business needed, what I built and why, and what happened after it went live.",
      ms: "Catatan projek sebenar: apa yang perniagaan perlukan, apa yang saya bina dan kenapa, dan apa yang berlaku selepas ia dilancarkan.",
    },
    points: {
      en: ["What the business needed", "What I built and why", "What happened after launch"],
      ms: ["Apa yang perniagaan perlukan", "Apa yang saya bina dan kenapa", "Apa berlaku selepas lancar"],
    },
    suggestions: [{ label: { en: "Read all notes", ms: "Baca semua nota" }, action: { kind: "page", path: "/notes" } }],
  },
  {
    id: "start",
    label: { en: "Getting started", ms: "Cara bermula" },
    text: {
      en: "Three steps: tell me what you need, get a quote and a timeline, then I build it and launch it.",
      ms: "Tiga langkah: beritahu saya apa yang anda perlukan, dapatkan sebut harga dan jadual, kemudian saya bina dan lancarkan.",
    },
    points: {
      en: ["Tell me what you need", "Get a quote and timeline", "I build and launch"],
      ms: ["Beritahu keperluan anda", "Dapat sebut harga dan jadual", "Saya bina dan lancar"],
    },
    suggestions: [
      { label: { en: "Get a free quote", ms: "Dapatkan sebut harga" }, action: { kind: "wa", message: "quote" } },
      { label: { en: "See the packages", ms: "Lihat pakej" }, action: { kind: "scroll", id: "pricing" } },
    ],
  },
  {
    id: "contact",
    label: { en: "Contact", ms: "Hubungi" },
    text: {
      en: "Message me on WhatsApp or by email with what you need and when. I reply with a scope and a quote.",
      ms: "Hantar mesej melalui WhatsApp atau e-mel tentang apa yang anda perlukan dan bila. Saya balas dengan skop dan sebut harga.",
    },
    points: {
      en: ["WhatsApp or email", "Say what and when", "I reply with scope and quote"],
      ms: ["WhatsApp atau e-mel", "Nyatakan apa dan bila", "Saya balas dengan skop dan harga"],
    },
    suggestions: [{ label: { en: "Message me on WhatsApp", ms: "Mesej saya di WhatsApp" }, action: { kind: "wa", message: "hero" } }],
  },

  /* The About page. */
  {
    id: "about-work",
    label: { en: "What I work on", ms: "Bidang kerja" },
    text: {
      en: "React and Laravel applications, WordPress sites, technical SEO, Google Analytics 4 and enquiry automation. The scope follows the business problem, from a small local site to a custom system.",
      ms: "Aplikasi React dan Laravel, laman WordPress, SEO teknikal, Google Analytics 4 dan automasi pertanyaan. Skop mengikut masalah perniagaan, daripada laman tempatan kecil kepada sistem tersuai.",
    },
    points: {
      en: ["React and Laravel", "WordPress", "Technical SEO", "GA4", "Enquiry automation"],
      ms: ["React dan Laravel", "WordPress", "SEO teknikal", "GA4", "Automasi pertanyaan"],
    },
    suggestions: [
      { label: { en: "See the services", ms: "Lihat perkhidmatan" }, action: { kind: "page", path: "/#services" } },
    ],
  },
  {
    id: "about-skills",
    label: { en: "Skills", ms: "Kemahiran" },
    text: {
      en: "Five areas I work in, each with the tools I use: web and mobile, data and AI, automation, cloud, and blockchain.",
      ms: "Lima bidang yang saya kerjakan, dengan alat yang saya guna: web dan mudah alih, data dan AI, automasi, cloud, serta blockchain.",
    },
    points: {
      en: ["Web and mobile", "Data, AI and computer vision", "Automation and integrations", "Cloud and DevOps", "Blockchain and C++"],
      ms: ["Web dan mudah alih", "Data, AI dan visi komputer", "Automasi dan integrasi", "Cloud dan DevOps", "Blockchain dan C++"],
    },
    suggestions: [
      { label: { en: "See the work", ms: "Lihat hasil kerja" }, action: { kind: "scroll", id: "about-proof" } },
    ],
  },
  {
    id: "about-proof",
    label: { en: "Work to inspect", ms: "Hasil kerja" },
    text: {
      en: "Sri Tanduk, a kuih business in Ipoh, got a site that shows its products and sends orders to WhatsApp, and I have run SEO, GA4 and live chat for healthcare marketing.",
      ms: "Sri Tanduk, perniagaan kuih di Ipoh, mendapat laman yang memaparkan produk dan menghantar pesanan ke WhatsApp, dan saya pernah menguruskan SEO, GA4 dan live chat untuk pemasaran kesihatan.",
    },
    points: {
      en: ["Sri Tanduk, Ipoh", "Healthcare SEO and GA4", "Project notes"],
      ms: ["Sri Tanduk, Ipoh", "SEO dan GA4 kesihatan", "Nota projek"],
    },
    suggestions: [
      { label: { en: "Read the project notes", ms: "Baca nota projek" }, action: { kind: "page", path: "/notes" } },
      { label: { en: "See the results", ms: "Lihat hasil" }, action: { kind: "page", path: "/#results" } },
    ],
  },
  {
    id: "about-reach",
    label: { en: "How to reach me", ms: "Cara menghubungi saya" },
    text: {
      en: "I am based in Selangor and take projects in Ipoh and across Malaysia. Email, call, WhatsApp or send a project brief.",
      ms: "Saya berpangkalan di Selangor dan menerima projek di Ipoh serta seluruh Malaysia. E-mel, telefon, WhatsApp atau hantar ringkasan projek.",
    },
    points: {
      en: ["Based in Selangor", "Ipoh and across Malaysia"],
      ms: ["Berpangkalan di Selangor", "Ipoh dan seluruh Malaysia"],
    },
    suggestions: [
      { label: { en: "Message me on WhatsApp", ms: "Mesej saya di WhatsApp" }, action: { kind: "wa", message: "hero" } },
      { label: { en: "Send a project brief", ms: "Hantar ringkasan projek" }, action: { kind: "page", path: "/contact" } },
    ],
  },

  /* The compare page. */
  {
    id: "compare-table",
    label: { en: "Scope table", ms: "Jadual skop" },
    text: {
      en: "A row-by-row table of what each package builds, from personal sites to custom systems. Each package includes everything in the one before it.",
      ms: "Jadual baris demi baris tentang apa yang dibina oleh setiap pakej, daripada laman peribadi kepada sistem tersuai. Setiap pakej termasuk semua yang ada dalam pakej sebelumnya.",
    },
    points: {
      en: ["Included, basic or not included", "Search for what you need"],
      ms: ["Termasuk, asas atau tiada", "Cari apa yang anda perlukan"],
    },
    suggestions: [
      { label: { en: "Ask about my project", ms: "Tanya tentang projek saya" }, action: { kind: "wa", message: "quote" } },
      { label: { en: "Back to packages", ms: "Kembali ke pakej" }, action: { kind: "page", path: "/#pricing" } },
    ],
  },
  {
    id: "compare-divides",
    label: { en: "What separates them", ms: "Perbezaan pakej" },
    text: {
      en: "Two lines separate the packages. Professional adds planned pages, enquiry forms, GA4 tracking and SEO setup to Starter. Advanced adds a database, integrations, automation and security hardening.",
      ms: "Dua garis memisahkan pakej. Professional menambah halaman terancang, borang pertanyaan, penjejakan GA4 dan persediaan SEO kepada Starter. Advanced menambah pangkalan data, integrasi, automasi dan pengukuhan keselamatan.",
    },
    points: {
      en: ["Starter to Professional", "Professional to Advanced"],
      ms: ["Starter ke Professional", "Professional ke Advanced"],
    },
    suggestions: [
      { label: { en: "Ask about Professional", ms: "Tanya tentang Professional" }, action: { kind: "wa", message: "business" } },
      { label: { en: "Ask about Advanced", ms: "Tanya tentang Advanced" }, action: { kind: "wa", message: "custom" } },
    ],
  },
  {
    id: "compare-faq",
    label: { en: "Questions", ms: "Soalan lazim" },
    text: {
      en: "Answers to the questions that come up in almost every first conversation. If yours is not here, ask me directly.",
      ms: "Jawapan kepada soalan yang timbul dalam hampir setiap perbualan pertama. Kalau soalan anda tiada di sini, tanya saya terus.",
    },
    suggestions: [{ label: { en: "Ask me directly", ms: "Tanya saya terus" }, action: { kind: "wa", message: "hero" } }],
  },
  {
    id: "compare-close",
    label: { en: "Ready to start", ms: "Sedia bermula" },
    text: {
      en: "Message me what you have in mind, or go back and pick the package closest to it.",
      ms: "Hantar mesej tentang apa yang anda fikirkan, atau kembali dan pilih pakej yang paling hampir.",
    },
    suggestions: [
      { label: { en: "Get a free quote", ms: "Dapatkan sebut harga" }, action: { kind: "wa", message: "quote" } },
      { label: { en: "Back to packages", ms: "Kembali ke pakej" }, action: { kind: "page", path: "/#pricing" } },
    ],
  },

  /* The contact page. */
  {
    id: "contact-form",
    label: { en: "Start a project", ms: "Mulakan projek" },
    text: {
      en: "A few details and a couple of sentences is enough. Attach a brief, sketch or screenshot if you have one, and I come back with a plan and a fixed quote.",
      ms: "Beberapa maklumat dan dua tiga ayat sudah memadai. Lampirkan ringkasan, lakaran atau tangkapan skrin kalau ada, dan saya kembali dengan pelan serta sebut harga tetap.",
    },
    points: {
      en: ["Name, email and phone", "Say what you want built", "Up to four files"],
      ms: ["Nama, e-mel dan telefon", "Nyatakan apa yang anda mahu bina", "Sehingga empat fail"],
    },
    suggestions: [
      { label: { en: "Use WhatsApp instead", ms: "Guna WhatsApp sebaliknya" }, action: { kind: "wa", message: "hero" } },
      { label: { en: "See the packages", ms: "Lihat pakej" }, action: { kind: "page", path: "/#pricing" } },
    ],
  },

  /* The notes index. */
  {
    id: "notes-list",
    label: { en: "Project notes", ms: "Nota projek" },
    text: {
      en: "Write-ups of real projects: what the business needed, what I built and why, what happened after launch, and what I chose not to build.",
      ms: "Catatan projek sebenar: apa yang perniagaan perlukan, apa yang saya bina dan kenapa, apa berlaku selepas pelancaran, dan apa yang saya pilih untuk tidak bina.",
    },
    suggestions: [{ label: { en: "Get a free quote", ms: "Dapatkan sebut harga" }, action: { kind: "wa", message: "quote" } }],
  },

  /* The privacy policy, one summary per numbered section. */
  {
    id: "privacy-1",
    label: { en: "Information I collect", ms: "Maklumat yang dikumpul" },
    text: {
      en: "The contact details you share, anonymised usage data from Google Analytics 4, and standard cookies for the site to work and for traffic to be measured.",
      ms: "Butiran hubungan yang anda kongsi, data penggunaan tanpa nama daripada Google Analytics 4, dan kuki biasa supaya laman berfungsi dan trafik dapat diukur.",
    },
    suggestions: [],
  },
  {
    id: "privacy-2",
    label: { en: "How I use it", ms: "Cara ia digunakan" },
    text: {
      en: "To quote and deliver the work, to talk to you about it, and to keep the site secure. Your data is never sold, rented or shared with advertisers.",
      ms: "Untuk memberi sebut harga dan menyiapkan kerja, berhubung dengan anda, dan memastikan laman selamat. Data anda tidak pernah dijual, disewa atau dikongsi dengan pengiklan.",
    },
    suggestions: [],
  },
  {
    id: "privacy-3",
    label: { en: "Third-party services", ms: "Pihak ketiga" },
    text: {
      en: "Services involved: Vercel and Railway for hosting, WhatsApp and Google Workspace for messages, Google Analytics 4, Supabase for the live visitor count, Tawk.to for chat, and payment providers on store projects.",
      ms: "Perkhidmatan terlibat: Vercel dan Railway untuk hosting, WhatsApp dan Google Workspace untuk mesej, Google Analytics 4, Supabase untuk kiraan pelawat langsung, Tawk.to untuk sembang, dan penyedia pembayaran untuk projek kedai.",
    },
    suggestions: [],
  },
  {
    id: "privacy-4",
    label: { en: "Security and retention", ms: "Keselamatan dan simpanan" },
    text: {
      en: "Protected with SSL/TLS, security headers and rate limiting. Client data is kept only as long as needed to deliver the work, honour the warranty and meet tax record-keeping.",
      ms: "Dilindungi dengan SSL/TLS, pengepala keselamatan dan had kadar. Data pelanggan disimpan hanya selagi perlu untuk menyiapkan kerja, menunaikan waranti dan memenuhi keperluan rekod cukai.",
    },
    suggestions: [],
  },
  {
    id: "privacy-5",
    label: { en: "Your rights", ms: "Hak anda" },
    text: {
      en: "Under Malaysia's PDPA 2010 you can ask to see, correct or delete the personal data I hold about you, by email or WhatsApp.",
      ms: "Di bawah PDPA 2010 Malaysia, anda boleh meminta untuk melihat, membetulkan atau memadam data peribadi yang saya simpan tentang anda, melalui e-mel atau WhatsApp.",
    },
    suggestions: [{ label: { en: "Ask about my data", ms: "Tanya tentang data saya" }, action: { kind: "page", path: "/contact" } }],
  },

  /* The terms, one summary per numbered section. */
  {
    id: "terms-1",
    label: { en: "Scope and quotations", ms: "Skop dan sebut harga" },
    text: {
      en: "Every project starts with an agreed scope and fixed quotation, confirmed in writing. Extra features or revisions beyond the agreed rounds are quoted separately.",
      ms: "Setiap projek bermula dengan skop dan sebut harga tetap yang dipersetujui, disahkan secara bertulis. Ciri tambahan atau semakan melebihi pusingan yang dipersetujui disebut harga berasingan.",
    },
    suggestions: [],
  },
  {
    id: "terms-2",
    label: { en: "Payment", ms: "Pembayaran" },
    text: {
      en: "Starter and Professional usually begin with a 50% deposit (35% if you have financial constraints), with the balance due before going live. Custom systems use milestones. Invoices are payable within 7 days.",
      ms: "Starter dan Professional lazimnya bermula dengan deposit 50% (35% jika ada kekangan kewangan), dengan baki dibayar sebelum dilancarkan. Sistem tersuai menggunakan fasa. Invois perlu dibayar dalam 7 hari.",
    },
    suggestions: [],
  },
  {
    id: "terms-3",
    label: { en: "Your responsibilities", ms: "Tanggungjawab anda" },
    text: {
      en: "You provide brand assets, copy, account access and feedback in good time, and confirm that what you supply does not infringe anyone else's rights.",
      ms: "Anda menyediakan aset jenama, kandungan, akses akaun dan maklum balas dengan segera, dan mengesahkan bahawa apa yang anda bekalkan tidak melanggar hak orang lain.",
    },
    suggestions: [],
  },
  {
    id: "terms-4",
    label: { en: "Code ownership", ms: "Pemilikan kod" },
    text: {
      en: "Code and delivered assets pass to you on full payment, before the site goes live. Open-source libraries keep their own licences, and I may show the project in my portfolio unless an NDA says otherwise.",
      ms: "Kod dan aset yang dihantar menjadi milik anda selepas bayaran penuh, sebelum laman dilancarkan. Pustaka sumber terbuka kekal dengan lesen masing-masing, dan saya boleh paparkan projek dalam portfolio melainkan NDA menyatakan sebaliknya.",
    },
    suggestions: [],
  },
  {
    id: "terms-5",
    label: { en: "Warranty and support", ms: "Waranti dan sokongan" },
    text: {
      en: "Post-launch support for bugs in the original scope: 2 weeks for Starter, 30 days for Professional, 60 to 90 days for Advanced, with 3, 5 and 10 revisions. Ongoing maintenance is available separately.",
      ms: "Sokongan selepas pelancaran untuk pepijat dalam skop asal: 2 minggu untuk Starter, 30 hari untuk Professional, 60 hingga 90 hari untuk Advanced, dengan 3, 5 dan 10 semakan. Penyelenggaraan berterusan ditawarkan secara berasingan.",
    },
    suggestions: [{ label: { en: "Compare the packages", ms: "Bandingkan pakej" }, action: { kind: "page", path: "/compare" } }],
  },
  {
    id: "terms-6",
    label: { en: "Liability and law", ms: "Liabiliti dan undang-undang" },
    text: {
      en: "I follow security and performance best practice, but I am not liable for indirect losses or outages outside my control. Malaysian law applies, and disputes start with a direct conversation.",
      ms: "Saya mengikuti amalan terbaik keselamatan dan prestasi, tetapi tidak bertanggungjawab atas kerugian tidak langsung atau gangguan di luar kawalan saya. Undang-undang Malaysia terpakai, dan pertikaian bermula dengan perbincangan terus.",
    },
    suggestions: [],
  },
];
