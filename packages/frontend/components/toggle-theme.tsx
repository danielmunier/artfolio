"use client"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export const ToggleTheme = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Avoid hydration mismatch
    return (
      <button
        type="button"
        aria-label="Alternar tema"
        className="rounded-full p-2 transition-colors bg-muted hover:bg-primary/10 text-primary cursor-pointer"
        disabled
      >
        <Sun className="h-5 w-5" />
      </button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      aria-label={`Alternar para o tema ${isDark ? "claro" : "escuro"}`}
      className="rounded-full p-2 transition-colors bg-muted hover:bg-primary/10 text-primary cursor-pointer"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Alternar para o tema claro" : "Alternar para o tema escuro"}
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
}
