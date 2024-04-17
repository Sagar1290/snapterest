"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { data: session } = useSession();
  const [showSignOut, setShowSignOut] = useState(false);
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
          scrollPosition <= 30 || scrollPosition >= 600 ? "flex" : "hidden"
        } text-gray-100 transition justify-end w-full`}
      >
        <ul
          className={`${
            scrollPosition <= 30 ? "flex" : "hidden"
          } lg:flex flex-row gap-10 lg:pr-10 items-center`}
        >
          <li className="hover:text-gray-100/75">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-gray-100/75">
            <Link href="/posts">Posts</Link>
          </li>
          {session ? (
            <li
              className="h-10 w-10 rounded-full relative"
              onClick={() => setShowSignOut((prev) => !prev)}
            >
              <img
                src={session.user.image}
                alt="user"
                className="object-cover rounded-full"
              />
              {showSignOut && (
                <div
                  className="z-50 p-4 bg-gray-600 text-gray-50 absolute top-12 right-4 w-44 rounded-lg cursor-pointer"
                  onClick={signOut}
                >
                  <p>Sign Out</p>
                </div>
              )}
            </li>
          ) : (
            <li
              className="hover:text-gray-100/75 hover:cursor-pointer"
              onClick={signIn}
            >
              <span>Join Us</span>
            </li>
          )}
        </ul>

        <div
          className={`${scrollPosition <= 600 ? "hidden" : "block"} lg:hidden `}
        >
          <div onClick={handleShowMenu} className="text-2xl">
            {showMenu ? <IoClose /> : <IoMenu />}
          </div>
          <div className="rounded-lg w-[50%] absolute top-[100%] right-[5%] whitespace-nowrap bg-[#1B1212]">
            {showMenu && scrollPosition >= 600 ? (
              <ul className="space-y-1">
                {session ? (
                  <li>
                    <a className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                      {session.user.name}
                    </a>
                  </li>
                ) : (
                  <li>
                    <a
                      className="cursor-pointer block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                      onClick={signIn}
                    >
                      Join Us
                    </a>
                  </li>
                )}

                <li>
                  <Link
                    href="/about"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-50 hover:bg-gray-100 hover:text-gray-700"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/posts"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-50 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Posts
                  </Link>
                </li>
                {session && (
                  <li>
                    <a
                      onClick={signOut}
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                    >
                      Sign Out
                    </a>
                  </li>
                )}
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
