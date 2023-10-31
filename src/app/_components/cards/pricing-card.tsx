import React from "react"

import { PrincingType } from "@/types/pricing.types"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

const PricingCard = ({ title, price, features }: PrincingType) => {
  return (
    <div className="flex w-[358px] flex-col gap-8 rounded-xl border p-8 shadow">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">{title}</h3>
        <b className="text-4xl font-extrabold">${price}/mo</b>
      </div>
      <div className="flex flex-col gap-2">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-center gap-3">
            <Icons.Check className="h-5 w-5" color="#5ED5A8" />
            <p key={feature.id}>{feature.title}</p>
          </div>
        ))}
      </div>
      <Button>Start With {title}</Button>
    </div>
  )
}

export { PricingCard }
