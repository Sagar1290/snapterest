"use client";
import LoginHeader from "@/components/LoginHeader";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useRef, useState } from "react";
import { Notification, useToaster } from "rsuite";

const page = () => {
  const router = useRouter();
  const toaster = useToaster();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleUserLogin = async (e) => {
    e.preventDefault();

    if (!emailInputRef.current.value || !passwordInputRef.current.value) {
      showNotification(
        "error",
        "Incomplete Form",
        "Please fill out all required fields."
      );
      return;
    }

    const formdata = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );

      if (!res.ok) {
        const errorText = await res.json();
        showNotification(
          "error",
          "Unable to Login",
          errorText.error || "Invalid Email or Password."
        );
        setLoading(false);
        return;
      }

      const response = await res.json();
      localStorage.setItem("token", response.token);
      localStorage.setItem("session", JSON.stringify(response.data));

      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";

      showNotification(
        "success",
        "User Login Successful",
        "User successfully logged in!"
      );
      setLoading(false);
      router.push("/");
    } catch (error) {
      showNotification(
        "error",
        "Network Error",
        error.message || "An unexpected error occurred. Please try again later."
      );
      setLoading(false);
    }
  };

  const showNotification = (type, header, message) => {
    const notification = (
      <Notification type={type} header={header} closable>
        {message}
      </Notification>
    );
    toaster.push(notification, {
      placement: "topEnd",
      duration: 3000,
    });
  };

  return (
    <>
      <LoginHeader />
      <main>
        <section className="join-section relative flex flex-wrap min-h-screen items-center bg-red-200">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Get started today!
              </h1>
              <p className="mt-4 text-gray-500">Where Art Meets the Lens</p>
            </div>

            <form
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
              onSubmit={handleUserLogin}
            >
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    ref={emailInputRef}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    required
                    ref={passwordInputRef}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  No account?
                  <Link className="underline" href="/register">
                    Sign up
                  </Link>
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  {loading ? "Logging in" : "Login"}
                </button>
              </div>
              <div className="flex items-center justify-between mt-10">
                <button
                  type="button"
                  disabled={loading}
                  onClick={() => signIn()}
                  className="w-full inline-block rounded-lg bg-red-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Continue With Google
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
