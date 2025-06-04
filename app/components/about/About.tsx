import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Code,
  Database,
  Server,
  Globe,
  GitBranch,
  Layers,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "../../contexts/ThemeContext";
const AboutSection = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const { theme } = useTheme();

  const techStack = {
    backend: [
      { name: "Node.js", icon: Server, color: "#68A063" },
      { name: "Express.js", icon: Layers, color: "#000000" },
      { name: "Laravel", icon: Code, color: "#FF2D20" },
      { name: "PHP", icon: Code, color: "#777BB4" },
    ],
    database: [
      { name: "MySQL", icon: Database, color: "#4479A1" },
      { name: "PostgreSQL", icon: Database, color: "#336791" },
    ],
    tools: [
      { name: "TypeScript", icon: Code, color: "#3178C6" },
      { name: "Git", icon: GitBranch, color: "#F05032" },
      { name: "API", icon: Globe, color: "#FF6B7A" },
    ],
  };

  const allSkills = [
    ...techStack.backend,
    ...techStack.database,
    ...techStack.tools,
  ];
  const displayedSkills = showAllSkills ? allSkills : allSkills.slice(0, 6);

  const achievements = [
    { number: "20+", label: "Projects Completed" },
    { number: "1+", label: "Years Experience" },
    { number: "5+", label: "Technologies Mastered" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#FF6B7A] rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#FF6B7A] rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-[#FF6B7A] rotate-45"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF6B7A]/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-[#FF6B7A] rounded-full animate-pulse"></div>
            <span className="text-[#FF6B7A] font-semibold text-sm uppercase tracking-wider">
              About Me
            </span>
          </div>
          <h3
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Get to <span className="text-[#FF6B7A]">know me</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B7A] to-[#ff5060] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl transform group-hover:scale-105 transition-all duration-500">
              {/* Placeholder for actual image */}
              <div className="w-full h-[400px] bg-gradient-to-br from-[#FF6B7A]/20 to-[#ff5060]/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <Image
                      src="/image/fian_nobg.png"
                      alt="Fian Kurniawan"
                      width={300}
                      height={300}
                    />
                    Fian Kurniawan
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF6B7A] rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#ff5060] rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h4
                className={`text-3xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                Backend Developer
              </h4>
            </div>
            <div className="space-y-4">
              <p
                className={`text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Hello! I&#39;m Fian Kurniawan, a passionate backend developer
                with expertise in building scalable, secure, and efficient
                server-side applications. I specialize in creating robust APIs
                and database architectures that power modern web applications.
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Why do I like Backend? Because when Covid-19 I created a server
                with my friend using VPS for Minecraft server where, my friend
                created the server and I developed the backend like features
                finance, shop, minigames, etc.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`text-2xl md:text-3xl font-bold text-[#FF6B7A] mb-1`}
                  >
                    {achievement.number}
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div>
              <h5
                className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                <Code className="w-5 h-5 text-[#FF6B7A]" />
                Technical Expertise
              </h5>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {displayedSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className={`group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                        theme === "dark"
                          ? "bg-gray-800/50 hover:bg-gray-700/70 text-gray-200"
                          : "bg-gray-50 hover:bg-white shadow-sm hover:shadow-md text-gray-700"
                      }`}
                      style={{
                        borderLeft: `3px solid ${skill.color}`,
                      }}
                    >
                      <IconComponent
                        className="w-4 h-4 group-hover:scale-110 transition-transform"
                        style={{ color: skill.color }}
                      />
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>

              {allSkills.length > 6 && (
                <button
                  onClick={() => setShowAllSkills(!showAllSkills)}
                  className="flex items-center gap-2 text-[#FF6B7A] hover:text-[#ff5060] font-medium transition-colors duration-300"
                >
                  {showAllSkills ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      Show More Skills
                    </>
                  )}
                </button>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-[#FF6B7A] hover:bg-[#ff5060] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Let&#39;s Work Together
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="#projects"
                className={`group inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                  theme === "dark"
                    ? "border-gray-600 text-gray-300 hover:border-[#FF6B7A] hover:text-[#FF6B7A]"
                    : "border-gray-300 text-gray-700 hover:border-[#FF6B7A] hover:text-[#FF6B7A]"
                }`}
              >
                View My Work
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
