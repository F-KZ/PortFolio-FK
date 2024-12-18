import dynamic from "next/dynamic";
//import { CommentSection } from "../src/components/comment";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { HeroSection } from "../src/components/hero";
import { ProjectSection } from "../src/components/project";
import { Skills } from "../src/components/skills";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../next-seo.config";
import { DefaultSeo } from 'next-seo';


// dynamic import Memory Section
const DynamicMemorySection = dynamic(() => import("../src/components/memory"), {
  ssr: false,
});

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
    <DefaultSeo {...SEO} />
        <Header />
        <HeroSection />
        <div className="flex flex-col sm:gap-16 md:gap-52 md:pt-36 gap-28">
        <Skills/>
        <span id="projet"></span>
        <ProjectSection /> 
        <span id="jeu"></span>
        <DynamicMemorySection />
        <span id="contact"></span>
        <Footer />
      </div>
    </>
  );
};

export default Home;
