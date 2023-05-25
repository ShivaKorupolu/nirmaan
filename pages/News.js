/* eslint-disable @next/next/no-img-element */
import React from 'react'

function News() {

    const news = [
        {
          id: "1",
          title: "How startup company can help you to grow as a developer.",
          discription:
            "The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. but still earn a full-time income",
          image: "event1.jpg",
          link:"https://www.youtube.com/watch?v=4uVep99FHMY"
        },
        {
            id: "4",
            title: "How startup company can help you to grow as a developer.",
            discription:
              "The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. but still earn a full-time income",
            image: "event2.jpg",
            link:"https://www.youtube.com/watch?v=4uVep99FHMY"
          },
          {
            id: "3",
            title: "How startup company can help you to grow as a developer.",
            discription:
              "The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. but still earn a full-time income",
            image: "event3.jpg",
            link:"https://www.youtube.com/watch?v=4uVep99FHMY"
          },
          {
            id: "4",
            title: "How startup company can help you to grow as a developer.",
            discription:
              "The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. but still earn a full-time income",
            image: "event4.jpg",
            link:"https://www.youtube.com/watch?v=4uVep99FHMY"
          },
    ]

  return (
    <div>

<section className=" bg-white px-2 lg:px-20">
          <div className="flex justify-between items-center">
            <h1 className="lg:text-4xl md:text-2xl text-xl font-bold inter mb-7 lg:mt-7 underline underline-offset-8">
              OUR UPDATES
            </h1>
            <div className=" group flex justify-center items-center mt-10 ">
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
            </div>
          </div>
<div className="pt-4 grid   grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 justify-between items-center mb-10 gap-4">

{
    news.map(
        (Data) =>
        <div key={Data.id}>
        <div className="w-full  border m-auto my-6 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-md shadow-gray-300">
              <div className="">
                <div className="mb-6 overflow-hidden">
                  <img
                    className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                    src={Data.image}
                    alt=""
                  />
                </div>

                <a className="mb-2 inline-block px-4" href="#">
                  <h3 className="text-base font-bold font-heading leading-normal hover:text-nirmaan poppin text-gray-700">
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
                  <span className=" font-bold text-xs poppin">See More</span>
                  <svg
                    className=" transition group-hover:translate-x-2 hover:duration-500 "
                    width="20"
                    height="14"
                    viewbox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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

export default News