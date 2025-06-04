import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";
import React, { useState } from "react"; // Added useState

const projects = [
  {
    id: 1,
    title: "MyAnimeList (Referance)",
    description: "A Referance of MyAnimeList project, using Laravel",
    image: "/image/project/myanimelist.png",
  },
  {
    id: 2,
    title: "MovieS",
    description: "A Movies search using OMDBAPI, using Laravel",
    image: "/image/project/movies.png",
  },
  {
    id: 3,
    title: "Otakudesu API",
    description: "A API scraping using ExpressJS, scraping from otakudesu.",
    image: "/image/project/otakudesu.png",
  },
  {
    id: 4,
    title: "MyKaryawan",
    description:
      "A Karyawan App to check sallary karyawan have paid or not. using Laravel",
    image: "/image/project/karyawan_dashboard.jpg",
  },
  {
    id: 5,
    title: "Perpustakaan",
    description:
      "A Perpustakaan my final project school (UKS) finished. using Laravel",
    image: "/image/project/perpus_dashboard.jpg",
  },
  {
    id: 6,
    title: "KAI",
    description:
      "A KAI (School Project) to show rute KAI and the Price of KAI. using PHP",
    image: "/image/project/kai.jpg",
  },
  {
    id: 7,
    title: "Music",
    description:
      "A Music (School Project) played a song u place song in a folder. using Javascript",
    image: "/image/project/lagu.jpg",
  },
];

export const Project = () => {
  const { theme } = useTheme();
  // Add state for image popup
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  // Handle image click to show popup
  const handleImageClick = (
    image: React.SetStateAction<string>,
    title: React.SetStateAction<string>
  ) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setShowPopup(true);
  };

  // Close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
<<<<<<< HEAD
    <div
      id="projects"
      className={`py-16 px-4 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto">
        <h2
          className={`text-3xl font-bold mb-8 text-center ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          My Projects
        </h2>
=======
    <div id="projects" className="py-16 px-4">
      <div className="container mx-auto ">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FF6B7A]/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-[#FF6B7A] rounded-full animate-pulse"></div>
            <span className="text-[#FF6B7A] font-semibold text-xl uppercase tracking-wider">
              My Project
            </span>
          </div>
        </div>
>>>>>>> 5873b93 (up)

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`p-5 rounded-lg shadow-md h-full ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              <div className="w-full aspect-video mb-4 overflow-hidden rounded-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={340}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => handleImageClick(project.image, project.title)}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="max-w-4xl w-full p-4 relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
            <h3 className="text-white text-xl font-bold mb-2">
              {selectedTitle}
            </h3>
            <Image
              src={selectedImage}
              alt={selectedTitle}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};
