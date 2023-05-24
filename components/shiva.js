/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Transition } from '@headlessui/react'
import { useState } from 'react'

const Shiva = () => {
    const [isShowing, setIsShowing] = useState(false)
    const [isShowing1, setIsShowing1] = useState(false)
    const [isShowing2, setIsShowing2] = useState(false)
    const [isShowing3, setIsShowing3] = useState(false)
  return (
    <>
    
<div className='w-full h-20 bg-slate-200 flex justify-between items-center container'>
------------------------nirmaan logo---------------------
<div>
<a href="#"><img className="h-14 w-34" src="/nirmaan_logo.png" alt="" /></a>
</div>
------------------------ logo end----------------------------



-------------------------------- Header buttons starts------------------------------
<div className='flex justify-evenly items-center'>

<div class="relative inline-block  group hover:text-nirmaan">
  <div onMouseEnter={() => setIsShowing((isShowing) => !isShowing)} onMouseOut={() => setIsShowing((isShowing) => !isShowing)}>
    <button type="button" class="flex justify-center items-center px-4 py-2 text-base font-bold poppin" id="menu-button" aria-expanded="true" aria-haspopup="true">
      what we do
      <svg className="-mr-1 ml-2 h-5 w-5 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <Transition
        show={isShowing}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
  <div class="absolute right-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Edit</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Duplicate</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Archive</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Move</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Share</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Add to favorites</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">Delete</a>
  </div>

  </Transition>
</div>

<div class="relative inline-block group hover:text-nirmaan ">
  <div onMouseEnter={() => setIsShowing1((isShowing1) => !isShowing1)} onMouseOut={() => setIsShowing1((isShowing1) => !isShowing1)}>
    <button type="button" class="flex justify-center items-center px-4 py-2 text-base font-bold poppin" id="menu-button" aria-expanded="true" aria-haspopup="true">
      what we do
      <svg class="-mr-1 ml-2 h-5 w-5 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <Transition
        show={isShowing1}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
  <div class="absolute right-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">edhi 1 nani</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Duplicate</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Archive</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Move</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Share</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Add to favorites</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">Delete</a>
  </div>

  </Transition>
</div>

<div class="relative inline-block hover:text-nirmaan">
  <div onMouseEnter={() => setIsShowing2((isShowing2) => !isShowing2)} onMouseOut={() => setIsShowing2((isShowing2) => !isShowing2)}>
    <button type="button" class="flex justify-center items-center px-4 py-2 text-base font-bold poppin" id="menu-button" aria-expanded="true" aria-haspopup="true">
      what we do
      <svg class="-mr-1 ml-2 h-5 w-5 group-hover:rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <Transition
        show={isShowing2}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
  <div class="absolute right-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">this is 2 nani</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Duplicate</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Archive</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Move</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Share</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Add to favorites</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">Delete</a>
  </div>

  </Transition>
</div>

<div class=" inline-block rel;ative group hover:text-nirmaan ">
  <div onMouseEnter={() => setIsShowing3((isShowing3) => !isShowing3)} onClick={() => setIsShowing3((isShowing3) => !isShowing3)} >
    <button type="button" class="flex justify-center items-center px-4 py-2 text-base font-bold poppin" id="menu-button" aria-expanded="true" aria-haspopup="true">
      what we do
      <svg class="-mr-1 ml-2 h-5 w-5 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <Transition
        show={isShowing3}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
  {/* <div class="absolute w-[969px] left-0 h-auto  z-10  bg-white shadow-lg"   > */}
  

  <div
            className="w-full h-auto z-50  group group-hover:duration-500 absolute border border-t-nirmaan-600 "
            onMouseOut={() => setIsShowing3((isShowing3) => !isShowing3)}
          >
            {/* <div className="text-3xl px-6  bg-white shadow-lg font-bold py-4 poppin">
              About Us
            </div> */}
            <section className="pt-2  bg-white overflow-hidden">
              <div className="container px-6 mx-auto">
                <div className="pb-20 border-b">
                  <div className="flex flex-wrap -m-8">
                    <div className="p-8 ">
                      <h3 className="mb-6 font-extrabold leading-normal text-lg   ">
                        Company
                      </h3>
                      <ul>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline  hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                            About Us
                          </a>
                        </li>
                        
                        <li className="mb-3.5 font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                            Our Team
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold  font-normal"
                            href="#"
                          >
                            Our Story
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:text-nirmaan hover:font-semibold font-normal"
                            href="#"
                          >
                            Vision and Mision
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className=" p-8">
                      <h3 className="mb-6 font-extrabold leading-normal text-lg   ">
                        Company
                      </h3>
                      <ul>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline  hover:font-semibold hover:text-nirmaan font-normal"
                            href="#"
                          >
                            About Us
                          </a>
                        </li>
                        
                        <li className="mb-3.5 font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:font-semibold hover:text-nirmaan  font-normal"
                            href="#"
                          >
                            Our Team
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:font-semibold hover:text-nirmaan  font-normal"
                            href="#"
                          >
                            Our Story
                          </a>
                        </li>
                        <li className="mb-3.5  font-black ">
                          <a
                            className="text-black text-sm  leading-relaxed hover:underline-offset-4 hover:underline hover:font-semibold hover:text-nirmaan font-normal"
                            href="#"
                          >
                            Vision and Mision
                          </a>
                        </li>
                      </ul>
                    </div>







                  </div>
                </div>
              </div>
            </section>
          </div>





  
  {/* </div> */}





  </Transition>
</div>


    
</div>
-------------------------------- Header buttons end------------------------------



-------------------------------- Donation buttons starts------------------------------
<div>
<div className="w-auto ">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <div className="inline-block">
                  <button
                    className="font-bold py-2 w-32 mx-1 text-sm poppin rounded-3xl border border-nirmaan transition ease-in-out duration-200 hover:text-blue-50 hover:bg-nirmaan text-nirmaan"
                    type="button"
                    contenteditable="false"
                  >
                    Volunteer
                  </button>
                </div>
                <div className="inline-block">
                  <button
                    className="font-bold py-2 w-32 mx-1 text-sm poppin border hover:border-gray-300 rounded-3xl focus:ring focus:ring-gray-50 bg-nirmaan transition ease-in-out duration-200 hover:bg-nirmaan-darker text-blue-50"
                    type="button"
                    contenteditable="false"
                  >
                    Donation
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
-------------------------------- Donation buttons end------------------------------


</div>









    </>
  )
}

export default Shiva