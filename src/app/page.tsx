import React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"

export default function Home() {
  return (
    <main className="mx-auto mt-16 flex w-full max-w-screen-xl flex-1 flex-col px-4">
      <section className="flex w-full max-w-screen-xl flex-col items-center gap-16 py-16 lg:min-h-[800px] lg:flex-row lg:justify-between lg:gap-36">
        <div className="order-1 flex max-w-2xl flex-col items-center justify-center gap-6 lg:-order-1 lg:items-start">
          <h2 className="text-center text-3xl font-bold text-aquamarine lg:text-start lg:text-5xl">
            Join the world&apos;s largest crypto exchange with Trading Companion
          </h2>
          <p className="text-center font-semibold lg:text-start lg:text-2xl">
            An application designed to give you the tools and resources you need
            to make informed decisions and succeed in the financial markets.
          </p>
          <Button className="w-fit" size="lg">
            Get Started Now
          </Button>
        </div>
        <div className="relative h-72 w-72 lg:h-[400px] lg:w-[400px]">
          <div className="landing-radial-gradient flex h-full w-full items-center justify-center rounded-full">
            <div className="landing-linear-gradient relative h-[85%] w-[85%] rounded-full">
              <Image
                className="rounded-full mix-blend-color-dodge"
                src="/images/stars-texture.png"
                alt="Trading Companion Stars Texture"
                fill
                style={{ objectFit: "cover", background: "lightgray 50%" }}
              />
            </div>
          </div>
          <Image
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            src="/images/rocket.png"
            alt="Trading Companion Rocket Logo"
            width={310.94}
            height={286.26}
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-between gap-8 py-16 lg:flex-row">
        <div className="flex flex-col items-center gap-8 lg:items-start">
          <h2 className="max-w-md text-center text-3xl font-bold text-aquamarine lg:text-start lg:text-5xl">
            Start Trading In Few Steps
          </h2>
          <Button className="hidden w-fit lg:block" size="lg">
            Start Trading
          </Button>
        </div>
        <div className="relative w-full max-w-3xl">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-200 opacity-70 blur-[128px]"></div>
          <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-yellow-200 opacity-70 blur-[128px] sm:top-0 sm:translate-y-0"></div>
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-200 opacity-70 blur-[128px]"></div>
          <div className="relative grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
            <Card className="flex h-40 w-full items-center gap-4 px-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <Icons.User className="h-8 w-8" color="#93c5fd" />
              </div>
              <div className="flex max-w-[200px] flex-col gap-2">
                <b>Create Account</b>
                <p className="text-sm">
                  Sign up with you email and mobile in just 5 minutes.
                </p>
              </div>
            </Card>
            <Card className="flex h-40 w-full items-center gap-4 px-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                <Icons.Wallet className="h-8 w-8" color="#fca5a5" />
              </div>
              <div className="flex max-w-[200px] flex-col gap-2">
                <b>Add Fund In Wallet</b>
                <p className="text-sm">
                  Quickly add money to your investment wallet.
                </p>
              </div>
            </Card>
            <Card className="flex h-40 w-full items-center gap-4 px-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-50">
                <Icons.Landmark className="h-8 w-8" color="#d8b4fe" />
              </div>
              <div className="flex max-w-[200px] flex-col gap-2">
                <b>Verify You Bank</b>
                <p className="text-sm">Verify your bank account in easy way.</p>
              </div>
            </Card>
            <Card className="flex h-40 w-full items-center gap-4 px-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50">
                <Icons.CandlestickChart className="h-8 w-8" color="#fdba74" />
              </div>
              <div className="flex max-w-[200px] flex-col gap-2">
                <b>Start Trading Instantly</b>
                <p className="text-sm">
                  Buy & Sell a variety of top coins at best price.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="h-screen"></section>
    </main>
  )
}
