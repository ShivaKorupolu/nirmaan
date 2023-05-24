/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Transition } from '@headlessui/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


const Tabs = () => {
    const [isShowing6, setIsShowing6] = useState(false)
    const [isShowing7, setIsShowing7] = useState(false)

    // let [categories] = useState({
    //     Recent: [
    //       {
    //         id: 1,
    //         title: 'Does drinking coffee make you smarter?',
    //         date: '5h ago',
    //         commentCount: 5,
    //         shareCount: 2,
    //       },
    //       {
    //         id: 2,
    //         title: "So you've bought coffee... now what?",
    //         date: '2h ago',
    //         commentCount: 3,
    //         shareCount: 2,
    //       },
    //     ],
    //     Popular: [
    //       {
    //         id: 1,
    //         title: 'Is tech making coffee better or worse?',
    //         date: 'Jan 7',
    //         commentCount: 29,
    //         shareCount: 16,
    //       },
    //       {
    //         id: 2,
    //         title: 'The most innovative things happening in coffee',
    //         date: 'Mar 19',
    //         commentCount: 24,
    //         shareCount: 12,
    //       },
    //     ],
    //     Trending: [
    //       {
    //         id: 1,
    //         title: 'Ask Me Anything: 10 answers to your questions about coffee',
    //         date: '2d ago',
    //         commentCount: 9,
    //         shareCount: 5,
    //       },
    //       {
    //         id: 2,
    //         title: "The worst advice we've ever heard about coffee",
    //         date: '4d ago',
    //         commentCount: 1,
    //         shareCount: 2,
    //       },
    //     ],
    //   })

  return (
    <>
 <div className='w-full h-20 bg-slate-200 flex justify-between items-center container' >   
        
         {/* ------------------------nirmaan logo--------------------- */}
<div>
<a href="#"><img className="h-14 w-34" src="/nirmaan_logo.png" alt="" /></a>
</div>
{/* ------------------------ logo end---------------------------- */}


{/* -------------------------------- Header buttons starts------------------------------ */}

<div className="text-sm font-bold felx justify-evenly items-center m-4 text-center text-block border-b inter poppin ">
    <ul className="flex ">
        <li  onMouseEnter={() => setIsShowing7((isShowing7) => !isShowing7)}  className="mr-4 group flex justify-center items-center hover:text-nirmaan  hover:border-nirmaan border-b-2 border-transparent">
            <a href="#" className="inline-block p-2 text-sm font-bold hover:text-nirmaan ">Profile</a>
            <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-5 px-1  group-hover:rotate-180 group-hover:transition-all duration-500 group-hover:duration-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
        </li>

        <li className="mr-4 group flex justify-center items-center hover:text-nirmaan border-b-2 hover:border-nirmaan">
            <a href="#" className="inline-block p-2   hover:text-nirmaan  text-sm font-bold  " >Dashboard</a>
            <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-5 px-1  group-hover:rotate-180 group-hover:transition-all duration-500 group-hover:duration-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
        </li>
        <li className="mr-4 group flex justify-center items-center hover:text-nirmaan border-b-2 border-transparent hover:border-nirmaan ">
            <a href="#" className="inline-block p-2  hover:text-nirmaan text-sm font-bold  ">Settings</a>
            <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-5 px-1  group-hover:rotate-180 group-hover:transition-all duration-500 group-hover:duration-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
        </li>
        <li className="mr-4 group flex justify-center items-center hover:text-nirmaan  border-b-2 border-transparent  hover:border-nirmaan">
            <a href="#" className="inline-block p-2 hover:text-nirmaan text-sm font-bold  ">Contacts</a>
            <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-5 px-1  group-hover:rotate-180 group-hover:transition-all duration-500 group-hover:duration-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
        </li>
        {/* <li className="mr-4 group flex justify-center items-center hover:text-nirmaan">
            <a className="inline-block p-2  text-sm font-bold cursor-not-allowed hover:text-nirmaan hover:border-nirmaan ">Disabled</a>
        </li> */}
    </ul>
</div>

    {/* -------------------------------- Header buttons end------------------------------ */}


    {/* -------------------------------- Donation buttons starts------------------------------ */}
<div className="w-auto  ">
            <div className="flex justify-center items-center">
              <div className="w-auto ">

                <div className="inline-block">
                  <button
                    className="font-bold py-2 w-32 mx-1 text-sm poppin rounded-3xl border border-nirmaan transition ease-in-out duration-200 hover:text-blue-50 hover:bg-nirmaan text-nirmaan"
                    type="button"
                    contenteditable="false"
                  >
                    Volunteer
                  </button>
                </div>

                <div className="inline-block ">
                  <button
                    className="font-bold py-2 w-32 mx-1 text-sm poppin rounded-3xl border bg-blue-400 border-nirmaan transition ease-in-out duration-200 hover:text-blue-50 hover:bg-nirmaan-dark text-white"
                    type="button"
                  >
                    Donate
                  </button>
                </div>
              
            </div>
          </div>
          </div>
{/* -------------------------------- Donation buttons end------------------------------ */}








        </div>
        
        
        
      
        <Transition
          show={isShowing7}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
<div  onMouseOut={() => setIsShowing7((isShowing7) => !isShowing7)} className='w-full h-60 z-40 bg-slate-400 '>


</div>
        
</Transition>  

        </>
  )
}

export default Tabs