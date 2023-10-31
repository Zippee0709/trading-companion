import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const GetNotified = () => {
  return (
    <section className="mb-16 flex w-full max-w-screen-xl flex-col items-center justify-center gap-8 rounded-xl bg-gunmetal px-4 py-8 sm:flex-row lg:px-8">
      <div className="flex w-full flex-col gap-4">
        <h2 className="max-w-md text-xl font-bold text-aquamarine sm:max-w-3xl lg:text-3xl">
          Get notified when we launch
        </h2>
        <p className="text-sm">
          Stay up to date with the latest news, announcements, and features.
        </p>
      </div>
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <Input className="border-gray-500" placeholder="Email" />
        <Button>Subscribe</Button>
      </div>
    </section>
  )
}

export { GetNotified }
