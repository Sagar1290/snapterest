"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import { Pagination } from "rsuite";

const Display = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  let session;
  if (isClient) {
    session = JSON.parse(localStorage.getItem("session"));
  }
  const currentUser = session?.user
  const [postData, setPostData] = useState();
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetchPostData = async () => {
      const postData = await getPostData();
      setPostData(postData);
      setLoading(false);
    };
    fetchPostData();
  }, []);

  const getPostData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getPost`
      );
      if (!res.ok) {
        showNotification(
          "error",
          "Network Error",
          "Error while fetching posts!!"
        );
        return;
      }
      const data = await res.json();

      return data["data"];
    } catch (error) {
      console.log(error);
      showNotification(
        "error",
        "Network Error",
        error.message || "An unexpected error occurred. Please try again later."
      );
      return;
    }
  };

  const showNotification = (type, header, message) => {
    const notification = (
      <Notification type={type} header={header} closable>
        {message}
      </Notification>
    );
    toaster.push(notification, {
      placement: "topEnd",
      duration: 2000,
    });
  };

  return (
    <section className="w-full bg-red-200 py-24">
      {loading ? (
        <div className="h-screen flex flex-col justify-center items-center opacity-80">
          <Image
            height={200}
            width={200}
            src="/images/CameraLoading.png"
            alt="camera-loading-image"
            className="w-16 h-16 md:h-24 md:l-24 lg:h-48 lg:w-48 cover animate-bounce"
          />
          <p className="mt-4 text-green text-3xl leading-loose">
            Please wait, loading...
          </p>
        </div>
      ) : (
        <div>
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
              {postData?.map((post, id) => {
                return <Card key={id} post={post} currentUser={session}/>;
              })}
            </Masonry>
          </ResponsiveMasonry>
          <div className="mt-10 w-full flex justify-center">
            <Pagination
              prev
              last
              next
              first
              size="lg"
              total={20}
              limit={6}
              activePage={activePage}
              onChangePage={setActivePage}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Display;
