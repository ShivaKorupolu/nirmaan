/* eslint-disable @next/next/no-img-element */
import React from "react";
// import Image from 'next/image'
import { Transition } from "@headlessui/react";
import { useState } from "react";

const Pledge = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div>
      <section>
        <div className="flex ">
          <div className="w-full  xl:w-[20%] lg:w-[25%] lg:px-4  justify-center bg-gray-900">
            <div classNameName=" pb-32">
              <img
                className="block w-full object-cover h-80 mb-10 lg:pt-6"
                src="student-2.jpg"
                alt=""
              />
              <div className="max-w-md mx-auto">
                <a
                  className="flex mb-3 items-center text-white hover:text-gray-200"
                  href="#"
                >
                  <span className=" font-bold text-2xl sm:text-2xl poppin text-white">
                    Shiva Korupolu
                  </span>
                </a>

                <div className="flex justify-between items-center space-x-2 mt-3 mb-8 ">
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

                {/* <h3 className="font-heading text-xl sm:text-2xl poppin text-white mb-8">
                  Support My Compaign to Help Others
                </h3> */}
                <h3 className="font-heading text-xl  sm:text-xl poppin text-gray-300 underline underline-offset-8 mb-8 poppin">
                  About Me :
                </h3>
                <p className="text-white text-medium text-ellipsis overflow-hidden h-48  inter">
                  The house like a sense of truth that comes from within.The
                  house like a sense of truth that comes from within.The house
                  like a sense of truth that comes from within.The house like a
                  sense of truth that comes from within.The house like a sense
                  of truth that comes from within.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full  xl:w-[80%] 2xl:w-2/3">
            <div className="w-full">
              <img
                className="block w-full object-cover h-80"
                src="event2.jpg"
                alt=""
              />
              <div className="w-full h-16 bg-nirmaan px-4 flex justify-start items-center text-left ">
                <h3 className="font-heading text-xl sm:text-2xl poppin   text-white">
                  <span className="font-heading text-xl sm:text-2xl poppin text-white">
                    About Compaign title
                  </span>{" "}
                  <span className="text-white m-auto">|</span> Please Mention in
                  one Sentence only
                </h3>
              </div>

              <div className="lg:flex justify-around mt-4 text-left ml-4 mb-4">
                <div className=" lg:w-[65%] sm:w-full">
                  <h3 className="font-semibold text-base text-gray-600 sm:text-2xl poppin mb-2">
                    {" "}
                    What
                  </h3>
                  <p className="text-medium inter mb-4">
                    The house like a sense of truth that comes from within.The
                    house like a sense of truth that comes from within.The house
                    like a sense of truth that comes from within.The house like
                    a sense of truth that comes from with
                  </p>

                  <h3 className="font-semibold text-base text-gray-600 sm:text-2xl poppin mb-2">
                    {" "}
                    Why
                  </h3>
                  <p className="text-medium inter mb-4">
                    The house like a sense of truth that comes from within.The
                    house like a sense of truth that comes from within.The house
                    like a sense of truth that comes from within.The house like
                    a sense of truth that comes from within.The house like a
                    sense of truth that comes from within. house like a sense of
                    truth that comes
                  </p>

                  <h3 className="font-semibold text-base text-gray-600 sm:text-2xl poppin  mb-2">
                    {" "}
                    How
                  </h3>
                  <p className="text-medium inter mb-4 inter">
                    The house like a sense of truth that comes from within.The
                    house like a sense of truth that comes from within.The house
                    like a sense of truth that comes from within.The house like
                    a sense of truth that comes from within.The house like a
                    sense of truth that comes from within. house like a sense of
                    truth that comes from within.The house like a sense of truth
                    that comes from within.The house like a sense of truth that
                    comes from within.The house like a sense of truth that comes
                    from within.
                  </p>
                </div>

                <div className="lg:w-[35%] sm:w-full h-auto border border-gray-200 p-4">
                  <img src="event2.jpg" className="object-cover" alt="" />
                  <h3 className="font-semibold text-base sm:text-2xl poppin text-gray-700 mb-2 mt-4 ">
                    {" "}
                    About Event
                  </h3>
                  <p className=" text-sm text-ellipsis overflow-hidden h-24 mb-4 inter">
                    The house like a sense of truth that comes from within.The
                    house like a sense of truth that comes from within.The house
                    like a sense of truth that comes from within.......{" "}
                    <a href="" className="text-nirmaan poppin">
                      See more
                    </a>
                  </p>

                  {/* <h4 className="mt-4 mb-2 poppoin font-bold">Donation</h4> */}
                  <div className=" mb-3 bg-gray-200 rounded-full h-2.5 overflow-hidden dark:bg-gray-300">
                    <div className="bg-green-800 h-2.5 rounded-full w-[20%] "></div>
                  </div>
                  <div className="">
                    <ul className="flex justify-between">
                      <div className="flex flex-row gap-2">
                        <li className=" text-gray-700 text-xs font-semibold opacity-40 poppin">
                          INR 4,675/- So Far
                        </li>
                      </div>
                      <div className="flex flex-row gap-2">
                        <li className=" text-black text-xs font-bold poppin"></li>
                        <li className=" text-gray-700 text-xs font-semibold opacity-40 poppin">
                          Goal : INR 100000/-
                        </li>
                      </div>
                    </ul>
                  </div>
                  {/* <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
<div className=" flex justify-between items-center mt-4">
<div >
<button className="border flex justify-center hover:bg-slate-500 items-center w-24 h-8 bg-blue-600 text-white">Onces</button>
</div>
<div>
<button className="border flex justify-center hover:bg-slate-500 items-center w-24 h-8 bg-blue-600 text-white">Weekly</button>
</div>
<div>
<button className="border flex justify-center  hover:bg-slate-500 items-center w-24 h-8 bg-blue-600 text-white">Monthly</button>
</div>
</div>
             <div className=" flex justify-between items-center w-full  mt-6">
<div>
<button  className="border flex justify-center items-center w-24 h-8 text-xs poppin hover:bg-gray-100 hover:text-black  font-semibold ">$50</button>
</div>
<div>
<button className="border flex justify-center items-center w-24 h-8 poppin text-xs hover:bg-gray-100 hover:text-black  font-semibold ">$100</button>
</div>
<div>
<button className="border flex justify-center items-center w-24 h-8 poppin text-xs hover:bg-gray-100 hover:text-black  font-semibold ">$500</button>
</div>
</div>
<input type="text" name="others" placeholder=" $ Other amount" className="w-full h-10 border mt-5 border-gray-200 focus:border-gray-300" onChange={()=>{}}/>

        </Transition> */}

                  <div onClick={() => setIsShowing((isShowing) => !isShowing)}>
                    <button
                      className="w-full h-10 mt-6 bg-nirmaan  font-semibold hover:bg-nirmaan-dark text-white"
                      name="donate"
                    >
                      Donate Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pledge;
