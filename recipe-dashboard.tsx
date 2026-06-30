"use client"

import { useState } from "react"
import { LayoutGrid, Gamepad2, Heart } from "lucide-react"
import { AppBar } from "./app-bar"
import { LifestyleHub } from "./lifestyle-hub"
import { DesignLoop } from "./design-loop"
import { PlayArena } from "./play-arena"
import { SurveyEngine } from "./survey-engine"

const tabs = [
  { id: "hub", label: "Hub", icon: LayoutGrid },
  { id: "play", label: "Play & Learn", icon: Gamepad2 },
  { id: "value", label: "Style Survey", icon: Heart },
] as const

export function RecipeDashboard() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("hub")

  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col bg-background">
      <div className="flex-1 overflow-y-auto pb-12">
        <AppBar />

        {/* Upgraded global tabs */}
        <nav aria-label="Sections" className="flex gap-2.5 px-5 pt-2 pb-1">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={isActive}
                className={[
                  "flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-secondary text-foreground shadow-sm",
                ].join(" ")}
              >
                <Icon className="size-3.5" strokeWidth={2.25} />
                {tab.label}
              </button>
            )
          })}
        </nav>

        {activeTab === "hub" && (
          <>
            <LifestyleHub />
            <DesignLoop />
          </>
        )}

        {activeTab === "play" && <PlayArena />}

        {activeTab === "value" && <SurveyEngine />}
      </div>
    </div>
  )
}
