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
    <div className="project-card group relative overflow-hidden rounded-2xl cursor-pointer w-full h-full">
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm group-hover:brightness-50"
      />

      {/* Ongoing badge */}
      {isOngoing && (
        <span className="absolute top-4 right-4 z-20 bg-[#7849d5]/80 text-white text-xs font-bold px-3 py-1 rounded-full border border-[#7849d5] backdrop-blur-md">
          Ongoing
        </span>
      )}

      {/* Default state: title at bottom */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 bg-linear-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0">
        <h2 className="text-white text-lg font-bold leading-tight">{title}</h2>
      </div>

      {/* Hover state: full overlay with description + links */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h2 className="text-white text-xl font-bold mb-3 leading-tight">{title}</h2>
        <p className="text-white/80 text-sm leading-relaxed mb-5">{description}</p>

        <div className="flex items-center justify-between w-full mt-auto">
          <div className="flex items-center gap-2">
            {techIcons.map((Icon, index) => (
              <div
                key={index}
                className="p-1.5 bg-[#2d165f]/60 rounded-lg border border-[#7849d5]/40 flex items-center justify-center"
              >
                <Icon className="text-[#a98af0] text-base" />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {gitHubUrl && (
              <a
                href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#7849d5] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={22} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#7849d5] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;