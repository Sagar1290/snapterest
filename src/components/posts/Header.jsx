"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <header class="bg-black w-full fixed top-0 p-6 z-50 transition-all duration-300 overflow-hidden">
      <div class="flex items-center justify-between">
        <div className="text-white text-2xl font-bold tracking-[10px]">
          <Link href="/">SNAPTEREST</Link>
        </div>

        <div class="md:flex md:items-center md:gap-12">
          <nav class="hidden md:block text-gray-100 w-full">
            <ul class="flex items-center flex-row gap-10 lg:pr-10">
              <div class="relative">
                <input
                  type="text"
                  id="Search"
                  placeholder="Search for..."
                  class="w-full rounded-md border-gray-200 py-2.5 pe-10 px-2 shadow-sm sm:text-sm"
                />

                <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button
                    type="button"
                    class="text-gray-600 hover:text-gray-700"
                  >
                    <FaSearch />
                  </button>
                </span>
              </div>
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
          </nav>
          <div className="text-white block md:hidden">
            <div onClick={handleShowMenu} className="text-2xl">
              {showMenu ? <IoClose /> : <IoMenu />}
            </div>
            <div className="w-[50%] absolute top-[100%] right-[5%] whitespace-nowrap">
              {showMenu ? (
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
        </div>
      </div>
    </header>
  );
};

export default Header;
