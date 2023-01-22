import React from "react";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Hero from "./Hero";
import MySkills from "./MySkills";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <MySkills/>
      <Projects/>
      <Blog/>
      <Contact/>
    </div>
  );
};

export default Home;
