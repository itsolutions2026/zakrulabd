"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, ChevronDownIcon } from "@/components/icons";
import { TechMarks } from "@/components/tech-marks";
import { tech } from "@/lib/tech";
import { findTechMentions } from "@/lib/tech-mentions";
import { content } from "@/lib/content";
import { contentMs } from "@/lib/content-ms";
import { WorkflowDemo } from "@/components/capability-demos";
import { Mark, RevealText } from "@/components/reveal-text";

/* One tool as a pill, with its logo when the site has one. */
function TechChip({ name }: { name: string }) {
  const key = findTechMentions(name, 1)[0];
  const mark = key ? tech[key] : null;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white py-1 pl-3 pr-3 text-[12px] font-semibold text-ink shadow-xs">
      {mark && <mark.Icon className="h-3.5 w-3.5" style={{ color: mark.color }} aria-hidden="true" />}
      {name}
    </span>
  );
}

export function WhatCanBuild({ copy = content }: { copy?: typeof content | typeof contentMs }) {
  const t = copy;
  const [active, setActive] = useState(0);
  const capabilities = t.build.items;
  const current = capabilities[active] ?? capabilities[0];
  const showcases = t.build.showcases.filter((s) => s.pill === current.pill);
  /* A tab can send the reader to the About page for its tools instead of
     listing them, when the list would be too long to be useful here. */
  const worksWithLink = "worksWithLink" in current ? current.worksWithLink : undefined;
  /* The About page lists the full skills; the Malay site has its own copy. */
  const skillsHref = `${t === contentMs ? "/ms" : ""}/about#about-skills`;

  return (
    <section id="projects" className="border-y border-border bg-white px-6 py-24">
      <div className="mx-auto max-w-shell">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start lg:gap-12">
          <h2 className="font-display text-[30px] font-bold leading-tight text-navy md:text-5xl"><RevealText key={active}>
            {current.headingBefore}
            <Mark>{current.headingHighlight}</Mark>
            {current.headingAfter}
          </RevealText></h2>
          <div className="flex flex-col gap-4 lg:pt-2">
            <p className="text-base leading-relaxed text-body md:text-lg"><RevealText key={active} text>{current.description}</RevealText></p>
            {worksWithLink ? (
              <Link
                href={skillsHref}
                className="group inline-flex w-fit items-center gap-1.5 text-[13.5px] font-semibold text-primary-600 underline decoration-primary-600/40 underline-offset-4 hover:decoration-primary-600"
              >
                {worksWithLink}
                <ArrowRightIcon className="h-3.5 w-3.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ) : (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted"><RevealText text>{t.build.builtWith}</RevealText></span>
                {current.worksWith.map((name) => (
                  <TechChip key={name} name={name} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile: dropdown instead of the pill bar. The label is visible here
            because the bare select on its own reads as a heading, not a control. */}
        <div className="mt-8 sm:hidden">
          <label
            htmlFor="capability-select"
            className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-muted"
          >
            {t.build.selectLabel}
          </label>
          <div className="relative">
            <select
              id="capability-select"
              value={active}
              onChange={(e) => setActive(Number(e.target.value))}
              className="w-full appearance-none rounded-xl border border-border bg-bg py-3 pl-4 pr-10 text-sm font-semibold text-navy shadow-xs focus:border-navy focus:bg-white focus:outline-none"
            >
              {capabilities.map((c, i) => (
                <option key={c.pill} value={i}>
                  {c.pill}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-navy">
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Tablet and up: pill bar */}
        <div className="mt-10 hidden sm:flex flex-wrap gap-2 rounded-full bg-bg p-2">
          {capabilities.map((c, i) => (
            <button
              key={c.pill}
              type="button"
              onClick={() => setActive(i)}
              className={
                i === active
                  ? "rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition"
                  : "rounded-full px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-white"
              }
            >
              {c.pill}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 md:grid-cols-[minmax(0,3fr)_minmax(0,7fr)]">
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted"><RevealText text>{t.build.client}</RevealText></span>
            <p className="rounded-xl bg-amber-50 px-3 py-2.5 text-[12.5px] leading-snug text-ink"><RevealText key={active} text>{current.brief}</RevealText></p>

            <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted">Zakrul</span>
            <div className="rounded-xl bg-bg p-3">
              <div className="flex flex-col gap-2.5">
                {current.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-teal-600" />
                    <span className="flex flex-wrap items-center gap-1.5 text-[12.5px] leading-snug text-ink">
                      <TechMarks text={f} size={13} />
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted">{t.build.examplesLabel}</span>
            <div className="flex flex-col gap-2">
              {current.examples.map((ex) => (
                <p key={ex.who} className="text-[12.5px] leading-snug text-ink">
                  <span className="font-semibold text-navy">{ex.who}: </span>
                  {ex.what}
                </p>
              ))}
            </div>

            {/* Capabilities with a working demo page link to it. */}
            {/* The address carries the marker rather than the sentence: .hl is
                the site's emphasis, and the destination is the part worth
                emphasising. It replaces the brackets it would otherwise sit
                inside — a marker and a pair of parentheses do the same job, and
                two of them is one too many. */}
            {showcases.length === 0 && (
              <span className="mt-1 w-fit rounded-full bg-bg px-2.5 py-1 text-[11px] font-semibold text-muted">{t.build.concept}</span>
            )}
            {showcases.map((showcase) => (
              <Link
                key={showcase.href}
                href={showcase.href}
                className="group mt-1 inline-flex w-fit flex-wrap items-center gap-x-1.5 gap-y-1 text-[12.5px] font-semibold leading-relaxed text-ink"
              >
                {showcase.label}
                <Mark className="group-hover:[--hl-color:var(--color-amber-500)]">
                  {showcase.note}
                </Mark>
                <ArrowRightIcon className="h-3.5 w-3.5 flex-shrink-0 text-muted transition-colors group-hover:text-navy" />
              </Link>
            ))}
          </div>

          <div className="h-[25rem] overflow-hidden rounded-2xl border border-border bg-white shadow-xl md:h-[34rem]">
            <WorkflowDemo steps={current.flow} title={current.pill} label={t.build.flowLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}
