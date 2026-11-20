import { HeroCards } from "@/components/hero-cards";
import { ImageWithSkeleton } from "@/components/skeleton";

function CodeLine({
  growAnim,
  caretWindowAnim,
  children,
}: {
  growAnim: string;
  caretWindowAnim: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative overflow-hidden whitespace-nowrap"
      style={{ animation: `${growAnim} 5s steps(1, end) infinite` }}
    >
      <code className="whitespace-pre">{children}</code>
      <span
        className="absolute -right-px top-1/2 h-3 w-[2px] -translate-y-1/2 bg-white"
        style={{
          animation: `${caretWindowAnim} 5s steps(1) infinite, caret-blink 0.9s step-end infinite`,
        }}
      />
    </div>
  );
}

export function LiveCodeDemo() {
  return (
    <div className="flex h-full flex-col gap-2.5 rounded-lg bg-navy p-3 font-mono text-[11px] leading-relaxed">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-teal-400" />
      </div>
      <div className="flex flex-col">
        <CodeLine growAnim="type-line-1" caretWindowAnim="caret-window-1">
          <span className="text-pink-400">const</span>
          <span className="text-sky-300">{" Hero"}</span>
          <span className="text-slate-400">{" = () => {"}</span>
        </CodeLine>
        <CodeLine growAnim="type-line-2" caretWindowAnim="caret-window-2">
          <span className="text-slate-500">{"  "}</span>
          <span className="text-pink-400">return</span>
          <span className="text-slate-400">{" <"}</span>
          <span className="text-teal-300">Site</span>
          <span className="text-amber-300">{" ready"}</span>
          <span className="text-slate-400">{" />;"}</span>
        </CodeLine>
        <CodeLine growAnim="type-line-3" caretWindowAnim="caret-window-3">
          <span className="text-slate-400">{"};"}</span>
        </CodeLine>
      </div>
    </div>
  );
}

const barHeights = [40, 65, 48, 80, 58, 95];

export function LiveChartDemo() {
  return (
    <div className="flex h-full items-end justify-center gap-2 rounded-lg bg-white p-3">
      {barHeights.map((h, i) => (
        <div
          key={i}
          className="w-2.5 origin-bottom animate-[grow-bar_1.8s_ease-in-out_infinite_alternate] rounded-t bg-teal-500/70"
          style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

/* A WhatsApp-style conversation that plays itself: a customer asks for a slot,
   the reply and the booking go out on their own, and a reminder follows. Pure
   CSS (see .wa-* in globals.css), so it stays a server component. */
function Ticks() {
  return (
    <svg viewBox="0 0 16 11" aria-hidden="true" className="wa-ticks h-2 w-2.5 flex-shrink-0">
      <path d="M1 6l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 8l1 1 6-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LiveWhatsAppDemo() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-[#efeae2] text-[#111b21]">
      <div className="flex items-center gap-1.5 bg-[#008069] px-2 py-1.5 text-white">
        <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-white/90 text-[8px] font-bold text-[#008069]">S</span>
        <span className="flex min-w-0 flex-col leading-none">
          <span className="truncate text-[9px] font-semibold">Your Business</span>
          <span className="relative mt-0.5 h-[9px] text-[7.5px] text-white/80">
            <span className="wa-online absolute left-0 top-0">online</span>
            <span className="wa-typing absolute left-0 top-0">typing...</span>
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-end gap-[3px] px-1.5 pb-1 pt-1">
        <div className="wa-b1 w-fit max-w-[80%] rounded-lg rounded-tl-sm bg-white px-1.5 py-1 text-[8.5px] leading-tight shadow-sm">
          Hi, any slot on Saturday 3pm?
          <span className="ml-1.5 align-bottom text-[6.5px] text-[#667781]">3:02 pm</span>
        </div>
        <div className="wa-b2 ml-auto w-fit max-w-[84%] rounded-lg rounded-tr-sm bg-[#d9fdd3] px-1.5 py-1 text-[8.5px] leading-tight shadow-sm">
          Yes, 3pm is free. Booked!
          <span className="ml-1.5 inline-flex items-end gap-0.5 align-bottom text-[6.5px] text-[#667781]">
            3:02 pm <Ticks />
          </span>
        </div>
        <div className="wa-b3 ml-auto w-fit max-w-[84%] rounded-lg rounded-tr-sm bg-[#d9fdd3] px-1.5 py-1 text-[8.5px] leading-tight shadow-sm">
          Reminder: tomorrow, 3pm.
          <span className="ml-1.5 align-bottom text-[6.5px] text-[#667781]">Auto</span>
        </div>
      </div>
    </div>
  );
}

export function HeroDemo({ locale = "en" }: { locale?: "en" | "ms" }) {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-2xl">
        <div className="flex items-center gap-2 border-b border-border bg-bg px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
          <span className="ml-3 flex-1 truncate rounded-md border border-border bg-white px-3 py-1 text-[10px] text-muted">
            sritanduk.com
          </span>
        </div>
        <ImageWithSkeleton
          src="/sritanduk-preview.webp"
          alt="Sri Tanduk website built by Muhamad Zaqrul"
          width={1000}
          height={483}
          priority
          wrapperClassName="aspect-[1000/483] w-full"
          className="h-auto w-full"
        />
      </div>

      <HeroCards locale={locale} />
    </div>
  );
}

export function LiveStatusDemo() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 rounded-lg bg-white p-3">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-600" />
        </span>
        <span className="text-[11px] font-semibold text-ink">All Systems Live</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className={`h-4 w-1 rounded-full ${i === 5 ? "bg-amber-400" : "bg-teal-500/70"}`} />
        ))}
      </div>
    </div>
  );
}
