'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { Notification, useToaster } from 'rsuite'

const page = () => {
    const router = useRouter()
    const toaster = useToaster()
    const emailInputRef = useRef(null)
    const passwordInputRef = useRef(null)
    const [loading, setLoading] = useState(false);

    const handleUserLogin = async (e) => {
        e.preventDefault();

        if (!emailInputRef.current.value || !passwordInputRef.current.value) {
            const message = (
                <Notification type="error" header="Incomplete Form" closable>
                    Please fill out all required fields.
                </Notification>
            );
            toaster.push(message, "topEnd");
            return;
        }

        const formdata = {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value
        }

        try {
            setLoading(true)
            const res = await fetch('http://localhost:3000/api/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formdata),
            });

            if (!res.ok) {
                const errorText = await res.json();
                const errorMessage = (
                    <Notification type="error" header="Unable to Login" closable>
                        {errorText.error || "Invalid Email or Password."}
                    </Notification>
                );
                toaster.push(errorMessage, "topEnd");
                setLoading(false);
                return;
            }

            const response = await res.json();
            localStorage.setItem("token", response.token)
            localStorage.setItem("session", response.data)

            emailInputRef.current.value = "";
            passwordInputRef.current.value = "";

            const successMessage = (
                <Notification type="success" header="User Login Successful" closable>
                    User successfully logged in!
                </Notification>
            );
            toaster.push(successMessage, "topEnd");
            setLoading(false)
            router.push('/')
        } catch (error) {
            const errorMessage = (
                <Notification type="error" header="Network Error" closable>
                    {error.message || "An unexpected error occurred. Please try again later."}
                </Notification>
            )
            toaster.push(errorMessage, "topEnd");
            setLoading(false)
            return;
        }
    }

    const handleGoogleLogin = async (e) => {
        const res = await signIn();
        console.log(res)
        router.push('/')
    }

    return (
        <section className="join-section relative flex flex-wrap h-screen items-center bg-red-200">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                    <p className="mt-4 text-gray-500">
                        Where Art Meets the Lens
                    </p>
                </div>

                <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                id='email'
                                ref={emailInputRef}
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                id='password'
                                ref={passwordInputRef}
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            No account?
                            <Link className="underline" href="/register">Sign up</Link>
                        </p>

                        <button
                            type="submit"
                            onClick={handleUserLogin}
                            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            {loading ? "Logging in" : "Login"}
                        </button>
                    </div>
                    <div className="flex items-center justify-between mt-10">
                        <button
                            type="submit"
                            onClick={() => signIn()}
                            className="w-full inline-block rounded-lg bg-red-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Continue With Google
                        </button>
                    </div>
                </form>
            </div >

        </section >
    )
}

export default page