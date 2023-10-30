"use client"

import React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      {theme === "light" ? (
        <Icons.Moon className="h-4 w-4" />
      ) : (
        <Icons.Sun className="h-4 w-4" />
      )}
    </Button>
  )
}

export { ThemeButton }
