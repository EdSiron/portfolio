import Image from "next/image";
import { IconType } from "react-icons";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  image: string;
  title: string;
  description: string;
  techIcons: IconType[];
  gitHubUrl?: string;
  liveUrl?: string;
  isOngoing?: boolean;
};

const ProjectCard = ({
  image,
  title,
  description,
  techIcons,
  gitHubUrl,
  liveUrl,
  isOngoing,
}: Props) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-linear-to-r from-[#7849d5] to-[#2d165f] rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
      <div className="relative bg-[#140b1c] p-5 rounded-xl border border-[#2d165f] flex flex-col h-full leading-none">
        {isOngoing && (
          <span className="absolute top-8 right-8 bg-[#7849d5]/20 text-[#7849d5] text-xs font-bold px-3 py-1 rounded-full border border-[#7849d5]/40 backdrop-blur-md z-10">
            Ongoing
          </span>
        )}

        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="rounded-lg w-full object-cover border border-[#2d165f]/50"
        />

        <h1 className="mt-4 text-xl sm:text-2xl font-bold text-[#ffffff]">
          {title}
        </h1>

        <p className="pt-2 font-medium text-[#ffffff]/70 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-8">
          <div className="flex items-center gap-2">
            {techIcons.map((Icon, index) => (
              <div
                key={index}
                className="p-2 bg-[#2d165f]/40 rounded-lg border border-[#7849d5]/30 flex items-center justify-center transition-colors hover:border-[#7849d5]"
              >
                <Icon className="text-[#7849d5] text-xl" />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {gitHubUrl && (
              <a
                href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffffff]/80 hover:text-[#7849d5] transition-colors"
              >
                <FaGithub size={24} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffffff]/80 hover:text-[#7849d5] transition-colors"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
