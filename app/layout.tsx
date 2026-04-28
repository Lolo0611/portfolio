import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Footer } from "@/app/_components/Footer"
import { Navigation, ThemeProviders } from "@/app/_components"
import { ReactNode } from "react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portfolio - Laura SCOLAN",
  description: "Développeuse Web Front-end spécialisée en React et Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProviders>
          <main className="bg-white text-slate-900 dark:text-white">
            <Navigation />
            {children}
            <Footer />
          </main>
        </ThemeProviders>
      </body>
    </html>
  )
}
