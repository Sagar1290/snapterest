import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/home/Hero";
import Posts from "./components/home/Posts";
import Photographers from "./components/home/Photographers";
import Blogs from "./components/home/Blogs";

const Home = () => {
    return (
        <>
            <main>
                <Hero />
                <Posts />
                <Photographers />
                <Blogs />
            </main>
        </>
    );
};

export default Home;
