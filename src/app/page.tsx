import React from "react"

import { About } from "@/app/_components/sections/about"
import { Home } from "@/app/_components/sections/home"
import { Services } from "@/app/_components/sections/services"

export default function Page() {
  return (
    <main className="mx-auto mt-16 flex w-full max-w-screen-xl flex-1 flex-col px-4">
      <Home />
      <About />
      <Services />
    </main>
  )
}
