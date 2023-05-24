/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";

const footer = () => {
  return (
    <>
      <Head></Head>

      <div className="w-full h-auto bg-white border border-t-2  hidden lg:block shadow-2xl pb-7">
        <div className=" flex justify-between items-center px-20 pt-10 ">
          <div className="w-auto mr-14">
            <a href="#">
              <img className="h-16 w-34" src="/nirmaan_logo.png" alt="" />
            </a>
          </div>

          <div className="flex justify-between items-center space-x-6 ">
            <a
              href=""
              title="Facebook"
              className="w-8 h-8 bg-gray-300  hover:bg-blue-700 rounded-full hover:text-white  transition hover:duration-300 flex justify-center items-center"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href=""
              title="Instagram"
              className="w-8 h-8 bg-gray-300  rounded-full hover:bg-blue-500 hover:text-white transition hover:duration-300 flex justify-center items-center"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href=""
              title="WhatsApp"
              className="w-8 h-8 bg-gray-300  rounded-full hover:bg-green-600 hover:text-white transition hover:duration-300 flex justify-center items-center"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <a
              href=""
              title="Linkedin"
              className="w-8 h-8 bg-gray-300  rounded-full hover:bg-blue-900 hover:text-white transition hover:duration-300 flex justify-center items-center"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href=""
              title="Twitter"
              className="w-8 h-8 bg-gray-300  rounded-full hover:bg-blue-400 hover:text-white transition hover:duration-300 flex justify-center items-center"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href=""
              title="Youtube"
              className="w-8 h-8 bg-gray-300  rounded-full hover:bg-red-600 hover:text-white transition hover:duration-300 flex justify-center items-center"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </div>

          <div className="inline-block group  ">
            <button
              className="font-bold flex justify-center items-center py-2 px-3 w-40 mx-1 text-sm inter border  bg-blue-400 transition ease-in-out duration-200 hover:bg-nirmaan-dark text-blue-50"
              type="button"
              contenteditable="false"
            >
              Donate Now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className="w-6 h-6 group-hover:translate-x-2 transition hover:duration-1000 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className=" flex justify-between px-20 pt-10 pb-4">
          <div>
            <ul className="flex">
              <a
                href=""
                className="mt-2  font-semibold text-gray-700 text-[15px] hover:text-nirmaan "
              >
                <li>About Nirmaan</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-700 text-[15px] hover:text-nirmaan"
              >
                <li>Careers</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-700 text-[15px] hover:text-nirmaan"
              >
                <li>Contact Us</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-700 text-[15px] hover:text-nirmaan"
              >
                <li>Email Subscriptions</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-700 text-[15px] hover:text-nirmaan"
              >
                <li>Support</li>
              </a>
            </ul>
          </div>

          <div>
            <ul className="flex ">
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-700 text-[15px] hover:text-nirmaan"
              >
                <li>Terms of Use</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-700 text-[15px] hover:text-nirmaan"
              >
                <li>Privacy</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-700 text-[15px] hover:text-nirmaan"
              >
                <li>Cookie Policy</li>
              </a>
              <a
                href=""
                className=" mt-2 font-semibold text-gray-700 text-[15px] hover:text-nirmaan"
              >
                <li>Cookie Settings</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="lg:px-20 sm:px-4">
          <p className=" inter text-[12px] pb-1">
            Nirmaan is a non-profit organization that has been working towards
            creating positive change in society since its inception. Established
            in 2005, the organization has been involved in various projects
            aimed at improving the lives of people in need. Nirmaan operates
            across several sectors, including education, healthcare, and
            livelihoods, with a focus on empowering communities and creating
            sustainable solutions to social issues.
          </p>
          <p className="inter text-[12px]  pb-1">
            Note: One of the key areas of focus for Nirmaan is education. The
            organization believes that education is the key to breaking the
            cycle of poverty and is committed to ensuring that every child has
            access to quality education. Nirmaan education initiatives include
            setting up libraries, providing scholarships to deserving students,
            and conducting awareness programs to encourage parents to send their
            children to school.
          </p>
          {/* <p className="inter text-[12px] pb-1">
            Nirmaan also works towards improving healthcare in the communities
            it serves. The organization runs several health camps, provides
            medical aid to those in need, and conducts health awareness
            campaigns to promote healthy living practices
          </p>
          <p className="inter text-[12px] pb-1 ">
            Overall, Nirmaan organization that is committed to making a positive
            impact on society. The organization initiatives have touched the
            lives of many individuals and have helped them lead better, more
            fulfilling lives. Through its continued efforts, Nirmaan is creating
            a brighter future for the communities it serves.
          </p> */}
        </div>

        <div className=" flex justify-center items-center text-[13px]">
          <p className="inter text-[13px] pt-5 ">
            ©2005 Nirmaan Organization, Inc. and/or its affiliated companies.
          </p>
        </div>
      </div>

      {/*--------------------------------- Mobile view starts here----------------------------------------------- */}

      <div className="w-full h-auto bg-white border border-t-2 lg:hidden shadow-2xl pb-7">
        <div className=" flex justify-between items-center px-2 ">
          <div className="w-auto mr-14">
            <a href="#">
              <img className="h-16 w-34" src="/nirmaan_logo.png" alt="" />
            </a>
          </div>
          <div className="inline-block group  ">
            <button
              className="font-bold flex justify-center items-center py-2 px-3 w-40 mx-1 text-sm inter border  bg-blue-400 transition ease-in-out duration-200 hover:bg-nirmaan-darker text-blue-50"
              type="button"
              contenteditable="false"
            >
              Donate Now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className="w-6 h-6 group-hover:translate-x-2 transition hover:duration-1000 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center space-x-1 mt-5 px-2 ">
          <a
            href=""
            title="Facebook"
            className="w-8 h-8 bg-blue-500  rounded-full text-white  flex justify-center items-center"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href=""
            title="Instagram"
            className="w-8 h-8 bg-blue-500  rounded-full text-white flex justify-center items-center"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href=""
            title="WhatsApp"
            className="w-8 h-8 bg-green-600 text-white  rounded-full  flex justify-center items-center"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
          <a
            href=""
            title="Linkedin"
            className="w-8 h-8 bg-blue-800  rounded-full text-white  flex justify-center items-center"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href=""
            title="Twitter"
            className="w-8 h-8 bg-blue-400  rounded-full text-white  flex justify-center items-center"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href=""
            title="Youtube"
            className="w-8 h-8 bg-red-600  text-white rounded-full  flex justify-center items-center"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>

        <div className=" flex justify-between poppin px-2">
          <div>
            <ul className="">
              <a
                href=""
                className="mt-2 mx-2  font-semibold  text-gray-600 text-[15px] hover:text-nirmaan "
              >
                <li>About Nirmaan</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-600 text-[15px] hover:text-nirmaan"
              >
                <li>Careers</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-600 text-[15px] hover:text-nirmaan"
              >
                <li>Contact Us</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-600 text-[15px] hover:text-nirmaan"
              >
                <li>Email Subscriptions</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-600 text-[15px] hover:text-nirmaan"
              >
                <li>Support</li>
              </a>
            </ul>
          </div>

          <div>
            <ul className="">
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-600 text-[15px] hover:text-nirmaan"
              >
                <li>Terms of Use</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-600 text-[15px] hover:text-nirmaan"
              >
                <li>Privacy</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-600 text-[15px] hover:text-nirmaan"
              >
                <li>Cookie Policy</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-gray-600 text-[15px] hover:text-nirmaan"
              >
                <li>Cookie Settings</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="px-2 lg:hidden leading-5">
          <p className=" inter text-[12px] pb-1">
            Nirmaan is a non-profit organization that has been working towards
            creating positive change in society since its inception. Established
            in 2005, the organization has been involved in various projects
            aimed at improving the lives of people in need. Nirmaan operates
            across several sectors, including education, healthcare, and
            livelihoods, with a focus on empowering communities and creating
            sustainable solutions to social issues.
          </p>
          <p className="inter text-[12px]  pb-1">
            Note: One of the key areas of focus for Nirmaan is education. The
            organization believes that education is the key to breaking the
            cycle of poverty and is committed to ensuring that every child has
            access to quality education. Nirmaan education initiatives include
            setting up libraries, providing scholarships to deserving students,
            and conducting awareness programs to encourage parents to send their
            children to school.
          </p>
          {/* <p className="inter text-[12px] pb-1">
            Nirmaan also works towards improving healthcare in the communities
            it serves. The organization runs several health camps, provides
            medical aid to those in need, and conducts health awareness
            campaigns to promote healthy living practices
          </p>
          <p className="inter text-[12px] pb-1 ">
            Overall, Nirmaan organization that is committed to making a positive
            impact on society. The organization initiatives have touched the
            lives of many individuals and have helped them lead better, more
            fulfilling lives. Through its continued efforts, Nirmaan is creating
            a brighter future for the communities it serves.
          </p> */}
        </div>
        <div className=" flex justify-center items-center text-[13px] lg:hidden sm:block">
          <p className="inter text-[13px] pt-5 px-3">
            ©2005 Nirmaan Organization, Inc. and/or its affiliated companies.
          </p>
        </div>
      </div>
    </>
  );
};

export default footer;
