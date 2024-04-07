import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/home/Hero";
import Header from "./components/Header";
import Posts from "./components/home/Posts";

const Home = () => {
    return (
        <>
            <main>
                <Hero />
                <Posts />
            </main>
        </>
    );
};

export default Home;
