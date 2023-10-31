import React from "react"
import { PrincingItems } from "@/datas/princing.data"

import { PricingCard } from "@/app/_components/cards/pricing-card"

const Pricing = () => {
  return (
    <section className="flex w-full max-w-screen-xl flex-col items-center gap-8 py-16">
      <div className="flex flex-col items-center gap-8 text-center">
        <h2 className="max-w-md text-3xl font-bold text-aquamarine sm:max-w-3xl lg:text-5xl">
          Get More Benifits With Subscription
        </h2>
        <p className="font-semibold">
          Simple, transparent pricing that grows with you.
        </p>
      </div>
      <div className="grid grid-cols-1 justify-between gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
        {PrincingItems.map((item) => (
          <PricingCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export { Pricing }
