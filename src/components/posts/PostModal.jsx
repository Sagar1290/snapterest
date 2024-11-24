import Image from "next/image";
import React, { useRef, useState } from "react";
import { Modal, Notification, useToaster } from "rsuite";
import { TfiThought } from "react-icons/tfi";
import CommentSection from "./CommentSection";

const PostModal = (props) => {
  const { showPostModal, setShowPostModal, postData } = { ...props };

  const toaster = useToaster();

  const handleClose = () => setShowPostModal(false);

  const availableTags = [
    "Photography",
    "Wedding",
    "Nature",
    "Art",
    "Travel",
    "Adventure",
    "Food",
    "Music",
    "Technology",
  ];

  const generateRandomTags = () => {
    const shuffledTags = [...availableTags].sort(() => 0.5 - Math.random());
    return shuffledTags.slice(0, 4);
  };

  return (
    <Modal size={"lg"} open={showPostModal} onClose={handleClose}>
      <Modal.Header closeButton={true} />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2  md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <div className="mt-4 flex items-center gap-4">
                  <Image
                    height={200}
                    width={200}
                    src={postData.user.photoURL}
                    alt=""
                    className="rounded-lg object-cover h-16 w-16"
                  />
                  <div>
                    <h3 className="text-lg/tight font-medium text-gray-900">
                      {postData.user.fullname}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-1">
                      {generateRandomTags().map((tag, index) => (
                        <span
                          key={index}
                          className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {postData.caption && (
                  <div className="mt-8 flex flex-row items-start gap-4">
                    <TfiThought size={28} />
                    <p className="text-gray-700">{postData.caption}</p>
                  </div>
                )}
                <CommentSection postData={postData} />
              </div>
            </div>

            <div>
              <Image
                src={postData.imageURL}
                className="rounded"
                alt={`${postData.fullname}-${postData.caption}`}
                height={1024}
                width={1024}
              />
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default PostModal;
