import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Video() {
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
  let edu = "Education";
  let skills = "Skill Development And Entrepreneurship";
  let divRf = "Disaster Relif";
  let helt = "Health";
  let divIn = "Divercity and Inclusion";
  let woEp = "Women Empowerment";

  return (
    <div>
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
                src="/nirmaanvideo.mp4"
                autoplay="{true}"
                loop
                muted
                className=" z-10 max-w-full max-h-screen object-cover"
              ></video>
            </div>

            <div className="lg:flex justify-center hover:hidden  items-center mb-4 px-4 lg:gap-28 absolute">
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
              <div className=" relative bottom-0 bg-black opacity-60">
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
    </div>
  );
}

export default Video;
