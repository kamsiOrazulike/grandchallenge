"use client";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    const scrollY = window.scrollY;
    const scrollPosition = windowHeight + scrollY;

    if (scrollPosition >= documentHeight) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <footer className="fixed bg-transparent bottom-0 right-100 w-full md:flex-row md:flex-nowrap md:justify-start flex items-start p-4 z-40">
        <div>
          <div
            className={`text-white transition-all duration-150 font-light text-xs mx-auto px-4 py-2 `}
          >
            <a
              href="https://www.rca.ac.uk/study/schools/school-design/grand-challenge/"
              target="_blank"
              className="text-xl"
            >
              <img
                src={
                  "https://made.partners/wp-content/uploads/2017/04/rca-logo-768x332.png"
                }
                className="w-[8rem] mt-4"
                alt="Education 2"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
