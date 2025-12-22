"use client";

import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      <div
        className={`fixed inset-0 z-10000 bg-[#120718] transition-all duration-500 ${
          showNav ? "opacity-70 visible" : "opacity-0 invisible"
        }`}
        onClick={closeNav}
      />

      <div
        className={`fixed inset-0 z-10006 flex h-full w-[75%] sm:w-[60%] transform flex-col justify-center bg-[#140b1c] transition-all duration-500 ease-in-out ${navOpen}`}
      >
        <div className="flex flex-col space-y-8">
          {NavLinks.map((link, index) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={closeNav}
              style={{ transitionDelay: showNav ? `${index * 100}ms` : "0ms" }}
              className={`transform transition-all duration-500 ${
                showNav
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-5 opacity-0"
              }`}
            >
              <p className="ml-12 w-fit border-b-[1.5px] border-transparent pb-2 text-[22px] font-semibold text-white sm:text-[30px] hover:text-[#7849d5] hover:border-[#7849d5] transition-all duration-300">
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        <CgClose
          onClick={closeNav}
          className="absolute right-[1.4rem] top-[1.4rem] h-8 w-8 cursor-pointer text-white hover:text-[#7849d5] transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default MobileNav;
