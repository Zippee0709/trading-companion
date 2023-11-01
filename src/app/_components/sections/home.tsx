"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { AnimatedRocket } from "@/components/app/animated-icon/animated-rocket"
import { AnimatedTextByWord } from "@/components/app/animated-text/animated-text-by-word"

const Home = () => {
  return (
    <section className="flex w-full max-w-screen-xl flex-col items-center gap-16 py-16 lg:min-h-[calc(100vh-64px)] lg:flex-row lg:justify-between lg:gap-36">
      <div className="order-1 flex max-w-2xl flex-col items-center justify-center gap-6 lg:-order-1 lg:items-start">
        <h2 className="text-center text-3xl font-bold text-aquamarine lg:text-start lg:text-5xl">
          <AnimatedTextByWord text="Join the world's largest crypto exchange with Trading Companion." />
        </h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="h-fit w-fit text-center font-semibold lg:text-start lg:text-2xl"
        >
          An application designed to give you the tools and resources you need
          to make informed decisions and succeed in the financial markets.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          <Button size="lg">Get Started Now</Button>
        </motion.div>
      </div>
      <div className="relative h-72 w-72 lg:h-[400px] lg:w-[400px]">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="landing-radial-gradient flex h-full w-full items-center justify-center rounded-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ rotate: 360, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="landing-linear-gradient relative h-[85%] w-[85%] rounded-full"
          >
            <Image
              className="rounded-full mix-blend-color-dodge"
              src="/images/stars-texture.png"
              alt="Trading Companion Stars Texture"
              fill
              sizes="100%"
              style={{ objectFit: "cover", background: "lightgray 50%" }}
            />
          </motion.div>
        </motion.div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90">
          <AnimatedRocket />
        </div>
      </div>
    </section>
  )
}

export { Home }
