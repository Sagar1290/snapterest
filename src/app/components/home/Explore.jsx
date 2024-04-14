import React from "react";

import Image from "next/image";
import nature from "@/assets/home/nature.jpg";

import indiaGate from "@/assets/home/india-gate.jpg";
import wedding from "@/assets/home/wedding.jpg";
import group from "@/assets/home/group-photoshoot.jpg";
import scenery from "@/assets/home/scenery.jpg";
import photoshoot from "@/assets/home/photoshoot.jpg";

const Explore = () => {
  return (
    <section className="flex justify-center w-full">
      <div className="flex max-w-lg flex-col">
        <div className="w-full p-10 rounded-lg sticky top-24 ">
          <Image
            src={nature}
            alt="nature"
            className="w-full h-auto rounded-xl"
          />
          <h1 className="text-sm font-bold relative bottom-10 left-8 md:left-10 md:bottom-10 text-gray-50 lg:font-bold lg:text-xl">
            <span>NATURE</span>
          </h1>
        </div>
        <div className="w-full p-10 rounded-lg sticky top-24 ">
          <Image
            src={wedding}
            alt="wedding"
            className="w-full h-auto rounded-xl"
          />
          <h1 className="text-sm font-bold relative bottom-10 left-8 md:left-10 md:bottom-10 text-gray-50 lg:font-bold lg:text-xl">
            <span>WEDDING</span>
          </h1>
        </div>
        <div className="w-full p-10 rounded-lg sticky top-24 ">
          <Image
            src={indiaGate}
            alt="monument"
            className="w-full h-auto rounded-xl"
          />
          <h1 className="text-sm font-bold relative bottom-10 left-8 md:left-10 md:bottom-10 text-gray-50 lg:font-bold lg:text-xl">
            <span>MONUMENT</span>
          </h1>
        </div>
        <div className="w-full p-10 rounded-lg sticky top-24 ">
          <Image
            src={scenery}
            alt="scenery"
            className="w-full h-auto rounded-xl"
          />
          <h1 className="text-sm font-bold relative bottom-10 left-8 md:left-10 md:bottom-10 text-gray-50 lg:font-bold lg:text-xl">
            <span>SCENERY</span>
          </h1>
        </div>
        <div className="w-full p-10 rounded-lg sticky top-24 ">
          <Image src={group} alt="group" className="w-full h-auto rounded-xl" />
          <h1 className="text-sm font-bold relative bottom-10 left-8 md:left-10 md:bottom-10 text-gray-50 lg:font-bold lg:text-xl">
            <span>GROUP-PHOTOSHOOT</span>
          </h1>
        </div>
        <div className="w-full p-10 rounded-lg sticky top-24 ">
          <Image
            src={photoshoot}
            alt="photoshoot"
            className="w-full h-auto rounded-xl"
          />
          <h1 className="text-sm font-bold relative bottom-10 left-8 md:left-10 md:bottom-10 text-gray-50 lg:font-bold lg:text-xl">
            <span>PHOTOSHOOT</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Explore;
