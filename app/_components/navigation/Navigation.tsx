"use client"

import { useEffect, useState } from "react"
import { Button, ButtonSizes, ButtonVariants } from "@/app/_components"
import { Menu, X } from "lucide-react"

export const sections = {
  PROFILE: "#profile",
  PORTFOLIO: "#portfolio",
  EXPERIENCE: "#experience",
  TECH_STACK: "#tech-stack",
  CONTACT: "#contact",
}

const navItems = [
  { label: "Profil", href: "#profile" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience & Formation", href: "#experience" },
  { label: "Stack technique", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
]

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent shadow-md backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-24 items-center justify-between">
          <a
            href="#profile"
            onClick={(e) => handleNavClick(e, "#profile")}
            className="from-purple to-medium-purple bg-gradient-to-r bg-clip-text text-4xl font-extrabold text-transparent"
          >
            LS
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-purple hover:bg-light-purple rounded-md px-4 py-2 text-lg font-bold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button
            variant={ButtonVariants.PRIMARY}
            size={ButtonSizes.SMALL}
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t bg-white md:hidden dark:border-slate-800 dark:bg-slate-900">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="rounded-md px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
