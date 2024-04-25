import Image from "next/image";
import React from "react";
import { FaComment, FaHeart, FaRegHeart, FaShare } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Card = ({ image }) => {
  return (
    <div className="border-black bg-white rounded-xl w-[95%] max-w-md  mx-auto mb-2 h-auto">
      <div className="w-full flex gap-4 items-center py-2 px-4">
        <Image
          height={200}
          width={200}
          src="/images/user.jpg"
          alt="user-image"
          className="h-12 w-12 cover border rounded-full "
        />
        <div className="flex flex-col">
          <div className="text-base">Sagar Prajapati</div>
          <div className="text-sm flex gap-2 items-center">
            <CiLocationOn />
            <span>India</span>
          </div>
        </div>
      </div>
      <div className="w-full rounded-xl">
        <Image
          src={image}
          alt="post"
          height={1024}
          width={1024}
          className="w-full rounded-xl object-cover lg:max-h-[550px]"
        />
      </div>
      <div className="flex flex-row gap-6 py-4 px-2">
        <FaHeart className="" />
        <FaComment />
        <FaShare />
      </div>
    </div>
  );
};

export default Card;
