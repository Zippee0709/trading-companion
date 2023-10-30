import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Icons } from "@/components/ui/icons"

const Footer = () => {
  return (
    <footer className="flex flex-col px-4 py-8 border-t">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between items-start max-w-screen-xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/trading-companion-logo.png"
            alt="Trading Companion Logo"
            width={32}
            height={32}
          />
          <span className="font-semibold text-2xl text-aquamarine sm:block">
            Trading Companion
          </span>
        </Link>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div className="flex flex-col gap-6">
            <p className="font-semibold uppercase">Resources</p>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
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
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
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
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
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
      <hr className="my-6 border-gray-100 dark:border-gray-700 lg:my-8 max-w-screen-xl mx-auto w-full" />
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between max-w-screen-xl mx-auto w-full">
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
