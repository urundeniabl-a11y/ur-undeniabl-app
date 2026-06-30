import { Gamepad2, Palette, Shirt, ShoppingBag } from "lucide-react"

const colorWheel = ["#F7D060", "#E8743B", "#D24D57", "#98A886", "#6FA8DC"]

const steps = [
  {
    n: 1,
    tag: "Learn",
    title: "Play the mini-game",
    desc: "Your Mini-Me matches fruits to earn their first badge.",
    icon: Gamepad2,
  },
  {
    n: 2,
    tag: "Survey",
    title: "One-tap color pick",
    desc: "What is your favorite fruit color?",
    icon: Palette,
  },
  {
    n: 3,
    tag: "Create",
    title: "Auto-mockup magic",
    desc: "We render a vector tee in your color, stamped with your character.",
    icon: Shirt,
  },
  {
    n: 4,
    tag: "Wear",
    title: "Bring it to life",
    desc: "Order the real shirt from the UR UNDENIABL store.",
    icon: ShoppingBag,
  },
]

export function DesignLoop() {
  return (
    <section className="mt-8 px-5">
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Design-Your-Own
        </p>
        <h2 className="mt-1 font-serif text-2xl font-bold leading-tight text-foreground text-balance">
          From playtime to your closet
        </h2>
      </div>

      <ol className="relative flex flex-col gap-3">
        {steps.map((step) => {
          const Icon = step.icon
          return (
            <li
              key={step.n}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-sm"
            >
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                <Icon className="size-5" strokeWidth={2.25} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  Step {step.n} · {step.tag}
                </p>
                <h3 className="text-sm font-bold text-foreground">{step.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
                {step.n === 2 ? (
                  <div className="mt-2 flex gap-1.5" aria-hidden="true">
                    {colorWheel.map((c) => (
                      <span
                        key={c}
                        className="size-5 rounded-full ring-2 ring-card"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                ) : null}
                {step.n === 3 ? (
                  <div className="mt-2 overflow-hidden rounded-xl border border-border bg-secondary">
                    <img
                      src="/loop/custom-tee.png"
                      alt="Auto-rendered custom t-shirt mockup"
                      className="h-28 w-full object-cover"
                    />
                  </div>
                ) : null}
              </div>
            </li>
          )
        })}
      </ol>

      {/* Step 4 terminal CTA */}
      <button
        type="button"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-transform active:scale-[0.98]"
      >
        🛍️ Purchase Custom Mini-Me Shirt
      </button>
    </section>
  )
}
