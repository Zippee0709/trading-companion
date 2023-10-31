import React from "react"
import Image from "next/image"

import { OnboardingType } from "@/types/onboarding.types"

const OnboardingCard = ({ title, description, image }: OnboardingType) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <Image
        src={image}
        alt="Trading Companion Astronaut On Boarding Illustration"
        width={300}
        height={339.13}
      />
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-center text-xl font-semibold">{title}</h3>
        <p className="text-center text-sm text-gray-300">{description}</p>
      </div>
    </div>
  )
}

export { OnboardingCard }
