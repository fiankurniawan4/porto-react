import { NavLink } from "../ui/NavLink";

export const DesktopNav = ({ navItems }) => {
  return (
    <div className="hidden md:flex items-center space-x-2">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};
