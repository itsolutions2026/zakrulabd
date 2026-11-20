"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ChartIcon,
  CheckIcon,
  ExternalLinkIcon,
  SearchIcon,
  StarIcon,
} from "@/components/icons";
import { HeroDemo, LiveChartDemo, LiveCodeDemo, LiveStatusDemo, LiveWhatsAppDemo } from "@/components/live-demos";
import { WhatCanBuild } from "@/components/what-can-build";
import { ClientLogos } from "@/components/client-logos";
import { NoteCard, NoteNextCard } from "@/components/note-card";
import { SiteFooter } from "@/components/site-footer";
import { TechMarks } from "@/components/tech-marks";
import { content } from "@/lib/content";
import { contentMs } from "@/lib/content-ms";
import { postSlug, posts } from "@/lib/posts";
import { postsMs } from "@/lib/posts-ms";
import { WHATSAPP_NUMBER, wa, waMessages } from "@/lib/contact";
import { tech, techMarquee } from "@/lib/tech";
import {
  SvgGrowthAnalytics,
  SvgLaunching,
  SvgMedicalCare,
  SvgAnalytics,
  SvgPrototypingProcess,
  SvgResearching,
  SvgSearchEngines,
  SvgWebDevelopment,
} from "iblis-react-undraw";
import { Mark, RevealText } from "@/components/reveal-text";
import { AsciiRipple } from "@/components/ascii-ripple";

/* Presentation-only data: visuals, layout, links, and contact details. */
const serviceDemos = [LiveCodeDemo, LiveChartDemo, LiveWhatsAppDemo, LiveStatusDemo];
const processArt = [SvgResearching, SvgPrototypingProcess, SvgWebDevelopment, SvgLaunching];

const tierMeta = [
  { ctaStyle: "outline" as const, highlighted: false },
  { ctaStyle: "primary" as const, highlighted: true },
  { ctaStyle: "outline" as const, highlighted: false },
];

/* Placement for the floating prompt pills around the final CTA, in content order. */
const promptPillPositions = [
  { place: "left-[20%] top-6 -rotate-6", delay: "0s" },
  { place: "left-[7%] top-24 -rotate-3", delay: "0.8s" },
  { place: "left-[1.5%] top-48 -rotate-1", delay: "1.6s" },
  { place: "left-[1.5%] bottom-48 rotate-1", delay: "2.4s" },
  { place: "left-[7%] bottom-24 rotate-3", delay: "3.2s" },
  { place: "left-[20%] bottom-6 rotate-6", delay: "1.2s" },
  { place: "right-[20%] top-6 rotate-6", delay: "0.4s" },
  { place: "right-[7%] top-24 rotate-3", delay: "1.2s" },
  { place: "right-[1.5%] top-48 rotate-1", delay: "2s" },
  { place: "right-[1.5%] bottom-48 -rotate-1", delay: "2.8s" },
  { place: "right-[7%] bottom-24 -rotate-3", delay: "3.6s" },
  { place: "right-[20%] bottom-6 -rotate-6", delay: "1.8s" },
];

/* Four of the prompts on phones, two above the CTA and two below. `prompt`
   indexes into content.finalCta.prompts: the short ones are picked on purpose,
   so nothing overflows a 320px screen. Positions stay inside the section's
   vertical padding (py-32 = 128px) so none of them land on the heading or CTA. */
const mobilePromptPills = [
  { prompt: 1, place: "left-2 top-6 -rotate-6", delay: "0s" },
  { prompt: 6, place: "right-2 top-20 rotate-6", delay: "1.1s" },
  { prompt: 3, place: "left-3 bottom-20 -rotate-5", delay: "2.2s" },
  { prompt: 10, place: "right-2 bottom-6 rotate-6", delay: "3.1s" },
];

const statMeta = [
  { Illustration: SvgGrowthAnalytics, icon: ChartIcon, iconColor: "text-teal-600", value: "12.1 → 8.7" },
  { Illustration: SvgSearchEngines, icon: SearchIcon, iconColor: "text-amber-500", value: "+13%" },
  { Illustration: SvgAnalytics, icon: ChartIcon, iconColor: "text-white", value: "90K" },
];

const testimonials = [
  {
    before: "Terima kasih develop website ini. ",
    highlight: "Mudah customer chat",
    after: " nak order kuih apa dan bila nak.",
    name: "Siti Sapura",
    role: "Sri Tanduk Enterprise",
    url: "https://sritanduk.com/",
  },
  {
    before: "Thank you for helping me integrate our Shopify to our custom website, easy for customer to ",
    highlight: "pay via Billplz",
    after: ".",
    name: "Zhen Cui",
    role: "Salaam Cola MY",
    url: "https://www.salaamcolamy.com/en",
  },
  {
    before: "Terima kasih ",
    highlight: "sambungkan semula database",
    after: " project management system saya. Kalau tak, jenuh nak cari balik data.",
    name: "Mohd Zuhairi Zahrom",
    role: "KNZ Engineering Sdn Bhd",
    url: "https://knzengineering.com.my/",
  },
];

/* The sections the sticky nav links to, in the order they appear on the page. */
const navIds = ["services", "projects", "pricing", "contact"] as const;

const tierWaMessages = [waMessages.starter, waMessages.business, waMessages.custom];

function PrimaryButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  const base =
    "btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-amber-500 text-navy hover:bg-amber-600"
      : "border-[1.5px] border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white";
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function MilestoneSteps({ steps }: { steps: readonly { title: string; body: string }[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start filling when container enters the viewport
      const startTrigger = windowHeight * 0.8;
      // Complete filling when container passes through middle of the viewport
      const endTrigger = windowHeight * 0.3;

      const totalDistance = rect.height + (startTrigger - endTrigger);
      const currentDistance = startTrigger - rect.top;

      const rawProgress = currentDistance / totalDistance;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(clampedProgress);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mt-10 flex flex-col gap-9">
      {/* Background track line */}
      <div className="absolute bottom-4 left-4 top-4 w-1 -translate-x-1/2 rounded-full bg-slate-200" />

      {/* Dynamic animated amber fill line */}
      <div
        className="absolute left-4 top-4 w-1 -translate-x-1/2 rounded-full bg-amber-500 transition-all duration-150 ease-out"
        style={{
          height: `calc(${progress * 100}% - 2rem)`,
          maxHeight: "calc(100% - 2rem)",
          minHeight: "0px",
        }}
      />

      {steps.map((s, i) => {
        const stepThreshold = i === 0 ? 0.05 : i === 1 ? 0.45 : 0.85;
        const isActive = progress >= stepThreshold;

        return (
          <div key={s.title} className="relative flex items-start gap-4">
            <div
              className={`relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-amber-500 text-navy shadow-md ring-4 ring-amber-100 scale-105"
                  : "border border-border bg-bg text-muted"
              }`}
            >
              {i + 1}
            </div>
            <div className="flex flex-col gap-1 pt-0.5">
              <h3
                className={`font-display text-lg font-bold transition-colors duration-300 ${
                  isActive ? "text-navy" : "text-ink/80"
                }`}
              ><RevealText>
                {s.title}
              </RevealText></h3>
              <p className="text-sm leading-relaxed text-body"><RevealText text>{s.body}</RevealText></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ScrollSlideItem({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fromLeft = index % 2 === 0;
  const initialTranslate = fromLeft ? "-translate-x-20" : "translate-x-20";

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out md:transition-none ${
        isVisible
          ? "translate-x-0 opacity-100"
          : `${initialTranslate} opacity-0 pointer-events-none md:translate-x-0 md:opacity-100 md:pointer-events-auto`
      } ${className}`}
    >
      {children}
    </div>
  );
}

function PricingCardItem({
  tier,
  index,
  badge,
}: {
  tier: {
    name: string;
    tagline: string;
    price: string;
    priceNote?: string;
    description: string;
    cta: string;
    features: readonly string[];
  };
  index: number;
  badge: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const meta = tierMeta[index];
  // Mobile only: i = 0 -> left (-x), i = 1 -> right (+x), i = 2 -> left (-x)
  const fromLeft = index % 2 === 0;
  const initialTranslate = fromLeft ? "-translate-x-20" : "translate-x-20";

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-600 ease-out md:transition-none ${
        isVisible
          ? "translate-x-0 opacity-100"
          : `${initialTranslate} opacity-0 pointer-events-none md:translate-x-0 md:opacity-100 md:pointer-events-auto`
      } ${
        meta.highlighted
          ? "ring-motion relative flex h-full flex-col gap-5 rounded-[18px] border-2 border-amber-500/40 bg-navy p-8 shadow-2xl md:-translate-y-2"
          : "flex h-full flex-col gap-5 rounded-[18px] border border-border bg-bg p-8"
      }`}
    >
      {meta.highlighted && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber-500 px-4 py-1.5 text-xs font-extrabold tracking-wide text-navy">
          {badge}
        </span>
      )}
      <div>
        <h3
          className={`font-display text-[19px] font-bold ${meta.highlighted ? "text-white" : "text-navy"}`}
        ><RevealText>
          {tier.name}
        </RevealText></h3>
        <p
          className={`mt-0.5 text-[12.5px] font-semibold ${
            meta.highlighted ? "text-amber-300" : "text-primary-600"
          }`}
        ><RevealText text>
          {tier.tagline}
        </RevealText></p>
        <p
          className={`mt-3 font-display text-[26px] font-extrabold leading-none ${
            meta.highlighted ? "text-white" : "text-navy"
          }`}
        ><RevealText text>
          {tier.price}
        </RevealText></p>
        <p
          className={`mt-1.5 line-clamp-3 min-h-[60px] text-[13.5px] leading-normal ${
            meta.highlighted ? "text-slate-400" : "text-muted"
          }`}
        ><RevealText text>
          {tier.description}
        </RevealText></p>
      </div>
      <PrimaryButton
        href={wa(tierWaMessages[index])}
        variant={meta.ctaStyle}
        className={meta.highlighted ? "" : "!text-navy !border-navy hover:!bg-navy hover:!text-white"}
      >
        {tier.cta}
      </PrimaryButton>
      <div className="mt-1 flex flex-col gap-3">
        {tier.features.map((f) =>
          /* An "Everything in X, plus:" line heads the list rather than being a
             feature of its own, so it carries no tick. */
          f.endsWith("plus:") ? (
            <p
              key={f}
              className={`text-[13px] font-semibold ${meta.highlighted ? "text-amber-300" : "text-primary-600"}`}
            ><RevealText text>
              {f}
            </RevealText></p>
          ) : (
          <div key={f} className="flex items-start gap-2.5">
            <CheckIcon
              className={`mt-0.5 h-[18px] w-[18px] flex-shrink-0 ${
                meta.highlighted ? "text-amber-500" : "text-teal-600"
              }`}
            />
            {/* No tool marks here: a tier card is a list of what you get, and a
                logo beside one line pulls the eye to it over the rest. */}
            <span className={`text-[13.5px] ${meta.highlighted ? "text-slate-200" : "text-ink"}`}>{f}</span>
          </div>
          )
        )}
      </div>
      {/* Pushed to the card's foot so it reads as small print, not a feature. */}
      {tier.priceNote && (
        <p className={`mt-auto pt-2 text-[11.5px] ${meta.highlighted ? "text-slate-400" : "text-muted"}`}><RevealText text>
          {tier.priceNote}
        </RevealText></p>
      )}
    </div>
  );
}

function PricingCards({
  tiers,
  badge,
}: {
  tiers: readonly {
    name: string;
    tagline: string;
    price: string;
    priceNote?: string;
    description: string;
    cta: string;
    features: readonly string[];
  }[];
  badge: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {tiers.map((tier, i) => (
        <PricingCardItem key={tier.name} tier={tier} index={i} badge={badge} />
      ))}
    </div>
  );
}

/* Reports which nav section the reader is currently in. A section takes over once
   its top scrolls under the sticky nav, so the marker changes at the moment the
   heading reaches the bar rather than when the section merely comes into view. */
function useActiveSection(navRef: React.RefObject<HTMLElement | null>, navItems: { id: string; label: string }[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    function update() {
      const offset = (navRef.current?.offsetHeight ?? 0) + 8;

      let current: string | null = null;
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }

      // The last section sits above the footer, so on short viewports the page can
      // bottom out before its top ever clears the nav. Award it the marker there.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = navItems[navItems.length - 1].id;

      setActiveId(current);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [navRef, navItems]);

  return activeId;
}

/* Hover on a nav link: a circle the height of the link appears behind the text
   and stretches out to the link's full width, ending as a pill. */
const navLink = "group relative rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors duration-200";
const navLinkHover =
  "absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 scale-50 rounded-full bg-amber-400 opacity-0 transition-[width,opacity,transform] duration-300 ease-out group-hover:w-full group-hover:scale-100 group-hover:opacity-100 group-focus-visible:w-full group-focus-visible:scale-100 group-focus-visible:opacity-100 motion-reduce:transition-none";

export default function Home({ locale = "en" }: { locale?: "en" | "ms" }) {
  const t = locale === "ms" ? contentMs : content;
  const root = locale === "ms" ? "/ms" : "";
  const navItems = useMemo(() => navIds.map((id) => ({ id, label: t.nav[id] })), [t]);
  const [activeReview, setActiveReview] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const activeSection = useActiveSection(navRef, navItems);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* NAV */}
      <nav ref={navRef} className="sticky top-0 z-50 px-3 pt-2 sm:px-4 lg:pt-3">
        <div className="liquid-glass liquid-glass-calm mx-auto max-w-shell overflow-hidden rounded-3xl lg:rounded-full">
        <div className="flex items-center justify-between gap-3 px-3 py-2 sm:px-4 lg:pl-4 lg:pr-2.5">
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center">
              <Image
                src="/logo-ghost-outline.webp"
                alt="Zakrul logo"
                width={512}
                height={512}
                className="h-8 w-8 object-contain"
              />
            </div>
            <span className="font-display text-lg font-bold text-navy">Zakrul</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = item.id === activeSection;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`${navLink} ${isActive ? "bg-amber-400 text-navy" : "text-ink hover:text-navy"}`}
                >
                  {!isActive && <span aria-hidden="true" className={navLinkHover} />}
                  <span className="relative">{item.label}</span>
                </a>
              );
            })}
            <Link href={`${root}/about`} className={`${navLink} text-ink hover:text-navy`}>
              <span aria-hidden="true" className={navLinkHover} />
              <span className="relative">{locale === "ms" ? "Tentang Saya" : "About Me"}</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <Link href={locale === "ms" ? "/" : "/ms"} hrefLang={locale === "ms" ? "en-MY" : "ms-MY"} lang={locale === "ms" ? "en" : "ms"} className="text-xs font-bold text-navy underline-offset-4 hover:underline sm:text-sm">
              {locale === "ms" ? "EN" : "MS"}
            </Link>
            <a
              href={wa(waMessages.quote)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap rounded-full bg-amber-500 px-3.5 py-2 text-xs font-bold text-navy hover:bg-amber-600 sm:px-5 sm:py-2.5 sm:text-sm sm:font-semibold"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>

        {/* Mobile subnav strip: marks the section the reader has scrolled into. */}
        <div className="flex items-center justify-around border-t border-navy/10 px-2 py-2 text-xs font-semibold text-ink lg:hidden">
          {navItems.map((item) => {
            const isActive = item.id === activeSection;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`group relative px-2.5 py-1 text-center transition ${
                  isActive ? "text-navy" : "text-ink hover:text-navy"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-amber-400 transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
          <Link href={`${root}/about`} className="px-2.5 py-1 text-center text-ink hover:text-navy">
            {locale === "ms" ? "Tentang" : "About"}
          </Link>
        </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="main"
        data-ripple-host
        className="relative flex min-h-[calc(100svh-6.25rem)] items-center overflow-hidden lg:min-h-[calc(100svh-4.3125rem)]"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* A faint field of dots that ripples as the pointer crosses the hero,
              with the odd raindrop while it is still. Fades out towards the
              text side so it never sits under the heading at full strength. */}
          <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_45%)]">
            <AsciiRipple color="rgb(23 23 23 / 0.3)" rippleColor="#e0ad12" base={0.45} rain={0.6} />
          </div>
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-400/25 blur-3xl" />
          <div className="absolute -right-10 top-10 h-64 w-64 rounded-full bg-bg blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-shell items-center gap-16 px-6 pb-16 pt-5 md:pb-24 md:pt-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <h1 className="font-display text-[38px] font-bold leading-[1.2] tracking-tight text-navy md:text-[62px]"><RevealText immediate>
              <Mark>{t.hero.titleHl1}</Mark>
              <span className="block">{t.hero.titleB.trim()}</span>
              {/* The keyword line carries the size; the promise sits under it
                  smaller, still inside the h1 so search engines read both. */}
              <span className="mt-3 block text-[24px] font-semibold leading-snug text-body md:text-[34px]">
                {t.hero.titleSub}
                <span className="text-navy underline decoration-amber-500 decoration-[5px] underline-offset-[6px] [text-decoration-skip-ink:none]">
                  {t.hero.titleHl2}
                </span>
              </span>
            </RevealText></h1>
            <div className="w-full max-w-lg pb-12 pt-2 lg:hidden">
              <HeroDemo locale={locale} />
            </div>
            <p className="max-w-xl text-base leading-relaxed text-body"><RevealText text immediate>{t.hero.body}</RevealText></p>
            <div className="mt-2 flex flex-wrap justify-center gap-4 lg:justify-start">
              <PrimaryButton href={wa(waMessages.hero)} variant="primary">
                {t.hero.ctaPrimary}
                <ArrowRightIcon className="h-[18px] w-[18px]" />
              </PrimaryButton>
              <PrimaryButton href="#pricing" variant="outline">
                {t.hero.ctaSecondary}
              </PrimaryButton>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-3.5 lg:justify-start">
              {t.hero.chips.map((chip) => (
                <div
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-[10px] border border-border bg-white px-4 py-2.5 text-[13.5px] font-semibold text-ink"
                >
                  <TechMarks text={chip} size={15} />
                  {chip}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden mx-auto w-full max-w-xl pb-6 lg:block lg:mx-0 lg:-mt-10 lg:pb-0">
            <HeroDemo locale={locale} />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y border-border bg-white px-6 py-24 overflow-hidden">
        <div className="mx-auto max-w-shell">
          <div className="mx-auto mb-12 flex max-w-xl flex-col items-center gap-3 text-center">
            <h2 className="font-display text-[30px] font-bold text-navy md:text-5xl"><RevealText>{t.services.heading}</RevealText></h2>
            <p className="text-base text-body"><RevealText text>{t.services.sub}</RevealText></p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((service, i) => {
              const Demo = serviceDemos[i];
              return (
                <ScrollSlideItem
                  key={service.title}
                  index={i}
                  className="flex flex-col gap-3.5 rounded-2xl border border-border bg-bg p-5 transition-transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="h-28 overflow-hidden rounded-xl border border-border">
                    <Demo />
                  </div>
                  <h3 className="font-display text-[17px] font-bold text-navy"><RevealText>{service.title}</RevealText></h3>
                  <p className="text-sm leading-relaxed text-body"><RevealText text>{service.description}</RevealText></p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                    {service.bullets.map((b) => (
                      <span
                        key={b}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-2.5 py-1 text-xs font-semibold text-ink shadow-xs"
                      >
                        <TechMarks text={b} size={13} />
                        {b}
                      </span>
                    ))}
                  </div>
                </ScrollSlideItem>
              );
            })}
          </div>
        </div>
      </section>

      <WhatCanBuild copy={t} />

      <ClientLogos copy={t} />

      {/* PROCESS */}
      <section id="process" className="px-6 py-24 overflow-hidden">
        <div className="mx-auto max-w-shell">
          <div className="mx-auto mb-12 flex max-w-xl flex-col items-center gap-3 text-center">
            <h2 className="font-display text-[30px] font-bold text-navy md:text-5xl"><RevealText>{t.process.heading}</RevealText></h2>
            <p className="text-base text-body"><RevealText text>{t.process.sub}</RevealText></p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.items.map((p, i) => {
              const Illustration = processArt[i];
              return (
                <ScrollSlideItem key={p.title} index={i} className="flex flex-col gap-4">
                  <div className="relative rounded-2xl border border-border bg-white p-4">
                    <Illustration primarycolor="#f7c325" height={140} className="mx-auto" />
                    <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                      {`0${i + 1}`}
                    </div>
                  </div>
                  <h3 className="font-display text-base font-bold text-navy"><RevealText>{p.title}</RevealText></h3>
                  <p className="text-sm leading-relaxed text-body"><RevealText text>{p.description}</RevealText></p>
                </ScrollSlideItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-y border-border bg-white px-6 py-24 overflow-hidden">
        <div className="mx-auto max-w-shell">
          <div className="mx-auto mb-12 flex max-w-xl flex-col items-center gap-3 text-center">
            <h2 className="font-display text-[30px] font-bold text-navy md:text-5xl"><RevealText>
              {t.pricing.headingA}
              <Mark>{t.pricing.headingHl}</Mark>
              {t.pricing.headingB}
            </RevealText></h2>
            <p className="text-base text-body"><RevealText text>{t.pricing.sub}</RevealText></p>
          </div>
          <PricingCards tiers={t.pricing.tiers} badge={t.pricing.badge} />
          <p className="mt-8 flex flex-col items-center gap-3 text-center text-[13.5px] text-muted lg:block"><RevealText text>
            {t.pricing.compare.footnote}{" "}
            <Link
              href={`${root}/compare`}
              className="inline-block w-fit max-w-full self-center rounded-full bg-amber-400 px-4 py-2 font-semibold text-navy underline decoration-navy decoration-2 underline-offset-4 lg:w-auto lg:rounded-none lg:bg-transparent lg:p-0 lg:decoration-amber-500 lg:hover:decoration-navy"
            >
              {t.pricing.compare.link}
            </Link>
          </RevealText></p>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="bg-navy px-6 py-24 overflow-hidden">
        <div className="mx-auto max-w-shell">
          <div className="mx-auto mb-11 flex max-w-2xl flex-col items-center gap-3 text-center">
            <h2 className="font-display text-[30px] font-bold text-white md:text-5xl"><RevealText>
              {t.results.headingA}
              <Mark>{t.results.headingHl}</Mark>
              {t.results.headingB}
            </RevealText></h2>
            <p className="text-base text-slate-400"><RevealText text>{t.results.sub}</RevealText></p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {statMeta.map((s, i) => (
              <ScrollSlideItem
                key={i}
                index={i}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-white p-3">
                  <s.Illustration primarycolor="#f7c325" height={100} className="mx-auto max-h-full max-w-full" />
                </div>
                <div className="flex items-center gap-2">
                  <s.icon className={`h-5 w-5 flex-shrink-0 ${s.iconColor}`} />
                  <span className="text-[30px] font-extrabold leading-none text-white"><RevealText text>{s.value}</RevealText></span>
                </div>
                <span className="text-[13.5px] text-slate-400"><RevealText text>{t.results.stats[i]}</RevealText></span>
              </ScrollSlideItem>
            ))}
          </div>

          <ScrollSlideItem
            index={3}
            className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-8 rounded-[18px] border border-white/10 bg-white/5 p-8 md:grid-cols-[1fr_1.3fr]"
          >
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-white p-4 md:aspect-auto md:h-52">
              <SvgMedicalCare primarycolor="#f7c325" height={170} className="mx-auto max-h-full max-w-full" />
            </div>

            <div className="flex flex-col gap-3.5">
              <span className="inline-flex w-fit rounded-full bg-teal-600 px-3.5 py-1.5 text-xs font-bold tracking-wide text-white">
                {t.results.caseBadge}
              </span>
              <h3 className="font-display text-[19px] font-bold text-white"><RevealText>{t.results.caseTitle}</RevealText></h3>
              <p className="text-sm leading-relaxed text-slate-300"><RevealText text>{t.results.caseBody}</RevealText></p>
            </div>
          </ScrollSlideItem>

          <ScrollSlideItem
            index={4}
            className="mx-auto mt-6 grid max-w-4xl grid-cols-1 items-center gap-8 rounded-[18px] border border-white/10 bg-white/5 p-8 md:grid-cols-[1.3fr_1fr]"
          >
            <div className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-2xl bg-white p-2">
                <Image
                  src="/notes/sri-tanduk-search-console.webp"
                  alt={t.results.smeImageAlt}
                  width={1946}
                  height={650}
                  sizes="(min-width: 768px) 500px, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <div className="overflow-hidden rounded-2xl bg-white p-2">
                <Image
                  src="/notes/sri-tanduk-ai-impressions.webp"
                  alt={t.results.smeAiImageAlt}
                  width={1422}
                  height={539}
                  sizes="(min-width: 768px) 500px, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              <span className="inline-flex w-fit rounded-full bg-amber-500 px-3.5 py-1.5 text-xs font-bold tracking-wide text-navy">
                {t.results.smeBadge}
              </span>
              <h3 className="font-display text-[19px] font-bold text-white"><RevealText>{t.results.smeTitle}</RevealText></h3>
              <p className="text-sm leading-relaxed text-slate-300"><RevealText text>{t.results.smeBody}</RevealText></p>
              <div className="grid grid-cols-3 gap-3">
                {t.results.smeStats.map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <span className="text-[22px] font-extrabold leading-none text-white"><RevealText text>{s.value}</RevealText></span>
                    <span className="text-[12px] text-slate-400"><RevealText text>{s.label}</RevealText></span>
                  </div>
                ))}
              </div>
              <Link
                href={locale === "ms" ? "/ms/notes/sri-tanduk" : `/notes/${postSlug(posts.find((p) => p.title.startsWith("The kuih maker")) ?? posts[0])}`}
                className="inline-flex w-fit items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
              >
                {t.results.smeLink}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </ScrollSlideItem>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" className="border-b border-border bg-bg py-11">
        <div className="mx-auto flex max-w-shell flex-col items-center px-6">
          <span className="text-base font-bold tracking-[0.08em] text-muted"><RevealText text>{t.tech.heading}</RevealText></span>
        </div>
        <div className="marquee-fade mt-6 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-6">
            {[0, 1].map((copy) => (
              <div key={copy} aria-hidden={copy === 1} className="flex items-center gap-6">
                {techMarquee.map((key) => {
                  const { name, Icon, color } = tech[key];
                  return (
                    <div
                      key={key}
                      title={name}
                      className="group flex w-40 flex-shrink-0 flex-col items-center gap-4 rounded-2xl border border-border bg-white px-5 py-8 transition duration-200 hover:-translate-y-1 hover:shadow-md"
                    >
                      <Icon
                        className="h-16 w-16 transition duration-300 lg:grayscale lg:group-hover:grayscale-0"
                        style={{ color }}
                        aria-hidden="true"
                      />
                      <span className="text-center font-mono text-sm leading-tight text-muted"><RevealText text>{name}</RevealText></span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="px-6 py-24">
        <div className="mx-auto max-w-shell">
          <div className="mx-auto mb-11 flex max-w-xl flex-col items-center gap-3 text-center">
            <h2 className="font-display text-[30px] font-bold text-navy md:text-5xl"><RevealText>{t.testimonials.heading}</RevealText></h2>
            <p className="text-base text-body"><RevealText text>{t.testimonials.sub}</RevealText></p>
          </div>
          {/* Mobile Auto-Slide (< md) */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeReview * 100}%)` }}
              >
                {testimonials.map((item, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-1">
                    <div className="flex h-full min-h-[260px] flex-col gap-5 rounded-2xl border border-border bg-white p-7 shadow-sm">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <StarIcon key={s} className="h-5 w-5 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-base font-bold leading-relaxed text-navy"><RevealText text>
                        &ldquo;{item.before}
                        <Mark>{item.highlight}</Mark>
                        {item.after}&rdquo;
                      </RevealText></p>
                      <div className="mt-auto border-t border-border pt-5">
                        <div className="text-sm font-semibold text-navy"><RevealText text>{item.name}</RevealText></div>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-0.5 inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-amber-600"
                        >
                          {item.role}
                          <ExternalLinkIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination indicator dots */}
            <div className="mt-5 flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveReview(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeReview ? "w-6 bg-navy" : "w-2 bg-border hover:bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop 3-Column Grid (md+) */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-6">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-lg"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-5 w-5 text-amber-400" />
                  ))}
                </div>
                <p className="text-base font-bold leading-relaxed text-navy"><RevealText text>
                  &ldquo;{item.before}
                  <Mark>{item.highlight}</Mark>
                  {item.after}&rdquo;
                </RevealText></p>
                <div className="mt-auto border-t border-border pt-5">
                  <div className="text-sm font-semibold text-navy"><RevealText text>{item.name}</RevealText></div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-0.5 inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-amber-600"
                  >
                    {item.role}
                    <ExternalLinkIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTES: the case studies sit here on purpose, straight after the
          testimonials and before the pitch to start, so a visitor who is
          weighing me up reads one project in full at the moment they are
          deciding. */}
      <section id="notes" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-shell">
          <div className="mx-auto mb-11 flex max-w-xl flex-col items-center gap-3 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted"><RevealText text>{t.notes.badge}</RevealText></span>
            <h2 className="font-display text-[30px] font-bold text-navy md:text-5xl"><RevealText>
              {t.notes.headingA}
              <Mark>{t.notes.headingHl}</Mark>
            </RevealText></h2>
            <p className="text-base text-body"><RevealText text>{t.notes.sub}</RevealText></p>
          </div>

          {/* Four across, laid out like the client grid: the notes fill the
              slots and the last one stays an open invitation. */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {(locale === "ms" ? postsMs : posts).slice(0, 3).map((post) => (
              <NoteCard key={post.title} post={post} locale={locale} />
            ))}
            <NoteNextCard label={t.notes.next} href="#contact" />
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href={`${root}/notes`}
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-lg border-[1.5px] border-primary-900 px-6 py-3 text-sm font-bold text-primary-900 transition-colors hover:bg-primary-900 hover:text-white"
            >
              {t.notes.all}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GET STARTED */}
      <section id="start" className="border-y border-border bg-white px-6 py-24">
        <div className="mx-auto max-w-shell">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-[30px] font-bold leading-tight text-navy md:text-5xl"><RevealText>
                {t.started.headingA}
                <Mark>{t.started.headingHl}</Mark>
              </RevealText></h2>

              <MilestoneSteps steps={t.started.steps} />
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-base leading-relaxed text-body md:text-lg"><RevealText text>{t.started.intro}</RevealText></p>

              <div className="flex flex-wrap gap-3">
                <PrimaryButton href={wa(waMessages.intro)} variant="primary">
                  {t.started.ctaPrimary}
                  <ArrowRightIcon className="h-[18px] w-[18px]" />
                </PrimaryButton>
                <PrimaryButton href="#pricing" variant="outline">
                  {t.started.ctaSecondary}
                </PrimaryButton>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-bg p-6">
                <span className="text-[11px] font-bold uppercase tracking-wide text-muted">
                  {t.started.expectTitle}
                </span>
                {t.started.expect.map((e) => (
                  <div key={e} className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-teal-600" />
                    <span className="text-sm text-ink"><RevealText text>{e}</RevealText></span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-bg p-6">
                <span className="text-[11px] font-bold uppercase tracking-wide text-muted"><RevealText text>{t.started.readyTitle}</RevealText></span>
                <p className="text-sm leading-relaxed text-body"><RevealText text>{t.started.readyBody}</RevealText></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" data-ripple-host className="relative overflow-hidden bg-navy px-6 py-32 lg:py-36">
        {/* White glyphs on navy, rippling under the pointer and the prompts. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]">
          <AsciiRipple color="rgb(255 255 255 / 0.35)" rippleColor="#fbcf33" base={0.3} rain={0.5} />
        </div>
        {/* Floating prompt pills (desktop only: radial arc, 6 left / 6 right) */}
        <div className="absolute inset-0 mx-auto hidden max-w-shell select-none lg:block">
          {t.finalCta.prompts.map((prompt, i) => (
            <div
              key={prompt}
              className={`absolute rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[12.5px] font-medium text-slate-200 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-amber-400/50 hover:bg-white/15 hover:text-white animate-[gentle-float_4s_ease-in-out_infinite] ${promptPillPositions[i].place}`}
              style={{ animationDelay: promptPillPositions[i].delay }}
            >
              {prompt}
            </div>
          ))}
        </div>

        {/* Same idea for phones, but only four, smaller and dimmer: here they are
            background texture around the CTA, not something to read. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none lg:hidden">
          {mobilePromptPills.map(({ prompt, place, delay }) => (
            <div
              key={prompt}
              className={`absolute whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10.5px] font-medium text-slate-400 backdrop-blur-sm animate-[gentle-float_4s_ease-in-out_infinite] ${place}`}
              style={{ animationDelay: delay }}
            >
              {t.finalCta.prompts[prompt]}
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
          <h2 className="font-display text-[30px] font-bold text-white md:text-5xl"><RevealText>
            {t.finalCta.headingA}
            <Mark>{t.finalCta.headingHl}</Mark>
            {t.finalCta.headingB}
          </RevealText></h2>
          <p className="text-base leading-relaxed text-slate-300"><RevealText text>{t.finalCta.sub}</RevealText></p>
          {/* The one place the site asks for a written brief rather than a
              chat, so it goes to the form. WhatsApp is still offered below. */}
          <Link
            href={`${root}/contact`}
            className="btn-primary mt-2 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-7 py-3.5 text-[15px] font-bold text-navy hover:bg-amber-600"
          >
            {t.finalCta.cta}
            <ArrowRightIcon className="h-[18px] w-[18px]" />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-[13.5px] text-slate-400">
            <span>{t.finalCta.whatsapp}</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-2.5 py-0.5 font-semibold text-navy underline underline-offset-2 transition-colors hover:bg-slate-200"
            >
              010-255 1527
            </a>
            <span>{t.finalCta.or.trim()}</span>
            <a
              href="mailto:zakrulabd@gmail.com"
              className="inline-block rounded-full bg-white px-2.5 py-0.5 font-semibold text-navy underline underline-offset-2 transition-colors hover:bg-slate-200"
            >
              zakrulabd@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter locale={locale} />
    </div>
  );
}
