import { Star, Play } from "lucide-react"

const games = [
  {
    img: "/play/fruit-match.png",
    title: "Fruit Matching Challenge",
    desc: "Flip and pair the giggly fruit pals!",
    bg: "#F7D060",
  },
  {
    img: "/play/citrus-sort.png",
    title: "Citrus Sorting Quiz",
    desc: "Sort the citrus into the right baskets.",
    bg: "#98A886",
  },
]

export function PlayArena() {
  return (
    <section className="px-5 pt-5">
      {/* Progress bar */}
      <div className="rounded-2xl border-[3px] border-foreground bg-card p-4 shadow-[4px_4px_0_0_var(--foreground)]">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg border-[3px] border-foreground bg-accent text-accent-foreground">
              <Star className="size-4" strokeWidth={2.5} fill="currentColor" />
            </span>
            <p className="text-sm font-extrabold text-foreground">
              Level 3 Little Chef
            </p>
          </div>
          <span className="text-sm font-extrabold text-foreground">75%</span>
        </div>
        <div className="mt-3 h-6 w-full overflow-hidden rounded-full border-[3px] border-foreground bg-secondary">
          <div
            className="flex h-full items-center justify-end rounded-r-full bg-accent pr-2 text-[10px] font-extrabold text-accent-foreground"
            style={{ width: "75%" }}
          >
            75%
          </div>
        </div>
        <p className="mt-2 text-xs font-bold text-muted-foreground">
          75% to your next badge — keep going!
        </p>
      </div>

      {/* Game cards grid */}
      <div className="mt-5 grid grid-cols-2 gap-4">
        {games.map((game) => (
          <button
            key={game.title}
            type="button"
            className="flex flex-col overflow-hidden rounded-2xl border-[3px] border-foreground bg-card text-left shadow-[4px_4px_0_0_var(--foreground)] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--foreground)]"
          >
            <div
              className="flex aspect-square items-center justify-center border-b-[3px] border-foreground"
              style={{ backgroundColor: game.bg }}
            >
              <img
                src={game.img || "/placeholder.svg"}
                alt={game.title}
                className="size-full object-contain p-2"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-extrabold leading-tight text-foreground text-balance">
                {game.title}
              </h3>
              <p className="mt-1 text-xs font-semibold leading-snug text-muted-foreground">
                {game.desc}
              </p>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full border-[3px] border-foreground bg-primary px-3 py-1 text-[11px] font-extrabold text-primary-foreground">
                <Play className="size-3" strokeWidth={3} fill="currentColor" />
                Play
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
