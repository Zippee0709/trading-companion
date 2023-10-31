export type PricingFeatureType = {
  id: string
  title: string
  isActivated: boolean
}

export type PrincingType = {
  id: string
  title: string
  price: string
  features: PricingFeatureType[]
}
