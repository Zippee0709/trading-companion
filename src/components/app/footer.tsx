import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Icons } from "@/components/ui/icons"

const Footer = () => {
  return (
    <footer className="flex flex-col border-t px-4 py-8">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-start gap-8 lg:flex-row lg:justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/trading-companion-logo.png"
            alt="Trading Companion Logo"
            width={32}
            height={32}
          />
          <span className="text-2xl font-semibold text-aquamarine sm:block">
            Trading Companion
          </span>
        </Link>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
          <div className="flex flex-col gap-6">
            <p className="font-semibold uppercase">Resources</p>
            <ul className="flex flex-col gap-4 text-sm text-gray-500 dark:text-gray-300">
              <li>
                <Link href="/" className="underline-offset-4 hover:underline">
                  Trading
                </Link>
              </li>
              <li>
                <Link href="/" className="underline-offset-4 hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-semibold uppercase">Follow us</p>
            <ul className="flex flex-col gap-4 text-sm text-gray-500 dark:text-gray-300">
              <li>
                <Link href="/" className="underline-offset-4 hover:underline">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="/" className="underline-offset-4 hover:underline">
                  Discord
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-semibold uppercase">Legal</p>
            <ul className="flex flex-col gap-4 text-sm text-gray-500 dark:text-gray-300">
              <li>
                <Link href="/" className="underline-offset-4 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="underline-offset-4 hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mx-auto my-6 w-full max-w-screen-xl border-gray-100 dark:border-gray-700 lg:my-8" />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-4 lg:flex-row lg:justify-between">
        <p className="text-sm font-medium">
          © Trading Companion 2023 - All rights Reserved.
        </p>
        <ul className="flex gap-5">
          <li>
            <Link href="/">
              <Icons.Github className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Icons.Figma className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export { Footer }
