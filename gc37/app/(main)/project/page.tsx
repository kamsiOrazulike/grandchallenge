"use client";
import Head from "next/head";
import { FaFigma, FaReact, FaFileExcel, FaGitAlt } from "react-icons/fa";
import ArrowToTop from "../components/arrowtotop";

export default function Page() {
  return (
    <>
      <Head>
        <title>Ripple Rescue</title>
      </Head>
      <div className="flex items-center justify-center h-screen bg-two bg-cover bg-right md:bg-center bg-fixed bg-no-repeat">
        <ArrowToTop />
      </div>
    </>
  );
}
