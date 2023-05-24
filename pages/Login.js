/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {API_URL} from "../config/constants"
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitData(e) {
    e.preventDefault();
    axios
      .post(API_URL+"file.php", {
        name: "name",
        email: "email",
        password: "password",
      })
      .then(function (response) {
        console.log(response);
        {
          response ? alert(done) : "";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <section class="relative bg-white overflow-hidden">
        <img
          class="absolute left-0 bottom-0"
          src="https://shuffle.dev/flaro-assets/images/sign-up/gradient.svg"
          alt=""
        />
        <div class="relative z-10 flex flex-wrap -m-8">
          <div class="w-full md:w-[50%] p-8 md:block hidden">
            <div class="container px-4 mx-auto">
              <div class="flex flex-wrap">
                <div class="w-full">
                  <div class="md:max-w-lg mx-auto  ">
                    <a className="md:mb-24 mb-10 inline-block" href="#">
                      <img
                        className="w-auto h-24"
                        src="/nirmaan_logo.png"
                        alt=""
                      />
                    </a>
                    <h3 className="font-bold text-nirmaan-darker leading-10 text-3xl poppin sm:text-4xl  md:mb-10 mb-5">
                      We have only on passion. The raise of greate world
                    </h3>
                    <p className="md:mb-10 md:max-w-base text-base poppin font-semibold font-heading text-gray-700 text-ellipsis overflow-hidden  leading-normal">
                      The purpose of life is not to be happy. It is to be
                      useful, to be honorable, to be compassionate, to have it
                      make some difference that you have lived and lived well.
                      The purpose of life is not to be happy. It is to be
                      useful, to be honorable, to be compassionate, to have it
                      make some difference that you have lived and lived well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[50%] bg-nirmaan-dark h-full p-8">
            <div className="p-4 py-8 pt-4 mb-4 flex flex-col justify-center  h-full">
              <form className="md:max-w-md border bg-white p-10 mx-auto">
                <h3 className="md:text-3xl text-xl text-nirmaan-darker mb-6 flex justify-center items-center poppin font-bold ">
                  Sign in to Nirmaan
                </h3>
                <label className="block mb-4 pt-2">
                  <p className="mb-1 text-gray-600 font-bold text-base poppin ">
                    Full Name <span className="text-red-600">*</span>
                  </p>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-2 w-full text-gray-400 font-medium text-sm placeholder-gray-300  inter bg-white outline-none border border-gray-200 rounded-lg focus:ring focus:ring-gray-100"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    required
                  />
                </label>
                {/* <label className="block mb-4 pt-1">
                  <p className="mb-1 text-gray-600 font-bold leading-normal text-base inter">
                    Mobile Number <span className="text-red-600">*</span>
                  </p>
                  <input
                    className="px-4 py-2 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-200 rounded-lg focus:ring focus:ring-gray-300"
                    id="mobile"
                    type="text"
                    name="mobile"
                    placeholder="" required
                  />
                </label> */}
                <label className="block mb-4 pt-1">
                  <p className="mb-1 text-gray-600 font-bold leading-normal">
                    Email Address <span className="text-red-600">*</span>
                  </p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                
                    className=" peer px-4 py-2 w-full text-gray-400 font-medium placeholder-gray-300 bg-white outline-none border border-gray-200 rounded-lg focus:ring focus:ring-gray-100"
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Enter email "
                    required
                  />
                  {/* <p class="invisible peer-invalid:visible text-red-700 font-light">
                Please enter your name
            </p> */}
                </label>
                <label className="block mb-4 pt-1">
                  <p className="mb-1 text-gray-600 font-bold leading-normal">
                    Password <span className="text-red-600">*</span>
                  </p>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-4 py-2 w-full text-gray-400 font-medium placeholder-gray-300 bg-white outline-none border border-gray-200 rounded-lg focus:ring focus:ring-gray-100"
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    required
                    name="password"
                  />
                </label>
                <div className="flex flex-wrap justify-start items-center mb-4">
                  <div className="w-full">
                    <div className="flex justify-start items-center">
                      <div className="flex text-center">
                        <input
                          className="w-4 h-4"
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                        />
                        <label
                          className="ml-2 text-xs text-gray-900 font-bold poppin"
                          for="default-checkbox"
                        >
                          <span>Remember me</span>
                        </label>
                      </div>
                      <div>
                        <label
                          className=" lg:ml-16 text-xs font-bold poppin text-nirmaan hover:text-nirmaan-dark flex justify-end"
                          for="default-checkbox"
                        >
                          <a href="">
                            <span>Forget Password?</span>
                          </a>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={(e) => {submitData(e)}}
                  className="mb-5 text-lg py-2 px-9 w-full text-white font-medium  rounded-lg shadow-4xl  bg-blue-500 poppin hover:bg-nirmaan-dark transition ease-in-out duration-200"
                  type="button"
                >
                  Login
                </button>
                <div className="flex justify-center text-center">
                  <lable className="mb-5 text-sm text-gray-500 font-medium text-center">
                    Or continue with /{" "}
                    <a
                      href="Registration"
                      className=" text-xs font-bold poppin text-center text-nirmaan hover:text-nirmaan-dark"
                    >
                      <span> Register Now?</span>
                    </a>
                  </lable>
                </div>

                <div className="flex flex-wrap justify-center -m-2">
                  <div className="w-1/2 p-2">
                    <button className="w-full  flex justify-center items-center  py-1 px-1 gap-2 bg-white group hover:bg-[rgb(221,83,29)] border rounded-lg transition ease-in-out duration-200">
                      <i class="bi bi-google text-[#d73b29] group-hover:text-red-200 "></i>
                      <span className="text-gray-600 font-bold leading-normal group-hover:text-blue-50 poppin">
                        Google
                      </span>
                    </button>
                  </div>

                  <div className="w-1/2 p-2">
                    <button className="group w-full flex justify-center items-center py-1 px-1 gap-2 bg-white hover:bg-[#1771e6]  border rounded-lg transition ease-in-out duration-200">
                      <i class="bi bi-facebook text-[#1771e6] group-hover:text-blue-50"></i>

                      <span className="text-gray-600 group-hover:text-blue-50 font-bold leading-normal poppin">
                        Facebook
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
