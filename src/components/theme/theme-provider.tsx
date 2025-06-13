"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      themes={[
        "twitter",
        "oled",
        "shadcn",
        "clean-slate",
        "doom64",
        "nature",
        "mocha-moose",
        "neo-brutalism",
        "notebook",
        "perpetuity",
        "solar-dusk",
        "starry-night",
        "t3-chat",
      ]}
      defaultTheme="twitter"
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
