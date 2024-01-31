"use client";
import Head from "next/head";
import ArrowToTop from "../components/arrowtotop";

export default function Page() {
  return (
    <>
      <Head>
        <title>Ripple Rescue</title>
      </Head>

      <div className="flex items-center justify-center h-screen bg-two bg-cover bg-right md:bg-center bg-fixed bg-no-repeat">
        <section className="bg-black/80 text-white py-16 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2">
              Workshops + Activities
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-500 font-bold">
              Explore our latest event pop-ups + times
            </p>
          </div>
        </section>
        <ArrowToTop />
      </div>
    </>
  );
}
