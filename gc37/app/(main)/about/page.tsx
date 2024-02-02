"use client";
import Head from "next/head";
import { FaFigma, FaReact, FaFileExcel, FaGitAlt } from "react-icons/fa";
import ArrowToTop from "../components/arrowtotop";
import SignUpForm from "../components/form";

export default function About() {
  return (
    <>
      <Head>
        <title>Who are we?</title>
      </Head>

      <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-black">
        <div className="mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Who are we?
          </h2>
          <p className="text-lg md:text-xl mt-[-20px] mb-8 text-white/60 px-14">
            We are a multidisciplinary team of 5 students studying at the London
            Royal College of Art.
          </p>
        </div>
      </div>
      <section className="bg-black/60 text-white py-16 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32">
        <SignUpForm />
      </section>
    </>
  );
}
