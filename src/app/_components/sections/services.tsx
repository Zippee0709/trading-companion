import React from "react"
import Image from "next/image"
import { OnboardingItems } from "@/datas/onboarding-data"

import { Button } from "@/components/ui/button"
import { OnboardingCard } from "@/app/_components/cards/onboarding-card"

const Services = () => {
  return (
    <section
      className="relative flex w-full max-w-screen-xl flex-col items-center gap-16 py-16 lg:min-h-[800px] lg:justify-between lg:gap-36"
      style={{
        backgroundImage: "url(/images/stars-texture-transparent.png)",
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    >
      <h2 className="max-w-md text-center text-3xl font-bold text-aquamarine sm:max-w-4xl lg:text-5xl">
        Trading And Investment Solution Built In Modern Plateform
      </h2>
      <div className="relative flex w-full flex-col justify-between gap-16 sm:flex-row">
        {OnboardingItems.map((item) => (
          <OnboardingCard key={item.id} {...item} />
        ))}
      </div>
      <Button className="w-fit lg:hidden" size="lg">
        Try It Now
      </Button>
    </section>
  )
}

export { Services }
