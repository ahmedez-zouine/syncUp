"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only showing the button after component has mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9"></div>
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full border-primary/20 hover:bg-primary/10 transition-all duration-300 animate-fade-in"
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