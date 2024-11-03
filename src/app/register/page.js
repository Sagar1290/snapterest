'use client'
import LoginHeader from '@/components/LoginHeader'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { Notification, useToaster } from 'rsuite'

const page = () => {
    const router = useRouter()
    const toaster = useToaster()
    const nameInputRef = useRef(null)
    const emailInputRef = useRef(null)
    const passwordInputRef = useRef(null)
    const cPasswordInputRef = useRef(null)
    const [passwordMatched, setPasswordMatched] = useState(true)
    const [loading, setLoading] = useState(false);

    const handleUserRegister = async (e) => {
        e.preventDefault();

        if (!emailInputRef.current.value || !nameInputRef.current.value || !passwordInputRef.current.value) {
            const message = (
                <Notification type="error" header="Incomplete Form" closable>
                    Please fill out all required fields.
                </Notification>
            );
            toaster.push(message, "topEnd");
            return;
        }

        if (!passwordMatched) {
            const message = (
                <Notification type="error" header="Password Mis-match" closable>
                    Please ensure Password and Confirm Password are the same.
                </Notification>
            );
            toaster.push(message, "topEnd")
            return;
        }

        const formdata = {
            email: emailInputRef.current.value,
            fullname: nameInputRef.current.value,
            password: passwordInputRef.current.value
        }

        try {
            setLoading(true);
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formdata),
            });

            if (!res.ok) {
                const errorText = await res.json();
                const errorMessage = (
                    <Notification type="error" header="Unable to Register" closable>
                        {errorText.error || "Unable to Register user. Try again Later."}
                    </Notification>
                );
                toaster.push(errorMessage, "topEnd");
                setLoading(false)
                return;
            }

            const response = await res.json();

            emailInputRef.current.value = "";
            nameInputRef.current.value = "";
            passwordInputRef.current.value = "";
            cPasswordInputRef.current.value = "";

            const successMessage = (
                <Notification type="success" header="Registration Successful" closable>
                    User registered successfully!
                </Notification>
            );
            toaster.push(successMessage, "topEnd");
            setLoading(false)
            router.push('/login')
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

    const handlePasswordMatch = () => {
        if (cPasswordInputRef.current.value === passwordInputRef.current.value) {
            setPasswordMatched(true);
        } else {
            setPasswordMatched(false)
        }
        return;
    }

    return (
        <>
            <LoginHeader />
            <main>
                <section className="join-section relative flex flex-wrap h-screen lg:items-center bg-red-200">
                    <div className="w-full px-4 py-5 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                        <div className="mx-auto max-w-lg text-center">
                            <h1 className="text-2xl font-bold sm:text-3xl">Join Photographer's Community!</h1>

                            <p className="mt-4 text-gray-500 px-12 text-balance">
                                We are making photographs to understand what our lives mean to us.
                            </p>
                        </div>

                        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                            <div>
                                <label htmlFor="fullname" className="sr-only">Name</label>
                                <div className="relative">
                                    <input
                                        id='fullname'
                                        type="text"
                                        ref={nameInputRef}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                                        placeholder="Enter Your Name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <div className="relative">
                                    <input
                                        id='email'
                                        type="email"
                                        ref={emailInputRef}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                                        placeholder="Enter email"

                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <div className="relative">
                                    <input
                                        id='password'
                                        type="password"
                                        ref={passwordInputRef}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                                        placeholder="Create password"
                                        onChange={handlePasswordMatch}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="cPassword" className="sr-only">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        id='cPassword'
                                        type="password"
                                        ref={cPasswordInputRef}
                                        className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${passwordMatched ? "outline-none" : "outline-red-500"}`}
                                        placeholder="Re-write the password"
                                        onChange={handlePasswordMatch}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-500">
                                    Already have an account?
                                    <Link className="underline" href="/login">Login Here</Link>
                                </p>

                                <button
                                    type="submit"
                                    className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                                    onClick={handleUserRegister}
                                >
                                    {loading ? "Registering" : "Register"}
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
                    </div>
                </section>
            </main>
        </>
    )
}

export default page