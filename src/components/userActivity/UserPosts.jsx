"use client";

import Image from "next/image";
// import { PostContext, SessionContext } from "@/app/context";
import React, { useContext, useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { Loader, Notification, useToaster } from "rsuite";

const UserPosts = () => {
  const [isClient, setIsClient] = useState(false);
  const [postData, setPostData] = useState([]);
  const [fetchingPost, setFetchingPost] = useState(false);
  const toaster = useToaster();
  let session;
  if (isClient) {
    session = JSON.parse(localStorage.getItem("session"));
  }
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      fetchPosts();
    }
  }, [isClient]);

  const fetchPosts = async () => {
    if (!session) {
      console.log("Login to access your activity");
    }
    if (fetchingPost) return;
    setFetchingPost(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getPost?user=${session?.userID}`
      );
      if (!response.ok) {
        console.error("Network Error while fetching posts");
        return;
      }

      const data = await response.json();
      setPostData((prevPosts) => [...prevPosts, ...data["data"]]);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setFetchingPost(false);
    }
  };

  const handleDeletePost = async (post) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/deletePost`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            postID: post._id,
          }),
        }
      );
      if (res.status == 403) {
        const errorMessage = (
          <Notification type="error" header="Unable To Delete" closable>
            You are unauthorized to delete post.
          </Notification>
        );
        toaster.push(errorMessage, {
          placement: "topEnd",
          duration: 3 * 1000,
        });
        return;
      }
      if (!res.ok) {
        throw new Error("Failed to like post");
      }
      const successMessage = (
        <Notification type="success" header="Post Deleted" closable>
          Post Delete Successfully.
        </Notification>
      );
      toaster.push(successMessage, {
        placement: "topEnd",
        duration: 3 * 1000,
      });

      setPostData((prev) => prev.filter((item) => item._id !== post._id));
    } catch (error) {
      console.log(error);
      const errorMessage = (
        <Notification type="error" header="Unable To Delete" closable>
          Unable to Delete the Post. Please Try again later.
        </Notification>
      );
      toaster.push(errorMessage, {
        placement: "topEnd",
        duration: 3 * 1000,
      });
      return;
    }
  };

  const calculateLength = (post) => {
    return post?.likedBy?.length;
  };

  return (
    <section className="w-full bg-red-200 py-24 min-h-screen">
      <div className="mx-auto max-w-screen-xl lg:w-3/4 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Your Activity
          </h2>
        </header>
        <div className="mt-10">
          <h3>Your Posts</h3>
          {fetchingPost ? (
            <div className="w-full flex justify-center mt-5 mx-auto">
            <Loader size="lg" />
            </div>
          ) : postData.length > 0 ? (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {postData.map((post, id) => {
                return (
                  <li key={id}>
                    <div className="group block overflow-hidden">
                      <Image
                        src={post.imageURL}
                        alt="user post"
                        height={720}
                        width={720}
                        className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
                      />
                      <div className="flex gap-4 items-start justify-between pt-3">
                        <div className="relative">
                          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                            {post.createdAt.split("T")[0]} {post.location}
                          </h3>

                          <p className="mt-2">
                            <span className="tracking-wider text-gray-900">
                              Liked By : {calculateLength(post)}
                            </span>
                          </p>
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => handleDeletePost(post)}
                        >
                          <BsTrash size={20} />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-center text-lg font-medium text-gray-600 mt-8 p-4 bg-yellow-100 border border-yellow-500 rounded-md shadow-md">
              No posts created yet. Create one to show here!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserPosts;
