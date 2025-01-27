import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/security.svg"
const Footer: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-black sm:px-10 pt-5">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width="150"
            height="150"
            x="100%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            stroke-width="0"
          ></path>
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        ></rect>
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#020202] to-[#0845df] opacity-20"></div>
      </div>
      <h1 className="m-7 text-2xl font-extrabold ">
        Let's Optimize <br />
        Your Supply Chain
      </h1>
      <div className="flex flex-wrap my-16">
        {/* Resources Section */}
        <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
          <div className="mb-4 w-full">
            <h4 className="text-gray-600 mb-4 font-mono">RESOURCES</h4>
            <ul>
              <li>
                <Link
                  to="/support"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-2 inline-block text-base "
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-2 inline-block text-base "
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h4 className="text-gray-600 mb-4 font-mono">SOFTWARE</h4>
            <ul>
              <li>
                <Link
                  to="/support"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-2 inline-block text-base "
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-2 inline-block text-base "
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-2 inline-block text-base "
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Section */}
        <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
          <div className="w-full">
            <h4 className="text-gray-600 mb-4 font-mono">COMPANY</h4>
            <ul>
              <li>
                <Link
                  to="/about"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-1 inline-block text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/monitoring"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-1 inline-block text-base "
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-1 inline-block text-base "
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/achievements"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-1 inline-block text-base"
                >
                  Achievements
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
          <div className="mb-4 w-full">
            <h4 className="text-gray-600 mb-4 font-mono">LINKS</h4>
            <ul>
              <li>
                <Link
                  to="/monitoring"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-1 inline-block text-base "
                >
                  Gates Control
                </Link>
              </li>
              <li>
                <Link
                  to="/installations"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-1 inline-block text-base"
                >
                  Intercoms
                </Link>
              </li>
              <li>
                <Link
                  to="/consulting"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-1 inline-block text-base"
                >
                  Cameras LPR
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-1 inline-block text-base"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-10 w-full">
            <h4 className="text-gray-600 mb-4 font-mono">FOLLOW</h4>
            <div className="mb-6 flex items-center">
              <Link
                to="/"
                className="text-neutral-200 hover:bg-primary hover:border-primary  flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5]  hover:scale-130 sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <FaFacebook />
              </Link>

              <Link
                to="/"
                className="text-neutral-200 hover:bg-primary hover:border-primary flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:scale-130 sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <FaLinkedin />
              </Link>

              <Link
                to="/"
                className="text-neutral-200 hover:bg-primary hover:border-primary flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:scale-130 sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <FaInstagramSquare />
              </Link>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
          <div className=" w-full mb-4">
            <h4 className="text-gray-600 mb-4 font-mono">TELÉFONO</h4>
            <ul>
              <li>
                <Link
                  to="/monitoring"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-1 inline-block text-base "
                >
                  +1 (305) 487-2372
                </Link>
              </li>
              <li>
                <Link
                  to="/installations"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-1 inline-block text-base"
                >
                  +57 300 6304401
                </Link>
              </li>
            </ul>
          </div>
          <div className=" w-full">
            <h4 className="text-gray-600 mb-4 font-mono">CORREO ELECTRÓNICO</h4>
            <ul>
              <li>
                <Link
                  to="/monitoring"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-1 inline-block text-base "
                >
                  innovacontrol@innovatech.net
                </Link>
                <Link
                  to="/monitoring"
                  className="efecto-basic efecto2 text-neutral-200 hover:text-primary mb-1 inline-block text-base "
                >
                  danny@innovatech.net
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Logo and Message */}
        <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
          <div className="w-full flex flex-col items-center justify-center">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gradient-to-r from-[#020202] to-[#0845df] py-2.5  sm:before:flex-1 w-[130%]">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div className="aspect-[577/310] w-[36.0625rem] opacity-30"></div>
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div className="aspect-[577/310] w-[36.0625rem] opacity-30"></div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm/6 text-gray-300">
            <strong className="font-semibold">GeneriCon 2023</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            Join us in Denver from June 7 – 9 to see what’s coming next.
          </p>
          <a
            href="#"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Register now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="h-5 w-5 text-gray-900"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
