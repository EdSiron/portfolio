import {
  HiOutlineCommandLine,
  HiOutlinePaintBrush,
  HiOutlineDevicePhoneMobile,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";

type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard = ({ description, name }: Props) => {
  const renderIcon = () => {
    const iconClass = "w-8 h-8 md:w-10 md:h-10";
    switch (name) {
      case "UI and UX":
        return <HiOutlineSquare3Stack3D className={iconClass} />;
      case "Web and Mobile App":
        return <HiOutlineDevicePhoneMobile className={iconClass} />;
      case "Design & Creative":
        return <HiOutlinePaintBrush className={iconClass} />;
      case "Development":
        return <HiOutlineCommandLine className={iconClass} />;
      default:
        return <HiOutlineSquare3Stack3D className={iconClass} />;
    }
  };

  return (
    <div className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 border-b border-gray-800 transition-all duration-500 hover:bg-linear-to-r hover:from-[#2d165f] hover:to-[#120718] cursor-pointer overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-[#7849d5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex flex-col md:grid md:grid-cols-[40px_250px_1fr] items-start md:items-center gap-4 md:gap-12 w-full">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-[#7849d5] md:text-white group-hover:text-[#9d72eb] transition-colors duration-300">
            {renderIcon()}
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#b08df1] transition-colors">
          {name}
        </h2>
        <p className="text-sm md:text-base text-gray-400 max-w-xl line-clamp-3 md:line-clamp-2 group-hover:text-gray-200 transition-colors leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
