"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown, Sparkles } from "lucide-react"

const items = [
  {
    img: "/survey/lemon-tote.png",
    name: "Lemon Grove Tote",
    sub: "Canvas everyday carryall",
  },
  {
    img: "/hub/streetwear-tee.png",
    name: "Lemon Buddy Tee",
    sub: "Oversized organic cotton",
  },
  {
    img: "/hub/streetwear-hoodie.png",
    name: "Berry Squad Hoodie",
    sub: "Sage fleece pullover",
  },
]

export function SurveyEngine() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState<"left" | "right" | null>(null)
  const [likes, setLikes] = useState(0)

  const done = index >= items.length
  const current = items[index % items.length]

  function vote(direction: "left" | "right") {
    if (dir) return
    setDir(direction)
    if (direction === "right") setLikes((n) => n + 1)
    setTimeout(() => {
      setIndex((i) => i + 1)
      setDir(null)
    }, 320)
  }

  function reset() {
    setIndex(0)
    setLikes(0)
  }

  return (
    <section className="px-5 pt-5">
      <div className="mb-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Style Survey
        </p>
        <h2 className="mt-1 font-serif text-2xl font-bold leading-tight text-foreground text-balance">
          Rate this style for your summer wardrobe!
        </h2>
      </div>

      {done ? (
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
          <Sparkles className="mx-auto size-8 text-accent" strokeWidth={2} />
          <p className="mt-3 text-lg font-bold text-foreground">
            You loved {likes} of {items.length} looks!
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            We&apos;ll curate your next summer drop from these picks.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform active:scale-[0.98]"
          >
            Rate again
          </button>
        </div>
      ) : (
        <>
          {/* Swipeable card */}
          <div className="relative mx-auto h-[340px] w-full">
            {/* peek of next card */}
            {index + 1 < items.length ? (
              <div className="absolute inset-x-4 top-4 bottom-0 rounded-3xl border border-border bg-secondary" />
            ) : null}

            <article
              className={[
                "absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-all duration-300 ease-out",
                dir === "right"
                  ? "translate-x-[120%] rotate-12 opacity-0"
                  : dir === "left"
                    ? "-translate-x-[120%] -rotate-12 opacity-0"
                    : "translate-x-0 rotate-0 opacity-100",
              ].join(" ")}
            >
              <div className="relative flex-1 bg-secondary">
                <img
                  src={current.img || "/placeholder.svg"}
                  alt={current.name}
                  className="size-full object-cover"
                />
                {/* live decision badges */}
                <span
                  className={[
                    "absolute left-4 top-4 rounded-xl border-2 border-primary px-3 py-1 text-sm font-extrabold uppercase text-primary transition-opacity",
                    dir === "right" ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                >
                  Love it
                </span>
                <span
                  className={[
                    "absolute right-4 top-4 rounded-xl border-2 px-3 py-1 text-sm font-extrabold uppercase transition-opacity",
                    dir === "left" ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  style={{ color: "#D24D57", borderColor: "#D24D57" }}
                >
                  Nope
                </span>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {current.name}
                </h3>
                <p className="text-sm text-muted-foreground">{current.sub}</p>
              </div>
            </article>
          </div>

          {/* Swipe action buttons */}
          <div className="mt-6 flex items-center justify-center gap-8">
            <button
              type="button"
              aria-label="Swipe left — not for me"
              onClick={() => vote("left")}
              className="grid size-16 place-items-center rounded-full text-white shadow-lg transition-transform active:scale-90"
              style={{ backgroundColor: "#D24D57" }}
            >
              <ThumbsDown className="size-7" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              aria-label="Swipe right — love it"
              onClick={() => vote("right")}
              className="grid size-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform active:scale-90"
            >
              <ThumbsUp className="size-7" strokeWidth={2.5} />
            </button>
          </div>
        </>
      )}
    </section>
  )
}
