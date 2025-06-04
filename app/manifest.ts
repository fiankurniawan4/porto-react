import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fian Kurniawan - Software Engineer",
    short_name: "Fian Kurniawan",
    description:
      "Personal website, portfolio, blog, software engineer roadmap,",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
