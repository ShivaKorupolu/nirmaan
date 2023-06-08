/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Campaign() {
    const campaigns = [
        {
          id: "1",
          title: "How startup company can help you to grow as a developer.",
          discription:
            "The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. but still earn a full-time income",
          images: "comp1.jpg",
          raised:"11000/-",
          goal:"100000/-",
          percentage:"50%",
          link:"https://nirmaan.org",
        },
        {
            id: "2",
            title: "How startup company can help you to grow as a developer.",
            discription:
              "The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. but still earn a full-time income",
            images: "comp2.jpg",
            raised:"1500/-",
            goal:"10000/-",
            percentage:"60%",
            link:"https://nirmaan.org",
          },
          {
            id: "3",
            title: "How startup company can help you to grow as a developer.",
            discription:
              "The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. but still earn a full-time income",
            images: "comp3.jpg",
            raised:"144000/-",
            goal:"1000000/-",
            percentage:"70%",
            link:"https://nirmaan.org",
          },
          {
            id: "4",
            title: "How startup company can help you to grow as a developer.",
            discription:
              "The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. but still earn a full-time income",
            images: "comp4.jpg",
            raised:"800000/-",
            goal:"100000/-",
            percentage:"100%",
            link:"https://nirmaan.org",
          },
    ]


  return (

    <div>
<section className=" bg-nirmaan-secondary px-2 lg:px-20">
          <div className="flex justify-between items-center mt-10 lg:mt-0">
            <h1 className="lg:text-3xl text-nirmaan-darker md:text-2xl text-xl font-bold inter lg:mt-7 lg:mb-4 md:mt-7 md:mb-4 underline underline-offset-8">
              OUR CAMPAIGNS
            </h1>
            <div className=" group flex justify-center items-center lg:mt-7 lg:mb-4 md:mt-7 md:mb-4">
            <a href="/CampaignsAll">
              <button
                className="font-bold poppin flex justify-end items-center py-2 px-2 w-40 mx-1 text-sm inter text-blue-400  transition ease-in-out"
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
<div className="pt-4 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 justify-between items-center pb-10 gap-4">
{
 campaigns.map(
(Data) =>
    <div key={Data.id}>
    <div className="w-full border m-auto my-6 hover:scale-105 transition ease-in-out duration-700  bg-white shadow-md shadow-gray-300">
    <div className="">
      <div className="mb-6 overflow-hidden">
        <img
          className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
          src={Data.images}
          alt=""
        />
      </div>
      <div className=" mx-5">
        <ul className="flex justify-between">
          <li className=" text-gray-600 text-xs font-semibold poppin">
            {Data.raised}
          </li>
          <li className=" text-gray-600 text-xs  font-semibold poppin">
            INR {Data.goal}
          </li>
        </ul>
      </div>
      <div className="mx-5 mb-5 bg-gray-200 rounded-full h-2 overflow-hidden dark:bg-gray-300">
        <div className={"bg-green-500 h-2 rounded-full w-["+Data.percentage+"]"}></div>
      </div>

      <a className="mb-2 inline-block px-4" href="#">
        <h3 className="text-base text-nirmaan-darker font-bold font-heading leading-normal hover:text-nirmaan poppin ">
          {Data.title}
        </h3>
      </a>
      <p className="text-gray-600 text-sm poppin h-16 text-ellipsis overflow-hidden px-4 leading-relaxed">
      {Data.discription}
      </p>
    </div>
    <div className=" group flex justify-end items-center mt-8 mb-10">
      <a
        className=" text-nirmaan group leading-normal mr-6 flex justify-center items-center"
        href={Data.link} 
      >
        <span className=" font-bold text-xs  poppin">See More</span>
        <svg
          className=" transition group-hover:translate-x-2 hover:duration-500 "
          width="20"
          height="14"
          viewbox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</div>


)
}
</div>
</section>











    </div>
  )
}

export default Campaign