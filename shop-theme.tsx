import Image from "next/image"
import { Check, Sparkles } from "lucide-react"

const bundles = [
  {
    name: "Single Theme",
    price: "$4",
    period: "one-time",
    description: "Unlock the Citrus Grove look for your kitchen.",
    features: ["Citrus Grove theme", "Seasonal accent colors", "Free updates"],
    featured: false,
  },
  {
    name: "Summer Bundle",
    price: "$9",
    period: "one-time",
    description: "All five summer themes at one sunny price.",
    features: [
      "5 summer themes",
      "Citrus, Coastal & Herb Garden",
      "Custom recipe card layouts",
      "Priority new drops",
    ],
    featured: true,
  },
  {
    name: "All Access",
    price: "$3",
    period: "per month",
    description: "Every theme, every season, always fresh.",
    features: ["Entire theme library", "New themes monthly", "Cancel anytime"],
    featured: false,
  },
]

export function ShopTheme() {
  return (
    <div className="px-5 pt-2">
      {/* Featured banner */}
      <section aria-label="Featured theme" className="relative overflow-hidden rounded-2xl">
        <div className="relative h-52 w-full">
          <Image
            src="/themes/citrus-grove-theme.png"
            alt="Citrus Grove featured theme preview with lemons, oranges, and mint"
            fill
            sizes="(max-width: 768px) 100vw, 28rem"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-accent-foreground">
            <Sparkles className="size-3" strokeWidth={2.5} />
            Featured this week
          </span>
          <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-background text-balance">
            Citrus Grove Theme
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-background/85">
            Sun-ripened palette of sage, cream, and lemon for your summer recipes.
          </p>
        </div>
      </section>

      {/* Bundle / pricing section */}
      <section aria-label="Theme bundles" className="mt-7">
        <h3 className="font-serif text-xl font-bold text-foreground">Choose your bundle</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          Pick a single theme or save with a seasonal bundle.
        </p>

        <div className="mt-4 flex flex-col gap-3.5">
          {bundles.map((bundle) => (
            <article
              key={bundle.name}
              className={[
                "rounded-2xl p-5 transition-colors",
                bundle.featured
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card text-foreground border border-border shadow-sm",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold">{bundle.name}</h4>
                    {bundle.featured && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-accent-foreground">
                        Best value
                      </span>
                    )}
                  </div>
                  <p
                    className={[
                      "mt-1 text-xs leading-relaxed",
                      bundle.featured ? "text-primary-foreground/80" : "text-muted-foreground",
                    ].join(" ")}
                  >
                    {bundle.description}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-2xl font-bold leading-none">{bundle.price}</div>
                  <div
                    className={[
                      "mt-1 text-[11px]",
                      bundle.featured ? "text-primary-foreground/70" : "text-muted-foreground",
                    ].join(" ")}
                  >
                    {bundle.period}
                  </div>
                </div>
              </div>

              <ul className="mt-4 flex flex-col gap-2">
                {bundle.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs font-medium">
                    <span
                      className={[
                        "flex size-4 shrink-0 items-center justify-center rounded-full",
                        bundle.featured ? "bg-accent text-accent-foreground" : "bg-secondary text-primary",
                      ].join(" ")}
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={[
                  "mt-5 w-full rounded-full px-5 py-3 text-sm font-bold transition-transform active:scale-[0.98]",
                  bundle.featured
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "bg-primary text-primary-foreground",
                ].join(" ")}
              >
                {bundle.featured ? "Get the bundle" : "Select"}
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
