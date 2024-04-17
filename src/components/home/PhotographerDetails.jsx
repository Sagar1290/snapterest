"use client";
import Image from "next/image";
import annie from "@/assets/photographers/annie-spratt.jpg";
import jakob from "@/assets/photographers/jakob-owens.jpg";
import kinga from "@/assets/photographers/kinga-howard.jpg";
import li from "@/assets/photographers/li-shanting.jpg";
import tim from "@/assets/photographers/tim-mossholder.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
  return (
    <section className="w-full p-10 lg:p-6 max-w-lg mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="relative w-full flex flex-col lg:justify-between"
      >
        {detail.map((ele, id) => {
          return (
            <SwiperSlide key={id}>
              <Image
                src={ele.img}
                alt="annie"
                className="rounded-xl w-full h-auto"
              />
              <h1 className="uppercase text-sm font-bold relative bottom-10 left-8 md:left-10 md:bottom-10 text-gray-50 lg:font-bold lg:text-xl">
                {ele.name}
              </h1>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default PhotographerDetails;
