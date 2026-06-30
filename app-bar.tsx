import { Sun } from "lucide-react"

export function AppBar() {
  return (
    <header className="flex items-center justify-between px-5 pt-3 pb-2">
      {/* Leading CircleAvatar */}
      <button
        type="button"
        aria-label="Open profile"
        className="size-11 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/30"
      >
        <img
          src="/recipes/herb-pasta.png"
          alt="Chef profile"
          className="size-full object-cover"
        />
      </button>

      {/* Center serif title */}
      <h1 className="font-serif text-lg font-semibold tracking-[0.22em] text-foreground">
        UR UNDENIABL
      </h1>

      {/* Action: summer icon */}
      <button
        type="button"
        aria-label="Summer mode"
        className="grid size-11 shrink-0 place-items-center rounded-full bg-accent/30 text-accent-foreground"
      >
        <Sun className="size-5" strokeWidth={2.25} />
      </button>
    </header>
  )
}
