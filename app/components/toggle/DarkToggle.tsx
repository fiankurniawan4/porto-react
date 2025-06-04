"use client";

import { useTheme } from "../../contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function DarkToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleToggleWithTransition = () => {
    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }

    document.startViewTransition(() => {
      toggleTheme();
    });
  };

  return (
    <button
      onClick={handleToggleWithTransition}
      aria-label="Toggle Theme"
      className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:cursor-pointer transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
}
