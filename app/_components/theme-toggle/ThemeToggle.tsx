import { useContext } from "react"
import { ThemeContext, ThemeValues } from "@/app/_components"

export const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className="rounded bg-gray-200 px-4 py-2 dark:bg-gray-800 dark:text-white"
    >
      {theme === ThemeValues.DARK ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}
