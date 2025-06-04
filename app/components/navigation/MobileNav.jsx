import { NavLink } from "../ui/NavLink";

export const MobileNav = ({ navItems, isOpen, onLinkClick }) => {
  return (
    <div
      className={`md:hidden transition-all duration-500 ease-out ${
        isOpen
          ? "max-h-80 opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
      }`}
    >
      <div className="px-4 py-6 space-y-2 backdrop-blur-xl border-t border-gray-200/50">
        {navItems.map((item, index) => (
          <div
            key={item.href}
            className={`transition-all duration-300 ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}
          >
            <NavLink href={item.href} onClick={onLinkClick} mobile={true}>
              {item.label}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
