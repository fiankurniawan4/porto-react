"use client";

import { useState } from "react";
import { Logo } from "../components/ui/Logo";
import { MobileMenuButton } from "../components/ui/MobileMenuButton";
import { DesktopNav } from "../components/navigation/DesktopNav";
import { MobileNav } from "../components/navigation/MobileNav";
import DarkToggle from "../components/toggle/DarkToggle";
import { useTheme } from "../contexts/ThemeContext";
// ini apus? filenya?
//jangan
const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-200/20 ${
        theme === "dark"
          ? "bg-neutral-700 text-blue-400"
          : "bg-yellow-400 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          <DesktopNav navItems={navItems} />
          <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
          <DarkToggle />
        </div>
      </div>
      <MobileNav navItems={navItems} isOpen={isOpen} onLinkClick={closeMenu} />
    </nav>
  );
};

export default Navbar;
