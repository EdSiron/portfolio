"use client";

import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all duration-300 fixed w-full z-100 h-[12vh] ${
        navBg ? "bg-[#140b1c] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#7849d5] rounded-full flex items-center justify-center">
            <FaCode className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            ED
          </h1>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-base hover:text-[#7849d5] text-white font-medium transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
        <a href="/resume.pdf" download="Ed_Mark_Angelo_Siron_Resume.pdf">
          <button className="px-8 py-3 text-sm font-semibold cursor-pointer rounded-full bg-linear-to-r from-[#7849d5] to-[#6d31ee] text-white flex items-center space-x-2 hover:scale-105 transition-all duration-300 shadow-md shadow-[#2d165f]/50">
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </button>
        </a>

          <HiOutlineMenuAlt3
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
