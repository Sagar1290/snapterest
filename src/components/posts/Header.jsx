"use client";
import SessionContext from "@/app/context";
import Link from "next/link";
import React, { useContext, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import CreatePostModal from "./CreatePostModal";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  let session;
  if (typeof window !== "undefined") {
    session = JSON.parse(localStorage.getItem("session"));
  }
  const handleSignOut = () => {
    localStorage.clear("token");
    localStorage.clear("session")
  };

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="bg-black w-full fixed top-0 p-6 z-50 transition-all duration-300 h-20" >
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="text-white text-2xl font-bold tracking-[10px] hover:no-underline hover:text-gray-100/75"
          >
            SNAPVERSE
          </Link>
        </div>

        <div className="md:flex md:items-center md:gap-12">
          <nav className="hidden md:block text-gray-100 w-full">
            <ul className="flex items-center flex-row gap-10 lg:pr-10">
              {/* <div className="relative">
                <input
                  type="text"
                  id="Search"
                  placeholder="Search for..."
                  className="w-full rounded-md border-gray-200 py-2.5 pe-10 px-2 shadow-sm text-gray-800"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button
                    type="button"
                    className="text-gray-600 hover:text-gray-700"
                  >
                    <FaSearch />
                  </button>
                </span>
              </div> */}
              <li className="hover:text-gray-100/75 cursor-pointer">
                {session ? (
                  <div
                    className="flex gap-2 items-center"
                    onClick={() => setIsOpen(true)}
                  >
                    <p className="hidden lg:block">Create Post</p>
                    <MdOutlineAddCircleOutline className="text-xl" />
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="text-white hover:text-gray-100/75 hidden lg:block"
                  >
                    Login to create post
                  </Link>
                )}
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray-100/75 "
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              {session ? (
                <li
                  className="h-8 w-8 rounded-full relative cursor-pointer"
                  onClick={() => setShowSignOut((prev) => !prev)}
                >
                  <img
                    src={session.photoURL}
                    alt="user"
                    className="object-cover rounded-full"
                  />
                  {showSignOut && (
                    <div
                      className="z-50 p-4 bg-gray-600 text-gray-50 absolute top-12 right-4 w-44 rounded-lg cursor-pointer"
                      onClick={handleSignOut}
                    >
                      <p>Sign Out</p>
                    </div>
                  )}
                </li>
              ) : (
                <Link
                  className="text-white hover:text-gray-100/75 hover:cursor-pointer"
                  href="/login"
                >
                  <span>Join Us</span>
                </Link>
              )}
            </ul>
          </nav>
          <div className="text-white block md:hidden">
            <div onClick={handleShowMenu} className="text-2xl cursor-pointer">
              {showMenu ? <IoClose /> : <IoMenu />}
            </div>
            <div className="w-[50%] absolute top-[100%] right-[5%] whitespace-nowrap bg-[#1B1212] rounded-lg">
              {showMenu ? (
                <ul className="space-y-1">
                  {session ? (
                    <li>
                      <a className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                        {session.fullname}
                      </a>
                    </li>
                  ) : (
                    <li>
                      <Link
                        className="cursor-pointer block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        href="/login"
                      >
                        Join Us
                      </Link>
                    </li>
                  )}
                  {/* <div className="relative px-1">
                    <input
                      type="text"
                      id="Search"
                      placeholder="Search for..."
                      className="w-full rounded-md border-gray-200 py-2 pe-10 px-2 shadow-sm text-gray-700"
                    />

                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                      <button
                        type="button"
                        className="text-gray-600 hover:text-gray-700"
                      >
                        <FaSearch />
                      </button>
                    </span>
                  </div> */}
                  {session ? (
                    <li>
                      <p
                        onClick={() => {
                          setShowMenu((prev) => !prev);
                          setIsOpen(true);
                        }}
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-50 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                      >
                        Create Post
                      </p>
                    </li>
                  ) : (
                    <Link href="/login">
                      <p className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                        Login To Create Post
                      </p>
                    </Link>
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
                        onClick={handleSignOut}
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
        </div>
      </div>
      {isOpen && <CreatePostModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
