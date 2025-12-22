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
} from "react-icons/si";

const Projects = () => {
  return (
    <div className="pt-16 pb-16 bg-[#120718]">
      <h1
        data-aos="zoom-in"
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
      >
        <span className="bg-linear-to-r from-[#7849d5] to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(120,73,213,0.3)]">
          My Recent Projects
        </span>
      </h1>

      <div className="w-[90%] md:w-[80%] xl:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <ProjectCard
            image="/images/p1.png"
            title="Vido - Movie App"
            description={`Vido is a dynamic movie discovery platform that leverages the TMDB API to provide real-time data on thousands of films. By integrating Appwrite for search analytics, the app displays "Trending Now" insights based on real-time user activity.`}
            techIcons={[FaReact, SiVite, SiTailwindcss, SiAppwrite]}
            gitHubUrl="https://github.com/EdSiron/movie-app"
            liveUrl="https://edsiron.github.io/movie-app/"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          <ProjectCard
            image="/images/p2.png"
            title="School Management Dashboard"
            description="An ongoing development of a comprehensive school management system. This dashboard is built using Next.js, React, and Tailwind CSS to provide a seamless and responsive administrative experience."
            techIcons={[FaReact, SiNextdotjs, SiTypescript]}
            gitHubUrl="https://github.com/EdSiron/School-Management-Dashboard"
            isOngoing={true}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-anchor-placement="top-bottom"
        >
          <ProjectCard
            image="/images/p3.png"
            title="Real-Time Chat App (MERN Stack)"
            description="A feature-rich real-time communication platform featuring live messaging, user status tracking, and secure authentication. Built with MongoDB, Express.js, React, and Node.js, styled with Tailwind CSS."
            techIcons={[SiMongodb, SiExpress, FaReact, FaNodeJs]}
            gitHubUrl="https://github.com/EdSiron/Mern-Chat-App"
            isOngoing={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
