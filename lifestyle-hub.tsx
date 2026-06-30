"use client"

import { useState } from "react"
import { Download, ArrowRight } from "lucide-react"

type Mode = "kitchen" | "closet"

const kitchenCards = [
  {
    img: "/hub/summer-recipe.png",
    eyebrow: "Healthy Summer Recipe",
    title: "Sunlit Citrus & Mint Salad",
    body: "A bright, no-cook bowl of grapefruit, orange and garden mint. Ready in 12 minutes.",
    action: "Read recipe",
    download: false,
  },
  {
    img: "/hub/sewing-pattern.png",
    eyebrow: "DIY Apparel Pattern",
    title: "Botanical Citrus Camp Top",
    body: "Printable sewing pattern with the same lemon-leaf motifs. Download, print, and stitch.",
    action: "Download pattern",
    download: true,
  },
]

const closetCards = [
  {
    img: "/hub/streetwear-tee.png",
    eyebrow: "Signature Streetwear",
    title: "Lemon Buddy Oversized Tee",
    body: "Our vector citrus character, screen-printed on heavyweight organic cotton.",
    action: "Shop the drop",
  },
  {
    img: "/hub/streetwear-hoodie.png",
    eyebrow: "Signature Streetwear",
    title: "Berry Squad Sage Hoodie",
    body: "Cozy sage fleece featuring the strawberry and orange crew graphic.",
    action: "Shop the drop",
  },
]

export function LifestyleHub() {
  const [mode, setMode] = useState<Mode>("kitchen")
  const cards = mode === "kitchen" ? kitchenCards : closetCards

  return (
    <section className="px-5 pt-5">
      {/* Toggle capsule */}
      <div
        role="tablist"
        aria-label="Lifestyle hub"
        className="flex w-full rounded-full border border-border bg-secondary p-1"
      >
        {(
          [
            { id: "kitchen", label: "🍳 The Kitchen" },
            { id: "closet", label: "👗 The Closet" },
          ] as const
        ).map((t) => {
          const active = mode === t.id
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={active}
              type="button"
              onClick={() => setMode(t.id)}
              className={[
                "flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors",
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground",
              ].join(" ")}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      {/* Editorial cards */}
      <div className="mt-5 flex flex-col gap-5">
        {cards.map((card) => (
          <article
            key={card.title}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
              <img
                src={card.img || "/placeholder.svg"}
                alt={card.title}
                className="size-full object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-foreground">
                {card.eyebrow}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-serif text-xl font-bold leading-tight text-foreground text-balance">
                {card.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
              <button
                type="button"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition-transform active:scale-[0.98]"
              >
                {"download" in card && card.download ? (
                  <Download className="size-3.5" strokeWidth={2.5} />
                ) : null}
                {card.action}
                {!("download" in card && card.download) ? (
                  <ArrowRight className="size-3.5" strokeWidth={2.5} />
                ) : null}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
