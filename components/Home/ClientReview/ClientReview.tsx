"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Tilt from "react-parallax-tilt";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ClientReviewCard from "./ClientReviewCard";

const ClientReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "CEO",
      company: "TechFlow",
      review:
        "The attention to detail and modern design aesthetic completely transformed our brand identity.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Product Manager",
      company: "Innovate",
      review:
        "Seamless communication and incredible technical skills. The project was delivered right on time.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Marcus Wright",
      role: "Founder",
      company: "ScaleUp",
      review:
        "The most intuitive UI we've ever worked with. Our user engagement increased by 40% after launch.",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  return (
    <section className="py-16 bg-[#120718]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          data-aos="zoom-in"
          className="text-center text-2xl md:text-4xl xl:text-5xl font-bold mb-16"
        >
          <span className="bg-linear-to-r from-[#7849d5] to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(120,73,213,0.5)]">
            My Client's Stories
          </span>
        </h2>
        <div className="relative group" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {reviews.map((item) => (
              <SwiperSlide key={item.id} className="h-auto py-8">
                <Tilt
                  scale={1.05}
                  transitionSpeed={400}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  className="h-full"
                >
                  <div className="bg-linear-to-br from-[#140b1c] to-[#2d165f] border border-[#7849d5]/30 p-8 rounded-2xl h-full shadow-[0_0_25px_rgba(120,73,213,0.2)] hover:shadow-[0_0_35px_rgba(120,73,213,0.4)] transition-shadow duration-300 backdrop-blur-sm mx-3">
                    <ClientReviewCard {...item} />
                  </div>
                </Tilt>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            data-aos="fade-right"
            data-aos-delay="400"
            className="custom-prev absolute -left-12.5 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-[#2d165f]/50 border border-[#7849d5]/50 text-white hover:bg-[#7849d5] transition-all shadow-lg"
          >
            ←
          </button>
          <button
            data-aos="fade-left"
            data-aos-delay="400"
            className="custom-next absolute -right-12.5 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-[#2d165f]/50 border border-[#7849d5]/50 text-white hover:bg-[#7849d5] transition-all shadow-lg"
          >
            →
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #2d165f !important;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #7849d5 !important;
          width: 24px !important;
          border-radius: 4px !important;
          box-shadow: 0 0 10px rgba(120, 73, 213, 0.8);
        }
      `}</style>
    </section>
  );
};

export default ClientReview;
