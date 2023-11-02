import React from "react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { AnimatedTextByWord } from "@/components/app/animated-text/animated-text-by-word"

const About = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-8 py-16 lg:flex-row">
      <div className="flex flex-col items-center gap-8 lg:items-start">
        <h2 className="max-w-md text-center text-3xl font-bold text-aquamarine lg:text-start lg:text-5xl">
          <AnimatedTextByWord text="Start Trading In Few Steps" />
        </h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button className="hidden lg:block" size="lg">
            Start Trading
          </Button>
        </motion.div>
      </div>
      <div className="relative w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-200 opacity-70 blur-[128px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-yellow-200 opacity-70 blur-[128px] sm:top-0 sm:translate-y-0"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-200 opacity-70 blur-[128px]"
        />
        <div className="relative grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ delay: 0.1 }}
          >
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
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ delay: 0.2 }}
          >
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
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ delay: 0.3 }}
          >
            <Card className="flex h-40 w-full items-center gap-4 px-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-50">
                <Icons.Landmark className="h-8 w-8" color="#d8b4fe" />
              </div>
              <div className="flex max-w-[200px] flex-col gap-2">
                <b>Verify You Bank</b>
                <p className="text-sm">Verify your bank account in easy way.</p>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ delay: 0.4 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { About }
