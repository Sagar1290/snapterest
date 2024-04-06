"use client";

import { useState, useEffect } from "react";

const Quotes = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quotes, setQuotes] = useState([
    {
      quote: "Photography is the story I fail to put into words.",
      writer: "Destin Sparks",
    },
    {
      quote:
        "In photography there is a reality so subtle that it becomes more real than reality.",
      writer: "Alfred Stieglitz",
    },
    {
      quote:
        "The camera is an instrument that teaches people how to see without a camera.",
      writer: "Dorothea Lange",
    },
    {
      quote:
        "Taking pictures is savoring life intensely, every hundredth of a second.",
      writer: "Marc Riboud",
    },
    {
      quote:
        "Photography takes an instant out of time, altering life by holding it still.",
      writer: "Dorothea Lange",
    },
    {
      quote:
        "The best thing about a picture is that it never changes, even when the people in it do.",
      writer: "Andy Warhol",
    },
    {
      quote: "A photograph is the pause button of life.",
      writer: "Ty Holland",
    },
    {
      quote:
        "Photography is the only language that can be understood anywhere in the world.",
      writer: "Bruno Barbey",
    },
    {
      quote:
        "To me, photography is an art of observation. It's about finding something interesting in an ordinary place.",
      writer: "Elliott Erwitt",
    },
    {
      quote: "Photography is the beauty of life captured.",
      writer: "Tara Chisholm",
    },
  ]);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <div className="">
      <h1
        className={`transition-opacity duration-500 text-2xl ${fadeIn ? "opacity-100" : "opacity-0"
          }`}
      >
        <span className="text-gray-500">{quotes[quoteIndex].quote}</span>
        <span className="text-gray-800">- {quotes[quoteIndex].writer}</span>
      </h1>
    </div>
  );
};

export default Quotes;
