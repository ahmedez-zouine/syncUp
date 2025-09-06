"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function LocalThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={`w-9 h-9 ${className}`}></div>
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={`rounded-full border-primary/20 hover:bg-primary/10 transition-all duration-300 animate-fade-in ${className}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-primary transition-transform hover:rotate-45 duration-300" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-primary transition-transform hover:rotate-12 duration-300" />
      )}
    </Button>
  )
}