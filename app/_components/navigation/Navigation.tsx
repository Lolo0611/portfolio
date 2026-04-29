"use client"

import { useEffect, useState } from "react"
import { Button, ButtonSizes, ButtonVariants } from "@/app/_components"
import { Menu, X } from "lucide-react"
import { navItems, sections } from "@/app/_components/navigation/section"
import Link from "next/link"

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }, [])

  return (
    <nav
      className={`bg-light-purple fixed top-0 right-0 left-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between">
          <Link
            href={sections.PROFILE}
            className="from-purple to-medium-purple bg-gradient-to-r bg-clip-text text-4xl font-extrabold text-transparent"
          >
            LS
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) =>
              item.href !== sections.CONTACT ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-purple cursor-pointer rounded-md px-4 py-2 text-lg font-bold transition-colors hover:bg-white"
                >
                  {item.label}
                </Link>
              ) : (
                <Button key={item.href} href={item.href}>
                  {item.label}
                </Button>
              ),
            )}
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
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
