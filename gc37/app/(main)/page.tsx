"use client";
import React from "react";
import NewsLink from "./components/link";
import { AiFillVideoCamera, AiOutlineCheck } from "react-icons/ai";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { FaPinterestP, FaFigma, FaReact, FaCircle } from "react-icons/fa";

const Overview = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-black text-white px-6 py-20 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="mt-6 text-xl leading-8 text-gray-400">
                  <span className="text-sm text-yellow-400 uppercase">
                    <FaCircle className="inline-block text-[8px] text-yellow-400 animate-pulse mr-2" />
                    Location study:
                  </span>
                  <br /> London borough of Sutton <br />
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
              </div>
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

              {/* Research */}
              {/* <p>
                  The main sources of wastewater in River Wandle include the
                  following:
                  <ul className="my-12 text-sm shadow-xl p-2 text-gray-200">
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <FaCircle className="mx-4 text-yellow-500" />
                      Domestic discharges: These include domestic water
                      discharges such as wastewater from kitchens, washrooms and
                      laundries. This water may contain chemicals from
                      detergents, cleaners and other household products.
                    </li>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <FaCircle className="mx-4 text-yellow-500" />
                      Industrial discharges: Some industries and manufacturing
                      industries along the river may discharge treated or
                      untreated wastewater into the river, which may contain
                      chemical pollutants.
                    </li>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <FaCircle className="mx-4 text-yellow-500" />
                      Urban runoff: Urban surface runoff, especially during the
                      rainy season, can wash pollutants from roads, car parks
                      and building surfaces into the river. These pollutants may
                      include motor oil, heavy metals, impurities and trash.
                    </li>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <FaCircle className="mx-4 text-yellow-500" />
                      Incorrectly connected sewer systems: some properties may
                      incorrectly connect wastewater pipes to storm drains,
                      resulting in untreated household or industrial wastewater
                      being discharged directly into the River.
                    </li>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <FaCircle className="mx-4 text-yellow-500" />
                      Agricultural activities: where the River Wandle flows
                      through or adjacent to agricultural areas, agricultural
                      activities may also be a source of pollution. Fertilisers,
                      pesticides and livestock manure may enter the river
                      through surface runoff.
                    </li>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <FaCircle className="mx-4 text-yellow-500" />
                      Discharges from sewage treatment plants: sewage treatment
                      plants may discharge inadequately treated effluent into
                      the river under certain circumstances (e.g. insufficient
                      treatment capacity or equipment failure).
                    </li>
                    <li className="m-4 flex flex-row align-middle justify-start items-center">
                      <FaCircle className="mx-4 text-yellow-500" />
                      Stormwater and overflows: during heavy rainfall, rainwater
                      may overload the sewerage system, resulting in sewage
                      overflows that carry untreated or partially treated sewage
                      into rivers.
                    </li>
                  </ul>
                </p> */}
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
      <div className="relative w-full bg-ten bg-white bg-fixed bg-cover bg-no-repeat bg-center text-black">
        <div className="w-full flex flex-row align-middle items-center pt-32 pb-12 px-14">
          <NewsLink
            title="Sutton Libdems"
            imageSrc="https://pbs.twimg.com/profile_images/1730669169337679872/PVW8fTHy_400x400.jpg"
            href="https://www.suttonlibdems.org.uk/sewage"
          />
          <NewsLink
            title="The Guardian"
            imageSrc="https://mjauk.org/wp-content/uploads/2023/07/the-guardian-logo.jpeg"
            href="https://www.yourlocalguardian.co.uk/news/23992599.sewage-dumped-river-wandle-12-years/"
          />
        </div>
      </div>

      {/* Intro to the team */}
      <div className="w-full">
        <Overview />
      </div>
    </div>
  );
}
