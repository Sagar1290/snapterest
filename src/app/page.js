import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Blogs from "@/components/home/Blogs";
import Hero from "@/components/home/Hero";
import Photographers from "@/components/home/Photographers";
import Posts from "@/components/home/Posts";
import AOS from "aos";
import "aos/dist/aos.css";

export const metadata = {
    title: 'snapterest',
    description: 'A perfect ',
}

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Posts />
                <Photographers />
                <Blogs />
            </main>
            <Footer />
        </>
    );
};

export default Home;
