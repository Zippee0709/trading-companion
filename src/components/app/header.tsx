"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

import { ThemeButton } from "./theme-button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current &&
        e.target instanceof Node &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="fixed left-1/2 z-10 w-full -translate-x-1/2 bg-background">
      <nav className="mx-auto flex h-16 max-w-screen-xl border-b flex-col gap-4 px-4 py-2.5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-h-full items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/trading-companion-logo.png"
              alt="Trading Companion Logo"
              width={32}
              height={32}
            />
            <span className="hidden font-semibold text-2xl text-aquamarine sm:block">
              Trading Companion
            </span>
          </Link>
          <Button
            ref={buttonRef}
            className="lg:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icons.Menu className="h-6 w-6" />
          </Button>
        </div>
        <ul
          className={cn(
            "absolute left-0 top-16 flex w-full flex-col gap-4 bg-background p-4 lg:py-0 text-sm transition-all duration-300 ease-in lg:static lg:w-auto lg:flex-row lg:items-center lg:gap-6 lg:px-0 lg:pb-0 lg:opacity-100 border-b lg:border-none",
            isMenuOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0"
          )}
        >
          <li>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link", className: "p-0" })
              )}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link", className: "p-0" })
              )}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link", className: "p-0" })
              )}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link", className: "p-0" })
              )}
            >
              Contact
            </Link>
          </li>
          <li className="h-[1px] w-full bg-gray-200 dark:bg-gray-800 lg:h-6 lg:w-[1px]" />
          <li className="flex items-center justify-between">
            <p className="text-sm font-medium text-primary lg:hidden">
              Change theme
            </p>
            <ThemeButton />
          </li>
          <li>
            <Button className="w-full lg:w-fit">Get Started</Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
