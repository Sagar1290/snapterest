"use client";
import LoginHeader from "@/components/LoginHeader";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { Notification, useToaster } from "rsuite";

const page = () => {
  const router = useRouter();
  const toaster = useToaster();
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const cPasswordInputRef = useRef(null);
  const [passwordMatched, setPasswordMatched] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleUserRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !emailInputRef.current.value ||
      !nameInputRef.current.value ||
      !passwordInputRef.current.value ||
      !cPasswordInputRef.current.value
    ) {
      showNotification(
        "error",
        "Incomplete Form",
        "Please fill out all required fields."
      );
      setLoading(false);
      return;
    }

    if (!passwordMatched) {
      showNotification(
        "error",
        "Password Mis-match",
        "Please ensure Password and Confirm Password are the same."
      );
      setLoading(false);
      return;
    }

    const formData = {
      email: emailInputRef.current.value,
      fullname: nameInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const responseText = await res.json();

      if (res.status === 409) {
        showNotification(
          "error",
          "Unable to Register",
          responseText.error || "Email already exists."
        );
        setLoading(false);
        return;
      }

      if (!res.ok) {
        showNotification(
          "error",
          "Unable to Register",
          responseText.error || "Unable to register user. Try again later."
        );
        setLoading(false);
        return;
      }

      showNotification(
        "success",
        "Registration Successful",
        "User registered successfully! Please login to continue."
      );
      resetForm();
      setLoading(false);
      router.push("/login");
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

  const resetForm = () => {
    emailInputRef.current.value = "";
    nameInputRef.current.value = "";
    passwordInputRef.current.value = "";
    cPasswordInputRef.current.value = "";
  };

  const handlePasswordMatch = () => {
    if (cPasswordInputRef.current.value === passwordInputRef.current.value) {
      setPasswordMatched(true);
    } else {
      setPasswordMatched(false);
    }
    return;
  };

  return (
    <>
      <LoginHeader />
      <main>
        <section className="join-section relative flex flex-wrap min-h-screen lg:items-center bg-red-200">
          <div className="w-full px-4 py-24 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Join Photographer's Community!
              </h1>

              <p className="mt-4 text-gray-500 px-12 text-balance">
                We are making photographs to understand what our lives mean to
                us.
              </p>
            </div>

            <form
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
              onSubmit={handleUserRegister}
            >
              <div>
                <label htmlFor="fullname" className="sr-only">
                  Name
                </label>
                <div className="relative">
                  <input
                    id="fullname"
                    type="text"
                    required
                    ref={nameInputRef}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                    placeholder="Enter Your Name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    required
                    ref={emailInputRef}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
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
                    id="password"
                    type="password"
                    required
                    ref={passwordInputRef}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                    placeholder="Create password"
                    onChange={handlePasswordMatch}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cPassword" className="sr-only">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="cPassword"
                    type="password"
                    required
                    ref={cPasswordInputRef}
                    className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${
                      passwordMatched ? "outline-none" : "outline-red-500"
                    }`}
                    placeholder="Re-write the password"
                    onChange={handlePasswordMatch}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Already have an account?
                  <Link className="underline" href="/login">
                    Login Here
                  </Link>
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  {loading ? "Registering" : "Register"}
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
