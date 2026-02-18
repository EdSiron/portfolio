"use client";

import { useScrollVisibility } from "@/app/hooks/useScrollVisibility";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

interface ScrollToTopProps {
  offsetBottom?: number;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ offsetBottom = 6 }) => {
  const isVisible = useScrollVisibility();
  const [bottomPosition, setBottomPosition] = useState(offsetBottom * 4);

  useEffect(() => {
    const updatePosition = () => {
      setBottomPosition(window.innerWidth >= 768 ? offsetBottom * 14 : offsetBottom * 4);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [offsetBottom]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-22 md:right-6 z-50 bg-[#140b1c] hover:bg-[#7849d5] text-white 
                     w-12 h-12 rounded-full flex items-center justify-center 
                     cursor-pointer shadow-lg shadow-[#120718]/50 
                     transition-all duration-300 ease-in-out 
                     hover:scale-110 active:scale-95 border border-[#2d165f]"
          style={{ bottom: `${bottomPosition}px` }} 
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;