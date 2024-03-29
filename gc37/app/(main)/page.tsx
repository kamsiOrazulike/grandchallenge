"use client";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { AiFillExclamationCircle } from "react-icons/ai";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import ArrowToTop from "./components/arrowtotop";

const Overview = () => {
  return (
    <section className="bg-black/70 text-white py-32 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32">
      <div className="mx-auto max-w-4xl text-left flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Overview
          </h2>
          <p className="text-lg text-gray-400 font-semibold">
            In response to the 23/24 Grand Challenge. Our group decided to focus
            on the waste management issues in the London borough of Sutton. Our
            response is a compelling artefact designed to raise awareness and
            hopefully encourage the people that choose to engage with it to{" "}
            <span className="text-white font-bold">take action!</span>
          </p>
          <p className="text-lg text-gray-400 font-semibold my-4">
            Our project focuses on the River Wandle, and aims to illustrate the
            direct impact of poor waste management on the natural environment.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cd/River_Wandle_in_Morden_Hall_Park.jpg"
            className="w-full my-8 border border-white rounded-md"
            alt="riverWandle wiki"
          />
        </div>
      </div>
    </section>
  );
};

const FishStall = () => {
  return (
    <section className="bg-black/70 text-white mb-20 py-12 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32">
      {/* Concept one */}
      <div className="w-full px-14 mx-4 mb-24 text-left flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-2/5 md:pr-16">
          <small className="text-[#2c9891] text-base font-bold mb-[-5px]">
            Concept One: The Pop-up Stall
          </small>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Fish shop
          </h2>

          <p className="text-lg text-gray-500 font-semibold mb-4">
            We designed a quick way to set up stalls where the fish models we
            create will be set on display for others to interact with.
          </p>
        </div>
        <div className="w-full flex flex-col relative">
          <CldVideoPlayer
            width={1080}
            height={607}
            className="my-8 mx-auto rounded-md"
            src="GrandChallenge 37/zdc3z396c8e3qjor9mfl"
            transformation={{
              crop: "fill",
              gravity: "center",
              width: 1080,
              height: 607,
            }}
          />{" "}
          <p className="text-lg text-gray-500 font-semibold mt-4">
            The installation would be made available in the local area of
            Sutton. We will be sure to let you know once we've got approval to
            set up!
          </p>
        </div>
      </div>

      <div className="border border-b-[0.5px] border-white/40 w-auto my-20" />

      <div className="w-full px-14 mx-4 text-left flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-3/5 md:pr-16">
          <img
            src={"./static/imgs/final/four.jpeg"}
            className="w-full my-8 border border-white rounded-md"
            alt="fish"
          />
        </div>
        <div className="md:w-2/5 ">
          <small className="text-[#2c9891] text-base font-bold mb-[-5px]">
            Why?
          </small>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Our goal
          </h2>
          <p className="text-lg text-gray-500 font-semibold my-4">
            The aim is to invoke a common understanding of the issues within the
            local community of Sutton that some may not be privy to.
          </p>
          <p className="text-lg text-gray-500 font-semibold my-4">
            The fish are modelled to tell the story of the objects that we
            sometimes do not properly dispose of. Looking through our model you
            may find things like:
          </p>
          <ul className="my-12 text-sm shadow-xl p-2 text-gray-300">
            <li className="m-4 flex flex-row align-middle justify-start items-center">
              <AiFillExclamationCircle className="mx-4 text-red-500" />
              Cigarette butts
            </li>
            <li className="m-4 flex flex-row align-middle justify-start items-center">
              <AiFillExclamationCircle className="mx-4 text-red-500" />
              Wrappers + Papers
            </li>
            <li className="m-4 flex flex-row align-middle justify-start items-center">
              <AiFillExclamationCircle className="mx-4 text-red-500" />
              Face masks
            </li>
          </ul>
          <p className="text-lg text-gray-500 font-semibold my-4">
            All items can also be classed in a specific
            <span className="text-white"> gel </span>colour. <br />
            To really highlight the type of waste that has been put into the
            model.
          </p>
        </div>
      </div>
    </section>
  );
};
const HandiCraft = () => {
  return (
    <section className="bg-black/70 text-white mb-20 py-12 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32">
      {/* Concept two */}
      <div className="w-full text-center flex flex-col items-center justify-center">
        <div className="w-[80%]">
          <small className="text-[#2c9891] text-base font-bold mb-[-5px]">
            Concept Two: Crafts workshop
          </small>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            HandiCraft
          </h2>
        </div>
        <p className="text-lg text-gray-500 font-semibold mb-8">
          Feel free to join us for a day of{" "}
          <span className="text-white">creativity</span> and{" "}
          <span className="text-white">environmental </span>
          healing with our community crafting event!
        </p>
        <div className="md:w-3/5 md:pr-16">
          <img
            src="https://www.cityandguildsartschool.ac.uk/wp-content/uploads/2018/10/City-Guilds-of-London-Art-School-London-Craft-Week-2022-Carving-Competition-1546x1024.jpg"
            className="w-full border border-white rounded-md"
            alt="crafts image"
          />
        </div>
        <div className="border border-b-[0.5px] border-white/40 w-[16rem] md:w-[32rem] my-20" />
        <div className="w-[80%] flex flex-col md:flex-row">
          <div className="md:w-3/5 md:pr-16">
            <img
              src={"./static/imgs/final/four.jpeg"}
              className="w-full my-8 border border-white rounded-md"
              alt="fish"
            />
          </div>

          <div className="md:w-2/5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Our goal
            </h2>
            <p className="text-lg text-gray-500 font-semibold my-4">
              This unique gathering invites locals to come together in a shared
              space to unleash their artistic flair while contributing to a
              cleaner environment. Our focus? Creating vibrant fish models using
              repurposed materials and fake trash objects!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ShortClip = () => {
  return (
    <section className="bg-black/70 text-white mb-20 py-12 px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32">
      {/* Short video */}
      <div className="w-full flex flex-col justify-center items-center mx-4 mb-24 max-w-4xl text-left">
        <div className="w-full">
          <small className="text-[#2c9891] text-base font-bold mb-[-5px]">
            Explore our Artefact
          </small>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            A Short Clip.
          </h2>
        </div>

        <CldVideoPlayer
          width={1080}
          height={607}
          className="my-8 mx-auto"
          src="GrandChallenge 37/cslqewkz6ro0srro4v0j"
          transformation={{
            crop: "fill",
            gravity: "center",
            width: 1080,
            height: 607,
          }}
        />
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <div
        id="top"
        className="flex items-center justify-center h-screen bg-one bg-contain md:bg-cover bg-right md:bg-center bg-fixed bg-repeat-y"
      >
        <div className="lg:max-w-lg text-center bg-black/40 p-4">
          <p className="text-base font-bold leading-7 text-gray-300 px-4">
            Grand Challenge 23/24 - Group 37
          </p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Ripple Rescue
          </h1>
          <FaRegArrowAltCircleDown className="text-3xl animate-pulse mx-auto" />
        </div>
      </div>
      <div className="flex items-center justify-center bg-two bg-cover bg-right md:bg-center bg-fixed bg-no-repeat">
        <Overview />
      </div>
      <FishStall />
      <HandiCraft />
      <div className="flex items-center justify-center">
        <ShortClip />
      </div>
      <ArrowToTop />
    </>
  );
};

export default Home;
