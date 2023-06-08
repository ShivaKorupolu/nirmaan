/* eslint-disable @next/next/no-img-element */
import React from "react";

function OurPartners() {
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
    {
      id: 17,
      title: "ADP Pvt Ltd",
      image: "",
      Link: "",
    },
    {
      id: 18,
      title: "Alimak Group",
      image: "",
      Link: "",
    },
    {
      id: 19,
      title: "Aqua Security",
      image: "",
      Link: "",
    },
    {
      id: 20,
      title: "Arcesium India",
      image: "",
      Link: "",
    },


  ];

  return (
    <>
      <div className="bg-white lg:px-20 lg:text-center md:text-center text-left w-full h-auto lg:h-screen md:h-screen pb-10 ">
        <div className="  sm:px-6 md:px-10 lg:pt-10 text-4xl underline underline-offset-8 font-bold poppin text-nirmaan-darker">
        Our Corporate Partnerships
        </div>
        <div className="  p-4 md:px-10 lg:pt-10 pt-6 md:pt-10  text-center lg:text-center grid lg:grid-cols-6 md:grid-cols-4  gap-4 grid-cols-2   ">
          {logos
            ? logos.map((show, logo_title) => (
                <div
                  key={show.id}
                  className="bg-blue-50  h-28  hover:scale-105 duration-75 transition hover:delay-200 w-44 border rounded-lg p-2 border-t-gray-200 border-r-gray-200 shadow-lg border-t-2 border-r-2 flex justify-center items-center text-center "
                >
                  {show.image ? (
                    <img
                      src={show.image}
                      className="max-h-14 w-28 text-center"
                      alt=""
                    />
                  ) : (
                    <span className="font-bold uppercase w-full object-cover text-md poppin text-nirmaan-darker ">
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

export default OurPartners;
