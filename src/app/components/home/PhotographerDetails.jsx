"use client";
import Image from "next/image";
import annie from "@/app/assets/photographers/annie-spratt.jpg";
import jakob from "@/app/assets/photographers/jakob-owens.jpg";
import kinga from "@/app/assets/photographers/kinga-howard.jpg";
import li from "@/app/assets/photographers/li-shanting.jpg";
import tim from "@/app/assets/photographers/tim-mossholder.jpg";
import { useEffect, useState } from "react";

const detail = [
  {
    img: annie,
    name: "annie spratt",
  },
  {
    img: jakob,
    name: "jakob owens",
  },
  {
    img: kinga,
    name: "kinga howard",
  },
  {
    img: li,
    name: "li shanting",
  },
  {
    img: tim,
    name: "tim massholder",
  },
];

const PhotographerDetails = () => {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);

    const timeout = setTimeout(() => {
      setFadeIn(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev === detail.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? detail.length - 1 : prev - 1));
  };

  return (
    <section className="w-full p-10 lg:p-6 max-w-lg mx-auto">
      <div className="relative w-full flex flex-col lg:justify-between">
        <div className={`relative ${fadeIn ? "animate-fadeIn" : ""}`}>
          <Image
            src={detail[index].img}
            alt="annie"
            className="rounded-xl w-full lg:w-[95%] h-auto"
          />
          <h1 className="uppercase text-sm font-bold relative bottom-10 left-8 md:left-10 md:bottom-10 text-gray-50 lg:font-bold lg:text-xl">
            {detail[index].name}
          </h1>
        </div>
        <div className="w-full flex justify-center gap-4 -mt-2">
          <button
            onClick={prevSlide}
            className=" rounded-full border border-gray-300 p-1.5 hover:border-gray-400 hover:bg-indigo-950 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className=" rounded-full border border-gray-300 p-1.5 hover:border-gray-400 hover:bg-indigo-950 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhotographerDetails;
