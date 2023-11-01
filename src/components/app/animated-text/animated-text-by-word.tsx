import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedTextProps {
  text: string
}

const AnimatedTextByWord = ({ text }: AnimatedTextProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { amount: 0.5 })

  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.05 }}
        aria-hidden
      >
        {text.split(" ").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={defaultAnimations}
          >
            {char}&nbsp;
          </motion.span>
        ))}
      </motion.span>
    </>
  )
}

export { AnimatedTextByWord }
