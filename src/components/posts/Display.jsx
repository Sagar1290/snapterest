"use client";
import React from "react";
import Card from "./Card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const postData = [
  {
    image: "/images/1000/image1.jpg",
    author: "Sagar Prajapati",
    location: "India",
  },
  {
    image: "/images/bg-red.png",
    author: "sam kohli",
    location: "India",
  },
  {
    image: "/images/1000/image4.jpg",
    author: "Jacob Owens",
    location: "Aus",
  },
  {
    image: "/images/bottle.jpg",
    author: "Annie Sprat",
    location: "London",
  },
  {
    image: "/images/1000/image5.jpg",
    author: "Li Shanting",
    location: "Nepal",
  },
  {
    image: "/images/1000/image7.jpg",
    author: "Tim Massholder",
    location: "Russia",
  },
  {
    image: "/images/1000/image3.jpg",
    author: "Kylee Lucas",
    location: "Thailand",
  },
  {
    image: "/images/image11.jpg",
    author: "Krishnan Swami",
    location: "India",
  },
  {
    image: "/images/image10.jpg",
    author: "Pal Lucas",
    location: "Mongolia",
  },
  {
    image: "/images/image14.jpg",
    author: "Mohammad Nohassi",
    location: "India",
  },
  {
    image: "/images/image12.jpg",
    author: "Anuj Yadav",
    location: "India",
  },
  {
    image: "/images/image15.jpg",
    author: "Elena saidey",
    location: "New York",
  },
  {
    image: "/images/image16.jpg",
    author: "Fer Nando",
    location: "Guinea",
  },
];

const Display = () => {
  return (
    <section className="w-full bg-red-200 py-24">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1800: 4 }}
      >
        <Masonry>
          {postData.map((post, id) => {
            return <Card key={id} post={post} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
};

export default Display;
