"use client";
import Head from "next/head";
import { FaFigma, FaReact, FaFileExcel, FaGitAlt } from "react-icons/fa";
import ArrowToTop from "../components/arrowtotop";

const Overview = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-black px-6 py-20 mt-12 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="text-gray-900 dark:text-gray-300 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-red-600 dark:text-red-400">
                  Our interactive artefact
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Introduction
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-400">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[32rem] max-w-none rounded-xl sm:w-[48rem]"
              src="/static/imgs/final/five.jpeg"
              alt=""
            />
            <img
              className="w-[32rem] max-w-none rounded-xl sm:w-[48rem] mt-8"
              src="/static/imgs/final/two.jpeg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                <h1 className="mt-6 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  How it works
                </h1>
                <p className="text-gray-700 dark:text-gray-400">
                  <span className="text-white">One:</span> Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
                <p className="text-gray-700 dark:text-gray-400 my-4">
                  <span className="text-white">Two:</span> The Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
                <p className="text-gray-700 dark:text-gray-400 my-4">
                  <span className="text-white">Three:</span> Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>

                {/* <div className="flex flex-wrap flex-row justify-between">
                  <div>
                    <h1 className="mt-8 mb-4 text-xl font-bold tracking-tight sm:text-xl">
                      Roles
                    </h1>
                    <ul
                      role="list"
                      className="mt-8 space-y-8 text-gray-600 dark:text-gray-300"
                    >
                      <li>Frontend Developer</li>
                      <li>UI Designer</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className="mt-8 mb-4 text-xl font-bold tracking-tight sm:text-xl">
                      Tools
                    </h1>
                    <ul
                      role="list"
                      className="mt-8 space-y-8 text-gray-600 dark:text-gray-300"
                    >
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaFigma className="mr-4" />
                        Figma
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaReact className="mr-4" />
                        TypeScript (React, Nextjs + Node)
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaGitAlt className="mr-4" />
                        GitHub
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaFileExcel className="mr-4" />
                        Microsoft Excel
                      </li>
                    </ul>
                  </div>
                </div> */}

                <a
                  className="text-sm py-2 my-8 flex flex-row justify-center items-center border border-red-500 hover:bg-red-500 transition-all duration mx-auto rounded-full"
                  href="https://genhrm.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Genesis() {
  return (
    <>
      <Head>
        <title>Ripple Rescue</title>
      </Head>
      <div className="bg-two bg-fixed bg-cover bg-no-repeat bg-top bg-4 dark:text-white text-black">
        <ArrowToTop />
        <div className="max-w-[900px] w-full h-[100%] pt-24 pb-18 mx-auto text-center flex flex-row justify-center align-middle">
          <h1
            id="top"
            className="md:text-5xl text-3xl mt-[90px] px-8 py-4 bg-black mx-auto transition-all duration-300"
          >
            Ripple Rescue
          </h1>
        </div>
        <Overview />
      </div>
    </>
  );
}
