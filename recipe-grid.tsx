type Recipe = {
  title: string
  meta: string
  image: string
  match: string
  /** taller card to create the staggered masonry effect */
  tall?: boolean
}

const recipes: Recipe[] = [
  {
    title: "Sunlit Lemon Tart",
    meta: "45 min · Dessert",
    image: "/recipes/lemon-tart.png",
    match: "98% match",
    tall: true,
  },
  {
    title: "Wild Berry Salad",
    meta: "15 min · Fresh",
    image: "/recipes/berry-salad.png",
    match: "Seasonal",
  },
  {
    title: "Citrus Cooler",
    meta: "5 min · Drinks",
    image: "/recipes/citrus-cooler.png",
    match: "In season",
  },
  {
    title: "Tomato Bruschetta",
    meta: "20 min · Starter",
    image: "/recipes/tomato-bruschetta.png",
    match: "92% match",
    tall: true,
  },
  {
    title: "Garden Herb Pasta",
    meta: "30 min · Mains",
    image: "/recipes/herb-pasta.png",
    match: "Seasonal",
  },
  {
    title: "Melon & Mint",
    meta: "10 min · Fresh",
    image: "/recipes/melon-mint.png",
    match: "In season",
  },
]

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="mb-3 break-inside-avoid overflow-hidden rounded-2xl bg-card shadow-sm">
      <div className="relative">
        <img
          src={recipe.image || "/placeholder.svg"}
          alt={recipe.title}
          className={[
            "w-full object-cover",
            recipe.tall ? "h-44" : "h-32",
          ].join(" ")}
        />
        {/* Seasonal Match badge */}
        <span className="absolute right-2 top-2 rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold text-accent-foreground shadow-sm">
          {recipe.match}
        </span>
      </div>
      <div className="px-3 py-2.5">
        <h3 className="text-sm font-semibold leading-snug text-foreground text-pretty">
          {recipe.title}
        </h3>
        <p className="mt-0.5 text-[11px] font-medium text-muted-foreground">
          {recipe.meta}
        </p>
      </div>
    </article>
  )
}

export function RecipeGrid() {
  return (
    <section aria-label="Seasonal recipes" className="px-5 pt-5">
      <div className="flex items-center justify-between pb-3">
        <h2 className="font-serif text-base font-semibold text-foreground">
          Seasonal picks
        </h2>
        <span className="text-xs font-medium text-muted-foreground">Sort</span>
      </div>

      {/* Staggered / masonry 2-column grid */}
      <div className="columns-2 gap-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.title} recipe={recipe} />
        ))}
      </div>
    </section>
  )
}
