/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { classicNameResolver } from "typescript";

function Test() {
  const [isShowing, setIsShowing] = useState(false);
  const [whoweare, setWhoWeAre] = useState(false);
  const [whatwedo, setWhatWeDo] = useState(false);
  const [howtodonate, setHowToDonate] = useState(false);
  const [aboutus, setAboutUs] = useState(false);
  const [whowearemobile, setWhoWeAreMobile] = useState(false);
  const [nirmaaninternal, setNirmaanInternal] = useState(false);
  const [specialevents, setSpecialEvents] = useState(false);
  const [nirmaanlocated,setNirmaanLocated]=useState(false);
  const [whatwedomobile,setWhatWeDoMobile]=useState(false);
  const [education, setEducation] = useState(false);
  const [skilldevelopment, setSkillDevelopment] = useState(false);
  const [socialleadership, setSocialLeaderShip] = useState(false);
  const [health, setHealth] = useState(false);
  const [howtohelpmobile, setHowToHelpMobile] = useState(false);
  const [ourcampaigns, setOurCampaigns] = useState(false);


  function who() {
    setWhoWeAre(true);
    setWhatWeDo(false);
    setHowToDonate(false);
  }
  function what() {
    setWhatWeDo(true);
    setWhoWeAre(false);
    setHowToDonate(false);
  }
  function how() {
    setHowToDonate(true);
    setWhoWeAre(false);
    setWhatWeDo(false);
  }
  function ourpartner() {
    setHowToDonate(false);
    setWhoWeAre(false);
    setWhatWeDo(false);
  }

  const Whoweare = [
    {
      menu: "About Us",
      submenu: [
        { title: "About Nirmaan" },
        { title: "nirmaan Story" },
        { title: "nirmaan team" },
        { title: "nirmaan Vision" },
      ],
    },
    {
      menu: "Nirmaan Imapct",
      submenu: [
        { title: "Nirmaan Membership" },
        { title: "nirmaan  Media" },
        { title: "Nirmaan Internal Events" },
        { title: "Terms and Conditions" },
        { title: "Menter Talk" },
      ],
    },
    {
      menu: "Special Events",
      submenu: [
        { title: "Inorbit Mall Evnet 2023" },
        { title: "Seed to soil" },
      ],
    },
    {
      menu: "Nirmaan Located",
      submenu: [
        { title: "Andhra Pradesh" },
        { title: "Arunachal Pradesh" },
        { title: "Assam" },
        { title: "Bihar" },
        { title: "Chhattisgarh" },
        { title: "Goa" },
        { title: "Gujarat" },
        { title: "Haryana" },
        { title: "Himachal Pradesh" },
        { title: "Jharkhand" },
      ],
    },
    {
     
      submenu: [
       
      
        { title: "Karnataka" },
        { title: "Kerala" },
        { title: "Madhya Pradesh" },
        { title: "Maharashtra" },
        { title: "Manipur" },
        { title: "Meghalaya" },
        { title: "Mizoram" },
        { title: "Nagaland" },
        { title: "Odisha" },
      ],
    },
    {
     
      submenu: [


{ title: "Punjab" },
{ title: "Rajasthan" },
{ title: "Sikkim" },
{ title: "Tamil Nadu" },
{ title: "Telangana" },
{ title: "Tripura" },
{ title: "Uttar Pradesh" },
{ title: "Uttarakhand" },
{ title: "West Bengal" }
      ],
    },



    
  ];

  const Whatwedo = [
    {
      menu: "Education",
      submenu: [
        { title: "  Disruptive Digital Intervention" },
        { title: "Coding Initiative Program" },
        { title: "  Vidya Help Line Program" },
        { title: "  Life Skills and Career Guidance" },
        { title: "  School Adoption Program" },
        { title: "  Scholarship Mentorship" },
      ],
    },
    {
      menu: "Skill Development And Entrepreneurship",
      submenu: [
        { title: "  National Digital Literacy Mission" },
        { title: " Sustainable Livelihoods to Farmers" },
        { title: " Threads of Hope" },
        { title: "  Avanti Women Skill Development" },
        { title: " Youth Skill Development" },
        { title: "  Yuva Disha" },
      ],
    },
    {
      menu: "Social LeaderShip",
      submenu: [
        { title: "  Giveback Program" },
        { title: " Disaster Relief Rehabilitation" },
        { title: " Probono Chapters" },
        { title: "  Volunteering and Internship" },
        { title: " Hyderabad Flood Relief Rehabilitation" },
        { title: "  Nirmaan Food Bamk" },
        { title: "  project Prayaas" },
      ],
    },
    {
      menu: "Health",
      submenu: [
        { title: "  Blood Donation" },
        { title: " Support for Gov Hospitals" },
        { title: " 10 Bed ICU" },
        { title: "  Supporting West Singhbhum" },
        { title: " Hyderabad Needs Oxygen" },
        { title: "  Hysea Covid Response" },
      ],
    },
  ];

  const Howtodonate = [
    {
      menu: "Our Campaigns ",
      submenu: [
        { title: "donate for Indu" },
        { title: "donate for Kumari" },
        { title: "donate for Suresh Saini" },
        { title: "donate for Nirmaan Food Bank" },
        { title: "donate for  Project Prayaas" },
        { title: "donate for Little child " },
      ],
    },
  ];

  const aboutusmenu = [
    { title: "About Nirmaan" },
    { title: "Our Story" },
    { title: "Our team" },
    { title: "Our Vision" },
  ];

  const Nirmaaninternal = [
    { title: "Nirmaan Membership" },
    { title: " Media" },
    { title: "Nirmaan Internal Events" },
    { title: "Terms and Conditions" },
    { title: "Menter Talk" },
  ];

  const Specialevents = [
    { title: "Inorbit Mall Evnet 2023" },
    { title: "Seed to soil" },
  ];

  const Nirmaanlocated = [
    { title: "Telangana" },
    { title: "Andra Pradesh" },
    { title: "Pune" },
    { title: "Banglure" },
    { title: "Delhi" },
    { title: "Telangana" },
    { title: "Andra Pradesh" },
    { title: "Pune" },
    { title: "Delhi" },
    { title: "Telangana" },
    { title: "Andra Pradesh" },
    { title: "Pune" },
    { title: "Banglure" },
    { title: "Delhi" },
    { title: "Telangana" },
    { title: "Andra Pradesh" },
    { title: "Pune" },
  ];

const Education=[
  { title: "  Disruptive Digital Intervention" },
        { title: "Coding Initiative Program" },
        { title: "  Vidya Help Line Program" },
        { title: "  Life Skills and Career Guidance" },
        { title: "  School Adoption Program" },
        { title: "  Scholarship Mentorship" },
]

const SkillDevelopment =[
  { title: "  National Digital Literacy Mission" },
  { title: " Sustainable Livelihoods to Farmers" },
  { title: " Threads of Hope" },
  { title: "  Avanti Women Skill Development" },
  { title: " Youth Skill Development" },
  { title: "  Yuva Disha" },

]

const SocialLeaderShip=[
  { title: "  Giveback Program" },
  { title: " Disaster Relief Rehabilitation" },
  { title: " Probono Chapters" },
  { title: "  Volunteering and Internship" },
  { title: " Hyderabad Flood Relief Rehabilitation" },
  { title: "  Nirmaan Food Bamk" },
  { title: "  project Prayaas" },
]


const Health=[
  { title: "  Blood Donation" },
        { title: " Support for Gov Hospitals" },
        { title: " 10 Bed ICU" },
        { title: "  Supporting West Singhbhum" },
        { title: " Hyderabad Needs Oxygen" },
        { title: "  Hysea Covid Response" },
]

const OurCampaigns=[
  { title: "donate for Indu" },
        { title: "donate for Kumari" },
        { title: "donate for Suresh Saini" },
        { title: "donate for Nirmaan Food Bank" },
        { title: "donate for  Project Prayaas" },
        { title: "donate for Little child " },
]


  return (
    <>
      <div className="flex items-center justify-between lg:px-20 h-20 bg-white border border-b-2 shadow-md">
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
              <div className="flex items-center gap-4">
                <div
                  onClick={() => setWhoWeAre((whoweare) => !whoweare)}
                  onMouseEnter={() => {
                    who();
                  }}
                  onMouseLeave={() => {
                    who();
                  }}
                  className="px-0 py-1 border-nirmaan text-nirmaan-darker mr-9 font-extrabold text-xs hover:text-nirmaan hover:border-b-2 inter hover:transition-all hover:duration-300"
                >
                  <a href="#" className="group flex">
                    Who we are
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
                  </a>
                </div>

                <div
                  onClick={() => setWhatWeDo((whatwedo) => !whatwedo)}
                  onMouseEnter={() => {
                    what();
                  }}
                  onMouseLeave={() => {
                    what();
                  }}
                  className="px-0 py-1 border-nirmaan mr-9 text-nirmaan-darker font-extrabold text-xs hover:text-nirmaan hover:border-b-2 inter hover:transition-all hover:duration-300"
                >
                  <a href="#" className="group flex">
                    What we do
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
                  </a>
                </div>

                <div
                  onMouseEnter={() => {
                    ourpartner();
                  }}
                  className="px-0 py-1 border-nirmaan text-nirmaan-darker mr-9 font-extrabold text-xs hover:text-nirmaan hover:border-b-2 inter hover:transition-all hover:duration-300"
                >
                  <a href="OurPartners" className="group flex">
                    Our Partners
                  </a>
                </div>

                <div
                  onClick={() => setHowToDonate((howtodonate) => !howtodonate)}
                  onMouseEnter={() => {
                    how();
                  }}
                  onMouseLeave={() => {
                    how();
                  }}
                  className="px-0 py-1 border-nirmaan text-nirmaan-darker mr-9 font-extrabold text-xs hover:text-nirmaan hover:border-b-2 inter hover:transition-all hover:duration-300"
                >
                  <a href="#" className="group flex">
                    How To Help
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto ">
          <div className="flex flex-wrap items-center">
            <div className="w-auto hidden lg:block">
              <div className="inline-block">
                <button
                  className="font-bold py-2 w-32 mx-1 text-nirmaan-darker text-sm poppin rounded-3xl border border-nirmaan transition ease-in-out duration-200 hover:text-blue-50 hover:bg-nirmaan "
                  type="button"
                  contenteditable="false"
                >
                  Volunteer
                </button>
              </div>
              <div className="inline-block">
              <button
                  className="font-bold py-2 w-32 mx-1 text-sm poppin  rounded-3xl border border-nirmaan transition ease-in-out duration-200 hover:text-blue-50 hover:bg-sky-600 bg-sky-500 text-white"
                  type="button"
                  contenteditable="false"
                >
                  Donate now
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
        show={whoweare}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="z-50 absolute capitalize  w-full lg:text-left text-center bg-white border border-white shadow-lg  grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 lg:px-20 lg:pt-10  "
          onMouseEnter={() => {
            who();
          }}
          onMouseLeave={() => setWhoWeAre((whoweare) => !whoweare)}
        >
          {Whoweare
            ? Whoweare.map((data, index) => (
                <div key={index} className={`capitalize  px-2  border-l-0 border-t-0  ${(index<3)?"border border-r-nirmaan":""} `}>
                  <h1 className="mb-6 lg:ml-4 poppin text-gray-700  font-bold leading-normal h-10 underline    underline-offset-8 text-lg">
                    {data.menu}
                  </h1>
                  {data.submenu
                    ? data.submenu.map((subdata, index) => (
                        <div key={index}>
                          <button className="text-sm lg:ml-4 capitalize font-semibold  text-gray-600 inter hover:text-nirmaan hover:underline underline-offset-8 my-2 text-ellipsis object-fill ">
                            {subdata.title}
                          </button>
                        </div>
                      ))
                    : ""}
                </div>
              ))
            : ""}
        </div>
      </Transition>

      <Transition
        show={whatwedo}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          onMouseEnter={() => {
            what();
          }}
          className="w-full lg:text-left md:text-center text-center h-auto border border-white  shadow-lg underline underline-offset-8  grid lg:grid-cols-4 md:grid-cols-3 lg:px-20 lg:pt-10 bg-white"
          onMouseLeave={() => setWhatWeDo((whatwedo) => !whatwedo)}
        >
          {Whatwedo
            ? Whatwedo.map((data, index) => (
                <div key={index} className={`capitalize  px-2  border-l-0 border-t-0  ${(index<3)?"border border-r-nirmaan":""} `}>
                  <h1 className="lg:mb-6 lg:ml-4 font-bold leading-normal h-10  text-lg poppin text-gray-700">
                    {data.menu}
                  </h1>
                  {data.submenu
                    ? data.submenu.map((subdata, index) => (
                        <div key={index}>
                          <button className=" lg:ml-4 text-sm font-semibold text-gray-600 inter hover:text-nirmaan hover:underline underline-offset-8 my-2 text-ellipsis object-fill ">
                            {subdata.title}
                          </button>
                        </div>
                      ))
                    : ""}
                </div>
              ))
            : ""}
        </div>
      </Transition>

      <Transition
        show={howtodonate}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          onMouseEnter={() => {
            how();
          }}
          className="w-full text-center lg:text-left bg-white border border-white shadow-lg h-auto grid lg:grid-cols-4 md:grid-cols-3 lg:px-20 lg:pt-10"
          onMouseLeave={() => setHowToDonate((howtodonate) => !howtodonate)}
        >
          {Howtodonate
            ? Howtodonate.map((data, index) => (
                <div key={index} className={`capitalize  px-2  border-l-0 border-t-0  ${(index<5)?"border border-r-nirmaan":""} `}>
                  <h1 className=" mb-6 lg:ml-4 font-bold leading-normal underline underline-offset-8 capitalize text-lg text-gray-700">
                    {data.menu}
                  </h1>
                  {data.submenu
                    ? data.submenu.map((subdata, index) => (
                        <div key={index}>
                          <button className="text-sm lg:ml-4 font-semibold capitalize  text-gray-600 inter hover:text-nirmaan hover:underline underline-offset-8 my-2 text-ellipsis object-fill">
                            {subdata.title}
                          </button>
                        </div>
                      ))
                    : ""}
                </div>
              ))
            : ""}
        </div>
      </Transition>

      {/*--------------------------------- mobile view------------------------------------ */}
      <Transition
        show={isShowing}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="z-10 lg:hidden block navbar-menu fixed top-0 left-0 bottom-0 w-full h-screen sm:max-w-xs">
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
                        onClick={() => setIsShowing((isShowing) => !isShowing)}
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
{/* --------------------list of header options in mobile view start---------------------------------------- */}
              <div className="flex flex-col justify-start pt-8 relative border-t-2 w-full h-screen">
                <ul className="poppin">
 {/*--------------------- whowearemobile start---------------------------------------------------------- */}
                  <div
                    onClick={() =>
                      setWhoWeAreMobile((whowearemobile) => !whowearemobile)
                    }
                    className="flex justify-between  mb-4 px-4 "
                  >
                    <li className="mb-2">
                      <a
                        className=" hover:text-gray-500 px-1 text-base font-semibold"
                        href="#"
                      >
                        
                        Who we are
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
                  <Transition
                    show={whowearemobile}
                    enter="transition-opacity duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="z-10 lg:hidden block navbar-menu fixed top-0 left-0 bottom-0 w-full h-screen sm:max-w-xs">
                      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                      <nav className="relative  z-10 px-2 pt-4 bg-white h-auto border overflow-y-auto">
                        <div className="flex flex-wrap justify-between h-full">
                          <div className="w-full px-4 ">
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
                          <div className=" mt-2 px-2 w-full h-screen ">
                          

                            <div className=" border-t-2 border-t-blue-500 w-full h-screen">
                              <button
                                className="mt-4 hover:text-gray-400 px-1 text-sm w-28 rounded-md bg-nirmaan h-8 p-2 text-center text-white"
                                onClick={() =>
                                  setWhoWeAreMobile(
                                    (whowearemobile) => !whowearemobile
                                  )
                                }
                              >
                                Back
                              </button>
                              <div className=" w-full ">
                                <div
                                  className="mb-4 mt-4 hover:text-gray-400 px-1 text-md font-semibold "
                                  onClick={() =>
                                    setAboutUs((aboutus) => !aboutus)
                                  }
                                >
                                  About Us
                                </div>
                                <Transition
                                  show={aboutus}
                                  enter="transition-opacity duration-500"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition-opacity duration-500"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <div className="w-52 border text-xs shadow-lg mb-10 h-auto ml-16 p-3">
                                    {aboutusmenu
                                      ? aboutusmenu.map(
                                          (list, list_aboutus) => (
                                            <div
                                              key={aboutusmenu.id}
                                              className="p-2 hover:text-nirmaan"
                                            >
                                              {list.title}
                                            </div>
                                          )
                                        )
                                      : ""}
                                  </div>
                                </Transition>

                                <div
                                  className="mb-4 hover:text-gray-400 px-1 text-base font-semibold"
                                  onClick={() =>
                                    setNirmaanInternal(
                                      (nirmaaninternal) => !nirmaaninternal
                                    )
                                  }
                                >
                                  Nirmaan Internal Events
                                </div>

                                <Transition
                                  show={nirmaaninternal}
                                  enter="transition-opacity duration-500"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition-opacity duration-500"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <div className="w-56 border shadow-lg mb-10 ml-16 h-auto  p-3">
                                    {Nirmaaninternal
                                      ? Nirmaaninternal.map(
                                          (internal, list_internal) => (
                                            <div
                                              key={internal.id}
                                              className="p-2 hover:text-nirmaan"
                                            >
                                              {internal.title}
                                            </div>
                                          )
                                        )
                                      : ""}
                                  </div>
                                </Transition>

                                <div
                                  className="mb-4 hover:text-gray-400 px-1 text-base font-semibold"
                                  onClick={() =>
                                    setSpecialEvents(
                                      (specialevents) => !specialevents
                                    )
                                  }
                                >
                                  Special Events
                                </div>

                                <Transition
                                  show={specialevents}
                                  enter="transition-opacity duration-500"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition-opacity duration-500"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <div className="w-56 border shadow-lg mb-10 h-auto ml-16 p-3">
                                    {Specialevents
                                      ? Specialevents.map(
                                          (events, list_events) => (
                                            <div
                                              key={events.id}
                                              className="p-2 hover:text-nirmaa"
                                            >
                                              {events.title}
                                            </div>
                                          )
                                        )
                                      : ""}
                                  </div>
                                </Transition>

                                <div
                                  className="mb-4 hover:text-gray-400 px-1 text-base font-semibold"
                                  onClick={() =>
                                    setNirmaanLocated(
                                      (nirmaanlocated) => !nirmaanlocated
                                    )
                                  }
                                >
                                  Nirmaan Located
                                </div>

                                <Transition
                                  show={nirmaanlocated}
                                  enter="transition-opacity duration-500"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition-opacity duration-500"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <div className="w-56 border shadow-lg mb-10 h-auto ml-16 p-3">
                                    {Nirmaanlocated
                                      ? Nirmaanlocated.map(
                                          (located, list_locations) => (
                                            <div
                                              key={located.id}
                                              className="p-2 hover:text-nirmaan"
                                            >
                                              {located.title}
                                            </div>
                                          )
                                        )
                                      : ""}
                                  </div>
                                </Transition>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </Transition>
{/*--------------------- whowearemobile end---------------------------------------------------------- */}



{/*----------------- what we do mobile start---------------- */}
                  <div
                    className="flex justify-between  mb-4 px-4"
                    onClick={() => setWhatWeDoMobile((whatwedomobile) => !whatwedomobile)}
                  >
                    <li className="mb-2">
                      {" "}
                      <a
                        className=" hover:text-gray-500 px-1 text-base font-semibold"
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

                  <Transition
                    show={whatwedomobile}
                    enter="transition-opacity duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="z-10 lg:hidden block navbar-menu fixed top-0 left-0 bottom-0 w-full h-screen sm:max-w-xs">
                      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                      <nav className="relative  z-10 px-2 pt-4 bg-white h-auto border overflow-y-auto">
                        <div className="flex flex-wrap justify-between h-full">
                          <div className="w-full px-4 ">
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
                          <div className=" mt-2 px-2 w-full h-screen ">
                            <div className=" border-t-2 border-t-blue-500 w-full h-screen">
                              <button
                                className="mt-4 hover:text-gray-400 px-1 text-sm w-28 rounded-md bg-nirmaan h-8 p-2 text-center text-white"
                                onClick={() =>
                                  setWhatWeDoMobile(
                                    (setWhatWeDoMobile) => !whatwedomobile
                                  )
                                }
                              >
                                Back
                              </button>
                              <div className=" w-full ">
                                <div
                                  className="mb-4 mt-4 hover:text-gray-400 px-1 text-md font-semibold "
                                  onClick={() =>
                                    setEducation((education) => !education)
                                  }
                                >
                                  Education
                                </div>
                                <Transition
                                  show={education}
                                  enter="transition-opacity duration-500"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition-opacity duration-500"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <div className="w-52 border text-xs shadow-lg mb-10 h-auto ml-16 p-3">
                                    {Education
                                      ? Education.map(
                                          (education_list, education_submenu) => (
                                            <div
                                              key={education_list.id}
                                              className="p-2 hover:text-nirmaan"
                                            >
                                              {education_list.title}
                                            </div>
                                          )
                                        )
                                      : ""}
                                  </div>
                                </Transition>

                                <div
                                  className="mb-4 hover:text-gray-400 px-1 text-base font-semibold"
                                  onClick={() =>
                                    setSkillDevelopment(
                                      (skilldevelopment) => !skilldevelopment                                    )
                                  }
                                >
                                  Skill Development and Entrepreneurship
                                </div>

                                <Transition
                                  show={skilldevelopment}
                                  enter="transition-opacity duration-500"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition-opacity duration-500"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <div className="w-56 border text-xs shadow-lg mb-10 ml-16 h-auto  p-3">
                                    {SkillDevelopment
                                      ? SkillDevelopment.map(
                                          (SkillDevelopment_list, SkillDevelopment_submenu) => (
                                            <div
                                              key={SkillDevelopment_list.id}
                                              className="p-2 hover:text-nirmaan"
                                            >
                                              {SkillDevelopment_list.title}
                                            </div>
                                          )
                                        )
                                      : ""}
                                  </div>
                                </Transition>

                                <div
                                  className="mb-4 hover:text-gray-400 px-1 text-base font-semibold"
                                  onClick={() =>
                                    setSocialLeaderShip(
                                      (socialleadership) => !socialleadership
                                    )
                                  }
                                >
                                  Social Leadership
                                </div>

                                <Transition
                                  show={socialleadership}
                                  enter="transition-opacity duration-500"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition-opacity duration-500"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <div className="w-56 border text-xs shadow-lg mb-10 h-auto ml-16 p-3 ">
                                    {SocialLeaderShip
                                      ? SocialLeaderShip.map(
                                          (SocialLeaderShip_list, SocialLeaderShip_submenu) => (
                                            <div
                                              key={SocialLeaderShip_list.id}
                                              className="p-2 hover:text-nirmaa"
                                            >
                                              {SocialLeaderShip_list.title}
                                            </div>
                                          )
                                        )
                                      : ""}
                                  </div>
                                </Transition>

                                <div
                                  className="mb-4 hover:text-gray-400 px-1 text-base font-semibold"
                                  onClick={() =>
                                    setHealth(
                                      (health) => !health
                                    )
                                  }
                                >
                                  Health
                                </div>

                                <Transition
                                  show={health}
                                  enter="transition-opacity duration-500"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition-opacity duration-500"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <div className="w-56 border text-xs shadow-lg mb-4 h-auto ml-10 p-3">
                                    {Health
                                      ? Health.map(
                                          (Health_list, Health_submenu) => (
                                            <div
                                              key={Health_list.id}
                                              className="p-2 hover:text-nirmaan"
                                            >
                                              {Health_list.title}
                                            </div>
                                          )
                                        )
                                      : ""}
                                  </div>
                                </Transition>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </Transition>
{/*----------------- what we do mobile end---------------- */}



{/* ----------------------Our partners mobile start----------------------------- */}
                  <div
                    className="flex justify-between  mb-4 px-4"
                  >
                  
                    <li className="mb-2">
                      {" "}
                      <a
                        className=" hover:text-gray-500 px-1 text-base font-semibold"
                        href="/OurPatners"
                      >
                        Our Partners
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
{/* ----------------------Our partners mobile end----------------------------- */}




{/* ----------------------How to help mobile end----------------------------- */}



                  <div
                    className="flex justify-between  mb-4 px-4"
                    onClick={() => setHowToHelpMobile((howtohelpmobile) => !howtohelpmobile)}
                  >
                    <li className="mb-2">
                      {" "}
                      <a
                        className=" hover:text-gray-500 px-1 text-base font-semibold"
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

                  <Transition
                    show={howtohelpmobile}
                    enter="transition-opacity duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="z-10 lg:hidden block navbar-menu fixed top-0 left-0 bottom-0 w-full h-screen sm:max-w-xs">
                      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                      <nav className="relative  z-10 px-2 pt-4 bg-white h-auto border overflow-y-auto">
                        <div className="flex flex-wrap justify-between h-full">
                          <div className="w-full px-4 ">
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
                          <div className=" mt-2 px-2 w-full h-screen ">
                            <div className=" border-t-2 border-t-blue-500 w-full h-screen">
                              <button
                                className="mt-4 hover:text-gray-400 px-1 text-sm w-28 rounded-md bg-nirmaan h-8 p-2 text-center text-white"
                                onClick={() =>
                                  setHowToHelpMobile(
                                    (howtohelpmobile) => !howtohelpmobile
                                  )
                                }
                              >
                                Back
                              </button>
                              <div className=" w-full ">
                                <div
                                  className="mb-4 mt-4 hover:text-gray-400 px-1 text-md font-semibold "
                                  onClick={() =>
                                    setOurCampaigns((ourcampaigns) => !ourcampaigns)
                                  }
                                >
                                  Our Campaigns
                                </div>
                                <Transition
                                  show={ourcampaigns}
                                  enter="transition-opacity duration-500"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition-opacity duration-500"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <div className="w-52 border text-xs shadow-lg mb-10 h-auto ml-16 p-3">
                                    {OurCampaigns
                                      ? OurCampaigns.map(
                                          (OurCampaigns_list, OurCampaigns_submenu) => (
                                            <div
                                              key={OurCampaigns_list.id}
                                              className="p-2 hover:text-nirmaan"
                                            >
                                              {OurCampaigns_list.title}
                                            </div>
                                          )
                                        )
                                      : ""}
                                  </div>
                                </Transition>

                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </Transition>


{/* ----------------------How to help mobile end----------------------------- */}



                  {/* -------------------volunteer buttons for mobile start---------------------------------------- */}
                  <div className="w-full  px-4  flex justify-between ">
                    <div className="flex space-x-6 justify-between  items-center">
                      <div className="w-full flex justify-evenly items-center gap-x-5">
                        <div className="inline-block">
                          <button
                            className="py-1 w-36  text-large popi border hover:border-gray-300  focus:ring focus:ring-gray-50 bg-blue-500 transition ease-in-out duration-200 hover:bg-blue-800 text-lg  text-white"
                            type="button"
                            contenteditable="false"
                          >
                            Volunteer
                          </button>
                        </div>
                        <div className="inline-block">
                          <button
                            className="py-1 w-36  text-large popi border hover:border-gray-300  focus:ring focus:ring-gray-50 bg-blue-500 transition ease-in-out duration-200 hover:bg-blue-800 text-lg  text-white"
                            type="button"
                            contenteditable="false"
                          >
                            Donation
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* -------------------volunteer buttons for mobile end---------------------------------------- */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </Transition>
    </>
  );
}

export default Test;
