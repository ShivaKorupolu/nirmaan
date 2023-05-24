/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { API_URL } from "../config/constants";

const Registration = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitData(e) {
    e.preventDefault();
    axios
      .post(API_URL+"file.php",{
        name: "name",
        mobile: "mobile",
        email: "email",
        password: "password",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
      setName("");
      setEmail("");
      setPassword("");
  }
  return (
    <>
      <section className="relative bg-white overflow-hidden">
        <img
          class="absolute left-0 bottom-0"
          src="https://shuffle.dev/flaro-assets/images/sign-up/gradient.svg"
          alt=""
        />
        <div className="relative z-10 flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 pt-8 md:block hidden">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="md:max-w-lg mx-auto  ">
                    <a className="md:mb-24 mb-10 inline-block" href="#">
                      <img
                        className="w-auto h-24"
                        src="/nirmaan_logo.png"
                        alt=""
                      />
                    </a>
                    <h3 className="font-extrabold text-nirmaan-darker  text-3xl poppin sm:text-4xl leading-normal md:mb-10 mb-5">
                      Better together. Join our community
                    </h3>
                    <p className="md:mb-10 md:max-w-base text-lg text-gray-700 text-ellipsis overflow-hidden poppin font-semibold font-heading leading-normal">
                      The best way to find yourself is to lose yourself in the
                      service of others. The best way to find yourself is to
                      lose yourself in the service of others. The best way to
                      find yourself is to lose yourself in the service of
                      others.The best way to find yourself is to lose yourself
                      in the service of others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 py-3 my-4 ">
            {/* <img className="absolute right-0 bottom-10 " src="https://shuffle.dev/flaro-assets/images/sign-up/gradient.svg" alt=""/> */}
            <div className="py-4 flex flex-col justify-center bg-nirmaan-dark  h-full">
              <form
                className="md:max-w-md border py-4 px-8 shadow-xl bg-white justify-center m-auto "
                method="POST"
              >
                <h3 className="m-auto sm:text-3xl text-2xl  mb-4 text-nirmaan-darker poppin font-extrabold ">
                  Create a Nirmaan ID
                </h3>
                <label className="block  mb-4 pt-2">
                  <p className="mb-1 text-gray-600 font-bold text-base poppin ">
                    Full Name <span className="text-red-600">*</span>
                  </p>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-2 w-[100%] text-gray-400 font-medium rounded-lg text-sm placeholder-gray-300 inter bg-white outline-none border border-gray-200  focus:ring focus:ring-gray-300"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    required
                  />
                </label>
                <label className="block mb-4 pt-1">
                  <p className="mb-1 text-gray-600 font-bold leading-normal text-base inter">
                    Mobile Number <span className="text-red-600">*</span>
                  </p>
                  <input
                    onChange={(e) => setMobile(e.target.value)}
                    className="px-4 py-2 w-[100%] text-gray-400 font-medium rounded-lg placeholder-gray-300 bg-white outline-none border border-gray-200 focus:ring focus:ring-gray-300"
                    id="mobile"
                    type="text"
                    name="mobile"
                    placeholder="Enter Mobile"
                    required
                  />
                </label>
                <label className="block mb-4 pt-1">
                  <p className="mb-1 text-gray-600 font-bold leading-normal">
                    Email Address <span className="text-red-600">*</span>
                  </p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className=" peer px-4 py-2 w-[100%] text-gray-400 font-medium rounded-lg placeholder-gray-300 bg-white outline-none border border-gray-200 focus:ring focus:ring-gray-300"
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    required
                  />
                  {/* <p className="invisible peer-invalid:visible text-red-700 font-light">
                Please enter your name
            </p> */}
                </label>
                <label className="block mb-4 pt-1">
                  <p className="mb-1 text-gray-600 font-bold leading-normal">
                    Password <span className="text-red-600">*</span>
                  </p>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-4 py-2 w-[100%] text-gray-400 font-medium rounded-lg placeholder-gray-300 bg-white outline-none border border-gray-200 focus:ring focus:ring-gray-300"
                    id="password"
                    type="password"
                    placeholder="Enter Password "
                    required
                    name="password"
                  />
                </label>
                <div className="flex flex-wrap justify-between mb-4">
                  <div className="w-[100%]">
                    <div className="flex">
                      <input
                        className="w-4 h-4 mt-1"
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                      />
                      <label
                        className="ml-2 text-xs w-[100%] text-gray-900 font-bold poppin"
                        for="default-checkbox"
                      >
                        <span>By signing up, I agree to the </span>
                        <a
                          className="text-nirmaan hover:text-blue-400"
                          href="terms"
                        >
                          Terms &amp; Conditions
                        </a>
                        <span> of Nirmaan Organization</span>
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  onClick={(e)=>{submitData(e)}}
                  className="mb-5 py-2 px-9 w-[100%] text-white font-semibold rounded-lg  shadow-4xl   bg-blue-500 poppin hover:bg-nirmaan-dark transition ease-in-out duration-200"
                  type="button"
                >
                  Sign Up
                </button>
                <p className="mb-5 text-sm text-gray-500 font-medium rounded-lg text-center">
                  Or continue with
                </p>
                <div className="flex flex-wrap justify-center -m-2">
                  <div className="w-1/2 ">
                    <button className="w-[100%]  flex justify-center items-center  py-1 px-1 gap-2 bg-white group hover:bg-[rgb(221,83,29)] border  rounded-lg transition ease-in-out duration-200">
                      {/* <svg className=" border px-2 py-1 rounded-full " stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg> */}
                      <i className="bi bi-google text-[#d73b29] group-hover:text-red-200 "></i>
                      <span className="text-gray-600 font-bold leading-normal group-hover:text-blue-50 poppin">
                        Google
                      </span>
                    </button>
                  </div>

                  <div className="w-1/2 p-2">
                    <button className="group w-[100%] flex justify-center items-center py-1 px-1 gap-2 bg-white hover:bg-[#1771e6]  border rounded-lg transition ease-in-out duration-200">
                      {/* <svg className=" border px-2 py-1 rounded-full bg-blue-500  text-white" stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" fill="currentColor"></path></svg> */}
                      <i className="bi bi-facebook text-[#1771e6] group-hover:text-blue-50"></i>

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

export default Registration;
