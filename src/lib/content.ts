export const content = {
  nav: {
    services: "Services",
    projects: "Work",
    pricing: "Packages",
    contact: "Contact",
    cta: "Get a Free Quote",
  },
  hero: {
    titleHl1: "Senior Engineer",
    titleB: " in Malaysia",
    titleSub: "Websites and Systems That Bring You ",
    titleHl2: "Customers",
    body: "I help businesses get more customers and spend less time on admin, with websites, booking and customer systems, and automation of everyday business processes, from email replies to CRM updates. You work with me directly, from the first conversation through to launch.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "See Packages",
    chips: ["You work with me directly", "Prototype, build, launch", "SEO and GA4 for healthcare clients"],
  },
  services: {
    heading: "What I Do",
    sub: "Practical digital help to bring in customers, save time, and grow your business.",
    items: [
      {
        title: "Websites, Mobile & Desktop Apps",
        description:
          "A website, online store, or booking site for your business, plus mobile and desktop apps for your team or your customers, built so people can find you, trust you, and reach you on WhatsApp.",
        bullets: ["Business websites & online stores", "Mobile apps for iOS & Android", "Desktop apps for your team"],
      },
      {
        title: "More Customers",
        description:
          "Show up on Google, capture enquiries, and follow them up, so new customers find you without you chasing every lead by hand. Based on years of SEO work in the Malaysian healthcare sector.",
        bullets: ["SEO for Google search", "Lead capture & tracking", "Automatic follow-ups"],
      },
      {
        title: "Less Manual Work",
        description:
          "Everyday business processes that run on their own: email and WhatsApp replies, data saved straight into your database or CRM, enquiries assigned to the right person, an FAQ assistant, and cloud tools that talk to each other.",
        bullets: ["Email, WhatsApp & FAQ replies", "Data into your database or CRM", "Auto-assignment & cloud integrations"],
      },
      {
        title: "Systems & Integrations",
        description:
          "Booking, membership, and customer record systems made around how you actually work, connected to the CRM, ERP, accounting, and cloud tools you already use.",
        bullets: ["Custom business systems", "CRM, ERP & cloud integration", "Hosting & ongoing support"],
      },
    ],
  },
  build: {
    client: "Client",
    selectLabel: "Choose a workflow",
    concept: "Concept preview",
    examplesLabel: "In practice",
    flowLabel: "Runs automatically",
    builtWith: "Works with",
    /* Capabilities with a working demo page link to it rather than being
       explained. Matched to their card by pill; the rest have nowhere to go. */
    showcases: [
      {
        pill: "Websites & Apps",
        label: "Visit my store",
        note: "Shop Demo",
        href: "/showcase/online-store",
      },
      {
        pill: "Sales to Accounts",
        label: "Try the inventory system",
        note: "Live Demo",
        href: "/showcase/inventory",
      },
      {
        pill: "Reservations & Memberships",
        label: "Book a photographer",
        note: "Booking Demo",
        href: "/showcase/booking",
      },
    ],
    items: [
      {
        pill: "Enquiries",
        headingBefore: "Every Enquiry Gets a ",
        headingHighlight: "Reply and an Owner",
        headingAfter: "",
        description:
          "However an enquiry arrives, by web form, email, or WhatsApp, it is replied to automatically, saved into your database or CRM, and assigned to the right person with a follow-up task. Nothing sits unanswered or gets lost.",
        brief: "Enquiries come in by email, WhatsApp, and the website. Some are missed, and nobody knows who should reply.",
        features: [
          "Instant email or WhatsApp acknowledgement",
          "Every enquiry saved to your CRM or database",
          "Auto-assignment to the right team member",
          "Follow-up reminders until it is closed",
        ],
        examples: [
          { who: "Restaurant", what: "Catering and event enquiries go straight to the events manager." },
          { who: "Contractor", what: "Quote requests get a reply the same minute, and a follow-up date." },
          { who: "Clinic", what: "New patient enquiries reach the front desk with the details attached." },
        ],
        worksWith: ["Zoho CRM", "Airtable", "monday.com", "Email", "WhatsApp"],
        flow: [
          { icon: "inbox", title: "Enquiry arrives", detail: "Web form, email, or WhatsApp" },
          { icon: "mail", title: "Instant reply", detail: "An email or message goes out automatically" },
          { icon: "database", title: "Saved to your CRM", detail: "Name, request, and source recorded" },
          { icon: "user", title: "Assigned to the right person", detail: "By type, location, or workload" },
          { icon: "task", title: "Follow-up task created", detail: "A reminder until it is closed" },
        ],
      },
      {
        pill: "Reservations & Memberships",
        headingBefore: "Reservations That ",
        headingHighlight: "Run Themselves",
        headingAfter: "",
        description:
          "Customers reserve an appointment, a table, an event seat, or a class, or sign up for a membership, on your website or app. They get a confirmation, can pay a deposit or renewal online, receive reminders, and everything lands in your records.",
        brief: "We take reservations and renewals by phone and chat, and things get double-booked or forgotten.",
        features: [
          "Live availability, so nothing is double-booked",
          "Online deposit or membership payment",
          "Confirmations and reminders by email or WhatsApp",
          "Customer records and renewal tracking",
        ],
        examples: [
          { who: "Restaurant", what: "Table reservations with party size, time, and a reminder before arrival." },
          { who: "Event organiser", what: "Seat or ticket reservations with payment and a confirmation email." },
          { who: "Gym", what: "Memberships that renew and bill automatically, with a reminder first." },
        ],
        worksWith: ["Stripe", "iPay88", "Google Sheets", "Email", "WhatsApp"],
        flow: [
          { icon: "calendar", title: "Customer reserves", detail: "Appointment, table, event seat, or membership" },
          { icon: "availability", title: "Availability checked", detail: "No double-booking" },
          { icon: "payment", title: "Deposit or fee paid", detail: "Card, FPX, or e-wallet" },
          { icon: "send", title: "Confirmation sent", detail: "By email or WhatsApp" },
          { icon: "bell", title: "Reminder and record", detail: "A reminder before the date, saved to the customer record" },
        ],
      },
      {
        pill: "Sales to Accounts",
        headingBefore: "From Sale to ",
        headingHighlight: "E‑Invoice",
        headingAfter: " Without Retyping",
        description:
          "A sale at the counter or online updates your stock, creates the invoice in the accounting software you already use, and submits the e-invoice to MyInvois. Your team stops copying figures between systems.",
        brief: "Sales, stock, and accounts are in three places, and my accountant retypes everything.",
        features: [
          "Stock updates the moment something sells",
          "Invoices created in your accounting software",
          "E-invoices submitted to MyInvois",
          "Sales and stock figures that always match",
        ],
        examples: [
          { who: "Retail shop", what: "Counter sales update stock and accounts at the same time." },
          { who: "Distributor", what: "Purchase orders and deliveries tracked from the warehouse." },
          { who: "Workshop", what: "Quotes become jobs, and jobs become invoices." },
        ],
        worksWith: ["AutoCount", "SQL Account", "Xero", "Bukku", "QuickBooks", "MyInvois"],
        flow: [
          { icon: "sale", title: "Sale made", detail: "At the counter or through an online order" },
          { icon: "stock", title: "Stock updated", detail: "Across shelves, outlets, and warehouses" },
          { icon: "invoice", title: "Invoice created", detail: "In your accounting software" },
          { icon: "einvoice", title: "E-invoice submitted", detail: "To LHDN's MyInvois" },
          { icon: "chart", title: "Reports ready", detail: "Sales and stock stay matched" },
        ],
      },
      {
        pill: "AI Assistant",
        headingBefore: "An AI Assistant That Knows ",
        headingHighlight: "Your Business",
        headingAfter: "",
        description:
          "An AI assistant answers customers from your own documents, prices, and policies (this is called RAG), and can check stock, bookings, or order status through connected tools (MCP or direct APIs). The same approach sorts incoming emails and messages, drafts replies for your approval, and flags what needs a person.",
        brief: "We answer the same questions all day, emails pile up, and at night nobody replies.",
        features: [
          "Answers from your own documents and price list",
          "Checks stock, bookings, and orders for the customer",
          "Sorts and prioritises incoming emails and messages",
          "Drafts replies for your team to approve",
        ],
        examples: [
          { who: "Restaurant", what: "Menu, opening hours, and halal questions answered at any hour." },
          { who: "Clinic", what: "Opening hours and appointment questions answered, with clinical questions passed to staff." },
          { who: "Retail shop", what: "Order status checked and replied to without anyone opening three systems." },
        ],
        worksWith: ["RAG on your documents", "MCP & API tool connections", "OpenAI", "WhatsApp", "Email"],
        flow: [
          { icon: "question", title: "Message arrives", detail: "Email, WhatsApp, or website chat" },
          { icon: "tags", title: "Sorted and prioritised", detail: "Sales, support, complaint, or spam" },
          { icon: "docsearch", title: "Searches your documents", detail: "Prices, policies, and past answers (RAG)" },
          { icon: "plug", title: "Checks your systems", detail: "Stock, bookings, and orders (MCP or API)" },
          { icon: "handover", title: "Replies, or hands over", detail: "A draft for approval, or a person with the full history" },
        ],
      },
      {
        pill: "Data & Analytics",
        headingBefore: "Find What Really Drives Your ",
        headingHighlight: "Sales",
        headingAfter: "",
        description:
          "I bring your sales, enquiries, bookings, and marketing data together with ETL pipelines into one data warehouse, such as Snowflake (data engineering), then analyse which factors really move your numbers: which channel brings the best customers, which products or time slots sell, and where customers drop off. You get clear recommendations on how to increase sales, not just charts.",
        brief: "We have numbers everywhere, but no idea what actually makes us more money.",
        features: [
          "ETL pipelines that collect, clean, and load your data automatically",
          "One source of truth in a data warehouse such as Snowflake",
          "Analysis of which factors matter most",
          "Plain-language recommendations and dashboards to grow sales",
        ],
        examples: [
          { who: "Restaurant", what: "Which days, menu items, and promotions actually bring repeat diners." },
          { who: "Gym", what: "Which sign-up channels and class times keep members renewing." },
          { who: "Retail shop", what: "Which products and campaigns drive profit, not only revenue." },
        ],
        worksWith: ["Snowflake", "ETL pipelines", "dbt", "Python", "GA4", "Google Sheets"],
        flow: [
          { icon: "plug", title: "Data sources connected", detail: "Sales, enquiries, bookings, ads, and stock" },
          { icon: "clean", title: "ETL pipelines extract and clean", detail: "Duplicates removed, records matched, loaded on a schedule" },
          { icon: "database", title: "Loaded into your warehouse", detail: "One clean source of truth, such as Snowflake" },
          { icon: "trend", title: "Analysis finds the drivers", detail: "Which channel, product, time, or price matters most" },
          { icon: "dashboard", title: "Recommendations and dashboard", detail: "What to do more of, delivered weekly by email or link" },
        ],
      },
      {
        pill: "Websites & Apps",
        headingBefore: "One Business, ",
        headingHighlight: "Every Screen",
        headingAfter: "",
        description:
          "The websites, online stores, mobile apps, and desktop apps your customers and staff use, all built on one shared database and one admin, so a change in one place shows up everywhere.",
        brief: "We have a website, a spreadsheet, and WhatsApp, and none of them know about each other.",
        features: [
          "Business, portfolio, and booking websites",
          "Online store on WordPress or Shopify",
          "Mobile apps for customers or staff",
          "Desktop apps for the office or counter",
        ],
        examples: [
          { who: "Food business", what: "A catalogue site with ordering through WhatsApp." },
          { who: "Event organiser", what: "A website plus a staff app for check-in at the door." },
          { who: "Retail shop", what: "An online store and a counter app sharing one stock count." },
        ],
        worksWith: ["WordPress", "Shopify", "Stripe", "iPay88", "WhatsApp"],
        worksWithLink: "Check my skills and expertise",
        flow: [
          { icon: "globe", title: "Website", detail: "Services, booking, and contact" },
          { icon: "store", title: "Online store", detail: "Catalogue, cart, and checkout" },
          { icon: "phone", title: "Mobile app", detail: "For customers or staff" },
          { icon: "desktop", title: "Desktop app", detail: "For the office or the counter" },
          { icon: "database", title: "One database and admin", detail: "Everything stays in sync" },
        ],
      },
    ],
  },
  clients: {
    headingA: "Previous ",
    headingHl: "Clients",
    headingB: " I’ve Worked With",
    sub: "Businesses in Malaysia and overseas that I’ve built, fixed, and launched for.",
    items: [
      { name: "Sri Tanduk Enterprise" },
      { name: "Haikai Tech" },
      { name: "KNZ Engineering" },
      { name: "Law Practice of Junny Erfisyahry" },
      { name: "Unitee" },
      { name: "MedStreamline" },
      { name: "Febest Auto Parts Australia" },
      { name: "IT Toys" },
      { name: "Tradies Club" },
      { name: "Just CBD Store" },
    ],
    next: "You might be next",
    /* One personal site among the businesses. It sits under the line rather
       than in the logo grid because it is a person, not a company, and a
       wordmark tile would be the wrong shape for it. */
    recent: {
      initials: "AO",
      lead: "Most recent build — a portfolio for",
      name: "Afiq Othman, short-form video editor",
      href: "https://afiqothman.vercel.app/",
    },
  },
  process: {
    heading: "How I Work",
    sub: "Four stages, working with me directly, from the first conversation to launch and the work that follows.",
    items: [
      {
        title: "Discover",
        description:
          "I learn what your business does, who your customers are, and what the site needs to achieve before any code is written.",
      },
      {
        title: "Design & Prototype",
        description:
          "Wireframes and a clickable prototype, so you can see the layout and change it before it gets built.",
      },
      {
        title: "Build",
        description:
          "Development on a modern, maintainable stack, with regular check-ins so you always know where the project stands.",
      },
      {
        title: "Launch & Grow",
        description:
          "Go live, then measure with GA4 and improve rankings, page speed, and conversion over time.",
      },
    ],
  },
  pricing: {
    headingA: "Straightforward ",
    headingHl: "Packages",
    headingB: "",
    sub: "Starter is RM800 and Professional starts from RM1,500. The final price depends on scope, and hosting is paid separately. Pick the package closest to what you need and message me to confirm the scope and get a fixed quote.",
    badge: "RECOMMENDED",
    tiers: [
      {
        name: "Starter Website",
        tagline: "For getting online quickly",
        price: "RM800*",
        priceNote: "*Hosting and custom domain not included.",
        priceAmount: 800,
        description:
          "Suited to personal brands, freelancers, and portfolios that need a clean, credible presence online without a long build.",
        cta: "Ask About Starter",
        features: [
          "One-page or simple multi-section site",
          "Mobile and tablet responsive",
          "WhatsApp or contact button",
          "Essential on-page SEO",
          "Launch and basic edit guide",
          "2 weeks free support and 3 revisions",
        ],
      },
      {
        name: "Professional Website",
        tagline: "For established businesses",
        price: "From RM1,500*",
        priceNote: "*Hosting is not included.",
        priceAmount: 1500,
        description:
          "Suited to SMEs, service businesses, and consultants who need a site customers can trust, understand, and enquire through.",
        cta: "Ask About Professional",
        features: [
          "Everything in Starter, plus:",
          "Multi-page site with content planning",
          "Custom domain (first year)",
          "Enquiry forms with email notifications",
          "Metadata, sitemap, and Google Business setup",
          "Google Search Console setup",
          "Google Analytics 4 and conversion tracking",
          "Handover walkthrough",
          "30 days support and 5 revisions",
        ],
      },
      {
        name: "Advanced Web System",
        tagline: "For custom systems and integrations",
        price: "Custom quote",
        priceAmount: null,
        description:
          "For businesses that need a custom web application, third-party integrations, automated lead handling, and advanced technical SEO.",
        cta: "Let’s Discuss",
        features: [
          "Everything in Professional, plus:",
          "Custom web system and database design",
          "Integrations (payments, CRM, ERP, WhatsApp)",
          "Live chat and automated lead routing",
          "Workflow automation and webhooks",
          "Advanced technical SEO, structured data, and Core Web Vitals",
          "Security hardening",
          "60 to 90 days support and 10 revisions",
        ],
      },
    ],
    compare: {
      footnote: "Not sure which one fits?",
      link: "Compare what each package builds",
      titleA: "What Each Package ",
      titleHl: "Builds",
      sub: "Each package includes everything in the one before it. Starter is a fixed price; Professional and Advanced are quoted on scope.",
      badge: "SCOPE COMPARISON",
      back: "Back to Packages",
      closeTitle: "Compared everything and ready to start?",
      closeBody: "Message me with what you have in mind, or go back and pick the package closest to it. Ask me anything specific about your project and you get a straight answer, not a sales pitch.",
      columns: ["Starter", "Professional", "Advanced"],
      legend: [
        { mark: "full", label: "Included" },
        { mark: "part", label: "Basic version; the deeper work sits one package up" },
        { mark: "none", label: "Not in this package" },
      ],
      rowHeading: "What you want built",
      searchPlaceholder: "Search what you need",
      searchEmpty: "Nothing matches that. Try a shorter word, or just message me.",
      ctaLabel: "Ask",
      groups: [
        {
          label: "Sites people read",
          rows: [
            {
              what: "Personal brand or portfolio",
              note: "Freelancer, consultant, creative, CV site",
              marks: ["full", "full", "full"],
            },
            {
              what: "One-page campaign or launch page",
              note: "Single offer, single call to action",
              marks: ["full", "full", "full"],
            },
            {
              what: "Small business profile",
              note: "Who you are, what you sell, how to reach you",
              marks: ["part", "full", "full"],
            },
            {
              what: "Full company website",
              note: "Home, About, Services, Projects, Contact",
              marks: ["none", "full", "full"],
            },
            {
              what: "Catalogue without checkout",
              note: "Browse and enquire, price on request",
              marks: ["none", "full", "full"],
            },
            {
              what: "Blog or news section you update yourself",
              note: "Editable posts, categories, author pages",
              marks: ["none", "full", "full"],
            },
            {
              what: "Landing pages for a paid campaign",
              note: "Tracked, tested, wired to your ad account",
              marks: ["none", "full", "full"],
            },
          ],
        },
        {
          label: "Systems people operate",
          rows: [
            {
              what: "Online store with cart and checkout",
              note: "Products, orders, FPX, cards, e-wallets",
              marks: ["none", "none", "full"],
            },
            {
              what: "Booking or appointment system",
              note: "Live availability, confirmations, reminders",
              marks: ["none", "none", "full"],
            },
            {
              what: "Inventory or stock dashboard",
              note: "Real-time stock, low-stock alerts, multi-location",
              marks: ["none", "none", "full"],
            },
            {
              what: "Customer or member login portal",
              note: "Accounts, roles, private documents and records",
              marks: ["none", "none", "full"],
            },
            {
              what: "Shopify, CRM, or ERP integration",
              note: "Two-way sync, no duplicate data entry",
              marks: ["none", "none", "full"],
            },
            {
              what: "Quotation or approval workflow",
              note: "Forms that route, notify, and get signed off",
              marks: ["none", "none", "full"],
            },
          ],
        },
        {
          label: "Everything around the site",
          rows: [
            {
              what: "Hosting",
              note: "Vercel, Railway, ServerFreak, Exabyte, or others",
              marks: ["none", "none", "full"],
            },
            {
              what: "Custom domain",
              note: "yourbusiness.com, registered in your name",
              marks: ["none", "full", "full"],
            },
            {
              what: "Analytics and conversion tracking",
              note: "GA4, events, and goals you can actually read",
              marks: ["none", "full", "full"],
            },
            {
              what: "Live chat on the site",
              note: "Widget install, then routing and automation",
              marks: ["none", "part", "full"],
            },
            {
              what: "Technical SEO and structured data",
              note: "On-page basics, then schema and indexing work",
              marks: ["part", "part", "full"],
            },
            {
              what: "Rescue of an existing site",
              note: "Broken, slow, hacked, or stuck with an old developer",
              marks: ["none", "full", "full"],
            },
          ],
        },
      ],
      dividesTitle: "The two lines that separate them",
      divides: [
        {
          step: "Starter → Professional",
          claim: "One page that introduces you, versus a site that sells and is measured",
          points: [
            "Several pages with planned content, not one long scroll",
            "Enquiry forms that reach your inbox, not only a WhatsApp button",
            "GA4 and conversion tracking, so you can see what works",
            "Metadata, sitemap, and Google Business, so you get found",
            "A handover walkthrough, so you can edit it yourself",
          ],
        },
        {
          step: "Professional → Advanced",
          claim: "A site people read, versus a system people log into and transact on",
          points: [
            "A database behind the site: orders, stock, bookings, accounts",
            "Payments and other systems connected properly",
            "Lead routing and workflow automation instead of manual follow-up",
            "Structured data and Core Web Vitals work page by page",
            "Security hardening and support once it is live",
          ],
        },
      ],
    },
  },
  results: {
    headingA: "Real Experience in the ",
    headingHl: "Healthcare Industry",
    headingB: "",
    sub: "SEO, GA4 tracking, and live chat automation for hospital and cancer-care marketing in Malaysia. The same approach applies to every client I take on.",
    stats: [
      "Average Google position, before and after I started",
      "Google impressions per day, same comparison",
      "Organic clicks from 3 Nov 2025 to 12 Mar 2026",
    ],
    caseBadge: "HEALTHCARE / CANCER CARE MARKETING",
    caseTitle: "SEO, GA4, and Live Chat Overhaul for a Cancer Treatment Centre",
    caseBody:
      "I led the technical SEO, the migration to Google Analytics 4, and the live chat setup for a Malaysian cancer-care hospital, making it easier for patients to find the right treatment and reach the right people. Comparing 3 November 2025 to 12 March 2026 with the 139 days before I started, average Google position improved from 12.1 to 8.7 and daily impressions rose 13%.",
    smeBadge: "SME / SRI TANDUK ENTERPRISE",
    smeTitle: "3 Months on Google for a Kuih Business in Ipoh",
    smeBody:
      "From July to September 2026, the site I built for Sri Tanduk recorded 3,260 impressions and 75 clicks from Google, at an average position of 6.6. Impressions passed 100 a day by late September. Since mid-September, Google’s AI answers have also started showing the site, up to 21 times a day by mid-October.",
    smeStats: [
      { value: "3.26K", label: "Impressions" },
      { value: "75", label: "Clicks" },
      { value: "6.6", label: "Avg. position" },
    ],
    smeImageAlt: "Google Search Console performance for Sri Tanduk from July to September 2026",
    smeAiImageAlt: "Daily impressions of Sri Tanduk in Google’s AI answers, May to October 2026, rising from mid-September",
    smeLink: "Read the case study",
  },
  tech: { heading: "BUILT WITH" },
  testimonials: {
    heading: "What Clients Say",
    sub: "Feedback from businesses I have built, fixed, and launched sites for.",
  },
  started: {
    headingA: "Get started in ",
    headingHl: "three steps",
    steps: [
      {
        title: "Tell me what you need",
        body: "Message me on WhatsApp or by email with what your business does, what you want built, and when you need it live.",
      },
      {
        title: "Get a quote and a timeline",
        body: "I reply with a defined scope, a fixed price, and a delivery date you can plan around.",
      },
      {
        title: "I build it and launch it",
        body: "You review progress at each stage and give feedback directly to me. After launch I hand over everything you need to run the site yourself.",
      },
    ],
    intro:
      "No agency middlemen and no long enquiry forms. Send a short message and we will take it from there.",
    ctaPrimary: "Let’s Discuss",
    ctaSecondary: "See Packages",
    expectTitle: "What to expect",
    expect: [
      "A reply from me within one working day",
      "A fixed quote before any work begins",
      "Progress updates at every stage",
      "Full handover: you own the site and the accounts",
    ],
    readyTitle: "To speed things up, have this ready",
    readyBody:
      "Your business name and what you do, any existing website or social links, a few examples of sites you like, and a rough budget and deadline. If some of that is not ready yet, we can work it out together.",
  },
  finalCta: {
    headingA: "Ready to ",
    headingHl: "Get Started",
    headingB: "?",
    sub: "Tell me what you need and I will come back with a plan and a fixed quote.",
    cta: "Start Your Project",
    whatsapp: "WhatsApp",
    or: "or email",
    /* These pills echo how clients actually phrase a request, so they stay in
       the Malay-English mix people use here — technical nouns in English, the
       rest in Malay. Same reasoning as the pre-filled WhatsApp messages. The
       rest of the site is English. */
    prompts: [
      "Bina sistem tempahan online",
      "Naikkan ranking Google",
      "Bina web app React & Laravel",
      "Setup Google Analytics 4",
      "Sambung semula database MySQL",
      "Bina borang sebut harga",
      "Integrate Shopify & FPX",
      "Pasang live chat untuk customer",
      "Website WordPress yang laju",
      "Automasi lead WhatsApp",
      "Pindah hosting ke Vercel",
      "Redesign website syarikat",
    ],
  },
  faq: {
    badge: "FAQ",
    titleA: "Questions People ",
    titleHl: "Ask Me",
    sub: "The things that come up in almost every first conversation. If yours is not here, message me and ask directly.",
    selectLabel: "Select related topic",
    categories: [
      {
        label: "Scope and packages",
        items: [
          {
            q: "I am not sure which package I need. What now?",
            a: "Tell me what your business does and what you want visitors to do. I will recommend a package, including a smaller one if that is enough.",
          },
          {
            q: "Can I start with Starter and upgrade later?",
            a: "Yes. A Starter site can be upgraded to Professional, or have a booking or store system added later, without a rebuild.",
          },
          {
            q: "My project does not fit any of the three. Is that a problem?",
            a: "No. Message me with what you need and I will quote it based on the work involved.",
          },
          {
            q: "Do you build on WordPress or custom code?",
            a: "It depends on the project. WordPress if you edit content often. Next.js if you need speed, integrations, or a custom system. I will explain which one fits before we start.",
          },
          {
            q: "Can you fix or redesign the website I already have?",
            a: "Yes. I can take over a site that is broken, slow, hacked, or no longer maintained, and keep the parts that still work.",
          },
        ],
      },
      {
        label: "Pricing and payment",
        items: [
          {
            q: "How much does a website cost?",
            a: "Starter is RM800, without hosting, a custom domain, Google Analytics 4, or Google Search Console. Professional starts from RM1,500 and includes a custom domain for the first year, but not hosting. Advanced systems are quoted per project. You get a fixed price before work starts.",
          },
          {
            q: "How do I get a quote?",
            a: "Send me a short description on WhatsApp. You usually get a quote within one or two days.",
          },
          {
            q: "How is payment usually split?",
            a: "A 50% deposit before work starts. If you have financial constraints, a 35% deposit is accepted. The balance is paid once you are satisfied with the site, before it goes live. Larger systems are paid in milestones.",
          },
          {
            q: "Are hosting and domain included in the quote?",
            a: "Hosting is not included in Starter or Professional. You pay it directly to the provider, and the account is in your name. Professional includes a custom domain (for example, yourbusiness.com) for the first year. After that, you pay the yearly renewal, usually RM50 to RM100. With Starter, I still recommend buying your own domain rather than using a free subdomain, because you need one to set up Google Search Console, Google Analytics, and Google Business properly.",
          },
          {
            q: "Where will my website be hosted?",
            a: "It depends on what suits you and your project. I usually use Vercel, Railway, Serverfreak, or Exabyte, among others. Hosting fees are normally paid by the client.",
          },
        ],
      },
      {
        label: "Timeline and process",
        items: [
          {
            q: "How long does a website take?",
            a: "Starter: a few days. Professional: a few weeks. Custom systems depend on the features. The quote includes a target date.",
          },
          {
            q: "What do you need from me before you start?",
            a: "Your logo, any content and photos you have, and access to your domain. If you do not have them yet, tell me.",
          },
          {
            q: "I do not have content or photos yet. Can we still start?",
            a: "Yes. I set up the page structure and list the text and photos still needed.",
          },
          {
            q: "How many rounds of changes do I get?",
            a: "Starter: 3 revisions. Professional: 5 revisions. Advanced: 10 revisions. Extra revisions and new features outside the scope are quoted separately before I do them.",
          },
          {
            q: "Am I dealing with you or with a team?",
            a: "With me, from the first message to handover.",
          },
        ],
      },
      {
        label: "After launch",
        items: [
          {
            q: "Do I own the website when it is done?",
            a: "Yes, after full payment. The final site and source code are handed over once you are satisfied and the full payment is received, before the site goes live. After that, the domain, hosting account, code, and content are yours, and you can move to another developer at any time.",
          },
          {
            q: "Can I update the site myself afterwards?",
            a: "Yes. I show you how to edit your site at handover. I can also do the updates for you.",
          },
          {
            q: "What happens if something breaks after launch?",
            a: "If something I built breaks during the support period, I fix it at no charge. Support is 2 weeks for Starter, 30 days for Professional, and 60 to 90 days for Advanced. After that, fixes are covered by a maintenance plan or quoted separately.",
          },
          {
            q: "Will my site rank on Google?",
            a: "I build the technical foundation: clear structure, fast pages, correct metadata, and tracking. Ranking also depends on your competition and content, so I do not promise page one.",
          },
          {
            q: "Do you offer ongoing maintenance?",
            a: "Yes, optional. It covers updates, monitoring, backups, and small changes.",
          },
        ],
      },
    ],
  },
  contactPage: {
    badge: "START A PROJECT",
    titleA: "Tell me what you ",
    titleHl: "need built",
    sub: "A few details and a couple of sentences is enough. Attach a brief, a sketch, or a screenshot of what is broken if you have one, and I will come back with a plan and a fixed quote. If you would rather talk it through, WhatsApp is faster.",
    nameLabel: "Your name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    phonePrefix: "+60",
    phoneHint: "Malaysian number without the leading 0. Digits only, up to 10.",
    nameHint: "How you would like me to address you.",
    emailHint: "Where the reply goes.",
    websiteHint: "Your current site, if there is one.",
    messageHint: "Short and specific: what the business does and what the site has to do.",
    namePlaceholder: "Muhamad Zaqrul",
    emailPlaceholder: "you@yourbusiness.com",
    phonePlaceholder: "123456789",
    packageLabel: "Package",
    packageHint: "Closest fit is fine. I will tell you if another one suits better.",
    packageUnsure: "Not sure yet",
    packagePlaceholder: "Select a package",
    websiteLabel: "Website URL (optional)",
    websitePlaceholder: "yourbusiness.com",
    clear: "Clear",
    dropTitle: "Drop files here or browse",
    dropHint: "PDF, Word, PNG or JPG. Up to four files, 3MB total.",
    clearAll: "Remove all",
    submitted: "Submitted",
    messageLabel: "What do you want to build?",
    messagePlaceholder: "What the business does, and what the site or system has to do.",
    filesLabel: "Attach files (optional)",
    filesHint: "PDF, Word, PNG or JPG. Up to four files, 3MB total. A brief, a sketch, or a screenshot of what is broken all help.",
    fileTooMany: "Please attach at most four files.",
    submit: "Submit",
    sending: "Submitting",
    waNote: "Prefer WhatsApp?",
    waCta: "Message me instead",
    successTitle: "Thanks, I have got it",
    successBody: "I read every enquiry myself and reply within one working day, usually sooner.",
    successCountdown: "Taking you back to the homepage in",
    successSeconds: "seconds",
    successHome: "Back to Home now",
    errorFallback: "Something went wrong. Message me on WhatsApp and I will pick it up there.",
    quote: "Most of this work is patience. Read the problem twice, build it once, and say plainly what is not finished yet.",
    quoteByLabel: "Quote by",
    quoteBy: "Muhamad Zaqrul",
    assurances: [
      "You deal with me directly, not an account manager.",
      "I reply within one working day, usually sooner.",
      "A plan and a fixed quote before any work starts.",
      "No obligation, and I will say so if a website is not what you need.",
    ],
  },
  notes: {
    readDoneTitle: "You read the whole thing",
    readDoneBody:
      "Which puts you ahead of most people who open a case study. There are more notes like this one, each about a different business and a different problem.",
    readDoneMore: "Read another note",
    badge: "NOTES",
    headingA: "How the Work Actually ",
    headingHl: "Gets Done",
    sub: "Write-ups of real projects: what the business needed, what I built and why, and what happened after it went live.",
    read: "Read this note",
    next: "Your project could be next",
    /* On the index the slot is the end of the list, so it speaks about what
       comes next rather than inviting a click the way the homepage tile does. */
    nextStory: "My next story gets written here",
    all: "All Notes",
  },
  footer: {
    blurb:
      "Freelance web development, custom web systems, and digital marketing for SMEs and healthcare providers in Malaysia.",
    location: "Based in Selangor · Serving Ipoh and Malaysia",
    services: "SERVICES",
    servicesLinks: ["Websites & Apps", "More Customers", "Less Manual Work", "Systems & Integrations"],
    howIWork: "HOW I WORK",
    howIWorkLinks: ["Process", "Packages", "Results", "Notes"],
    getStarted: "GET STARTED",
    getStartedLinks: ["Get a Free Quote", "See Packages", "Visit the Store", "Try the Inventory Demo", "Try the Booking Demo"],
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    rights: "All rights reserved.",
    backToHome: "Back to Home",
  },
  notFound: {
    code: "404",
    titleA: "This page has ",
    titleHl: "moved on",
    body: "The link is either out of date or the address has a typo in it. Everything on the site is one click away below, or message me and I will point you at the right page.",
    primary: "Back to Home",
    secondary: "See Packages",
    linksLabel: "OR JUMP STRAIGHT TO",
    links: ["Services", "Work", "Packages", "Compare Packages"],
  },
  errorPage: {
    code: "500",
    titleA: "Something broke on ",
    titleHl: "my end",
    body: "That is a fault in my code, not anything you did. Try again in a moment — if it keeps happening, message me and tell me what you were doing when it appeared.",
    primary: "Try Again",
    secondary: "Back to Home",
    report: "Tell me what happened",
  },
  privacyPage: {
    badge: "LEGAL & PRIVACY",
    titleA: "Privacy ",
    titleHl: "Policy",
    lastUpdated: "Effective date: August 2026",
    intro:
      "This policy explains what information I collect, how I use it, and how I protect it when you visit zakrul.com or get in touch about web development and digital marketing work. It follows the Malaysian Personal Data Protection Act 2010 (PDPA).",
    sections: [
      {
        title: "1. Information I Collect",
        content: [
          "Contact details. When you reach out by WhatsApp, email, or a contact form, I receive your name, business name, phone number, email address, and whatever project details you choose to share.",
          "Analytics and usage data. Anonymised technical data such as browser type, device, pages viewed, and time on site is collected through Google Analytics 4 to understand how the site performs.",
          "Player accounts. If you choose to sign up to save your mini game scores and progress, I store your username, email address, best scores, and how far you got in the Space game. Your password is handled by Supabase Auth and kept only as a hash; I cannot see it. Creating an account is optional and every game works without one, except that the Space game's chapters after the first need an account to play and save.",
          "Cookies. Standard functional cookies keep the site working correctly, and analytics cookies measure traffic.",
        ],
      },
      {
        title: "2. How I Use Your Information",
        content: [
          "To assess project scope, prepare a quote, and deliver the work we agree on.",
          "To communicate with you about milestones, consultations, technical support, and handover.",
          "To keep the site secure, block automated attacks, and meet Malaysian legal requirements.",
          "Your data is never sold, rented, or shared with third-party advertisers.",
        ],
      },
      {
        title: "3. Third-Party Services",
        content: [
          "Hosting and infrastructure: Vercel and Railway, for secure and fast cloud hosting.",
          "Communication: the official WhatsApp Business API and Google Workspace, for client correspondence.",
          "Analytics: Google Analytics 4, configured with IP anonymisation.",
          "Live visitor count: Supabase Realtime, to show how many people are on the site right now. Your browser sends a random identifier it generates itself, which disappears when you close the tab. A running total of visitors is also kept as a single number, with a small flag saved in your browser so you are counted once. No personal data is stored.",
          "Player accounts: Supabase Auth and database, to sign you in and save your game scores and progress. Your sign-in is kept in your browser's storage until you sign out. To delete your account and scores, email me and I will remove them.",
          "Live chat: Tawk.to, when you choose to start a chat.",
          "Payments: on e-commerce projects, transactions are handled directly by PCI-DSS compliant providers such as Stripe, ToyyibPay, and FPX gateways. Card details are never stored on this server.",
        ],
      },
      {
        title: "4. Data Security & Retention",
        content: [
          "Industry-standard measures are in place to protect your information from unauthorised access, loss, or alteration, including SSL/TLS encryption, HTTP security headers, and rate limiting.",
          "Client data and project assets are kept only as long as needed to deliver the work, honour the warranty period, and meet tax record-keeping obligations.",
        ],
      },
      {
        title: "5. Your Rights & How to Reach Me",
        content: [
          "Under the Malaysian PDPA 2010, you may request access to, correction of, or deletion of the personal data I hold about you.",
          "For any privacy question or data request, contact me at zakrulabd@gmail.com or on WhatsApp at +6010-255 1527.",
        ],
      },
    ],
  },
  termsPage: {
    badge: "TERMS OF SERVICE",
    titleA: "Terms & ",
    titleHl: "Conditions",
    lastUpdated: "Effective date: August 2026",
    intro:
      "These terms govern the freelance web development, custom software, and technical SEO consulting services provided by Muhamad Zaqrul through Zakrul to clients.",
    sections: [
      {
        title: "1. Scope of Work & Quotations",
        content: [
          "Every project starts with an agreed scope of work, technical specification, and fixed quotation, confirmed in writing by invoice, proposal, or WhatsApp or email confirmation.",
          "Additional features, revisions beyond the agreed rounds, or third-party integrations requested outside the original scope are quoted separately as a variation.",
        ],
      },
      {
        title: "2. Payment Terms & Milestones",
        content: [
          "Starter and Professional websites: typically a 50% deposit before work begins. Clients with financial constraints may pay a 35% deposit instead. The balance is due once the project is complete and approved on staging, before it goes live.",
          "Custom systems and larger engagements: milestone-based payments, structured as set out in the project quotation.",
          "Invoices are payable by bank transfer or FPX within 7 days of issue.",
        ],
      },
      {
        title: "3. Client Responsibilities & Assets",
        content: [
          "Clients provide the brand assets, copy, account access, and feedback needed to keep the project on schedule.",
          "Clients confirm that all materials, media, and content they supply do not infringe anyone else's intellectual property or copyright.",
        ],
      },
      {
        title: "4. Intellectual Property & Code Ownership",
        content: [
          "The final product and source code are delivered only after the client confirms they are satisfied and full payment is received, before the site goes live. On receipt of full payment, ownership of the custom website code, database schema, and delivered creative assets transfers to the client.",
          "Open-source libraries and frameworks such as Next.js, React, Laravel, and WordPress remain governed by their own licences.",
          "I may feature the completed project in my portfolio and case studies unless a written non-disclosure agreement says otherwise.",
        ],
      },
      {
        title: "5. Warranty, Handover & Support",
        content: [
          "Each package includes post-launch support covering bugs and functional defects within the original scope: 2 weeks for Starter, 30 days for Professional, and 60 to 90 days for Advanced, as stated in the quote. Included revisions are 3, 5, and 10 rounds respectively.",
          "Ongoing server management, major third-party API changes, and content updates after the warranty period are available under a flexible maintenance arrangement.",
        ],
      },
      {
        title: "6. Liability & Governing Law",
        content: [
          "Security and performance best practices are followed throughout, but I am not liable for indirect losses, third-party hosting downtime, or API outages outside my control.",
          "These terms are governed by the laws of Malaysia. Any dispute will first be addressed in good faith through direct discussion.",
        ],
      },
    ],
  },
} as const;

export type Content = typeof content;
