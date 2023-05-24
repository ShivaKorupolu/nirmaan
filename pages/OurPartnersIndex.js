/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";

function OurPartnersIndex() {
  const logos = [
    {
      id: 1,
      title: "Nirmaan Organization",
      image: "nirmaan_logo.png",
      Link: "",
    },
    {
      id: 2,
      title: "Carrier",
      image: "Corporate_Logos/Carrier-logo.png",
      Link: "",
    },
    {
      id: 3,
      title: "Adp",
      image: "Corporate_Logos/ADP-logo.png",
      Link: "",
    },

    {
      id: 4,
      title: "Qualcomm",
      image: "Corporate_Logos/Qualcomm-logo.png",
      Link: "",
    },

    {
      id: 5,
      title: "Chubb",
      image: "Corporate_Logos/Chubb-logo.png",
      Link: "",
    },

    {
      id: 6,
      title: "Synchrony",
      image: "Corporate_Logos/Synchrony-logo.png",
      Link: "",
    },

    {
      id: 7,
      title: "Broadridge",
      image: "Corporate_Logos/Broadridge-logo.png",
      Link: "",
    },

    {
      id: 8,
      title: "Savills",
      image: "Corporate_Logos/Savills-logo.png",
      Link: "",
    },

    {
      id: 9,
      title: "",
      image: "Corporate_Logos/StateStreet-logo.png",
      Link: "",
    },

    {
      id: 10,
      title: "",
      image: "Corporate_Logos/NttData-logo.png",
      Link: "",
    },
    {
      id: 11,
      title: "",
      image: "Corporate_Logos/Epam-logo.png",
      Link: "",
    },
    {
      id: 12,
      title: "",
      image: "Corporate_Logos/Ibm-logo.png",
      Link: "",
    },
    {
      id: 13,
      title: "",
      image: "Corporate_Logos/SPGlobal-logo.png",
      Link: "",
    },
    {
      id: 14,
      title: "",
      image: "Corporate_Logos/Colruyt-logo.png",
      Link: "",
    },
    {
      id: 15,
      title: "Cognizant",
      image: "",
      Link: "",
    },
    {
      id: 16,
      title: "FactSet",
      image: "",
      Link: "",
    },
  ];

  return (
    <>
      <div className="bg-blue-50 w-full lg:h-80 sm:h-96 border border-b-8 border-b-blue-500 border-r-8 border-r-blue-500  sm:justify-center sm:items-center sm:text-center  lg:px-20 lg:pb-6 lg:pt-4 text-left">
      <div className=" sm:mb-1 lg:mb-4 flex justify-between items-center">
            <h1 className="lg:text-4xl text-xl p-2  sm:text-xl uppercase poppin font-extrabold mt-4 underline underline-offset-8">
            Our Corporate Partnerships
            </h1>
            <div className=" group flex justify-center items-center mt-10 ">
             
             <a href="/OurPartners"> <button
                className="font-bold poppin flex justify-end  lg:mr-8 items-center py-2 px-2 w-40 mx-1 text-sm inter text-blue-400  transition ease-in-out"
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
        <div className=" lg:pt-4 sm:pt-4 md:pt-4 sm:text-center lg:text-center grid lg:grid-cols-6 grid-cols-2 p-2 mt-4 text-ellipsis md:h-auto md:pb-4 md:grid-cols-3 lg:gap-y-4 md:gap-y-2 gap-3 ">
          {logos
            ? logos.map((show, logo_title) => logo_title > 5 ||(
                <div
                  key={show.id}
                  className="bg-gray-200 h-28 w-44 border rounded-lg p-2 border-t-blue-500 border-r-blue-500 border-t-8 border-r-8 flex justify-center items-center text-center "
                >
                  {show.image ? (
                    <img
                      src={show.image}
                      className="max-h-14 w-28 text-center"
                      alt=""
                    />
                  ) : (
                    <span className="font-bold uppercase text-xl poppin text-nirmaan-darker ">
                      {show.title}
                    </span>
                  )}
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
}
export default OurPartnersIndex;
