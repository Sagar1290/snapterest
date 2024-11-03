import Link from "next/link";
import React from "react";

const LoginHeader = () => {
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
      </div>
    </header>
  );
};

export default LoginHeader;
