import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="group flex items-center space-x-2">
      <div className="w-10 h-10 bg-gradient-to-br from-[#E75460] to-[#FF6B7A] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
        <span className="text-white font-bold text-lg">F</span>
      </div>
      <div className="hidden sm:block">
        <h1 className="text-xl font-bold bg-gradient-to-r from-[#E75460] to-[#FF6B7A] bg-clip-text text-transparent group-hover:from-[#d63d49] group-hover:to-[#e55a6b] transition-all duration-300">
          Fian Kurniawan
        </h1>
        <p className="text-xs text-gray-500 -mt-1">Backend Developer</p>
      </div>
    </Link>
  );
};
