import React from "react";
import profile from "../../assests/mine.png";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between px-4 mx-auto lg:flex-row md:px-8 lg:max-w-screen-xl lg:mt-5">
      <div className="pt-16 mb-16 lg:mb-0 lg:pt-16 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <p className="text-base text-gray-700 mb-2 md:text-lg">Hi, I am</p>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-light-blue-600 uppercase sm:text-4xl sm:leading-none">
            MD Maruf Hossain
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
        </div>
        <div className="flex items-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </a>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
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
