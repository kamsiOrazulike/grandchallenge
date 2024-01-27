"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";

const ArrowToTop = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showArrow && (
        <LinkScroll
          to="top"
          spy={true}
          smooth={true}
          offset={-500}
          duration={500}
          className="to-top fixed bottom-8 right-8 bg-gray-700 rounded-full cursor-pointer p-2 text-white font-light text-xl transition-all duration-150"
        >
          <AiOutlineArrowUp />
        </LinkScroll>
      )}
    </>
  );
};

export default ArrowToTop;
