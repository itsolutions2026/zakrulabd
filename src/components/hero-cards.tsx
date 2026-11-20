"use client";

import { useEffect, useState } from "react";

/* One Google-style card in the corner of the hero picture that changes every few
   seconds. The first slide is Sri Tanduk's real Search Console total (Jul to Sep
   2026, the same figure the case study shows). The other four say what the work
   is for, each as a change against before (more enquiries, faster replies, less
   admin time). Those percentages are illustrative, not results from a client.

   Hovering or focusing the card pauses it, and a click or tap moves to the next slide. */

type Slide = {
  en: { title: string; label: string };
  ms: { title: string; label: string };
  to: number;
  decimals: number;
  prefix?: string;
  suffix: string;
  bars: number[];
};

const slides: Slide[] = [
  {
    en: { title: "Google Search", label: "impressions" },
    ms: { title: "Google Search", label: "impressions" },
    to: 3.2,
    decimals: 1,
    suffix: "K",
    bars: [35, 60, 45, 75, 55, 90, 65],
  },
  {
    en: { title: "More enquiries", label: "vs last month" },
    ms: { title: "Lebih banyak pertanyaan", label: "vs bulan lalu" },
    to: 18,
    decimals: 0,
    prefix: "+",
    suffix: "%",
    bars: [30, 42, 38, 55, 62, 58, 85],
  },
  {
    en: { title: "Easier bookings", label: "more online bookings" },
    ms: { title: "Tempahan lebih mudah", label: "lebih tempahan" },
    to: 12,
    decimals: 0,
    prefix: "+",
    suffix: "%",
    bars: [50, 35, 65, 45, 70, 60, 80],
  },
  {
    en: { title: "Faster replies", label: "reply time" },
    ms: { title: "Balasan lebih pantas", label: "masa balas" },
    to: 60,
    decimals: 0,
    prefix: "−",
    suffix: "%",
    bars: [90, 74, 70, 55, 45, 38, 30],
  },
  {
    en: { title: "Less manual work", label: "admin time" },
    ms: { title: "Kurang kerja manual", label: "masa pentadbiran" },
    to: 30,
    decimals: 0,
    prefix: "−",
    suffix: "%",
    bars: [80, 66, 70, 52, 48, 36, 30],
  },
];

const INTERVAL_MS = 4000;

/* Counts up from zero each time it mounts, which is each time its slide comes
   round. Skipped for anyone who asked for less motion. */
function CountUp({ to, decimals, prefix = "", suffix }: { to: number; decimals: number; prefix?: string; suffix: string }) {
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const start = performance.now();
    const duration = 1100;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setValue(to * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to]);

  return (
    <>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </>
  );
}

export function HeroCards({ locale = "en" }: { locale?: "en" | "ms" }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, index]);

  return (
    <div
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label={locale === "ms" ? "Contoh hasil untuk perniagaan" : "What the work is for"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onClick={() => setIndex((i) => (i + 1) % slides.length)}
      className="absolute -bottom-11 right-2 h-[88px] w-40 cursor-pointer rounded-lg border border-border bg-white/95 p-2 shadow-lg outline-none backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-amber-400 sm:-bottom-6 sm:-right-6 sm:h-[138px] sm:w-52 sm:rounded-2xl sm:p-4 sm:shadow-2xl"
    >
      {slides.map((slide, i) => {
        const text = slide[locale];
        const isActive = index === i;
        return (
          <div
            key={slide.en.title}
            aria-hidden={!isActive}
            className={`absolute inset-0 flex flex-col p-2 transition-opacity duration-500 sm:p-4 ${isActive ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <div className="mb-1 flex items-center gap-1 sm:mb-2.5 sm:gap-2">
              <span className="relative flex h-1.5 w-1.5 sm:h-2.5 sm:w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-600 sm:h-2.5 sm:w-2.5" />
              </span>
              <span className="truncate text-[9px] font-bold tracking-tight text-ink sm:text-[11px]">{text.title}</span>
            </div>
            <div className="mb-1 flex h-5 items-end justify-between gap-0.5 px-0.5 sm:mb-2.5 sm:h-10 sm:gap-1.5">
              {slide.bars.map((h, b) => (
                <div
                  key={b}
                  className="w-1 origin-bottom animate-[grow-bar_1.8s_ease-in-out_infinite_alternate] rounded-full bg-gradient-to-t from-teal-600 to-teal-400 sm:w-2"
                  style={{ height: `${h}%`, animationDelay: `${b * 0.15}s` }}
                />
              ))}
            </div>
            <div className="flex items-baseline gap-1 pt-0.5 sm:gap-1.5">
              <span className="text-xs font-extrabold tracking-tight text-navy sm:text-lg">
                {isActive ? (
                  <CountUp to={slide.to} decimals={slide.decimals} prefix={slide.prefix} suffix={slide.suffix} />
                ) : (
                  <>
                    {slide.prefix}
                    {slide.to.toFixed(slide.decimals)}
                    {slide.suffix}
                  </>
                )}
              </span>
              <span className="truncate text-[8.5px] font-semibold text-muted sm:text-[11px]">{text.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
