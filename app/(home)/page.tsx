import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
    <div className="min-h-screen bg-black overflow-hidden ">
      <div className="dark:bg-black bg-white relative dark:bg-grid-white/[0.03] bg-grid-black/[0.2] ">
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-23 bg-gradient-to-t form-black absolute -bottom-5 left-0 xl:bottom-0 w-full" />
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skill />
        <Projects />
        <Footer />
      </div>
    </div>
   

   
    </>
  );
};

export default page;
