import LoginHeader from "@/components/LoginHeader";
import UserPosts from "@/components/userActivity/UserPosts";
import React from "react";

const page = () => {
  return (
    <>
      <LoginHeader />
      <main>
        <UserPosts />
      </main>
    </>
  );
};

export default page;
