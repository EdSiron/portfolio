import ResumeCard from "./ResumeCard";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

const Resume = () => {
  const newLocal =
    "absolute left-5 sm:left-6 top-4 bottom-4 w-0.5 bg-linear-to-b from-[#7849d5] via-[#2d165f] to-transparent";

  return (
    <div className="pt-16 pb-16 bg-[#120718] overflow-hidden">
      <div className="w-[80%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
        <div data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#ffffff] mb-12">
            My Work{" "}
            <span className="bg-linear-to-r from-[#7849d5] to-[#ffffff] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(120,73,213,0.3)]">
              Experience
            </span>
          </h1>

          <div className="relative">
            <div className="absolute left-5 sm:left-6 top-4 bottom-4 w-0.5 bg-linear-to-b from-[#7849d5] via-[#2d165f] to-transparent"></div>
            <div data-aos="fade-up" data-aos-delay="200" className="mb-8">
              <ResumeCard
                role="Associate Software Developer"
                date="Jan 2025 - Present"
                icon={<FaBriefcase size={18} />}
                description="Full-stack development specializing in modernizing enterprise systems and maintaining robust backend architectures."
                tasks={[
                  "Full-stack development using React (Frontend) and Spring Boot (Backend)",
                  "Maintaining and optimizing legacy enterprise projects built with Django and Python",
                  "Architecting new UI templates and reusable components with React",
                  "Developing scalable RESTful APIs and integrating cross-platform services",
                  "Ensuring system stability and performance through legacy code refactoring",
                ]}
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <ResumeCard
                role="Software Engineer Intern"
                date="2019 - 2021"
                icon={<FaCode size={18} />}
                description="Developed frontend components and automated policy enforcement in an Agile environment."
                tasks={[
                  "Fixed bugs and optimized performance to enhance overall user experience.",
                  "Collaborated in daily Scrum meetings and Agile sprint planning.",
                  "Managed OPA rules for policy compliance within Terraform Rancher.",
                  "Built responsive enterprise UI using Next.js, TypeScript, and Tailwind.",
                  "Coordinated with cross-functional teams and QA to deliver quality code.",
                  "Managed version control and tasks via GitHub, Bitbucket, and Jira.",
                ]}
              />
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="1000">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#ffffff] mb-12">
            My{" "}
            <span className="bg-linear-to-r from-[#7849d5] to-[#ffffff] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(120,73,213,0.3)]">
              Education
            </span>
          </h1>
          <div className="relative">
            <div className={newLocal}></div>
            <div data-aos="fade-up" data-aos-delay="300">
              <ResumeCard
                role="BS Information Technology"
                date="2020 - 2024"
                icon={<FaGraduationCap size={20} />}
                description="Bulacan State University - Hagonoy Campus"
                tasks={[
                  "Web and Mobile Application Development",
                  "Database Management & SQL Optimization",
                  "Systems Analysis and Design",
                  "Capstone Project: Malware Wars: Defending your Network from Digital Threats - A Mobile Game",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
