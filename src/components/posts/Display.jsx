import React from "react";
import Card from "./Card";

const Display = () => {
  return (
    <section className="w-full bg-red-200 py-24">
      <Card image={`/images/1000/image1.jpg`} />
      <Card image={`/images/bg-red.png`} />
      <Card image={`/images/1000/image4.jpg`} />
      <Card image={`/images/bottle.jpg`} />
      <Card image={`/images/1000/image5.jpg`} />
      <Card image={`/images/biker.jpg`} />
      <Card image={`/images/Mask-Group.webp`} />
      <Card image={`/images/Mask-Group-Sm.webp`} />
    </section>
  );
};

export default Display;
