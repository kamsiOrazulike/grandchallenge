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
      <footer className="relative bg-[#292E36] bottom-0 right-100 w-full md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 z-20">
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
                  "https://autonomy.work/wp-content/uploads/2020/09/pngkey.com-rca-logo-png-5312124.png"
                }
                className="w-[8rem] mt-4"
                alt="rca logo"
              />
            </a>
          </div>
        </div>
        <div className="ml-auto flex items-end">
          <ul className="flex flex-wrap items-end justify-end text-sm md:text-md space-x-4 uppercase text-white/40">
            <li className="hover:text-white hover:cursor-pointer transition-all duration-150">
              <a
                href="https://www.instagram.com/k0.design?igsh=MTJrMDJid2pubmFkbw%3D%3D&utm_source=qr"
                target="_blank"
              >
                Kamsi Orazulike
              </a>
            </li>
            <li className="hover:text-white hover:cursor-pointer transition-all duration-150">
              <a
                href="https://www.instagram.com/lilyrui0422?igsh=NTc4MTIwNjQ2YQ=="
                target="_blank"
              >
                Jiarui Wang
              </a>
            </li>
            <li className="hover:text-white hover:cursor-pointer transition-all duration-150">
              <a
                href="https://www.instagram.com/shen_xu_nn?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                target="_blank"
              >
                Shen Xu
              </a>
            </li>
            <li className="hover:text-white hover:cursor-pointer transition-all duration-150">
              <a
                href="https://www.instagram.com/lockon_emanon?igsh=YzVkODRmOTdmMw=="
                target="_blank"
              >
                Jieying Wen
              </a>
            </li>
            <li className="hover:text-white hover:cursor-pointer transition-all duration-150">
              <a href="#" target="_blank">
                Flora Lindsay
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
