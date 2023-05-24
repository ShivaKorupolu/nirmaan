import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Vision = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [video, setVideo] = useState(false);
  const [education, setEducation] = useState(false);
  const [skill, setSkill] = useState(false);
  const [disaster, setDisaster] = useState(false);
  const [health, setHealth] = useState(false);
  const [divercity, setDivercity] = useState(false);
  const [women, setWomen] = useState(false);

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

  return (
    <>
      {/*     
    <div className='w-full h-screen bg-black container text-center flex justify-center items-center flex-col'>
        <a href="" ><h1 className='text-white text-2xl underline poppin underline-offset-8 py-6 transition hover:scale-105 '>OUR VISION</h1></a>
        <p className='text-white text-lg transition hover:scale-105 poppin '>TO ACHIEVE A KNOWLEDGE DRIVEN AND AN ECONOMICALLY EMPOWERED SOCIETY</p>
        <a href="" > <h1 className='text-white text-2xl underline underline-offset-8  poppin transition hover:scale-105 py-6 '>OUR MISSION</h1></a>
        <p className='text-white text-lg transition hover:scale-105 poppin'>TO PROMOTE GRASSROOTS SOCIAL INNOVATIONS, VOLUNTEERING SPIRIT, ACTIVE CITIZENSHIP AND SOCIAL LEADERSHIP AMONG THE YOUTH OF THE NATION.</p>

    </div> */}

      <div
        onMouseEnter={() => setVideo((video) => !video)}
        onMouseLeave={() => setVideo((video) => !video)}
        className="relative min-w-full bg-black h-screen flex justify-around items-end "
      >
        <div className="absolute object-cover ">
          <video
            src="/video.mp4"
            autoplay="{true}"
            loop
            muted
            className=" z-10 
              "
          ></video>
        </div>
        <div className=" flex justify-evenly items-center gap-28 absolute">
          <div className=" text-white pl-10 text-2xl ">Eduaction</div>

          <div className=" text-white pl-10 text-2xl  text-opacity-50 ">
            Skill Eduaction
          </div>

          <div className=" text-white pl-10 text-2xl  text-opacity-50 ">
            Disaster Relif
          </div>

          <div className=" text-white pl-10  text-2xl text-opacity-50 ">
            Health
          </div>

          <div className=" text-white text-2xl pl-10 text-opacity-50 ">
            Divercity and Inclusion
          </div>

          <div className=" text-white pr-5  text-2xl text-opacity-50 ">
            Women Empowerment
          </div>
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
          <div className=" relative bottom-0 bg-black  min-w-full opacity-70">
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
                    Nirmaan as the nodal NGO partner, is planning to establish
                    Digital Labs
                  </p>

                  <div className=" group flex justify-center items-center mt-10 ">
                    <button
                      className="font-bold poppin flex justify-center items-center py-2 px-3 w-40 mx-2 text-sm inter text-yellow-500  transition ease-in-out"
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
                    Nirmaan as the nodal NGO partner, is planning to establish
                    Digital Labs primary source.
                  </p>
                  <div className=" group flex justify-center items-center mt-10 ">
                    <button
                      className="font-bold poppin flex justify-center items-center py-2  text-sm inter text-yellow-500  transition ease-in-out"
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
                className="w-full hover:border hover:border-white hover:border-t-0 px-2 flex justify-center items-center "
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
                    Nirmaan as the nodal NGO partner, is planning to establish
                    Digital Labs
                  </p>
                  <div className=" group flex justify-center items-center mt-10 ">
                    <button
                      className="font-bold poppin flex justify-center items-center py-2 w-40  text-sm inter text-yellow-500  transition ease-in-out"
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
                className="w-full hover:border hover:border-white hover:border-t-0 px-2 flex justify-center items-center "
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
                    Nirmaan as the nodal NGO partner, is planning to establish
                    Digital Labs
                  </p>
                  <div className=" group flex justify-center items-center mt-10 ">
                    <button
                      className="font-bold poppin flex justify-center items-center py-2 px-3 w-40 mx-1 text-sm inter text-yellow-500  transition ease-in-out"
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
                className="w-full hover:border hover:border-white hover:border-t-0 px-2 flex justify-center items-center"
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
                    Nirmaan as the nodal NGO partner, is planning to establish
                    Digital Labs
                  </p>
                  <div className=" group flex justify-center items-center mt-10 ">
                    <button
                      className="font-bold poppin flex justify-center items-center py-2 px-3 w-40 mx-1 text-sm inter text-yellow-500  transition ease-in-out"
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
                className="w-full hover:border hover:border-white hover:border-t-0 px-2 flex justify-center items-center "
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
                    Nirmaan as the nodal NGO partner, is planning to establish
                    Digital Labs
                  </p>
                  <div className=" group flex justify-center items-center mt-10 ">
                    <button
                      className="font-bold poppin flex justify-center items-center py-2 px-3 w-40 mx-1 text-sm inter text-yellow-500  transition ease-in-out"
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
    </>
  );
};

export default Vision;
