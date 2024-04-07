"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrollPosition >= 600
          ? "bg-black justify-between"
          : "bg-transparent justify-end"
      } w-full fixed top-0 flex items-center p-6 z-50 transition-all duration-300`}
    >
      {scrollPosition >= 600 ? (
        <div className="text-white text-2xl font-bold tracking-[10px]">
          <Link href="/">SNAPTEREST</Link>
        </div>
      ) : (
        ""
      )}
      <nav
        className={`${
          scrollPosition >= 30 && scrollPosition <= 600 ? "hidden" : ""
        } text-white flex justify-end w-full`}
      >
        <ul
          className={`${
            scrollPosition <= 30 ? "flex" : "hidden"
          } lg:flex flex-row gap-10 lg:pr-10`}
        >
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/post">Posts</Link>
          </li>
          <li>
            <Link href="/join">Join Us</Link>
          </li>
        </ul>

        <div
          className={`${scrollPosition <= 600 ? "hidden" : "block"} lg:hidden`}
        >
          <div onClick={handleShowMenu} className="text-2xl">
            {showMenu ? <IoClose /> : <IoMenu />}
          </div>
          <div className="absolute top-[100%] right-[5%] whitespace-nowrap">
            {showMenu ? (
              <ul className="bg-sky-200 flex flex-col gap-4 px-10 text-lg text-black font-semibold">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/post">Posts</Link>
                </li>
                <li>
                  <Link href="/join">Join Us</Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
