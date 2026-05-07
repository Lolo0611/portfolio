"use client"

import { useState } from "react"
import { Button, ButtonSizes, ButtonVariants } from "@/app/_components"
import { Menu, X } from "lucide-react"
import { navItems, sections } from "@/app/_components/navigation/section"
import Link from "next/link"

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav
      className={`bg-light-purple inset-x-0 top-0 z-50 w-full transition-all duration-300`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          <Link
            href={sections.PROFILE}
            className="from-purple to-medium-purple bg-linear-to-r bg-clip-text text-4xl font-extrabold text-transparent"
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
        <div className="dark:bg-purple border-t bg-white md:hidden">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="hover:bg-light-purple rounded-md py-3 text-sm font-medium text-white transition-colors"
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
