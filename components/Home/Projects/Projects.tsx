import ProjectCard from "./ProjectCard";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiVite,
  SiAppwrite,
  SiMongodb,
  SiExpress,
  SiSocketdotio,
} from "react-icons/si";

const projects = [
  {
    image: "/images/p4.png",
    title: "The Cozy Oven by EL",
    description:
      "A full-featured recipe website for a small business with admin access covering recipes, inventory, orders, and a reports dashboard — built to streamline daily bakery operations.",
    techIcons: [SiNextdotjs, SiTypescript, SiTailwindcss],
    gitHubUrl: "https://github.com/EdSiron/thecozyoven.byel",
    liveUrl: "https://thecozyoven-byel.vercel.app/",
  },
  {
    image: "/images/p1.png",
    title: "Vido - Movie App",
    description:
      "Vido is a dynamic movie discovery platform that leverages the TMDB API to provide real-time data on thousands of films. By integrating Appwrite for search analytics, the app displays 'Trending Now' insights.",
    techIcons: [FaReact, SiVite, SiTailwindcss, SiAppwrite],
    gitHubUrl: "https://github.com/EdSiron/movie-app",
    liveUrl: "https://edsiron.github.io/movie-app/",
  },

  {
    image: "/images/p6.png",
    title: "ProfilPro",
    description:
      "A clean, focused resume builder that lets users craft a polished, professional resume using a carefully designed single template — no clutter, just results.",
    techIcons: [SiNextdotjs, SiTailwindcss, SiTypescript],
    gitHubUrl: "https://github.com/EdSiron/profilpro",
    liveUrl: "https://profilpro.vercel.app/",
  },
  {
    image: "/images/p5.png",
    title: "In-Between",
    description:
      "A mobile-responsive web adaptation of the classic card game In-Between. Features real-time multiplayer via Socket.io — spin up the Render server before the Vercel link for the game to connect.",
    techIcons: [SiNextdotjs, SiSocketdotio, SiTailwindcss, SiTypescript],
    gitHubUrl: "https://github.com/EdSiron/in-between",
    liveUrl: "https://in-between-gold.vercel.app/",
  },
  {
    image: "/images/p7.png",
    title: "Digital Photobooth",
    description:
      "A browser-based photobooth that captures photos, assembles them into a classic 4-strip printable layout, and records the entire session as a video keepsake.",
    techIcons: [SiNextdotjs, SiTypescript, SiTailwindcss],
    gitHubUrl: "https://github.com/EdSiron/digital-photobooth",
  },
  {
    image: "/images/p2.png",
    title: "School Management Dashboard",
    description:
      "An ongoing development of a comprehensive school management system. This dashboard is built using Next.js, React, and Tailwind CSS to provide a seamless and responsive administrative experience.",
    techIcons: [FaReact, SiNextdotjs, SiTypescript],
    gitHubUrl: "https://github.com/EdSiron/School-Management-Dashboard",
    isOngoing: true,
  },
  {
    image: "/images/p3.png",
    title: "Real-Time Chat App (MERN Stack)",
    description:
      "A feature-rich real-time communication platform featuring live messaging, user status tracking, and secure authentication. Built with MongoDB, Express.js, React, and Node.js.",
    techIcons: [SiMongodb, SiExpress, FaReact, FaNodeJs],
    gitHubUrl: "https://github.com/EdSiron/Mern-Chat-App",
    isOngoing: true,
  },
];

const getGridConfig = (count: number) => {
  switch (count) {
    case 1:
      return { areas: `"a"`, columns: "1fr", rows: "480px" };
    case 2:
      return { areas: `"a b"`, columns: "1fr 1fr", rows: "420px" };
    case 3:
      return { areas: `"a b c"`, columns: "1fr 1fr 1fr", rows: "420px" };
    case 4:
      return {
        areas: `"a a b c" "a a d d"`,
        columns: "1fr 1fr 1fr 1fr",
        rows: "280px 280px",
      };
    case 5:
      return {
        areas: `"a a b b c" "a a d e e"`,
        columns: "1fr 1fr 1fr 1fr 1fr",
        rows: "280px 280px",
      };
    case 6:
      return {
        areas: `"a a b c c" "a a d d e" "f f f d d"`,
        columns: "1fr 1fr 1fr 1fr 1fr",
        rows: "260px 260px 260px",
      };
    case 7:
      return {
        areas: `"a a b b c c" "a a d d e e" "f f f g g g"`,
        columns: "1fr 1fr 1fr 1fr 1fr 1fr",
        rows: "280px 280px 280px",
      };
    default:
      return { areas: "none", columns: "repeat(3, 1fr)", rows: "320px" };
  }
};

const gridLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];

const Projects = () => {
  const count = projects.length;
  const config = getGridConfig(count);
  const usesAreas = config.areas !== "none";

  return (
    <div className="pt-16 pb-20 bg-[#120718]">
      <h1
        data-aos="zoom-in"
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
      >
        <span className="bg-linear-to-r from-[#7849d5] to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(120,73,213,0.3)]">
          My Recent Projects
        </span>
      </h1>

      {/* Mobile: single column stack */}
      <div className="md:hidden w-[90%] mx-auto flex flex-col gap-4 mt-16">
        {projects.map((project, index) => (
          <div key={index} className="h-80">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Desktop: mosaic grid */}
      <div
        className="hidden md:grid w-[92%] xl:w-[85%] mx-auto mt-16 gap-4"
        style={{
          gridTemplateAreas: usesAreas ? config.areas : undefined,
          gridTemplateColumns: config.columns,
          gridTemplateRows: usesAreas ? config.rows : undefined,
          gridAutoRows: !usesAreas ? config.rows : undefined,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            style={usesAreas ? { gridArea: gridLetters[index] } : {}}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
