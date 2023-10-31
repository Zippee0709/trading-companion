import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

import { cn } from "@/lib/utils"
import { Footer } from "@/components/app/footer"
import { Header } from "@/components/app/header"
import { ThemeProvider } from "@/components/app/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trading Companion",
  description:
    "Trading Companion est une application conçue pour vous offrir les outils et les ressources dont vous avez besoin pour prendre des décisions éclairées et réussir sur les marchés financiers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          "min-w-screen min-h-screen bg-background antialiased",
          inter.className
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
