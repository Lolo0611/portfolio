"use client"

import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react"

export const THEME_STORAGE_KEY = "theme"

export enum ThemeValues {
  LIGHT = "light",
  DARK = "dark",
}

export type ThemeContextType = {
  theme?: ThemeValues
  toggleTheme?: () => void
}

export const ThemeContext = createContext<ThemeContextType>({})

export const ThemeProviders = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(ThemeValues.LIGHT)

  // Charger depuis localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)

    if (!!storedTheme) {
      setTheme(storedTheme as ThemeValues)
      document.documentElement.classList.toggle(
        ThemeValues.DARK,
        storedTheme === ThemeValues.DARK,
      )
    }
  }, [])

  const toggleTheme = () => {
    const newTheme =
      theme === ThemeValues.LIGHT ? ThemeValues.DARK : ThemeValues.LIGHT
    setTheme(newTheme)
    localStorage.setItem(THEME_STORAGE_KEY, newTheme)
    document.documentElement.classList.toggle(
      ThemeValues.DARK,
      newTheme === ThemeValues.DARK,
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
