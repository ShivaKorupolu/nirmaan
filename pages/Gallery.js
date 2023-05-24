/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
// import { Fragment } from 'react'
// import { Menu } from '@headlessui/react'

function Gallery() {
  // const links = [
  //   { href: '/gallery1.JPG', label: 'telangana' },
  //   { href: '/gallery2.JPG', label: 'andra' },
  //   { href: '/gallery1.JPG', label: 'maha' },
  //   { href: '/gallery1.JPG', label: 'telangana' },
  // ];

  return (
    <div>
      <div className="w-full flex justify-end items-center  border-none mt-10 px-20">
        <select
          name="cars"
          id="cars"
          className="bg-nirmaan text-white w-44 h-10  flex justify-start items-center  border-none rounded-lg  "
        >
          <option value="Telangana" className="text-center px-4 mb-10">
            Telangana
          </option>
          <option value="Andra Pradesh" className="text-center px-4 mb-10">
            Andra Pradesh
          </option>
          <option value="karnataka" className="text-center px-4">
            karnataka
          </option>
          <option value="Delhi" className="text-center px-4">
            Delhi
          </option>
          <option value="Maharastra" className="text-center px-4">
            Maharastra
          </option>
          <option value="Gurgum" className="text-center px-4">
            Gurgum
          </option>
          <option value="Pune" className="text-center px-4">
            Pune
          </option>
        </select>
      </div>

      <div className="w-full h-auto space-y-2 px-20 my-10 mb-10">
        <div className="flex justify-evenly items-center space-x-2">
          <a href="/gallery1.JPG" target="_blank">
            <img
              src="./gallery1.JPG"
              alt=""
              className="boder-none w-full h-72 rounded-2xl bject-fill hover:shadow-lg  hover:scale-105 duration-200 "
            />{" "}
          </a>
          <a href="/gallery2.JPG">
            {" "}
            <img
              src="./gallery2.JPG"
              alt=""
              className="boder-none w-full h-72 rounded-2xl bject-fill hover:shadow-lg  hover:scale-105 duration-200"
            />{" "}
          </a>
          <a href="/gallery3.JPG">
            {" "}
            <img
              src="/gallery3.JPG"
              alt=""
              className="boder-none w-full h-72 rounded-2xl bject-fill hover:shadow-lg  hover:scale-105 duration-200"
            />{" "}
          </a>
        </div>
        <div className="flex justify-evenly  items-center space-x-2">
          <a href="/gallery4.JPG" className="">
            {" "}
            <img
              src="./gallery4.JPG"
              alt=""
              className="boder-none w-full h-72 rounded-2xl bject-fill hover:shadow-lg  hover:scale-105 duration-200"
            />{" "}
          </a>
          <a href="/gallery5.JPG">
            {" "}
            <img
              src="./gallery5.JPG"
              alt=""
              className="boder-none w-full h-72 rounded-2xl bject-fill hover:shadow-lg  hover:scale-105 duration-200"
            />{" "}
          </a>
          <a href="/gallery6.JPG">
            {" "}
            <img
              src="/gallery6.JPG"
              alt=""
              className="boder-none w-full h-72 rounded-2xl bject-fill hover:shadow-lg  hover:scale-105 duration-200"
            />{" "}
          </a>
        </div>
        <div className="flex justify-evenly items-center space-x-2">
          <a href="/comp1.jpg" target="_blank">
            <img
              src="./comp1.jpg"
              alt=""
              className="boder-none w-full h-72 rounded-2xl object-fill hover:shadow-lg  hover:scale-105 duration-200 "
            />{" "}
          </a>
          <a href="comp4.jpg">
            {" "}
            <img
              src="./comp4.jpg"
              alt=""
              className="boder-none w-full h-72 rounded-2xl object-fill hover:shadow-lg  hover:scale-105 duration-200"
            />{" "}
          </a>
          <a href="./comp3.jpg">
            {" "}
            <img
              src="./comp3.jpg"
              alt=""
              className="boder-none w-full h-72 rounded-2xl object-fill hover:shadow-lg  hover:scale-105 duration-200"
            />{" "}
          </a>
        </div>
        <div className="flex justify-evenly  items-center space-x-2">
          <a href="/gallery4.JPG" className="">
            {" "}
            <img
              src="./gallery4.JPG"
              alt=""
              className="boder-none w-full h-72 rounded-2xl object-fill hover:shadow-lg  hover:scale-105 duration-200"
            />{" "}
          </a>
          <a href="/gallery5.JPG">
            {" "}
            <img
              src="./gallery5.JPG"
              alt=""
              className="boder-none w-full h-72 rounded-2xl object-fill hover:shadow-lg  hover:scale-105 duration-200"
            />{" "}
          </a>
          <a href="/gallery6.JPG">
            {" "}
            <img
              src="/gallery6.JPG"
              alt=""
              className="boder-none w-full h-72 rounded-2xl object-fill hover:shadow-lg  hover:scale-105 duration-200"
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
