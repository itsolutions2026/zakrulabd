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

export function LiveChatDemo() {
  return (
    <div className="flex h-full flex-col justify-end gap-1.5 rounded-lg bg-white p-3">
      <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-sm bg-primary-600 px-2.5 py-1.5 text-[10px] text-white">
        Hi, need help getting started?
      </div>
      <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm bg-slate-100 px-3 py-2">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.3s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.15s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted" />
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
