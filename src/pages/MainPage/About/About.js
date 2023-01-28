import { Button } from "@material-tailwind/react";
import React from "react";
import coding from "../../../assests/code.png";
const About = () => {
  return (
    <div id="about">
      <div>
        <p className="text-4xl font-semibold text-center -mb-14">
          About <span className="text-light-blue-600">Me</span>
          <hr className="mt-1 border-1 w-32 mx-auto border-blue-gray-300" />
        </p>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse flex-col-reverse">
          <div className="mb-6 lg:mb-0 lg:w-1/4 lg:pr-5">
            <img src={coding} alt="" />
          </div>
          <div className="lg:w-3/4 mb-4">
            <p className="text-base">
              I am Maruf Hossain. As a MERN stack developer, my passion lies in
              creating dynamic and responsive web applications that provide
              seamless user experiences. I specialize in utilizing the latest
              technologies in the MERN stack to build high-performance web
              applications that meet the needs of businesses and organizations.
              <br />
              <br />
              In addition to my technical skills, I am also a quick learner and
              always looking to stay updated with the latest trends and
              technologies in the web development industry. I am a team player
              and have excellent communication skills, which enable me to work
              effectively with cross-functional teams.
              <br />
            </p>
            <div className="flex w-max gap-4 mt-4">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1aqW3QwSf2tuMTYKb2dJncbiGHewKj-hV/view?usp=share_link"
              >
                <Button variant="filled">My Resume</Button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/md-maruf-hossain"
              >
                <Button variant="outlined">GitHub</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
