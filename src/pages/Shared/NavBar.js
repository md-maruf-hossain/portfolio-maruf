import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1440 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-lg lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-base hover:border-b-2 hover:border-light-blue-400"
      >
        <Link to="#home" className="flex items-center " smooth>
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-base  hover:border-b-2 hover:border-light-blue-400"
      >
        <Link to="#about" className="flex items-center" smooth>
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-base hover:border-b-2 hover:border-light-blue-400"
      >
        <Link to="#projects" className="flex items-center" smooth>
          Projects
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-base hover:border-b-2 hover:border-light-blue-400"
      >
        <Link to="#blog" className="flex items-center" smooth>
          Blog
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-base hover:border-b-2 hover:border-light-blue-400"
      >
        <Link to="#contact" className="flex items-center" smooth>
          Contact
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-base"
      >
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1aqW3QwSf2tuMTYKb2dJncbiGHewKj-hV/view?usp=share_link"
        >
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            Resume
          </Button>
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto rounded-none shadow-white py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-bold text-md"
        >
          <span>Maruf Hossain</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Resume</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
};

export default NavBar;
