import React from "react";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import ProjectSection from "../components/ProjectSection";

function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <br />
      <br />
      <ProjectSection />
      <br/>
      <br/>
      <Footer />
    </>
  );
}

export default Home;
