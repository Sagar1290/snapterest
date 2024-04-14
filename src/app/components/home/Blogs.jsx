import React from "react";
import blogs from "@/assets/BlogData.json";
import Image from "next/image";
import { FaCalendarAlt, FaTag, FaUser } from "react-icons/fa";

const Blogs = () => {
  return (
    <section className="w-full bg-red-200">
      <div className="w-full mx-auto">
        <h1 className="w-[80%] mx-auto text-2xl lg:text-5xl lg:pb-20 font-semibold pt-0 lg:pt-10 pb-10 tracking-wide">
          <span className="text-orange-500 font-mono">Unlock the Secrets:</span>
          Expert Photography Tips You Won't Find Elsewhere
        </h1>
        <div className="flex flex-wrap gap-8 lg:gap-6 w-[90%] mx-auto justify-around">
          {blogs.map((ele, index) => {
            return (
              <div className="w-full lg:w-[48%] flex flex-col items-center rounded-xl bg-red-100/40 lg:bg-transparent">
                <Image
                  src={ele.image_url}
                  height={500}
                  width={400}
                  alt="blog-image"
                  className="w-96 cover rounded-xl"
                />
                <h1 className="text-xl lg:text-3xl font-semibold  text-center py-4 lg:p-8">
                  {ele.heading}
                </h1>
                <div className="flex flex-row items-center gap-6 pb-4 text-teal-800 justify-between">
                  <div className="flex flex-row items-center gap-2">
                    <FaUser />
                    <span>{ele.author}</span>
                  </div>
                  <div className="hidden lg:flex flex-row items-center gap-2">
                    <FaCalendarAlt />
                    <span>{ele.published_date}</span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FaTag />
                    <span>{ele.info}</span>
                  </div>
                </div>
                <p className="p-3 lg:p-0 lg:px-10 pb-6 text-gray-700">
                  {ele.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
