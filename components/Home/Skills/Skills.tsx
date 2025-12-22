"use client";

import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSpringboot,
  SiPython,
  SiDjango,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "JavaScript", icon: <SiJavascript />, percentage: 89 },
  { name: "React", icon: <SiReact />, percentage: 92 },
  { name: "NextJs", icon: <SiNextdotjs />, percentage: 85 },
  { name: "TailwindCss", icon: <SiTailwindcss />, percentage: 95 },
  { name: "BootstrapCss", icon: <SiBootstrap />, percentage: 80 },
  { name: "Java", icon: <FaJava />, percentage: 78 },
  { name: "Springboot", icon: <SiSpringboot />, percentage: 75 },
  { name: "Python", icon: <SiPython />, percentage: 82 },
  { name: "Django", icon: <SiDjango />, percentage: 70 },
  { name: "TypeScript", icon: <SiTypescript />, percentage: 88 },
];

const Skills = () => {
  return (
    <section className="py-16 text-[#ffffff] w-full overflow-hidden bg-[#120718]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          data-aos="zoom-in"
          className="text-center text-3xl md:text-4xl xl:text-5xl font-bold mb-10"
        >
          <span className="bg-linear-to-r from-[#7849d5] to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(120,73,213,0.5)]">
            My Skills
          </span>
        </h1>
        <div data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="skills-swiper"
          >
            {skills.map((skill, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center py-6"
              >
                <Tilt
                  scale={1.05}
                  transitionSpeed={400}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareBorderRadius="1rem"
                >
                  <div className="bg-[#140b1c] border border-[#2d165f] text-center w-36 h-44 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_20px_rgba(45,22,95,0.3)] transition-all hover:border-[#7849d5]/50">
                    <div className="text-4xl mb-3 text-[#7849d5] filter drop-shadow-[0_0_8px_rgba(120,73,213,0.4)]">
                      {skill.icon}
                    </div>
                    <p className="text-xl font-bold text-[#ffffff]">
                      {skill.percentage}%
                    </p>
                    <p className="text-gray-400 text-[10px] font-medium mt-1 uppercase tracking-widest">
                      {skill.name}
                    </p>
                  </div>
                </Tilt>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .skills-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default Skills;
