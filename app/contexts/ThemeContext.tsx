"use client";

import { createContext, useEffect, useState, useContext } from "react";
import type {
  ThemeContextType,
  ThemeProviderProps,
} from "../common/types/theme";

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children, value }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const storedTheme = value || localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [value]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
