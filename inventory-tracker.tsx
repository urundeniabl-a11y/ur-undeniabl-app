const inventory = [
  { emoji: "🍋", label: "Lemons", count: "8 left", active: true },
  { emoji: "🍊", label: "Oranges", count: "5 left", active: false },
  { emoji: "🌿", label: "Mint", count: "Fresh", active: true },
  { emoji: "🍓", label: "Berries", count: "12 left", active: false },
  { emoji: "🍅", label: "Tomatoes", count: "6 left", active: false },
]

export function InventoryTracker() {
  return (
    <section aria-label="Grocery inventory tracker" className="pt-2">
      <div className="flex items-center justify-between px-5 pb-3">
        <h2 className="font-serif text-base font-semibold text-foreground">
          In your basket
        </h2>
        <span className="text-xs font-medium text-muted-foreground">View all</span>
      </div>

      {/* Horizontal ListView */}
      <ul className="flex gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {inventory.map((item) => (
          <li key={item.label}>
            <div
              className={[
                "flex w-[78px] flex-col items-center gap-1.5 rounded-2xl bg-card px-3 py-4 text-center shadow-sm transition-colors",
                item.active
                  ? "border-2 border-primary"
                  : "border border-foreground/15 shadow-sm",
              ].join(" ")}
            >
              <span className="text-2xl leading-none" aria-hidden="true">
                {item.emoji}
              </span>
              <span className="text-xs font-semibold text-foreground">
                {item.label}
              </span>
              <span className="text-[10px] font-medium text-muted-foreground">
                {item.count}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
