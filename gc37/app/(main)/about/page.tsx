"use client";
import Head from "next/head";
import { FaFigma, FaReact, FaFileExcel, FaGitAlt } from "react-icons/fa";
import ArrowToTop from "../components/arrowtotop";

export default function About() {
  return (
    <>
      <Head>
        <title>Who are we?</title>
      </Head>

      <div className="flex items-center justify-center h-screen bg-three bg-cover bg-right md:bg-center bg-fixed bg-no-repeat">
        <section className="bg-black/60 text-white py-16 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Manifesto
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
        <ArrowToTop />
      </div>
    </>
  );
}
