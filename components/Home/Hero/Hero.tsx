"use client";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticlesHero";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#120718] flex items-center lg:justify-center text-white overflow-hidden px-6 py-12 md:p-12 lg:p-24 pt-[15vh] lg:pt-[12vh]">
      <ParticlesHero />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-10 lg:gap-12">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 order-2 lg:order-1">
          <h1
            data-aos="fade-right"
            className="text-xl lg:text-2xl font-medium tracking-wide text-white pb-4"
          >
            Hi, I am Ed
          </h1>

          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="mt-2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold flex items-center h-10 sm:h-15 md:h-20 lg:h-25"
          >
            <span className="bg-linear-to-r from-[#7849d5] to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(120,73,213,0.3)]">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Backend Developer",
                    "Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </div>

          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="mt-4 md:mt-6 pt-3 text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg"
          >
            I build high-performance, visually stunning web applications with a
            focus on user experience and scalable architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-10">
            <button
              data-aos="zoom-in"
              data-aos-delay="300"
              className="w-full sm:w-auto px-6 py-2 border-2 border-[#7849d5] bg-[#13071f] text-[#7849d5] transition-all duration-300 cursor-pointer rounded-full text-base md:text-md font-semibold flex items-center justify-center group hover:bg-[#7849d5] hover:text-white shadow-lg shadow-[#7849d5]/10"
            >
              <span>View My Projects</span>
              <BsArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex gap-3" data-aos="fade-up" data-aos-delay="400">
              {[
                {
                  icon: <FaGithub />,
                  href: "https://github.com/EdSiron",
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedinIn />,
                  href: "https://www.linkedin.com/in/ed-mark-siron/",
                  label: "LinkedIn",
                },
                {
                  icon: <FaXTwitter />,
                  href: "https://twitter.com/yourusername",
                  label: "X",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 border-2 border-[#7849d5] bg-[#13071f] text-[#7849d5] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#7849d5] hover:text-white hover:-translate-y-1 shadow-lg shadow-[#7849d5]/10"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="relative group transition-all duration-500 ease-in-out hover:scale-105">
            <div className="absolute inset-0 bg-[#7849d5]/20 blur-3xl -rotate-6 rounded-3xl group-hover:rotate-0 transition-transform duration-500"></div>

            <div className="relative overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 bg-[#1a0b22]">
              <Image
                src="/images/profileImg.png"
                alt="Ed's Profile"
                width={400}
                height={500}
                className="w-48 h-60 sm:w-64 sm:h-80 lg:w-80 lg:h-112.5 object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#120718]/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
