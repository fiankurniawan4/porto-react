import Link from "next/link";

export const NavLink = ({
  href,
  children,
  onClick,
  mobile = false,
  className = "",
}) => {
  const baseClasses = "font-medium transition-all duration-300 relative group";
  const mobileClasses =
    "block px-4 py-3 hover:text-[#E75460] hover:bg-gradient-to-r hover:from-[#E75460]/5 hover:to-[#FF6B7A]/5 rounded-lg";
  const desktopClasses =
    "px-4 py-2 hover:text-[#E75460] rounded-lg hover:bg-gradient-to-r hover:from-[#E75460]/5 hover:to-[#FF6B7A]/5";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${
        mobile ? mobileClasses : desktopClasses
      } ${className}`}
    >
      {children}
      {!mobile && (
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#E75460] to-[#FF6B7A] group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></span>
      )}
    </Link>
  );
};
