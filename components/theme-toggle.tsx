"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!document.startViewTransition) {
      setTheme(theme === "dark" ? "light" : "dark");
      return;
    }

    document.startViewTransition(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    });
  };

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-border" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full border border-border
        bg-background
        text-foreground
        transition-all duration-300
        hover:scale-110
      "
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}