import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { OnboardingType } from "@/types/onboarding.types"
import { AnimatedTextByWord } from "@/components/app/animated-text/animated-text-by-word"

const OnboardingCard = ({ id, title, description, image }: OnboardingType) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: id * 0.3 }}
      className="flex flex-col items-center gap-8"
    >
      <Image
        src={image}
        alt="Trading Companion Astronaut On Boarding Illustration"
        width={300}
        height={339.13}
      />
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-center text-xl font-semibold">
          <AnimatedTextByWord text={title} />
        </h3>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-gray-500 dark:text-gray-300"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}

export { OnboardingCard }
