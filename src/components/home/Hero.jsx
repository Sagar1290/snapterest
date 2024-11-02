"use client";

import Quotes from "./Quotes";
import { FaArrowRight } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full overflow-clip min-h-screen hero-section flex flex-col lg:flex-row pt-20"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="text-white">
          <p className="text-sm lg:text-lg px-7 py-4">
            The world needs your perspective.
          </p>
          <p className="px-7 text-sm lg:text-base">
            Let's{" "}
            <Link
              className="border rounded-md mx-2 p-2 text-white hover:bg-white/70 hover:text-gray-700"
              href="/login"
            >
              Get Started
            </Link>{" "}
            With
          </p>
        </div>
        <div className="w-[55%] px-7 lg:px-7 pt-11 pb-4 text-white text-2xl font-bold tracking-[10px] lg:border-b lg:border-white/60">
          SNAPTEREST
        </div>
        <p className="p-4 lg:p-7 font-serif text-5xl lg:text-7xl text-white flex flex-col gap-4">
          <span>A HotSpot for</span>
          <em>Photographers</em>
        </p>
        <p className="hidden lg:flex text-white pb-15 flex-row gap-4 items-center justify-end">
          <span>Upload</span>
          <FaArrowRight />
          <span>Inspire</span>
          <FaArrowRight />
          <span>Connect</span>
          <FaArrowRight />
        </p>
      </div>
      <div className="w-full flex justify-center lg:justify-end lg:items-end py-10 lg:py-0 lg:pb-20 lg:pr-14">
        <div className="max-w-xl w-[90%] lg:w-full">
          <Quotes />
        </div>
      </div>
    </section>
  );
};

export default Hero;
