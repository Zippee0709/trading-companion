import React from "react"
import { PrincingItems } from "@/datas/princing.data"
import { motion } from "framer-motion"

import { AnimatedTextByWord } from "@/components/app/animated-text/animated-text-by-word"
import { PricingCard } from "@/app/_components/cards/pricing-card"

const Pricing = () => {
  return (
    <section className="flex w-full max-w-screen-xl flex-col items-center gap-8 py-16">
      <div className="flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-md text-3xl font-bold text-aquamarine sm:max-w-3xl lg:text-5xl">
          <AnimatedTextByWord text="Get More Benifits With Subscription" />
        </h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-semibold"
        >
          Simple, transparent pricing that grows with you.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 justify-between gap-8 sm:grid-cols-2 lg:flex lg:w-full lg:grid-cols-3 lg:gap-16">
        {PrincingItems.map((item) => (
          <PricingCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export { Pricing }
