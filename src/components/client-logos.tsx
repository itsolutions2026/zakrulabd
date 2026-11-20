import { ImageWithSkeleton } from "@/components/skeleton";
import { content } from "@/lib/content";
import { contentMs } from "@/lib/content-ms";
import { ExternalLinkIcon, PlusIcon } from "@/components/icons";
import { Mark, RevealText } from "@/components/reveal-text";

/* Keyed by client name rather than by position: display order is set once in
   content.clients.items, and reordering it can never pair a logo with another
   client's link. Each mark is the client's own, taken from their live site.
   Width and height are the file's real pixels so Next can build the srcset. */
type ClientAsset = {
  url: string;
  logo: string;
  width: number;
  height: number;
  caption?: string;
  /* Marks set as a symbol with typed words beside or under it, rather than a
     picture of the whole logo. */
  lockup?: "medstreamline";
};

const clientAssets: Record<string, ClientAsset> = {
  "Sri Tanduk Enterprise": {
    url: "https://sritanduk.com/",
    logo: "/clients/sri-tanduk.png",
    width: 900,
    height: 848,
  },
  "Haikai Tech": {
    url: "https://haikaitech.my/",
    logo: "/clients/haikai-tech.png",
    width: 1001,
    height: 726,
  },
  "KNZ Engineering": {
    url: "https://knzengineering.com.my/",
    logo: "/clients/knz-engineering.png",
    width: 643,
    height: 283,
  },
  "Law Practice of Junny Erfisyahry": {
    url: "https://lpje.my/",
    logo: "/clients/lpje.png",
    width: 900,
    height: 465,
  },
  /* The marks below are the client's icon on its own, with a small title
     under it, the way the Haikai Tech and law practice marks above are set. */
  Unitee: {
    url: "https://uniteegraphics.com/",
    logo: "/clients/unitee.png",
    width: 300,
    height: 300,
    caption: "Unitee",
  },
  MedStreamline: {
    url: "https://medstreamline.com/",
    logo: "/clients/medstreamline.png",
    width: 178,
    height: 178,
    lockup: "medstreamline",
  },
  "Febest Auto Parts Australia": {
    url: "https://febest.com.au/",
    logo: "/clients/febest.png",
    width: 600,
    height: 111,
    caption: "Auto Parts",
  },
  "IT Toys": {
    url: "https://ittoysline.com/",
    logo: "/clients/it-toys.png",
    width: 300,
    height: 300,
    caption: "IT Toys",
  },
  "Tradies Club": {
    url: "https://tradiesclub.com.au/",
    logo: "/clients/tradies-club.png",
    width: 256,
    height: 138,
    caption: "Tradies Club",
  },
  "Just CBD Store": {
    url: "https://justcbdstore.com/",
    logo: "/clients/just-cbd.png",
    width: 300,
    height: 300,
    caption: "CBD Store",
  },
};

export function ClientLogos({ copy = content }: { copy?: typeof content | typeof contentMs }) {
  const t = copy;
  return (
    <section id="clients" className="bg-navy px-6 py-24">
      <div className="mx-auto max-w-shell">
        <div className="mx-auto mb-12 flex max-w-xl flex-col items-center gap-3 text-center">
          <h2 className="font-display text-[30px] font-bold text-white md:text-5xl"><RevealText>
            {t.clients.headingA}
            <Mark>{t.clients.headingHl}</Mark>
            {t.clients.headingB}
          </RevealText></h2>
          <p className="text-base text-slate-400"><RevealText text>{t.clients.sub}</RevealText></p>
        </div>

        {/* One line, the way a credit line reads: a mark, who it was for, and
            where it lives. A person's portfolio has no wordmark to put in the
            grid below, so it is named here instead. */}
        <a
          href={t.clients.recent.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto mb-12 flex w-fit max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border border-white/10 bg-white/5 py-2 pl-2 pr-5 transition duration-200 hover:border-amber-400/60 hover:bg-white/[0.07]"
        >
          <span
            aria-hidden
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-400 font-display text-[12px] font-extrabold text-navy"
          >
            {t.clients.recent.initials}
          </span>

          <span className="text-[13.5px] text-slate-300">
            {t.clients.recent.lead}{" "}
            {/* The name is underlined and turns amber with the row, so it reads
                as the link it is. It is a span rather than a nested anchor —
                the whole row is already the link, and an anchor inside an
                anchor is invalid markup that browsers unnest for you. */}
            <span className="font-semibold text-white underline decoration-white/30 decoration-2 underline-offset-4 transition-colors group-hover:text-amber-400 group-hover:decoration-amber-400">
              {t.clients.recent.name}
            </span>
          </span>

          <ExternalLinkIcon className="h-3.5 w-3.5 flex-shrink-0 text-slate-400 transition-colors group-hover:text-amber-400" />
        </a>

        {/* The grid is capped rather than spread across the full 1200px shell:
            150px tiles stretched over that width read as stray marks with
            holes between them. Capping it keeps them a group. The tiles and the
            invitation wrap into rows of six on wide screens. */}
        <div className="mx-auto grid max-w-[340px] grid-cols-2 justify-items-center gap-3 sm:max-w-[500px] sm:grid-cols-3 sm:gap-4 lg:max-w-[1000px] lg:grid-cols-6">
          {t.clients.items.map((client) => {
            const asset = clientAssets[client.name];
            /* A client with no logo and no live site to link to (a company
               whose domain no longer serves it, or one with no public site)
               is shown by name, in a tile of the same size, with no link. */
            if (!asset) {
              return (
                <span
                  key={client.name}
                  className="flex aspect-square w-[150px] max-w-full items-center justify-center rounded-2xl border border-white/10 bg-white p-5 text-center font-display text-[15px] font-extrabold leading-tight text-navy"
                >
                  {client.name}
                </span>
              );
            }
            return (
              <a
                key={client.name}
                href={asset.url}
                target="_blank"
                rel="noopener noreferrer"
                title={client.name}
                className={`group flex aspect-square w-[150px] max-w-full items-center justify-center rounded-2xl border border-white/10 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-lg hover:shadow-black/30 ${asset.caption ? "flex-col gap-3" : ""}`}
              >
                {asset.lockup === "medstreamline" && (
                  /* The cross-and-signal symbol as its own image, with the name
                     broken over two lines beside it: "Med" large, "Streamline"
                     small. */
                  <span className="flex items-center gap-2 transition duration-300 lg:grayscale lg:group-hover:grayscale-0">
                    {/* Redrawn from their mark without the signal arcs and dot:
                        only the plus, as three blue brackets and a black one. */}
                    <svg viewBox="0 0 540 540" aria-hidden="true" className="h-9 w-9 flex-shrink-0">
                      <g fill="#1838b0">
                        <rect x="155" y="12" width="223" height="45" />
                        <rect x="155" y="12" width="45" height="183" />
                        <rect x="335" y="12" width="43" height="183" />
                        <rect x="378" y="155" width="142" height="40" />
                        <rect x="475" y="155" width="45" height="225" />
                        <rect x="378" y="335" width="142" height="45" />
                        <rect x="155" y="475" width="223" height="45" />
                        <rect x="155" y="390" width="45" height="130" />
                        <rect x="335" y="335" width="43" height="185" />
                      </g>
                      <g fill="#111111">
                        <rect x="15" y="155" width="125" height="40" />
                        <rect x="15" y="155" width="45" height="225" />
                        <rect x="15" y="335" width="185" height="45" />
                      </g>
                    </svg>
                    <span className="flex flex-col leading-none">
                      <span className="font-display text-[30px] font-extrabold tracking-tight text-[#1838b0]">Med</span>
                      <span className="mt-1 font-display text-[11px] font-semibold tracking-wide text-slate-800">Streamline</span>
                    </span>
                  </span>
                )}
                {!asset.lockup && (
                  <>
                    <ImageWithSkeleton
                      src={asset.logo}
                      alt={client.name}
                      width={asset.width}
                      height={asset.height}
                      wrapperClassName={`flex w-full items-center justify-center ${asset.caption ? "h-[58%]" : "h-full"}`}
                      className={`object-contain transition duration-300 lg:grayscale lg:group-hover:grayscale-0 ${asset.caption ? "rounded-lg" : ""} ${asset.width / asset.height > 3 ? "h-auto w-full" : "max-h-full w-auto"}`}
                    />
                    {asset.caption && (
                      <span className="text-center font-display text-[9.5px] font-bold uppercase leading-tight tracking-[0.16em] text-navy/70">
                        {asset.caption}
                      </span>
                    )}
                  </>
                )}
              </a>
            );
          })}

          {/* Fills the last slot in the row: an open invitation rather than a
              client, so it is dashed, carries no logo, and scrolls to contact. */}
          <a
            href="#contact"
            className="group relative flex aspect-square w-[150px] max-w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border-2 border-dashed border-white/20 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-amber-400/70"
          >
            {/* Amber bloom from the centre, so the tile lights up rather than
                just changing its border colour. */}
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-amber-400)_22%,transparent),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative flex h-9 w-9 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400/25 opacity-0 group-hover:animate-ping group-hover:opacity-100" />
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-slate-300 transition duration-300 group-hover:rotate-90 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-navy">
                <PlusIcon className="h-4 w-4" />
              </span>
            </span>

            <span className="relative font-display text-[13px] font-bold leading-snug text-slate-300 transition-colors duration-300 group-hover:text-white">
              {t.clients.next}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
