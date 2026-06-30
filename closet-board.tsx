import Image from "next/image"
import { RefreshCw } from "lucide-react"

const wardrobe = [
  { src: "/closet/sage-tee.png", label: "Sage Graphic Tee" },
  { src: "/closet/cream-romper.png", label: "Cream Romper" },
  { src: "/closet/linen-pants.png", label: "Linen Utility Pants" },
  { src: "/closet/canvas-tote.png", label: "Canvas Tote" },
]

export function ClosetBoard() {
  return (
    <div className="pt-2">
      {/* Live style mirror */}
      <section className="px-5">
        <h3 className="mb-3 font-serif text-lg font-bold tracking-wide text-foreground">
          LIVE STYLE MIRROR
        </h3>

        <div
          className="relative mx-auto h-[26rem] w-full max-w-xs overflow-hidden rounded-[2rem] border border-border bg-foreground/5 shadow-lg"
          role="img"
          aria-label="Live front-facing camera view with a sage graphic tee virtually layered onto the person"
        >
          {/* Simulated camera feed */}
          <Image
            src="/closet/mirror-person.png"
            alt="Live camera feed of a person facing the mirror"
            fill
            priority
            sizes="(max-width: 480px) 100vw, 320px"
            className="object-cover"
          />

          {/* Virtual AR try-on overlay */}
          <Image
            src="/closet/sage-tee.png"
            alt="Sage graphic tee virtually placed on the person"
            width={320}
            height={320}
            className="pointer-events-none absolute left-1/2 top-[42%] w-[78%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-95 drop-shadow-md"
          />

          {/* Top status pill */}
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-foreground/45 px-2.5 py-1 backdrop-blur-sm">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-primary-foreground">
              Virtual Try-On
            </span>
          </div>

          {/* Camera lens actions */}
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-8">
            <button
              type="button"
              aria-label="Snap outfit photo"
              className="flex size-16 items-center justify-center rounded-full border-4 border-primary-foreground/80 bg-primary-foreground/30 backdrop-blur-sm transition-transform active:scale-95"
            >
              <span className="size-11 rounded-full bg-primary-foreground shadow-inner" />
            </button>
            <button
              type="button"
              aria-label="Flip camera"
              className="absolute right-6 flex size-11 items-center justify-center rounded-full bg-foreground/35 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-foreground/50"
            >
              <RefreshCw className="size-5" strokeWidth={2.25} />
            </button>
          </div>
        </div>
      </section>

      {/* Sliding wardrobe drawer */}
      <section className="mt-7">
        <div className="px-5">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold tracking-wide text-foreground">
              MY SUMMER WARDROBE
            </h3>
            <button
              type="button"
              className="shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Filter by: #SummerCasual
            </button>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Tap or drag any item to try it on in the mirror.
          </p>
        </div>

        <div className="mt-3 flex gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {wardrobe.map((item) => (
            <div key={item.label} className="shrink-0">
              <div className="flex size-28 items-center justify-center rounded-2xl border border-foreground/15 bg-card p-3 shadow-sm">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.label}
                  width={120}
                  height={120}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="mt-1.5 w-28 text-center text-xs font-medium leading-tight text-muted-foreground text-pretty">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
