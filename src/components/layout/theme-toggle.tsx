"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const themeOrder = ["system", "light", "dark"] as const;

type ThemeName = (typeof themeOrder)[number];

const themeLabels: Record<ThemeName, string> = {
  system: "System theme",
  light: "Light theme",
  dark: "Dark theme",
};

function isThemeName(value: string | undefined): value is ThemeName {
  return themeOrder.includes(value as ThemeName);
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        aria-label="Loading theme selector"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground opacity-60"
      >
        <Monitor aria-hidden="true" className="h-5 w-5" />
      </button>
    );
  }

  const currentTheme: ThemeName = isThemeName(theme)
    ? theme
    : "system";

  const currentIndex = themeOrder.indexOf(currentTheme);
  const nextTheme =
    themeOrder[(currentIndex + 1) % themeOrder.length];

  const Icon =
    currentTheme === "light"
      ? Sun
      : currentTheme === "dark"
        ? Moon
        : Monitor;

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={`${themeLabels[currentTheme]}. Switch to ${themeLabels[nextTheme].toLowerCase()}.`}
      title={`${themeLabels[currentTheme]} — click for ${themeLabels[nextTheme].toLowerCase()}`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:border-primary/50 hover:bg-secondary hover:text-primary"
    >
      <Icon aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}