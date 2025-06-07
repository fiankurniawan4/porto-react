"use client";

import Navbar from "./layout/Navbar";
import Image from "next/image";
import About from "./components/about/About";
import { useTheme } from "./contexts/ThemeContext";
import { Contact } from "./components/contact/Contact";
import { Project } from "./components/project/Project";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Navbar />
      <div className="flex flex-col md:flex-row md:pl-4 items-center justify-center h-screen md:h-auto gap-8">
        {/* Text */}
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-xl text-[#FF6B7A] font-bold">Welcome!</h1>
          <h1
            className={`text-4xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-700"
            }`}
          >
            I am Web Developer!
          </h1>
          <p
            className={`text-md font-semibold ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Hello my name is Fian Kurniawan, I am Backend Developer
          </p>
        </div>
        <div className="hidden md:block pl-8">
          <Image
            src="/image/fian_nobg.png"
            loading="lazy"
            width={700}
            height={700}
            alt="Profile"
            className="mt-4"
          />
        </div>
      </div>
      {/* About Me */}
      <About />
      {/* Projects  */}
      <Project />
      {/* Contact Me */}
      <Contact />
    </div>
  );
}
