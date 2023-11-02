import React from "react"
import { motion } from "framer-motion"

import { PrincingType } from "@/types/pricing.types"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { AnimatedTextByWord } from "@/components/app/animated-text/animated-text-by-word"

const PricingCard = ({ title, price, features }: PrincingType) => {
  return (
    <div className="group relative flex w-[358px] flex-col gap-8 rounded-xl border p-8 shadow transition-all duration-300 hover:border-transparent hover:shadow-none">
      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-aquamarine transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-aquamarine transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-aquamarine transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-aquamarine transition-all delay-300 duration-100 group-hover:h-full" />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">
          <AnimatedTextByWord text={title} />
        </h3>
        <b className="text-4xl font-extrabold">
          <AnimatedTextByWord text={`$${price}/mo`} />
        </b>
      </div>
      <div className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <motion.div
            initial={{ x: 50, opacity: 0, filter: "blur(20px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: (index + 1) * 0.1 }}
            key={feature.id}
            className="flex items-center gap-3"
          >
            <Icons.Check className="h-5 w-5" color="#5ED5A8" />
            <p key={feature.id}>{feature.title}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button className="w-full group-hover:bg-aquamarine">
          Start With {title}
        </Button>
      </motion.div>
    </div>
  )
}

export { PricingCard }
