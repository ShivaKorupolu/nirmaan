/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../components/footer";
import Header from "../components/header";
import OurCenters from "./OurCenters";
// import News from"./News";

const Telangana = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const responsivecompaign = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <Header />
      <div className="w-full absolute bg-gray-800 ">
        <img src="/event3.jpg" alt="" className=" h-96 w-full object-cover " />
      </div>
      <div className="relative ">
        <h1 className=" lg:text-8xl text-6xl text-white flex justify-center items-center h-96 poppin font-bold ">
          Telangana
        </h1>
      </div>

      <div>
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
      </div>



      <div className=" pb-10 p-2 bg-gray-50">
        <h1 className=" lg:px-20 uppercase  lg:text-4xl text-2xl mb-4 sm:text-xl poppin font-extrabold pt-10 underline underline-offset-8">
        Our Team's Ongoing Endeavors
        </h1>
        <div className="lg:px-20 lg:py-4 py-2 h-auto  ">
<OurCenters/>
</div>
      </div>





      <div className="lg:px-20 p-2 pb-10">
        <h1 className="lg:text-4xl text-2xl mb-10 sm:text-xl poppin font-extrabold pt-10 underline underline-offset-4">
          OUR UPDATES
        </h1>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsivecompaign}
          ssr={true} // means to render carousel on server-side.
          infiniteLoop={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all.5"
          transitionDuration={3000}
          // containerclassName="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          // dotListclassName="custom-dot-list-style"
          itemclassName="carousel-item-padding-40-px"
          className="flex-none"
        >
          

          <div className="w-72 bg-white border m-auto mb-10 hover:scale-105  transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./event1.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col mb-2 px-4">
                <h3 className="text-base mb-1 font-bold font-heading text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Madhura Nagar
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-72 bg-white border m-auto mb-10  hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./event4.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col mb-2 px-4">
                <h3 className="text-base mb-1 font-bold font-heading text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Nalgonda
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a adipiscing elit. Volutpat to a main. Lorem
                ipsum dolor sit amet
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-72 bg-white border m-auto mb-10 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./event2.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col mb-2 px-4">
                <h3 className="text-base mb-1 font-bold font-heading text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Badrachelam & kothagudam
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

           <div className="w-72 bg-white border m-auto mb-10 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./event3.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col mb-2 px-4">
                <h3 className="text-base mb-1 font-bold font-heading text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Borabanda
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a a
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-72 bg-white border m-auto mb-10 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./student3.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col mb-2 px-4 h-12">
                <h3 className="text-base mb-1 font-bold font-heading  text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Yusafguda Center
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a adipiscing elit. Volutpat to a main. Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetury of
                a adipiscing elit. Volutpat to a main. Lorem ipsum dolor sit
                amet... Volutpat to a main. Lorem ipsum dolor sit amet...
                Volutpat to a main. Lorem ipsum dolor sit amet...
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-72 bg-white border m-auto mb-10 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./comp2.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col mb-2 px-4 h-12">
                <h3 className="text-base mb-1 font-bold font-heading  text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Madhapur
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a adipiscing elit. Volutpat to a main. Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetury of
                a adipiscing elit. Volutpat to a main. Lorem ipsum dolor sit
                amet... Volutpat to a main. Lorem ipsum dolor sit amet...
                Volutpat to a main. Lorem ipsum dolor sit amet...
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-72 bg-white border m-auto mb-10 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./comp3.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col mb-2 px-4 h-12">
                <h3 className="text-base mb-1 font-bold font-heading  text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Ikev Building
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a adipiscing elit. Volutpat to a main. Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetury of
                a adipiscing elit. Volutpat to a main. Lorem ipsum dolor sit
                amet... Volutpat to a main. Lorem ipsum dolor sit amet...
                Volutpat to a main. Lorem ipsum dolor sit amet...
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-72 bg-white border m-auto mb-10 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./comp1.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col mb-2 px-4 h-12">
                <h3 className="text-base mb-1 font-bold font-heading  text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Kukatpally
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a adipiscing elit. Volutpat to a main. Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetury of
                a adipiscing elit. Volutpat to a main. Lorem ipsum dolor sit
                amet... Volutpat to a main. Lorem ipsum dolor sit amet...
                Volutpat to a main. Lorem ipsum dolor sit amet...
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div> 

{/* <N  ews/> */}

        </Carousel>
      </div>

      <div className=" lg:px-20 p-2 pb-10 bg-gray-50">
        <h1 className="lg:text-4xl text-2xl mb-10 sm:text-xl poppin font-extrabold pt-10 underline underline-offset-4">
          OUR COMPAIGNS
        </h1>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsivecompaign}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all.5"
          transitionDuration={3000}
          // containerclassName="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListclassName="custom-dot-list-style"
          itemclassName="carousel-item-padding-40-px"
        >
          {/* <div className=" group flex justify-center items-center mt-10 ">
              <button
                className="font-bold poppin flex justify-end items-center py-2 px-2 w-40 mx-1 text-sm inter text-blue-400  transition ease-in-out"
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
            </div> */}

          <div className="w-72 bg-white border m-auto mb-10 hover:scale-105  transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./event1.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col mb-2 px-4">
                <h3 className="text-base mb-1 font-bold font-heading text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Madhura Nagar
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-72 bg-white border m-auto mb-10  hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./event4.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col mb-2 px-4">
                <h3 className="text-base mb-1 font-bold font-heading text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Nalgonda
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a adipiscing elit. Volutpat to a main. Lorem
                ipsum dolor sit amet
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-72 bg-white border m-auto mb-10 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./event2.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col mb-2 px-4">
                <h3 className="text-base mb-1 font-bold font-heading text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Badrachelam & kothagudam
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-72 bg-white border m-auto mb-10 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./event3.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col mb-2 px-4">
                <h3 className="text-base mb-1 font-bold font-heading text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Borabanda
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a a
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-72 bg-white border m-auto mb-10 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./student3.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col mb-2 px-4 h-12">
                <h3 className="text-base mb-1 font-bold font-heading  text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Yusafguda Center
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a adipiscing elit. Volutpat to a main. Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetury of
                a adipiscing elit. Volutpat to a main. Lorem ipsum dolor sit
                amet... Volutpat to a main. Lorem ipsum dolor sit amet...
                Volutpat to a main. Lorem ipsum dolor sit amet...
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-72 bg-white border m-auto mb-10 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./comp2.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col mb-2 px-4 h-12">
                <h3 className="text-base mb-1 font-bold font-heading  text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Madhapur
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a adipiscing elit. Volutpat to a main. Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetury of
                a adipiscing elit. Volutpat to a main. Lorem ipsum dolor sit
                amet... Volutpat to a main. Lorem ipsum dolor sit amet...
                Volutpat to a main. Lorem ipsum dolor sit amet...
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-72 bg-white border m-auto mb-10 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./comp3.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col mb-2 px-4 h-12">
                <h3 className="text-base mb-1 font-bold font-heading  text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Ikev Building
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a adipiscing elit. Volutpat to a main. Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetury of
                a adipiscing elit. Volutpat to a main. Lorem ipsum dolor sit
                amet... Volutpat to a main. Lorem ipsum dolor sit amet...
                Volutpat to a main. Lorem ipsum dolor sit amet...
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-72 bg-white border m-auto mb-10 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
            <div className="">
              <div className="mb-6 overflow-hidden">
                <img
                  className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                  src="./comp1.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col mb-2 px-4 h-12">
                <h3 className="text-base mb-1 font-bold font-heading  text-ellipsis overflow-hidden leading-normal hover:text-nirmaan poppin text-gray-700">
                  Kukatpally
                </h3>
                <a className="" href="#">
                  <p className="text-sm text-gray-400">Location: </p>
                </a>
              </div>
              <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                Volutpat to a main. Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet, consectetury of a adipiscing elit. Volutpat to a main.
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetury of a adipiscing elit. Volutpat to a main. Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetury of
                a adipiscing elit. Volutpat to a main. Lorem ipsum dolor sit
                amet... Volutpat to a main. Lorem ipsum dolor sit amet...
                Volutpat to a main. Lorem ipsum dolor sit amet...
              </p>
            </div>
            <div className=" group flex justify-end items-center mt-8 mb-10">
              <a
                className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
                href="#"
              >
                <span className=" font-bold text-xs poppin">See More</span>
                <svg
                  className=" transition group-hover:translate-x-2 hover:duration-500 "
                  width="20"
                  height="14"
                  viewbox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </Carousel>
      </div>
      <Footer />
    </>
  );
};
export default Telangana;
