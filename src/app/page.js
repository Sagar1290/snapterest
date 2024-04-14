import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/home/Hero";
import Posts from "./components/home/Posts";
import Photographers from "./components/home/Photographers";
import Blogs from "./components/home/Blogs";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
