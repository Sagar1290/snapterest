import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer class="bg-black">
      <div class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <Link
            class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
            href="/"
          >
            <span class="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div class="lg:flex lg:items-end lg:justify-between">
          <div>
            <div class="flex justify-center text-teal-100 lg:justify-start text-2xl font-bold tracking-[10px]">
              SNAPTEREST
            </div>

            <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <Link
                class="text-gray-100 transition hover:text-gray-100/75"
                href="#"
              >
                {" "}
                About{" "}
              </Link>
            </li>

            <li>
              <Link
                class="text-gray-100 transition hover:text-gray-100/75"
                href="#"
              >
                {" "}
                Services{" "}
              </Link>
            </li>

            <li>
              <Link
                class="text-gray-100 transition hover:text-gray-100/75"
                href="#"
              >
                {" "}
                Projects{" "}
              </Link>
            </li>

            <li>
              <Link
                class="text-gray-100 transition hover:text-gray-100/75"
                href="#"
              >
                {" "}
                Blog{" "}
              </Link>
            </li>
          </ul>
        </div>

        <p class="mt-12 text-center text-sm text-gray-400 lg:text-right">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
