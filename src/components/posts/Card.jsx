import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaComment } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Notification, useToaster } from "rsuite";

const Card = ({ post, currentUser }) => {
  const toaster = useToaster();
  const [likes, setLikes] = useState();
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState();
  const [showCaption, setShowCaption] = useState(false);

  const handleLikeClick = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      const errorMessage = (
        <Notification type="error" header="Please Login To Like" closable>
          You need to be logged in to like a post.
        </Notification>
      );
      toaster.push(errorMessage, {
        placement: "topEnd",
        duration: 3 * 1000,
      });
      return;
    }
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/likePost`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            postId: post._id,
            liked: !liked,
          }),
        }
      );
      liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
      if (!res.ok) {
        throw new Error("Failed to like post");
      }
    } catch (error) {
      const errorMessage = (
        <Notification type="error" header="Please Login To Like" closable>
          Unable to Like the Post. Please Try again later.
        </Notification>
      );
      toaster.push(errorMessage, {
        placement: "topEnd",
        duration: 3 * 1000,
      });
      return;
    }
    setLiked((prev) => !prev);
  };

  useEffect(() => {
    if(!currentUser) {
      setLiked(false) 
      return;
    }
    setLikes(post.likedBy.length);
    if (currentUser?.fullname) {
      const hasLiked = post.likedBy?.some(
        (obj) => obj.user.fullname === currentUser.fullname
      );
      setLiked(hasLiked);
    }
  }, [post, currentUser]);

  return (
    <div className="border-black bg-white rounded-xl w-[95%] max-w-md mx-auto mb-2 h-auto">
      <div className="w-full flex gap-4 items-center py-2 px-4">
        <Image
          height={200}
          width={200}
          src="/images/user.jpg"
          alt="user-image"
          className="h-12 w-12 cover border rounded-full "
        />
        <div className="flex flex-col">
          <div className="text-base font-semibold">{post.user.fullname}</div>
          <div className="text-sm flex gap-2 items-center">
            <CiLocationOn />
            <span>{post.location}</span>
          </div>
        </div>
      </div>
      <div className="w-full rounded-xl">
        <Image
          src={post.imageURL}
          alt="post"
          height={1024}
          width={1024}
          className="w-full rounded-xl object-cover lg:max-h-[550px]"
        />
      </div>

      <div className="ml-5 flex flex-row justify-start items-center gap-6">
        <div className="flex flex-row gap-3 items-center justify-center h-10 cursor-pointer">
          <div onClick={handleLikeClick}>
            {liked ? (
              <BsHeartFill size={20} fill="red" />
            ) : (
              <BsHeart size={20} fill="red" />
            )}
          </div>
          <div>{likes}</div>
        </div>
        <div className="flex flex-row gap-3 items-center justify-center h-10 cursor-not-allowed">
          <FaComment size={20} />
        </div>
        <div className="flex flex-row gap-3 items-center justify-center h-10 cursor-pointer">
          <PiShareFatFill size={20} />
        </div>
      </div>
    </div>
  );
};

export default Card;
