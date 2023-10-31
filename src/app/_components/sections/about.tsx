import React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"

const About = () => {
  return (
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
  )
}

export { About }
