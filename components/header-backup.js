/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Head from "next/head";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const header = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [who, setWho] = useState(false);
  const [what1, setWhat1] = useState(false);
  const [where, setWhere] = useState(false);
  const [how, setHow] = useState(false);
//  const[whowe,setWhowe]=useState(false);
  
  function whowe() {
    setWho(true);
    setWhat1(false);
    setWhere(false);
    setHow(false);
  }

  function whatwedo() {
    setWhat1(true);
    setWho(false);
    setWhere(false);
    setHow(false);
  }

  function whereweare() {
    setWhere(true);
    setWhat1(false);
    setWho(false);
    setHow(false);
  }

  function howto() {
    setHow(true);
    setWhat1(false);
    setWhere(false);
    setWho(false);
  }
  return (
    <>
      <Head>
        
      </Head>


{/*---------------------------------------------------- Menu buttons---------------------------------------------------------------- */}
      <section className="overflow-hidden relative   ">
        <div className="flex items-center justify-between  h-20  container  max bg-gray-200">
          <div className="w-auto  ">
            <div className="flex flex-wrap  items-center">
              <div className="w-auto ">
                <a href="#">
                  <img className="h-14 w-34" src="/nirmaan_logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto ">
            <div className="flex flex-wrap items-center font-bold">
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center gap-4">
                    <li className="px-0 py-1 border-nirmaan mr-9 font-extrabold text-xs hover:text-nirmaan hover:border-b-2 inter hover:transition-all hover:duration-300"
                       onClick={() => setWho((who) => !who)} onMouseEnter={() =>{whowe()}} onMouseLeave={() =>{whowe()}}>
                      <a href="#" className="group flex">
                        Who we are{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-5 px-1  group-hover:rotate-180 group-hover:transition-all duration-500 group-hover:duration-300"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </a>{" "}
                    </li>

                    <li className="px-0 py-1 border-nirmaan mr-9 font-extrabold text-xs hover:text-nirmaan hover:border-b-2 inter hover:transition-all hover:duration-300"
                     onMouseEnter={() =>{whatwedo()}} onMouseLeave={() =>{whatwedo()} } onClick={() => setWhat1((what1) => !what1)}>
                      <a href="#" className="group flex">
                        What we do{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-5 px-1  group-hover:rotate-180 group-hover:transition-all duration-500 group-hover:duration-300"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </a>{" "}
                    </li>

                    <li className="px-0 py-1 border-nirmaan mr-9 font-extrabold text-xs hover:text-nirmaan hover:border-b-2 inter hover:transition-all hover:duration-300"
                     onMouseEnter={() => {whereweare()}} onMouseLeave={() => {whereweare()}} onClick={() => setWhere((where) => !where)}>
                      <a href="#" className="group flex">
                        Where We Work{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-5 px-1  group-hover:rotate-180 group-hover:transition-all duration-500 group-hover:duration-300"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </a>{" "}
                    </li>

                    <li className="px-0 py-1 border-nirmaan mr-9 font-extrabold text-xs hover:text-nirmaan hover:border-b-2 inter hover:transition-all hover:duration-300"
                     onMouseEnter={() => {howto()}}  onMouseLeave={() => {howto()}} onClick={() => setHow((how) => !how)}>
                      <a href="#" className="group flex">
                        How To Help{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-5 px-1  group-hover:rotate-180 group-hover:transition-all duration-500 group-hover:duration-300"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </a>{" "}
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-auto ">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <div className="inline-block">
                  <button
                    className="font-bold py-2 w-32 mx-1 text-sm poppin rounded-3xl border border-nirmaan transition ease-in-out duration-200 hover:text-blue-50 hover:bg-nirmaan text-nirmaan"
                    type="button"
                    contenteditable="false"
                  >
                    Volunteer
                  </button>
                </div>
                <div className="inline-block">
                  <button
                    className="font-bold py-2 w-32 mx-1 text-sm poppin border hover:border-gray-300 rounded-3xl focus:ring focus:ring-gray-50 bg-blue-400 transition ease-in-out duration-200 hover:bg-nirmaan-darker text-blue-50"
                    type="button"
                    contenteditable="false"
                  >
                    Donation
                  </button>
                </div>
              </div>
              <div className="w-auto lg:hidden">
                <a href="#">
                  <svg
                    className="navbar-burger text-indigo-600"
                    width="51"
                    height="51"
                    onClick={() => setIsShowing((isShowing) => !isShowing)}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="56"
                      height="56"
                      rx="28"
                      fill="currentColor"
                    ></rect>
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>


        <Transition
          show={isShowing}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className=" lg:hidden block navbar-menu fixed top-0 left-0 bottom-0 w-full h-screen sm:max-w-xs z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
            <nav className="relative  z-10 px-2 pt-4 bg-white h-auto border overflow-y-auto">
              <div className="flex flex-wrap justify-between h-full">
                <div className="w-full px-4">
                  <div className="flex items-center justify-between -m-2">
                    <div className="w-auto p-2">
                      <a className="inline-block" href="#">
                        <img
                          src="/nirmaan_logo.png"
                          className="w-50 h-12"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-auto p-2">
                      <a className="navbar-burger" href="#">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          onClick={() =>
                            setIsShowing((isShowing) => !isShowing)
                          }
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6M6 6L18 18"
                            stroke="#111827"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start pt-8  border-t-2 w-full h-screen">
                  <ul className="poppin">
                    <div
                      className="flex justify-between  mb-4 px-4 "
                    >
                      <li className="mb-2"> <a className=" hover:text-gray-700 px-1 font-bold" href="#"> Who we are                    </a>
                      </li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 justify-end"
                      ><path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>

                    {/*----------------------------------- who are we start----------------------- */}
                    <Transition
                      show={who}
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className=" lg:hidden block navbar-menu fixed top-0 left-0 bottom-0 w-full h-screen sm:max-w-xs z-50">
                        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                        <nav className="relative  z-10 px-2 pt-4 bg-white h-auto border overflow-y-auto">
                          <div className="flex flex-wrap justify-between h-full">
                            <div className="w-full px-4">
                              <div className="flex items-center justify-between -m-2">
                                <div className="w-auto p-2">
                                  <a className="inline-block" href="#">
                                    <img
                                      src="/nirmaan_logo.png"
                                      className="w-50 h-12"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="w-auto p-2">
                                  <a className="navbar-burger" href="#">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      onClick={() =>
                                        setIsShowing((isShowing) => !isShowing)
                                      }
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 18L18 6M6 6L18 18"
                                        stroke="#111827"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start pt-3  border-t-2 w-full h-screen">
                              <div
                                className="hover:text-gray-700   font-bold text-xl mb-6  flex"
                                onClick={() => setWho((who) => !who)}
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-6 h-7 mx-1"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                  />
                                </svg>
                                Who we are{" "}
                              </div>
                              <ul className="poppin px-8 mb-4">
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1 font-bold"
                                    href="#"
                                  >
                                    About Us
                                  </a>
                                </li>
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1  font-bold"
                                    href="#"
                                  >
                                    Our Story
                                  </a>
                                </li>
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1 font-bold"
                                    href="#"
                                  >
                                    Our Team
                                  </a>
                                </li>
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1 font-bold"
                                    href="#"
                                  >
                                    Vision and Mision
                                  </a>
                                </li>
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1 font-bold"
                                    href="#"
                                  >
                                    Media
                                  </a>
                                </li>
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1 font-bold"
                                    href="#"
                                  >
                                    Privacy Police{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </Transition>
                    {/*----------------------------------- who are we end----------------------- */}





                    <div
                      className="flex justify-between  mb-4 px-4"
                      onClick={() => setWhat1((what1) => !what1)}
                    >
                      <li className="mb-2">
                        {" "}
                        <a
                          className=" hover:text-gray-700 px-1  font-bold"
                          href="#"
                        >
                          What we do
                        </a>
                      </li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 justify-end"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                    {/* --------------------------------------------  What we do start--------------------------------------------------------- */}
                    <Transition
                      show={what1}
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className=" lg:hidden block navbar-menu fixed top-0 left-0 bottom-0 w-full h-screen sm:max-w-xs z-50">
                        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                        <nav className="relative  z-10 px-2 pt-4 bg-white h-auto border overflow-y-auto">
                          <div className="flex flex-wrap justify-between h-full">
                            <div className="w-full px-4">
                              <div className="flex items-center justify-between -m-2">
                                <div className="w-auto p-2">
                                  <a className="inline-block" href="#">
                                    <img
                                      src="/nirmaan_logo.png"
                                      className="w-50 h-12"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="w-auto p-2">
                                  <a className="navbar-burger" href="#">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      onClick={() =>
                                        setIsShowing((isShowing) => !isShowing)
                                      }
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 18L18 6M6 6L18 18"
                                        stroke="#111827"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start pt-3  border-t-2 w-full h-screen">
                              <div
                                className="hover:text-gray-700   font-bold text-xl mb-6  flex"
                                onClick={() => setWhat1((what1) => !what1)}
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-6 h-7 mx-1"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                  />
                                </svg>
                                What we do{" "}
                              </div>
                              <ul className="poppin px-8 mb-4">
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1 font-bold"
                                    href="#"
                                  >
                                    Eduaction
                                  </a>
                                </li>
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1  font-bold"
                                    href="#"
                                  >
                                    Health
                                  </a>
                                </li>
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1 font-bold"
                                    href="#"
                                  >
                                    Skill Development & Enterprices
                                  </a>
                                </li>
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1 font-bold"
                                    href="#"
                                  >
                                    Blood Campaigns
                                  </a>
                                </li>
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1 font-bold"
                                    href="#"
                                  >
                                    Events
                                  </a>
                                </li>
                                {/* <li  className="mb-4" > <a className=" hover:text-gray-700 px-1 font-bold" href="#">Privacy Police </a></li> */}
                              </ul>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </Transition>
                    {/* --------------------------------------------  What we do end--------------------------------------------------------- */}

                    <div
                      className="flex justify-between  mb-4 px-4"
                      onClick={() => setWhere((where) => !where)}
                    >
                      <li className="mb-2">
                        {" "}
                        <a
                          className=" hover:text-gray-700 px-1 font-bold"
                          href="#"
                        >
                          We are work
                        </a>
                      </li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 justify-end"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>

                    {/* --------------------------------------------  We are work start--------------------------------------------------------- */}
                    <Transition
                      show={where}
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className=" lg:hidden block navbar-menu fixed top-0 left-0 bottom-0 w-full h-screen sm:max-w-xs z-50">
                        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                        <nav className="relative  z-10 px-2 pt-4 bg-white h-auto border overflow-y-auto">
                          <div className="flex flex-wrap justify-between h-full">
                            <div className="w-full px-4">
                              <div className="flex items-center justify-between -m-2">
                                <div className="w-auto p-2">
                                  <a className="inline-block" href="#">
                                    <img
                                      src="/nirmaan_logo.png"
                                      className="w-50 h-12"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="w-auto p-2">
                                  <a className="navbar-burger" href="#">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      onClick={() =>
                                        setIsShowing((isShowing) => !isShowing)
                                      }
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 18L18 6M6 6L18 18"
                                        stroke="#111827"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start pt-3  border-t-2 w-full h-screen">
                              <div
                                className="hover:text-gray-700   font-bold text-xl mb-6  flex"
                                onClick={() => setWhere((where) => !where)}
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-6 h-7 mx-1"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                  />
                                </svg>{" "}
                                We are work{" "}
                              </div>
                              <ul className="poppin px-8 mb-4">
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1 font-bold"
                                    href="#"
                                  >
                                    Projects
                                  </a>
                                </li>
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1  font-bold"
                                    href="#"
                                  >
                                    Udaan Project
                                  </a>
                                </li>
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1 font-bold"
                                    href="#"
                                  >
                                    Special Events
                                  </a>
                                </li>
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1 font-bold"
                                    href="#"
                                  >
                                    Environment
                                  </a>
                                </li>
                                <li className="mb-4">
                                  {" "}
                                  <a
                                    className=" hover:text-gray-700 px-1 font-bold"
                                    href="#"
                                  >
                                    Programs
                                  </a>
                                </li>
                                {/* <li  className="mb-4" > <a className=" hover:text-gray-700 px-1 font-bold" href="#">Privacy Police </a></li> */}
                              </ul>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </Transition>
                    {/* --------------------------------------------  we are  work end--------------------------------------------------------- */}
                   
                   
                    <div
                      className="flex justify-between  mb-4 px-4"
                      onClick={() => setHow((how) => !how)}
                    >
                      <li className="mb-2">
                        {" "}
                        <a
                          className=" hover:text-gray-700 px-1 font-bold"
                          href="#"
                        >
                          How to reach
                        </a>
                      </li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 justify-end"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>

                    <div className="w-auto  px-4 flex">
                      <div className="flex flex-wrap items-center">
                        <div className="w-auto">
                          <div className="inline-block">
                            <button
                              className="py-1 w-44 text-large popi border hover:border-gray-300  focus:ring focus:ring-gray-50 bg-blue-500 transition ease-in-out duration-200 hover:bg-blue-800 text-lg  text-white"
                              type="button"
                              contenteditable="false"
                            >
                              Volunteer
                            </button>
                          </div>
                          <div className="inline-block">
                            <button
                              className="py-1 w-44 mx-1 text-large popi border hover:border-gray-300  focus:ring focus:ring-gray-50 bg-blue-500 transition ease-in-out duration-200 hover:bg-blue-800 text-lg  text-white"
                              type="button"
                              contenteditable="false"
                            >
                              Donation
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </Transition>
      </section>
  {/*----------------------------------- Menu buttons ends------------------------------------------------------------------------- */}


{/*-------------------------------------- who we are  section starts--------------------------------------------------- */}
<Transition
        show={who}
        animation="animate-pulse"
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        direction="vertoical"
        scroll="normal"
      >
          <div
            className="w-full h-auto container transition-all duration-1000 absolute opacity-100 z-50  group  group-hover:duration-500 border  border-b-0 border-t-nirmaan-600   "
            onMouseLeave={() => {
              setWho(false);
            }} 
          >
            <section className="pt-2  bg-gray-200 overflow-hidden">
              <div className=" mx-auto">
                <div className="pb-10">

                  <div className="flex flex-wrap ">
                    <div className="p-10 ">
                      <h3 className="mb-6 font-extrabold leading-normal text-lg   ">
                       About Us
                      </h3>
                      <ul>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline  hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                            About Nirmaan
                          </a>
                        </li>
                        
                        <li className="mb-3.5 font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                            Our Team
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                            Our Story
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                          Our Vision & Mision
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="p-10 ">
                      <h3 className="mb-6 font-extrabold leading-normal text-lg   ">
                        Nirmaan Impact
                      </h3>
                      <ul>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline  hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                      Nirmaan Internal Events
                          </a>
                        </li>
                        
                        <li className="mb-3.5 font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                         Media
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                            Terms and Conditions
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                            Nirmaan MemberShip 
                          </a>
                        </li>

                        <li className="mb-2  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                       Menter Talk
                          </a>
                        </li>

                      </ul>
                    </div>

                    <div className="p-10 ">
                      <h3 className="mb-6 font-extrabold leading-normal text-lg   ">
                      Special Events
                      </h3>
                      <ul>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline  hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                      Inorbit Mall Evnet
                          </a>
                        </li>
                        
                        {/* <li className="mb-3.5 font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                         Media
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                            Terms and Conditions
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                            Nirmaan MemberShip 
                          </a>
                        </li>

                        <li className="mb-2  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                       Menter Talk
                          </a>
                        </li> */}

                      </ul>
                    </div>


                    <div className="p-10 ">
                      <h3 className="mb-6 font-extrabold leading-normal text-lg   ">
                   Environment
                      </h3>
                      <ul>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline  hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                      Seed to soil
                          </a>
                        </li>
                        
                        {/* <li className="mb-3.5 font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                         Media
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                            Terms and Conditions
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                            Nirmaan MemberShip 
                          </a>
                        </li>

                        <li className="mb-2  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                       Menter Talk
                          </a>
                        </li> */}

                      </ul>
                    </div>


                  </div>

                  

                </div>
              </div>
            </section>
          </div>
     </Transition>
     {/*-------------------------------------- who we are section   end--------------------------------------------------- */}

{/*-------------------------------------- what we do section  stars--------------------------------------------------- */}
  <Transition
        show={what1}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        direction="vertoical"
        scroll="normal"
      >
          <div
            className="w-full h-auto container transition-all duration-1000 absolute opacity-100 z-50  group  group-hover:duration-500 border  border-b-0 border-t-nirmaan-600   "
            onMouseLeave={() => {
              setWhat1(false);
            }}
          >
            <section className="pt-2  bg-gray-200 overflow-hidden">
              <div className=" mx-auto">

                <div className="pb-10">
                  <div className="flex justify-evenly items-center ">
                    <div className="p-10 " n>
                      <h3 className="mb-6 font-extrabold leading-normal text-lg   ">
                        Education
                      </h3>
                      <ul>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline  hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                      Disruptive Digital Intervention
                          </a>
                        </li>
                        
                        <li className="mb-3.5 font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                         Coding Initiative Program
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                         Vidya Help Line Program
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                        Life Skills and Career Guidance
                          </a>
                        </li>

                        <li className="mb-2  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                    School Adoption Program
                          </a>

                        </li>
                        <li className="mb-2  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                   Scholarship Mentorship
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="p-10 ">
                      <h3 className="mb-6 font-extrabold leading-normal text-lg   ">
                      Skill Development And Entrepreneurship
                      </h3>
                      <ul>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline  hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                   National Digital Literacy Mission
                          </a>
                        </li>
                        
                        <li className="mb-3.5 font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                         Sustainable Livelihoods to Farmers
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                        Threads of Hope
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                        Avanti Women Skill Development
                          </a>
                        </li>

                        <li className="mb-2  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                    Youth Skill Development
                          </a>

                        </li>
                        <li className="mb-2  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                   Yuva Disha
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="p-10 ">
                      <h3 className="mb-2 font-extrabold leading-normal text-lg   ">
                      Social LeaderShip
                      </h3>
                      <ul>
                        <li className="mb-3 font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline  hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                   Giveback Program
                          </a>
                        </li>
                        
                        <li className="mb-3 font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                        Disaster Relief Rehabilitation
                          </a>
                        </li>
                        <li className="mb-3 font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                   Probono Chapters
                          </a>
                        </li>
                        <li className="mb-3  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                       Volunteering and Internship
                          </a>
                        </li>

                        <li className="mb-2  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                    Hyderabad Flood Relief Rehabilitation
                          </a>

                        </li>
                        <li className="mb-2  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                  Nirmaan Food Bamk
                          </a>
                        </li>
                        <li className=" font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                project Prayaas
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="p-10 ">
                      <h3 className="mb-6 font-extrabold leading-normal text-lg   ">
                   Health
                      </h3>
                      <ul>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline  hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                   Blood Donation
                          </a>
                        </li>
                        
                        <li className="mb-3.5 font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                    Support for Gov Hospitals
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                   10 Bed ICU
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                      Supporting West Singhbhum
                          </a>
                        </li>

                        <li className="mb-2  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                    Hyderabad Needs Oxygen
                          </a>

                        </li>
                        <li className="mb-2  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                  Hysea Covid Response
                          </a>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>


              </div>
            </section>
          </div>
       </Transition>
{/*-------------------------------------- what we do section  ends--------------------------------------------------- */}

{/*-------------------------------------- Where We Work section  stars--------------------------------------------------- */}
<Transition
        show={where}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        direction="vertoical"
        scroll="normal"
      >
          <div
            className="w-full h-auto container transition-all duration-1000 absolute opacity-100 z-50  group  group-hover:duration-500 border  border-b-0 border-t-nirmaan-600   "
            onMouseLeave={() => {
              setWhere(false);
            }}
          >
            <section className="pt-2  bg-gray-200 overflow-hidden">
              <div className=" mx-auto">
                <div className="pb-10">
                  <div className="flex flex-wrap ">
                    <div className="p-10 ">
                      <h3 className="mb-6 font-extrabold leading-normal text-lg   ">
                        Nirmaan Located
                      </h3>
                      <ul>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline  hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                            Telangana
                          </a>
                        </li>
                        
                        <li className="mb-3.5 font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                            Andra Pradesh
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                            Pune
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                          Vizag
                          </a>
                        </li>

                        <li className="mb-2  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                   Nalgonda
                          </a>
                        </li>
                        
                        <li className="mb-2  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                   Badrachelam
                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
  </Transition>
{/*-------------------------------------- Where We Work section  ends--------------------------------------------------- */}


{/*-------------------------------------- How To Help section  stars--------------------------------------------------- */}
<Transition
        show={how}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        direction="vertoical"
        scroll="normal"
      >
          <div
            className="w-full h-auto container transition-all duration-1000 absolute opacity-100 z-50  group  group-hover:duration-500 border  border-b-0 border-t-nirmaan-600   "
            onMouseLeave={() => {
              setHow(false);
            }}
          >
            <section className="pt-2  bg-gray-200 overflow-hidden">
              <div className=" mx-auto">
                <div className="pb-10">
                  <div className="flex flex-wrap ">
                    <div className="p-10 ">
                      <h3 className="mb-6 font-extrabold leading-normal text-lg   ">
                        Company
                      </h3>
                      <ul>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline  hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                            About Us
                          </a>
                        </li>
                        
                        <li className="mb-3.5 font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                            Our Team
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                            Our Story
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                            Vision and Mision
                          </a>
                        </li>

                        <li className="mb-2  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                    How to help
                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
  </Transition>
{/*-------------------------------------- How To Help section  stars--------------------------------------------------- */}


    

    </>
  );
};

export default header;
