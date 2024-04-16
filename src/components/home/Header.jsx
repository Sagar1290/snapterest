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
      } w-full fixed top-0 flex items-center p-6 z-50 transition-all duration-300 overflow-hidden`}
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
          scrollPosition <= 30 || scrollPosition >= 600 ? "flex" : "hidden"
        } text-gray-100 transition justify-end w-full`}
      >
        <ul
          className={`${
            scrollPosition <= 30 ? "flex" : "hidden"
          } lg:flex flex-row gap-10 lg:pr-10`}
        >
          <li className="hover:text-gray-100/75">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-gray-100/75">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="hover:text-gray-100/75">
            <Link href="/join">Join Us</Link>
          </li>
        </ul>

        <div
          className={`${scrollPosition <= 600 ? "hidden" : "block"} lg:hidden`}
        >
          <div onClick={handleShowMenu} className="text-2xl">
            {showMenu ? <IoClose /> : <IoMenu />}
          </div>
          <div className="w-[50%] absolute top-[100%] right-[5%] whitespace-nowrap">
            {showMenu && scrollPosition >= 600 ? (
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    General
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Teams
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Billing
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Invoices
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Account
                  </a>
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
