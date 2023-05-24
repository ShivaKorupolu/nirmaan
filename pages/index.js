/* eslint-disable @next/next/no-img-element */
import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Header from "../components/header";
import Footer from "../components/footer";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import Shiva from "../components/shiva";
import Tabs from "../components/tabs";
import Testimonial from "./Testimonial";
import News from "./News";
import Campaign from "./Campaign";
import GalleryIndex from "./GalleryIndex";
import OurPartnerIndex from "./OurPartnersIndex";
import Map from "./Map";




const Index = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [video, setVideo] = useState(false);
  const [education, setEducation] = useState(false);
  const [skill, setSkill] = useState(false);
  const [disaster, setDisaster] = useState(false);
  const [health, setHealth] = useState(false);
  const [divercity, setDivercity] = useState(false);
  const [women, setWomen] = useState(false);
  //---------------------------------------- for mobile------------------------
  const [educationm, setEducationM] = useState(false);
  const [skillm, setSkillM] = useState(false);
  const [disasterm, setDisasterM] = useState(false);
  const [healthm, setHealthM] = useState(false);
  const [divercitym, setDivercityM] = useState(false);
  const [womenm, setWomenM] = useState(false);
  const [state, setState] = useState("");

  function Educations() {
    setDisaster(false);
    setDivercity(false);
    setEducation(true);
    setHealth(false);
    setWomen(false);
    setSkill(false);
  }
  function Skills() {
    setSkill(true);
    setDisaster(false);
    setDivercity(false);
    setEducation(false);
    setHealth(false);
    setWomen(false);
  }
  function Disasters() {
    setDisaster(true);
    setDivercity(false);
    setEducation(false);
    setHealth(false);
    setWomen(false);
    setSkill(false);
  }
  function Healths() {
    setDivercity(false);
    setDisaster(false);
    setEducation(false);
    setHealth(true);
    setWomen(false);
    setSkill(false);
  }
  function Divercitys() {
    setDivercity(true);
    setDisaster(false);
    setEducation(false);
    setHealth(false);
    setWomen(false);
    setSkill(false);
  }
  function Womens() {
    setWomen(true);
    setDisaster(false);
    setDivercity(false);
    setEducation(false);
    setHealth(false);
    setSkill(false);
  }
  let edu = "Education";
  let skills = "Skill Development And Entrepreneurship";
  let divRf = "Disaster Relif";
  let helt = "Health";
  let divIn = "Divercity and Inclusion";
  let woEp = "Women Empowerment";

  return (
    <>
      {/* <Tabs/> */}

      {/* <Shiva/> */}

      <Header />

      <div>
        <div className="px-0 ">
          <Carousel
            autoPlay={true}
            showDots={false}
            useKeyboardArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
            emulateTouch="true"
            infinite={true}
            keyBoardControl={true}
          >
            <div>
              <img
                className=" lg:h-screen object-fill"
                alt=""
                src="event4.jpg"
              />
            </div>
            <div>
              <img
                className="lg:h-screen  object-fill"
                alt=""
                src="comp3.jpg"
              />
            </div>
            <div>
              <img
                className="lg:h-screen   object-fill"
                alt=""
                src="event2.jpg"
              />
            </div>
            <div>
              <img
                className="lg:h-screen  object-fill"
                alt=""
                src="event3.jpg"
              />
            </div>
          </Carousel>
        </div>

        {/* -------------------------------About Us stars-------------------------------------------- */}
        <section className=" lg:px-20 px-2 mb-10">
          <div className="lg:flex justify-around items-center sm:w-full lg:pb-8 sm:pb-4 ">
            <div className=" lg:w-[60%]  mt-1 lg:mr-24">
              <p className="lg:text-4xl text-2xl sm:text-xl font-bold poppin mb-7 mt-7 underline underline-offset-auto">
                {" "}
                ABOUT US
              </p>
              <p className="  font-medium poppin text-gray-600 lg:mr-2 mt-1 leading-8">
                Nirmaan Organization is a registered NGO, started by students of
                BITS Pilani in 2005. We work in the areas of Education, Skill
                Development & Entrepreneurship, Health and Wellbeing, Community
                Development and Social Leadership. In the past 16 years of
                journey, we have impacted the lives of 1.5+ million
                beneficiaries with the support of 300+ full time employees and
                1000+ strong volunteer network, through various impact-oriented
                Flagship Programs & Social Leadership Initiatives benefiting
                Children, Women, Youth, Persons with Disabilities (PwDs), LGBTQ+
                and Farmers from diverse social backgrounds across 15 States of
                India while partnering with 100+ Corporate, Government and
                Philanthropic partners.
              </p>
            </div>
            <div className=" lg:w-[40%] sm:w-full sm:h-[300px] sm:mt-10 lg:mt-3">
              <img
                className="lg:h-[350px]  w-full sm:mt-14 lg:m-0 "
                src="/about.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        {/* -------------------------------About end-------------------------------------------- */}

        {/* -------------------------------volunteer icons starts-------------------------------------------- */}
        <section className="py-4 lg:px-20 px-2 bg-black shadow-lg overflow-hidden `">
          <div className=" mx-auto   ">
            <div className=" py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-0  justify-evenly items-center  ">
              
                  <div className="flex  justify-start items-center py-4   transition  hover:scale-105">
                    <div className=" text-nirmaan text-center rounded-full">
                        <svg
                          stroke="currentColor"
                          className="text-nirmaan"
                          fill="currentColor"
                          stroke-width="0"
                          version="1.1"
                          viewBox="0 0 16 16"
                          height="3em"
                          width="3.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.5 0h-12c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h12c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM13 14h-11v-12h11v12zM4 9h7v1h-7zM4 11h7v1h-7zM5 4.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM7.5 6h-2c-0.825 0-1.5 0.45-1.5 1v1h5v-1c0-0.55-0.675-1-1.5-1z"></path>
                        </svg>
                    </div>

                    <div className="flex-col ml-4">
                      <h3 className="text-2xl font-bold poppin text-nirmaan">
                        87923{" "}
                        <span className="text-3xl font-bold poppin text-nirmaan">
                          {" "}
                          +{" "}
                        </span>
                      </h3>
                      <h3 className="text-xl font-semibold text-nirmaan poppin ">
                        Volunteer
                      </h3>
                    </div>
                  </div>


              <div className="w-full py-4">
                <div className="md:max-w-sm">
                  <div className="flex items-center -m-3 transition  hover:scale-105">
                    <div className="w-auto ">
                      <div className="flex items-center justify-center w-20 h-20 rounded-full">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          className="text-nirmaan"
                          stroke-width="0"
                          viewBox="0 0 1024 1024"
                          height="3.5em"
                          width="3.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm22.3 665.2l.2 31.7c0 4.4-3.6 8.1-8 8.1h-28.4c-4.4 0-8-3.6-8-8v-31.4C401.3 723 359.5 672.4 355 617.4c-.4-4.7 3.3-8.7 8-8.7h46.2c3.9 0 7.3 2.8 7.9 6.6 5.1 31.7 29.8 55.4 74.1 61.3V533.9l-24.7-6.3c-52.3-12.5-102.1-45.1-102.1-112.7 0-72.9 55.4-112.1 126.2-119v-33c0-4.4 3.6-8 8-8h28.1c4.4 0 8 3.6 8 8v32.7c68.5 6.9 119.9 46.9 125.9 109.2.5 4.7-3.2 8.8-8 8.8h-44.9c-4 0-7.4-3-7.9-6.9-4-29.2-27.4-53-65.5-58.2v134.3l25.4 5.9c64.8 16 108.9 47 108.9 116.4 0 75.3-56 117.3-134.3 124.1zM426.6 410.3c0 25.4 15.7 45.1 49.5 57.3 4.7 1.9 9.4 3.4 15 5v-124c-36.9 4.7-64.5 25.4-64.5 61.7zm116.5 135.2c-2.8-.6-5.6-1.3-8.8-2.2V677c42.6-3.8 72-27.2 72-66.4 0-30.7-15.9-50.7-63.2-65.1z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-col   p-1">
                      <h3 className="text-2xl font-bold poppin text-nirmaan">
                        {" "}
                        $290435{" "}
                        <span className="text-3xl font-bold poppin pl-1 text-nirmaan">
                          {" "}
                          +{" "}
                        </span>
                      </h3>
                      <h3 className="text-xl font-semibold poppin text-nirmaan">
                        Donate Now
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full py-4 ">
                <div className="md:max-w-sm">
                  <div className="flex  items-center -m-3 transition  hover:scale-105">
                    <div className="w-auto ">
                      <div className="flex items-center justify-center  w-20  rounded-full">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          className="text-nirmaan"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="3.5em"
                          width="3.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M128 32l-80 96h48v80h64v-80h48l-80-96zm216 0c-40 0-40 0-40 39.945V232c0 40 0 40 40 40h80c40 0 40 0 40-40V72c0-40 0-40-40-40h-80zM176.096 236.904c-5.28.12-10.212 2.417-16.94 9.596l-6.562 6.969-6.813-6.72c-7.387-7.28-13.216-9.29-19.125-9.03-5.908.26-12.855 3.365-20.625 9.654l-6.219 5.031-5.906-5.375c-8.9-8.052-16.485-10.437-23.75-10.062-5.288.274-10.775 2.266-16.25 5.75l40.969 73.687c15.454 9.452 47.033 13.009 68.75 2.065l39.594-73.346c-7.51-3.062-14.26-6.2-20.094-7.404-2.112-.437-4.073-.758-5.97-.815-.355-.01-.71-.008-1.06 0zM352 304v80h-48l80 96 80-96h-48v-80h-64zM86.125 333.094v.002C68.09 345.838 53.609 367.813 48 400c-5.435 31.196 3.127 52.264 18.281 66.623 15.155 14.36 37.902 21.738 61 21.438 23.1-.3 46.136-8.31 61.625-22.936 15.49-14.627 24.251-35.425 19.283-65.188-5.137-30.757-18.4-52.147-35.19-65.093-28.483 15.056-64.094 11.856-86.874-1.75z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-col  p-1">
                      <h3 className="text-2xl font-bold poppin text-nirmaan">
                        5789{" "}
                        <span className="text-3xl font-bold poppin text-nirmaan">
                          {" "}
                          +{" "}
                        </span>
                      </h3>
                      <h3 className="text-xl font-semibold poppin text-nirmaan">
                        Buy Products
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full py-4 lg:px-0">
                <div className="md:max-w-sm">
                  <div className="flex items-center -m-3 transition  hover:scale-105">
                    <div className="w-auto">
                      <div className="flex items-center justify-center  w-20 h-20  rounded-full">
                        <svg
                          stroke="currentColor"
                          className="text-nirmaan"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="3.5em"
                          width="3.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-col p-1">
                      <h3 className="text-2xl font-bold poppin text-nirmaan">
                        300{" "}
                        <span className="text-3xl font-bold poppin text-nirmaan">
                          {" "}
                          +{" "}
                        </span>
                      </h3>
                      <h3 className="text-xl font-semibold poppin text-nirmaan">
                        Impact Project
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* -------------------------------volunteer icons end-------------------------------------------- */}

        {/* -------------------------------Events starts-------------------------------------------- */}
        <News />
        {/* -------------------------------Events end-------------------------------------------- */}

        {/* -------------------------------Compaigns starts-------------------------------------------- */}
        <Campaign />
        {/* -------------------------------Compaings end-------------------------------------------- */}

        {/* -------------------------------Video Section starts-------------------------------------------- */}
        <section>
          <div
            onMouseEnter={() => setVideo((video) => !video)}
            onMouseLeave={() => setVideo((video) => !video)}
            className="relative w-full lg:h-screen sm:hidden md:block lg:flex justify-evenly lg:items-end md:items-end  "
          >
            <div className="absolute w-full h-screen">
              <video
                width="100%"
                height="50%"
                src="/video.mp4"
                autoplay="{true}"
                loop
                muted
                className=" z-10"
              ></video>
            </div>
            <div className="lg:flex justify-evenly hover:hidden  items-center mb-4 px-4 lg:gap-28 absolute">
              <div className="text-gray-300   lg:pl-4 text-2xl flex justify-center">
                {edu}
              </div>

              <div className="  text-2xl lg:pl-6 text-gray-300 ">{skills}</div>

              <div className="  text-2xl lg:pl-6  text-gray-300 ">{divRf}</div>

              <div className="   text-2xl text-gray-300 ">{helt}</div>

              <div className="  text-2xl lg:pl-7 text-gray-300 ">{divIn}</div>

              <div className=" pr-2  text-2xl text-gray-300 ">{woEp}</div>
            </div>

            <Transition
              show={video}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className=" relative bottom-0 bg-black opacity-70">
                <div className="flex w-screen h-screen">
                  <div
                    onMouseEnter={() => {
                      Educations();
                    }}
                    className="w-full hover:border hover:border-white hover:border-t-0 px-5 flex justify-center items-center"
                  >
                    <Transition
                      show={education}
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <h1 className="text-3xl text-white py-10 hover:underline underline-offset-2 font-extrabold poppin  ">
                        {" "}
                        Eduaction{" "}
                      </h1>
                      <p className="text-sm text-yellow-400 text-ellipsis overflow-hidden   font-extrabold poppin">
                        HYSEA in partnership with Government of Telangana and
                        Nirmaan as the nodal NGO partner, is planning to
                        establish Digital Labs
                      </p>

                      <div className=" group flex justify-start items-center mt-10 ">
                        <button
                          className="font-bold poppin flex justify-start items-center py-2 w-40 text-sm inter text-yellow-500  transition ease-in-out"
                          type="button"
                          contenteditable="false"
                        >
                          View More{" "}
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
                    </Transition>
                  </div>

                  <div
                    onMouseEnter={() => {
                      Skills();
                    }}
                    className="w-full hover:border hover:border-white hover:border-t-0 px-2 flex justify-center items-center "
                  >
                    <Transition
                      show={skill}
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <h1 className="text-3xl text-white py-10 hover:underline underline-offset-2 font-extrabold poppin  ">
                        {" "}
                        Skill Eduaction{" "}
                      </h1>
                      <p className="text-sm text-yellow-400 text-ellipsis overflow-hidden  font-extrabold poppin">
                        HYSEA in partnership with Government of Telangana and
                        Nirmaan as the nodal NGO partner, is planning to
                        establish Digital Labs primary source.
                      </p>
                      <div className=" group flex justify-start items-center mt-10 ">
                        <button
                          className="font-bold poppin flex justify-start items-center py-2  text-sm inter text-yellow-500  transition ease-in-out"
                          type="button"
                          contenteditable="false"
                        >
                          View More{" "}
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
                    </Transition>
                  </div>

                  <div
                    onMouseEnter={() => {
                      Disasters();
                    }}
                    className="w-full hover:border hover:border-white hover:border-t-0 px-2 flex justify-start items-center "
                  >
                    <Transition
                      show={disaster}
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <h1 className="text-3xl text-white py-10 hover:underline underline-offset-2 font-extrabold poppin  ">
                        Disaster Relif{" "}
                      </h1>
                      <p className="text-sm text-yellow-400 text-ellipsis overflow-hidden  font-extrabold poppin">
                        HYSEA in partnership with Government of Telangana and
                        Nirmaan as the nodal NGO partner, is planning to
                        establish Digital Labs
                      </p>
                      <div className=" group flex justify-start items-center mt-10 ">
                        <button
                          className="font-bold poppin flex justify-start items-center py-2 w-40  text-sm inter text-yellow-500  transition ease-in-out"
                          type="button"
                          contenteditable="false"
                        >
                          View More{" "}
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
                    </Transition>
                  </div>

                  <div
                    onMouseEnter={() => {
                      Healths();
                    }}
                    className="w-full hover:border hover:border-white hover:border-t-0 px-2 flex justify-start items-center "
                  >
                    <Transition
                      show={health}
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <h1 className="text-3xl text-white py-10 hover:underline underline-offset-2 font-extrabold poppin  ">
                        Health
                      </h1>
                      <p className="text-sm text-yellow-400 text-ellipsis overflow-hidden font-extrabold poppin">
                        HYSEA in partnership with Government of Telangana and
                        Nirmaan as the nodal NGO partner, is planning to
                        establish Digital Labs
                      </p>
                      <div className=" group flex justify-start items-center mt-10 ">
                        <button
                          className="font-bold poppin flex justify-start items-center py-2 w-40 mx-1 text-sm inter text-yellow-500  transition ease-in-out"
                          type="button"
                          contenteditable="false"
                        >
                          View More{" "}
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
                    </Transition>
                  </div>

                  <div
                    onMouseEnter={() => {
                      Divercitys();
                    }}
                    className="w-full hover:border hover:border-white hover:border-t-0 px-2 flex justify-start items-center"
                  >
                    <Transition
                      show={divercity}
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <h1 className="text-3xl text-white py-10 hover:underline underline-offset-2 font-extrabold poppin  ">
                        Divercity and Inclusion
                      </h1>
                      <p className="text-sm text-ellipsis overflow-hidden text-yellow-400  font-extrabold poppin">
                        HYSEA in partnership with Government of Telangana and
                        Nirmaan as the nodal NGO partner, is planning to
                        establish Digital Labs
                      </p>
                      <div className=" group flex justify-start items-center mt-10 ">
                        <button
                          className="font-bold poppin flex justify-start items-center py-2  w-40 text-sm inter text-yellow-500  transition ease-in-out"
                          type="button"
                          contenteditable="false"
                        >
                          View More{" "}
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
                    </Transition>
                  </div>

                  <div
                    onMouseEnter={() => {
                      Womens();
                    }}
                    className="w-full hover:border hover:border-white hover:border-t-0 px-2 flex justify-start items-center "
                  >
                    <Transition
                      show={women}
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <h1 className="text-3xl text-white py-10 hover:underline underline-offset-2 font-extrabold poppin  ">
                        Women Empowerment
                      </h1>
                      <p className="text-sm text-ellipsis overflow-hidden text-yellow-400  font-extrabold poppin">
                        HYSEA in partnership with Government of Telangana and
                        Nirmaan as the nodal NGO partner, is planning to
                        establish Digital Labs
                      </p>
                      <div className=" group flex justify-start items-center mt-10 ">
                        <button
                          className="font-bold poppin flex justify-start items-center py-2 w-40  text-sm inter text-yellow-500  transition ease-in-out"
                          type="button"
                          contenteditable="false"
                        >
                          View More{" "}
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
                    </Transition>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </section>
        {/* -------------------------------video Section starts-------------------------------------------- */}

        {/* -------------------------------Location Section starts-------------------------------------------- */}
        <section className=" bg-gray-50 lg:px-20 w-full lg:h-[510px]  relative  px-2">
            <div className=" lg:flex  justify-around  items-start">
              <div className="lg:w-[50%] sm:flex-col w-full sm:mb-20 py-6 lg:py-0">
              <h1 className=" lg:text-4xl text-2xl sm:text-xl poppin font-extrabold text-gray-700 mt-10 underline underline-offset-4">
              WHERE NIRMAAN LOCATED
            </h1>
                    <h6 className="mt-10 lg:text-2xl text-xl sm:text-xl text-gray-700  font-bold font-heading tracking-px-n leading-tight poppin">
                      Our Latest News and Articles
                    </h6>
                    <p className="text-gray-600 font-medium leading-relaxed inter">
                      Lorem ipsum dolor sit amet, consectetury a dipiscing elit.
                      Volutpat, tempor to after condimentum commodadipiscing
                      elit. Volutpat, tempor to after condimentum
                      commodadipiscing elit. Volutpat, tempor to after
                      condimentum commodadipiscing elit. Volutpat, tempor to
                      after condimentum commodadipiscing elit. Volutpat, tempor
                      to after condimentum commodadipiscing e o
                    </p>
                  

                  <p className="poppin lg:text-2xl text-xl sm:text-xl text-gray-700 font-bold mt-4 mb-2">
                    SEE OUR WORK IN 50+ STATES
                  </p>

<label for="State" class="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
<select  onChange={(e)=>setState(e.target.value)}  class="bg-gray-50 border border-gray-300 absolute text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Ladakh">Ladakh</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>

</select>


              </div>
<div className="lg:w-[50%] w-full text-center justify-start items-start left-0">
  <Map state={state} />
</div>
</div>
        </section>

        {/* -------------------------------Location Section end-------------------------------------------- */}

        {/* ----------------gallery section starts---------------------------  */}
        <div className="relative bg-white lg:my-6 lg:p-4 p-2 mt-5 ">
          <GalleryIndex />
        </div>
        {/* ----------------gallery section ends---------------------------  */}

        {/*------------------------------------------------ OurCenters section start---------------------------------------------- */}
        <div className="relative bg-white sm:grid-cols-1 lg:overflow-visible sm:overflow-scroll text-center ">
          <OurPartnerIndex />
        </div>
        {/*------------------------------------------------ OurCenters section end---------------------------------------------- */}

        {/*-------------------------------- Testimonial starts here------------------------------------------ */}
        <div className="bg-white relative pb-10">
          <h1 className="flex justify-center items-center lg:text-3xl text-2xl sm:text-xl poppin font-extrabold pt-10 underline underline-offset-4">
            TESTIMONIALS
          </h1>
          <Testimonial />
        </div>
        {/*-------------------------------- Testimonial starts end------------------------------------------ */}

        {/* -------------------------------Certificate Section starts-------------------------------------------- */}
        <div className="w-full bg-blue-50 lg:px-20 px-2 h-40 flex justify-center items-center">
          <div>
            <p className="lg:text-2xl sm:text-base text-gray-600 font-semibold poppin">
              Proud to be one of the world’s highest-rated nonprofits
            </p>
          </div>
          <div className="flex mx-8">
            <a href="">
              <img
                src="./guide1.png"
                className="w-30 h-36 transition hover:scale-105"
                alt=""
              />
            </a>
            <a href="">
              {" "}
              <img
                src="./gptw.png"
                className="w-30 h-36 transition hover:scale-105 bg-white"
                alt=""
              />
            </a>
          </div>
        </div>
        {/* -------------------------------Certificate Section starts-------------------------------------------- */}

        {/* --------------footer section starts-------------  */}
        <Footer />
        {/* --------------footer section ends-------------  */}
      </div>
    </>
  );
};

export default Index;
