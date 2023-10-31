import { PrincingType } from "@/types/pricing.types"

export const PrincingItems: PrincingType[] = [
  {
    id: "1",
    title: "Free Plan",
    price: "0",
    features: [
      {
        id: "FF1",
        title: "Access to all markets",
        isActivated: true,
      },
      {
        id: "FF2",
        title: "Basic analytics",
        isActivated: true,
      },
      {
        id: "FF3",
        title: "Up to 1 demo account",
        isActivated: true,
      },
      {
        id: "FF4",
        title: "Up to 3 AI signals & analysis",
        isActivated: true,
      },
      {
        id: "FF5",
        title: "Basic chat & email support",
        isActivated: true,
      },
    ],
  },
  {
    id: "2",
    title: "Basic Plan",
    price: "10",
    features: [
      {
        id: "BF1",
        title: "Access to all free features",
        isActivated: true,
      },
      {
        id: "BF2",
        title: "Advanced analytics",
        isActivated: true,
      },
      {
        id: "BF3",
        title: "Up to 5 demo account",
        isActivated: true,
      },
      {
        id: "BF4",
        title: "Up to 20 AI signals",
        isActivated: true,
      },
      {
        id: "BF5",
        title: "Priority chat & email support",
        isActivated: true,
      },
    ],
  },
  {
    id: "3",
    title: "Premium Plan",
    price: "20",
    features: [
      {
        id: "PF1",
        title: "Access to all features",
        isActivated: true,
      },
      {
        id: "PF2",
        title: "Premium analytics",
        isActivated: true,
      },
      {
        id: "PF3",
        title: "Unlimited demo account",
        isActivated: true,
      },
      {
        id: "PF4",
        title: "Unlimited AI signals & analysis",
        isActivated: true,
      },
      {
        id: "PF5",
        title: "Personalised support",
        isActivated: true,
      },
    ],
  },
]
