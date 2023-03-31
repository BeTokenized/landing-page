import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import btCoin from "../../public/btCoin.svg";
const Navbar = () => {
  const [viewMobileMenu, setViewMobileMenu] = useState(false);
  return (
    <nav className="top-0 px-3 sm:px-4 py-3 w-full z-30 bg-transparent fixed ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <ScrollLink
          to="Hero"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
        >
          <p className="self-center text-2xl whitespace-nowrap cursor-pointer font-semibold flex items-center gap-2 text-white">
            <Image src={btCoin} alt="btCoin" />
            tokenized
          </p>
        </ScrollLink>
        <div className="hidden md:flex gap-10">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            <button className="self-center text-base whitespace-nowrap flex items-center gap-2 bg-gradient-to-b from-btGray to-white  bg-clip-text text-transparent">
              About
            </button>
          </ScrollLink>
          <ScrollLink
            to="Hero"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            <button className="self-center text-base whitespace-nowrap flex items-center gap-2 bg-gradient-to-b from-btGray to-white  bg-clip-text text-transparent">
              How it works?
            </button>
          </ScrollLink>
          <ScrollLink
            to="team"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            <button className="self-center text-base whitespace-nowrap flex items-center gap-2 bg-gradient-to-b from-btGray to-white  bg-clip-text text-transparent">
              Our Team
            </button>
          </ScrollLink>
        </div>

        <button
          onClick={() => {
            setViewMobileMenu(!viewMobileMenu);
          }}
          className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:ring-2   focus:ring-peach"
        >
          {viewMobileMenu ? (
            <svg
              className="md:hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
        {viewMobileMenu ? (
          <div className="w-full md:hidden" id="mobile-menu">
            <ul className="flex flex-col mt-4 list-none items-center text-center">
              <li>
                <Link
                  href="/login"
                  className="block py-2 px-4 hover:text-white  border-peach"
                >
                  LOGIN
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
