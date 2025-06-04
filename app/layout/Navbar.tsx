"use client";

import { useState } from "react";
import { Logo } from "../components/ui/Logo";
import { MobileMenuButton } from "../components/ui/MobileMenuButton";
import { DesktopNav } from "../components/navigation/DesktopNav";
import { MobileNav } from "../components/navigation/MobileNav";
import DarkToggle from "../components/toggle/DarkToggle";
import { useTheme } from "../contexts/ThemeContext";
//yang navbar tsx di components apus aja
// kalau ini utama

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 ${
        theme === "dark" ? "bg-neutral-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          <DesktopNav navItems={navItems} />
          <DarkToggle />
          <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </div>
      <MobileNav navItems={navItems} isOpen={isOpen} onLinkClick={closeMenu} />
    </nav>
  );
};

export default Navbar;
