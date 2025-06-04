import { Menu, X } from "lucide-react";

export const MobileMenuButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 rounded-xl text-gray-700 hover:text-[#E75460] hover:bg-gradient-to-r hover:from-[#E75460]/5 hover:to-[#FF6B7A]/5 focus:outline-none focus:ring-2 focus:ring-[#E75460]/20 focus:ring-offset-2 transition-all duration-300 active:scale-95"
      aria-expanded={isOpen}
      aria-label="Toggle navigation menu"
    >
      <div className="relative w-6 h-6">
        <Menu
          className={`absolute inset-0 transition-all duration-300 ${
            isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          className={`absolute inset-0 transition-all duration-300 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
          }`}
        />
      </div>
    </button>
  );
};
