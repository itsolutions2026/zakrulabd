import type { TechKey } from "@/lib/tech";

/* The technology services shown on the About page. Each one is a kind of work a
   client can hire for, with the tools used for it underneath. A tag that names a
   tool in the shared tech registry shows its logo and brand colour; any other
   tag is plain text, so adding a tool never needs a new icon. */
export type ServiceTag = TechKey | string;

export type ServiceGroup = {
  label: { en: string; ms: string };
  text: { en: string; ms: string };
  tags: ServiceTag[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    label: { en: "Web and mobile development", ms: "Pembangunan web dan mudah alih" },
    text: {
      en: "Websites, web apps, online stores and mobile apps, with SEO and analytics so people can find them.",
      ms: "Laman web, aplikasi web, kedai dalam talian dan aplikasi mudah alih, dengan SEO dan analitik supaya orang boleh menemuinya.",
    },
    tags: ["react", "next", "Node.js", "laravel", "FastAPI", "Django", "wordpress", "shopify", "Magento", "WooCommerce", "Flutter", "reactNative", "ga4"],
  },
  {
    label: { en: "Data engineering and AI", ms: "Kejuruteraan data dan AI" },
    text: {
      en: "Data pipelines, databases, machine learning, computer vision and AI assistants.",
      ms: "Saluran data, pangkalan data, pembelajaran mesin, visi komputer dan pembantu AI.",
    },
    tags: ["python", "SQL", "PostgreSQL", "Snowflake", "dbt", "Airflow", "PyTorch", "Computer vision", "OCR", "LangChain", "OpenAI"],
  },
  {
    label: { en: "Automation and integrations", ms: "Automasi dan integrasi" },
    text: {
      en: "Connecting accounting, stores, CRMs and other systems so manual work stops.",
      ms: "Menyambungkan perakaunan, kedai, CRM dan sistem lain supaya kerja manual berhenti.",
    },
    tags: ["n8n", "Make", "REST APIs", "QuickBooks"],
  },
  {
    label: { en: "Cloud and DevOps", ms: "Cloud dan DevOps" },
    text: {
      en: "Hosting, speed, deployment and monitoring.",
      ms: "Hosting, kelajuan, penghantaran dan pemantauan.",
    },
    tags: ["AWS", "Azure", "Docker", "GitHub Actions", "NGINX", "cloudflare"],
  },
  {
    label: { en: "Blockchain and systems programming", ms: "Blockchain dan pengaturcaraan sistem" },
    text: {
      en: "Smart contracts and peer-to-peer systems, built with Solidity and C++.",
      ms: "Kontrak pintar dan sistem peer-to-peer, dibina dengan Solidity dan C++.",
    },
    tags: ["Solidity", "EVM", "Smart contracts", "cpp", "Boost"],
  },
];
