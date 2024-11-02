"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import { HiCamera } from "react-icons/hi";
import { IoClose, IoMenu } from "react-icons/io5";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Modal from "react-modal";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const imgRef = useRef(null);

  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const handleImageInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImgUrl(URL.createObjectURL(file));
    }
  };

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <header className="bg-black w-full fixed top-0 p-6 z-50 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="text-white text-2xl font-bold tracking-[10px] hover:no-underline hover:text-gray-100/75"
          >
            SNAPTEREST
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
                  <Link href="/login" className=" text-white hidden lg:block">
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
                  className="h-10 w-10 rounded-full relative cursor-pointer"
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
                    <li onClick={signIn}>
                      <p className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                        Login To Create Post
                      </p>
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
        </div>
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          ariaHideApp={false}
          className="bg-red-200 shadow-md w-[90%] max-w-lg p-6 rounded-md absolute top-40 left-1/2 -translate-x-1/2"
        >
          <form className="flex flex-col items-center justify-center gap-2 outline-none">
            <input
              type="file"
              ref={imgRef}
              className="hidden outline-none focus:outline-none"
              onChange={handleImageInput}
              accept="image/*"
            />
            {image ? (
              <img
                src={imgUrl}
                alt="selected image"
                className="h-44 w-44 object-contain"
              />
            ) : (
              <HiCamera
                className="text-7xl text-gray-500 cursor-pointer hover:brightness-110"
                onClick={() => imgRef.current.click()}
              />
            )}
            <input
              placeholder="Enter your caption..."
              maxLength="150"
              className="bg-white rounded-lg text-gray-800 w-[80%] focus:ring-0 outline-none text-center p-4 my-2"
              type="text"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-red-600 disabled:bg-gray-400 text-white rounded-lg disabled:cursor-not-allowed hover:brightness-110 disabled:hover:brightness-100"
            >
              Upload Post
            </button>
            <div className="absolute top-4 right-4 flex flex-row items-center gap-2">
              {image && (
                <FaTrash
                  className="cursor-pointer text-lg hover:text-red-600 transition duration-300"
                  onClick={() => {
                    setImage(null);
                    setImgUrl(null);
                  }}
                />
              )}
              <IoClose
                className="cursor-pointer text-2xl hover:text-red-600 transition duration-300"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </form>
        </Modal>
      )}
    </header>
  );
};

export default Header;
