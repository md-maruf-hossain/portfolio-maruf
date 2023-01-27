import React from "react";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import MySkills from "./MySkills/MySkills";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div id="home">
      <Hero/>
      <About/>
      <Projects/>
      <MySkills/>
      <Blog/>
      <Contact/>
    </div>
  );
};

export default Home;
