import { content } from "@/lib/content";
import { SITE_URL as SITE } from "@/lib/site";

/** The shop on the subdomain, run by the same person. */
const STORE = "https://store.zakrul.com";

/* These are Muhamad Zaqrul's social profiles. The handle is a username, not
   the name of the website or professional service. */
export const PROFILES = [
  "https://www.threads.com/@zakrulabd",
  "https://www.tiktok.com/@zakrulabd",
  "https://github.com/Zaqrul",
];

/* Stable @id anchors. Using one graph with cross-references, rather than several
   loose nodes, lets a crawler resolve "the person", "the business" and "the page"
   as the same three entities everywhere they are mentioned. */
export const ID = {
  website: `${SITE}/#website`,
  business: `${SITE}/#business`,
  person: `${SITE}/#zakrul`,
  logo: `${SITE}/#logo`,
  homepage: `${SITE}/#webpage`,
};

/* Deliberately absent: aggregateRating / Review. The testimonials on this site are
   collected and published by the business about itself, and Google treats those as
   self-serving — LocalBusiness and Organization pages using them are ineligible for
   review rich results and risk a manual action. Real reviews would have to come
   from an independent platform.
   https://developers.google.com/search/docs/appearance/structured-data/review-snippet */
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": ID.website,
      url: SITE,
      name: "Zakrul",
      alternateName: "zakrul.com",
      description: content.footer.blurb,
      publisher: { "@id": ID.business },
      inLanguage: "en-MY",
    },
    {
      "@type": "ImageObject",
      "@id": ID.logo,
      url: `${SITE}/logo-ghost-outline.webp`,
      contentUrl: `${SITE}/logo-ghost-outline.webp`,
      caption: "Zakrul",
    },
    {
      "@type": "Person",
      "@id": ID.person,
      name: "Muhamad Zaqrul",
      alternateName: ["Zaqrul", "zakrulabd"],
      url: `${SITE}/about`,
      sameAs: PROFILES,
      email: "zakrulabd@gmail.com",
      telephone: "+60102551527",
      jobTitle: "Senior Full-Stack Engineer",
      knowsLanguage: ["en", "ms"],
      address: {
        "@type": "PostalAddress",
        addressRegion: "Selangor",
        addressCountry: "MY",
      },
      knowsAbout: [
        "Web Development",
        "React",
        "Next.js",
        "Laravel",
        "WordPress",
        "Technical SEO",
        "Google Analytics 4",
        "Workflow Automation",
      ],
      worksFor: { "@id": ID.business },
    },
    {
      "@type": "ProfessionalService",
      "@id": ID.business,
      name: "Zakrul — Web Development & Digital Marketing",
      alternateName: "zakrul.com",
      url: SITE,
      description: content.footer.blurb,
      email: "zakrulabd@gmail.com",
      telephone: "+60102551527",
      image: { "@id": ID.logo },
      logo: { "@id": ID.logo },
      founder: { "@id": ID.person },
      employee: { "@id": ID.person },
      /* One person, so the headcount is a fact worth stating rather than leaving
         a crawler to assume an agency. */
      numberOfEmployees: { "@type": "QuantitativeValue", value: 1 },
      address: {
        "@type": "PostalAddress",
        addressRegion: "Selangor",
        addressCountry: "MY",
      },
      areaServed: [
        { "@type": "City", name: "Ipoh" },
        { "@type": "AdministrativeArea", name: "Selangor" },
        { "@type": "Country", name: "Malaysia" },
      ],
      availableLanguage: ["en", "ms"],
      /* The shop on the subdomain is the same business, not a second one.
         subOrganization would claim a separate entity; owns points at a thing
         this business runs, which is what it is. Its own graph names this site
         back, so the pair resolve to one operator from either side. */
      owns: {
        "@type": "OnlineStore",
        "@id": `${STORE}/#organization`,
        name: "zakrul store",
        url: STORE,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web development packages",
        /* Starter is a fixed price and Professional a floor; Advanced is quoted per
           project, so it carries no price rather than an invented one. */
        itemListElement: content.pricing.tiers.map((tier, i) => ({
          "@type": "Offer",
          name: tier.name,
          description: tier.description,
          ...(tier.priceAmount !== null && {
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "MYR",
              ...(i === 0 ? { price: tier.priceAmount } : { minPrice: tier.priceAmount }),
            },
          }),
          itemOffered: {
            "@type": "Service",
            name: tier.name,
            description: tier.description,
            provider: { "@id": ID.business },
            areaServed: { "@type": "Country", name: "Malaysia" },
          },
        })),
      },
      makesOffer: content.services.items.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@id": ID.business },
        },
      })),
    },
    {
      "@type": "WebPage",
      "@id": ID.homepage,
      url: SITE,
      name: "Senior Full-Stack Web Developer, Ipoh & Selangor | Zakrul",
      isPartOf: { "@id": ID.website },
      about: { "@id": ID.business },
      primaryImageOfPage: { "@id": ID.logo },
      inLanguage: "en-MY",
    },
  ],
};

/* Legal pages: a two-level trail so they are understood as children of the site
   root rather than as orphan documents. */
export function breadcrumb(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name, item: `${SITE}${path}` },
    ],
  };
}

/* Every question on the comparison page, in one FAQPage node. Whether Google
   chooses to show FAQ rich results or not, this is what tells a crawler these
   headings are questions and the paragraph under each one is its answer. */
export function faqPage(path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE}${path}#faq`,
    mainEntity: content.faq.categories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };
}
