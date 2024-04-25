"use client";
import React from "react";
import Card from "./Card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


const Display = () => {
  return (
    <section className="w-full bg-red-200 py-24">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          <Card image={`/images/1000/image1.jpg`} />
          <Card image={`/images/bg-red.png`} />
          <Card image={`/images/1000/image4.jpg`} />
          <Card image={`/images/bottle.jpg`} />
          <Card image={`/images/1000/image5.jpg`} />
          <Card image={`/images/biker.jpg`} />
          <Card image={`/images/Mask-Group.webp`} />
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
};

export default Display;
