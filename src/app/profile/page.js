import LoginHeader from "@/components/LoginHeader";
import ProfileComponent from "@/components/userAccount/ProfileComponent";
import React from "react";

const page = () => {
  return (
    <>
      <LoginHeader />
      <main>
        <ProfileComponent />
      </main>
    </>
  );
};

export default page;
