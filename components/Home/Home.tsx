"use client";

import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import ClientReview from "./ClientReview/ClientReview";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <section id="home" className="scroll-mt-[12vh]"><Hero /></section>
      <section id="projects" className="scroll-mt-[12vh]"><Projects /></section>
      <section id="services" className="scroll-mt-[12vh]"><Services /></section>
      {/* <section id="reviews" className="scroll-mt-[12vh]"><ClientReview /></section> */}
      <section id="skills" className="scroll-mt-[12vh]"><Skills /></section>
      <section id="resume" className="scroll-mt-[12vh]"><Resume /></section>
      <section id="contact" className="scroll-mt-[12vh]"><Contact /></section>
      <Footer />
    </div>
  );
};

export default Home;
