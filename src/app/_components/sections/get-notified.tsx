import React from "react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedTextByWord } from "@/components/app/animated-text/animated-text-by-word"

const GetNotified = () => {
  return (
    <motion.section
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-16 flex w-full max-w-screen-xl flex-col items-center justify-center gap-8 rounded-xl bg-gray-100 px-4 py-8 dark:bg-gunmetal sm:flex-row lg:px-8"
    >
      <div className="flex w-full flex-col gap-4">
        <h2 className="max-w-md text-xl font-bold text-aquamarine sm:max-w-3xl lg:text-3xl">
          <AnimatedTextByWord text="Get notified when we launch !" />
        </h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="text-dark text-sm dark:text-white"
        >
          Stay up to date with the latest news, announcements, and features.
        </motion.p>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex w-full flex-col gap-4 lg:flex-row"
      >
        <Input className="border-gray-500" placeholder="Email" />
        <Button>Subscribe</Button>
      </motion.div>
    </motion.section>
  )
}

export { GetNotified }
