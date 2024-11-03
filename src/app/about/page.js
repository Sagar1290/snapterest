"use client";

import Footer from "@/components/home/Footer";
import LoginHeader from "@/components/LoginHeader";
import { FaCamera, FaUsers, FaShareAlt } from "react-icons/fa";

const AboutUs = () => {
    return (
        <>
            <LoginHeader />
            <section className="w-full min-h-screen flex flex-col gap-10 py-28 px-8 lg:px-20 bg-red-200">
                <div className="text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-wider mb-4 font-mono">About Snapterest</h1>
                    <p className="text-lg lg:text-xl max-w-3xl mx-auto">
                        At Snapterest, we believe that every photograph tells a unique story, and every perspective deserves to be seen.
                        Our mission is to create a dynamic space where photographers of all backgrounds can share, inspire, and connect through their art.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 justify-around items-center">
                    <div className="flex flex-col items-center text-center max-w-xs">
                        <FaCamera className="text-5xl lg:text-7xl text-blue-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-orange-500 font-mono">Capture Moments</h2>
                        <p className="text-base lg:text-lg mt-2">
                            Snapterest allows you to showcase your work and discover captivating photography from others around the world.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center max-w-xs">
                        <FaUsers className="text-5xl lg:text-7xl text-green-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-orange-500 font-mono">Join the Community</h2>
                        <p className="text-base lg:text-lg mt-2">
                            Connect with fellow photographers, engage in meaningful conversations, and grow your network within the community.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center max-w-xs">
                        <FaShareAlt className="text-5xl lg:text-7xl text-yellow-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-orange-500 font-mono">Share & Inspire</h2>
                        <p className="text-base lg:text-lg mt-2">
                            Inspire others with your vision and creativity, and be inspired by the diverse perspectives shared on Snapterest.
                        </p>
                    </div>
                </div>

                <div className="text-center my-10">
                    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg lg:text-xl max-w-2xl mx-auto">
                        To create a platform where photographers can connect, inspire, and grow through sharing their unique perspectives.
                    </p>
                    <h2 className="text-3xl font-semibold mt-10 mb-4">Our Vision</h2>
                    <p className="text-lg lg:text-xl max-w-2xl mx-auto">
                        We envision a world where every photographer has a place to be seen, appreciated, and inspired by others.
                    </p>
                </div>

            </section>
            <Footer />
        </>
    );
};

export default AboutUs;
