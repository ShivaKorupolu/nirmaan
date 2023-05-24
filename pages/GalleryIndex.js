/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";

function GalleryIndex() {
  const gallery = [
    {
      id: 1,
      image: "gallery2.JPG",
    },
    {
      id: 1,
      image: "gallery1.JPG",
    },
    {
      id: 1,
      image: "gallery3.JPG",
    },
    {
      id: 1,
      image: "gallery5.JPG",
    },
    {
      id: 1,
      image: "gallery4.JPG",
    },
    {
      id: 1,
      image: "gallery6.JPG",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-end">
        <div className=" group flex justify-center items-center">
          <a href="Gallery" alt="">
            <button
              className="font-bold poppin flex justify-end items-center mr-4 text-xs lg:text-md poppin text-blue-400  transition ease-in-out"
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
          </a>
        </div>
      </div>

      <div className="w-full h-auto mt-4 lg:my-10 mb-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center gap-4">
         
          {gallery
            ? gallery.map((images,index ) => (
              <div key={images.id} className="w-full  object-fill">
                <a href="#" >
                  <img 
                    src={images.image}
                    alt=""
                    className="border-none  rounded-md hover:shadow-lg  hover:scale-105 duration-200 "
                  />
                  </a>
                  </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default GalleryIndex;
