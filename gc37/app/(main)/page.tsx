"use client";
import React from "react";
import { AiFillVideoCamera, AiOutlineCheck } from "react-icons/ai";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { FaPinterestP, FaFigma, FaReact } from "react-icons/fa";

const Overview = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-black text-white px-6 py-20 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-gray-300">
                  London borough of Sutton
                </p>
                <h1 className="text-gray-600 mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Overview
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-200">
                  Our research begins with the sewage problem in Sutton. The
                  river Wandle is a very important river in Sutton and it
                  eventually flows into the Thames. This river used to be the
                  only healthy river in London. However, problems with the water
                  company's illegal sewage discharges have caused the river's
                  health rating to changed (the importance of this river is
                  covered in a previous brief). Our project aims to
                </p>
                <ul className="my-12 text-sm shadow-xl p-2 text-gray-200">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-white" />
                    Generate awareness: Around this problem
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiOutlineCheck className="mx-4 text-white" />
                    Empower indiivduals: Not only to be aware but also to ACT
                  </li>
                </ul>
                <p>
                  There is a challenge between River Wandle and Thames Water.
                  The river's health rating has changed as a result of illegal
                  sewage discharges from the water company.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[22rem] max-w-none rounded-xl sm:w-[32rem]"
              src="/static/imgs/logo.png"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base text-gray-200 leading-7 lg:max-w-lg">
                {/* <h1 className="mt-6 mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Goal
                </h1>
                <p className="">
                  The aim of this project is to combine two important concepts
                  when it comes to learning:
                </p>
                <ul className="my-12 text-sm shadow-xl p-2">
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <MdOutlineVideogameAsset className="mx-4 text-indigo-600" />{" "}
                    Gamification
                  </li>
                  <li className="m-4 flex flex-row align-middle justify-start items-center">
                    <AiFillVideoCamera className="mx-4 text-indigo-600" />{" "}
                    Contextual/Applied learning
                  </li>
                </ul>
                <p>
                  Providing a more engaging learning experience of the language
                  is paramount for users. As well the options to pursue their
                  learning further as well as how to do so.
                </p> */}

                <div className="flex flex-wrap flex-row justify-between">
                  <div>
                    <h1 className="mt-8 mb-4 text-xl font-bold tracking-tight sm:text-xl">
                      Meet the team
                    </h1>
                    <ul role="list" className="mt-8 space-y-8 text-gray-300">
                      <li>Kamsi Orazulike</li>
                      <li>Shen Xu</li>
                      <li>Flora Lindsay</li>
                      <li>Yingwen Jie</li>
                      <li>Jiarui Wang</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className="mt-8 mb-4 text-xl font-bold tracking-tight sm:text-xl">
                      Tools
                    </h1>
                    <ul role="list" className="mt-8 space-y-8 text-gray-300">
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaReact className="mr-4" />
                        Reactjs
                      </li>
                      <li className="m-4 flex flex-row align-middle justify-start items-center">
                        <FaFigma className="mr-4" />
                        Figma
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Hero() {
  return (
    <div className="w-full">
      {/*Header Image*/}
      <div className="relative w-full bg-gray-200 text-black">
        <h1 className="text-3xl text-center font-bold mx-auto pt-32 pb-20">
          Grand Challenge Project
        </h1>
      </div>

      {/* Intro to the team */}
      <div className="w-full">
        <Overview />
      </div>
    </div>
  );
}
