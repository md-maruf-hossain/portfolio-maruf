import React from "react";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100 text-gray-900">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="">
          <div className="flex flex-col self-center text-lg text-center mb-5 md:block lg:col-start-1 md:space-x-6">
            <span>Copyright © 2023, Maruf Hossain - All rights reserved</span>
          </div>
          <div className="flex justify-center">
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
