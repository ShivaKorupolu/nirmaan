/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function OurCenters() {
  const center = [
    {
      id: 1,
      svg: (
        <svg
          stroke="currentColor"
          className="text-nirmaan"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="4em"
          width="4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"></path>{" "}
        </svg>
      ),
      name: "Hydarabad",
      description:
        "We are proud to have two colleges as volunteering chapters at Vizag, Andhra Pradesh - Gayathri College and Visakha Women's ...",
      link: "nirmaan.org",
    },

    {
      id: 2,
      name: "Nalgonda",
      svg: (
        <svg
          stroke="currentColor"
          className="text-nirmaan"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="4em"
          width="4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"></path>{" "}
        </svg>
      ),
      description:
        "We are proud to have two colleges as volunteering chapters at Vizag, Andhra Pradesh - Gayathri College and Visakha Women's ...",
      link: "nirmaan.org",
    },
    {
      id: 3,
      svg: (
        <svg
          stroke="currentColor"
          className="text-nirmaan"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="4em"
          width="4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"></path>{" "}
        </svg>
      ),
      name: "Badrachalam& kothagudam",
      description:
        "We are proud to have two colleges as volunteering chapters at Vizag, Andhra Pradesh - Gayathri College and Visakha Women's ...",
      link: "nirmaan.org",
    },
    {
      id: 4,
      svg: (
        <svg
          stroke="currentColor"
          className="text-nirmaan"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="4em"
          width="4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"></path>{" "}
        </svg>
      ),
      name: "Madhura Nagar",
      description:
        "We are proud to have two colleges as volunteering chapters at Vizag, Andhra Pradesh - Gayathri College and Visakha Women's ...",

      link: "nirmaan.org",
    },

    {
      id: 5,
      svg: (
        <svg
          stroke="currentColor"
          className="text-nirmaan"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="4em"
          width="4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"></path>{" "}
        </svg>
      ),
      name: "Madhura Nagar",
      description:
        "We are proud to have two colleges as volunteering chapters at Vizag, Andhra Pradesh - Gayathri College and Visakha Women's ...",

      link: "nirmaan.org",
    },
    {
      id: 4,
      svg: (
        <svg
          stroke="currentColor"
          className="text-nirmaan"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="4em"
          width="4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"></path>{" "}
        </svg>
      ),
      name: "Madhura Nagar",
      description:
        "We are proud to have two colleges as volunteering chapters at Vizag, Andhra Pradesh - Gayathri College and Visakha Women's ...",

      link: "nirmaan.org",
    },
    {
      id: 4,
      svg: (
        <svg
          stroke="currentColor"
          className="text-nirmaan"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="4em"
          width="4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"></path>{" "}
        </svg>
      ),
      name: "Madhura Nagar",
      description:
        "We are proud to have two colleges as volunteering chapters at Vizag, Andhra Pradesh - Gayathri College and Visakha Women's ...",

      link: "nirmaan.org",
    },
    {
      id: 4,
      svg: (
        <svg
          stroke="currentColor"
          className="text-nirmaan"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="4em"
          width="4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48zM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z"></path>{" "}
        </svg>
      ),
      name: "Madhura Nagar",
      description:
        "We are proud to have two colleges as volunteering chapters at Vizag, Andhra Pradesh - Gayathri College and Visakha Women's ...",

      link: "nirmaan.org",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  // const [ButtonOne,setButtonOne]= useState("")
  // const [ButtonTwo,setButtonTwo]= useState("")
  // const [ButtonThree,setButtonThree]= useState("")

  // const CustomRightArrow = ({ onClick, ...rest }) => {
  //   const {
  //     onMove,
  //     carouselState: { currentSlide, deviceType }
  //   } = rest;
  //   // onMove means if dragging or swiping in progress.
  //   return <button onClick={() => onClick()} />;

  // }

    // const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    //   const { carouselState: { currentSlide } } = rest;
    //   return (
    //     <div className="carousel-button-group"> 
    //       <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
    //       <ButtonTwo onClick={() => next()} />
    //       <ButtonThree onClick={() => goToSlide(currentSlide + 1)}/> Go to any slide
    //     </div>
    //   );
    // };

  return (
    <div className=" ">
      {center ? (
        <Carousel
        // customRightArrow={<CustomRightArrow/>}
        arrows={true}
        //  customButtonGroup={<ButtonGroup/>}
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infiniteLoop={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all.5"
          transitionDuration={2000}
          containerclassName="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListclassName="custom-dot-list-style mt-20"
          itemclassName="carousel-item-padding-40-px"
        >
          {center.map((data, list_key) => (
            <div
              key={data.id}
              className="  w-full h-80 flex justify-center items-center "
            >
              <div className="  bg-white border shadow-lg rounded-lg p-2 mx-2 ">
                {data.svg}
                <h1 className="poppin font-semibold mt-3 mb-1 h-12 text-ellipsis overflow-hidden text-nirmaan-darker text-base">
                  {data.name}
                </h1>
                <div className="text-sm text-ellipsis overflow-hidden h-16 text-gray-400 poppin font-normal ">
                  {data.description}
                </div>
                <div className=" group flex justify-end items-center mr-2 my-6">
                  <a
                    className=" text-nirmaan group leading-normal  flex justify-center items-center"
                    href={data.link}
                  >
                    <span className=" font-bold text-xs mr-1 poppin">
                      See More
                    </span>
                    <svg
                      className=" transition font-light group-hover:translate-x-2 hover:duration-500 "
                      height="1em"
                      width="1em"
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
          ))}
        </Carousel>
      ) : (
        ""
      )}
    </div>
  );
}
export default OurCenters;
