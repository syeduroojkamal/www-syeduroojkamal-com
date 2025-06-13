"use client";

import * as React from "react";
import { Check, Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const themes = [
  { label: "Twitter", value: "twitter" },
  { label: "OLED", value: "oled" },
  { label: "shadcn", value: "shadcn" },
  { label: "Clean Slate", value: "clean-slate" },
  { label: "Doom 64", value: "doom64" },
  { label: "Nature", value: "nature" },
  { label: "Mocha Moose", value: "mocha-moose" },
  { label: "Neo Brutalism", value: "neo-brutalism" },
  { label: "Notebook", value: "notebook" },
  { label: "Perpetuity", value: "perpetuity" },
  { label: "Solar Dusk", value: "solar-dusk" },
  { label: "Starry Night", value: "starry-night" },
  { label: "T3 Chat", value: "t3-chat" },
];

export default function ThemeDropdown() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Button variant={"ghost"} style={{ visibility: "hidden" }}>
        Theme
        <Palette />
      </Button>
    ); // Prevent hydration mismatch

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"}>
          <Palette />
          Theme
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-background border rounded shadow-md mt-2"
      >
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onSelect={() => setTheme(theme.value)}
          >
            {resolvedTheme === theme.value ? (
              <Check className="h-4 w-4 text-primary" />
            ) : null}
            {theme.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
