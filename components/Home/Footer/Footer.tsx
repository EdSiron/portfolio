import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Footer = () => {
  const techStack = [
    { name: "Next.js", icon: <SiNextdotjs />, color: "hover:text-[#7849d5]" },
    { name: "React", icon: <SiReact />, color: "hover:text-[#7849d5]" },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "hover:text-[#7849d5]",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "hover:text-[#7849d5]",
    },
  ];

  return (
    <footer className="bg-[#120718] text-[#ffffff] border-t border-[#2d165f] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium text-[#7849d5] mb-4 tracking-widest uppercase">
            Built With
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-2xl text-gray-400">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`transition-all duration-300 cursor-default ${tech.color}`}
                title={tech.name}
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </div>

        <div className="w-16 h-px bg-[#2d165f]"></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold tracking-tight">
              Ed<span className="text-[#7849d5]">Siron</span>
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Associate Software Developer & Designer
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
