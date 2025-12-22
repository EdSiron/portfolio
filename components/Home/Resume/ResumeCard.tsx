"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";

type Props = {
  role: string;
  date?: string;
  description: string;
  tasks?: string[];
  icon?: React.ReactNode;
};

const ResumeCard = ({ role, date, description, tasks, icon }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-8 last:mb-0">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group cursor-pointer flex items-start space-x-4 sm:space-x-6 bg-[#140b1c] hover:bg-[#2d165f]/20 transition-all duration-300 p-4 sm:p-6 rounded-xl border border-[#2d165f]/30 hover:border-[#7849d5]/60"
      >
        <div className="relative z-10 shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#120718] border-2 border-[#7849d5] flex items-center justify-center text-[#7849d5] shadow-[0_0_15px_rgba(120,73,213,0.2)] group-hover:shadow-[#7849d5]/40 transition-all">
          {icon || <FaBriefcase size={18} />}
        </div>

        <div className="flex-1">
          {date && (
            <span className="text-[#7849d5] text-xs sm:text-sm font-bold tracking-widest uppercase">
              {date}
            </span>
          )}

          <div className="flex justify-between items-center mt-1">
            <h2 className="text-[#ffffff] text-lg sm:text-xl font-bold transition-colors">
              {role}
            </h2>
            <FiChevronDown
              className={`text-[#7849d5] transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              size={22}
            />
          </div>

          <p className="text-gray-300 text-sm mt-2 leading-relaxed">
            {description}
          </p>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isOpen
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <ul className="space-y-3 border-l-2 border-[#7849d5]/40 ml-1 pl-4">
                {tasks?.map((task, index) => (
                  <li
                    key={index}
                    className="text-gray-300 text-xs sm:text-sm flex items-start"
                  >
                    <span className="mr-2 text-[#7849d5] mt-1">▹</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
