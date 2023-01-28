import React from "react";
import profile from "../../../assests/mine.png";
import TypingAnimation from "../../../components/TypingAnimation/TypingAnimation";
import { Button } from "@material-tailwind/react";
import SocialMedia from "../../../components/SocialMedia/SocialMedia";
import resume from "../../../assests/pdf/Maruf Hossain-resume.pdf";
const Hero = () => {
  return (
    <div
      className="flex flex-col justify-between px-4 mb-7 mx-auto lg:flex-row md:px-8 lg:max-w-screen-xl lg:mt-5"
      id="hero"
    >
      <div className="pt-16 mb-16 lg:mb-0 lg:pt-16 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <p className="text-base mb-2 md:text-lg">Hi, I am</p>
          <h2 className="max-w-lg mb-2 font-sans text-6xl font-bold tracking-tight text-light-blue-600 uppercase sm:text-4xl sm:leading-none">
            MD Maruf Hossain
          </h2>
          <TypingAnimation />
        </div>
        <div className="flex items-center gap-4 mb-6">
          <a
            rel="noopener noreferrer"
            href="mailto:mdmarufhossain6470@gmail.com"
          >
            <Button size="md" color="blue">
              Hire Me
            </Button>
          </a>
          <a rel="noopener noreferrer" href={resume} download>
            <Button size="md" color="blue" variant="outlined">
              Download Resume
            </Button>
          </a>
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
      <div>
        <img
          src={profile}
          className="object-cover object-top w-full h-64 mx-auto lg:h-auto md:max-w-sm"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
