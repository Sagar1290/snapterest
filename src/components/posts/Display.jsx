"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import Card from "./Card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import { PostContext } from "@/app/context";

const Display = () => {
  const [isClient, setIsClient] = useState(false);
  const { postData, setPostData } = useContext(PostContext);
  const [fetchingPost, setFetchingPost] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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
    if (fetchingPost) return;
    setFetchingPost(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getPost?page=${page}&limit=20`
      );
      if (!response.ok) {
        console.error("Network Error while fetching posts");
        return;
      }

      const data = await response.json();
      if (data["data"].length === 0) {
        setHasMore(false);
      } else {
        setPostData((prevPosts) => [...prevPosts, ...data["data"]]);
        setPage(data["currentPage"] + 1);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setFetchingPost(false);
    }
  };

  return (
    <section className="w-full bg-red-200 py-24">
      <InfiniteScroll
        dataLength={postData.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={
          <div className="h-screen flex flex-col justify-center items-center opacity-80">
            <Image
              height={200}
              width={200}
              src="/images/CameraLoading.png"
              alt="camera-fetchingPost-image"
              className="w-16 h-16 md:h-24 md:l-24 lg:h-40 lg:w-40 cover animate-bounce"
            />
            <p className="mt-4 text-green text-3xl leading-loose">
              Please wait, fetchingPost...
            </p>
          </div>
        }
        endMessage={
          <div className="w-full mt-4 flex justify-center items-center">
            <p className="mt-4 text-green text-2xl leading-loose">
              No more posts to show
            </p>
          </div>
        }
      >
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            750: 2,
            900: 3,
            1250: 4,
            1600: 5,
          }}
        >
          <Masonry>
            {postData.map((post, id) => (
              <Card key={id} post={post} currentUser={session} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>
    </section>
  );
};

export default Display;
