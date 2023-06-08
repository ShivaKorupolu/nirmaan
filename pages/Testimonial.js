/* eslint-disable @next/next/no-img-element */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import img from 'next/img';

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
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

  const Testimonials = [
    {
      id: "1",
      name: "Shiva Korupolu",
      discriptrion: "CEO &amp; Founder at Nigodo",
      content:
        "The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. but still earn a full-time income",
      image: "student-1.jpg",
    },

    {
      id: "2",
      name: "Pavan Anna",
      discriptrion: "CEO &amp; Founder at Nigodo",
      content:
        "The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. but still earn a full-time income",
      image: "student-4.jpg",
    },

    {
      id: "3",
      name: "Sanjay Anna",
      discriptrion: "CEO &amp; Founder at Nigodo",
      content:
        "The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. The best solution for anyone who wants to work a flexible schedule but still earn a full-time income. but still earn a full-time income",
      image: "./student3.jpg",
    },
  ];
  return (
    <div>

<Carousel
       
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={7000}
          keyBoardControl={true}
          customTransition="all.5"
          transitionDuration={1000}
          // containerclassName="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListclassName="custom-dot-list-style"
          itemclassName="carousel-item-padding-40-px"
          className="conatiner"
        >
      {
      Testimonials.map((Data) => (
      
        
          <div  key={Data.id}>
            
            <section className=" bg-white border shadow-lg lg:rounded-xl  my-10 lg:mx-40 mx-0 px-2 lg:px-0 relative overflow-hidden">
              <img
                className="absolute container  top-16 md:h-full left-0 w-1/2 md:w-1/3 opacity-40"
                src="Home/background-bobbles.svg"
                alt=""
              />
              <img
                className="absolute container  top-0 bottom-16 md:h-full right-20 w-1/2 md:w-1/3 opacity-40"
                src="/Home/background-bobbles.svg"
                alt=""
              />
              <div className="lg:m-auto sm:w-full lg:px-10 px-0 sm:mt-5 flex justify-center items-center  relative">
                <div className="lg:flex  w-full lg:my-10 sm:mt-0 -mx-4 ">
                  <div className="w-full md:w-full md:mb-0">
                    <img
                      className="block w-full lg:mt-0 mt-6  lg:max-w-lg md:max-w-full  lg:mx-auto md:mx-2 lg:h-72 md:h-48 h-48 object-cover border-3 border-indigo-900 rounded-2xl shadow-md"
                      src={Data.image}
                      alt=""
                    />
                  </div>
                  <div className="w-full md:w-full  lg:px-4 px-0 py-4 lg:pt-10">
                    <div className="mb-6  absolute text-blue-200 opacity-50">
                      <svg
                        width="75"
                        height="64"
                        viewbox="0 0 75 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M74.1252 0.631112L72.2546 13.9596C68.5132 13.6478 65.4734 14.2714 63.1351 15.8303C60.7967 17.3112 59.1599 19.4937 58.2246 22.3776C57.3672 25.1836 57.2113 28.4573 57.7569 32.1986H74.1252V64H42.3239V32.1986C42.3239 20.9746 44.935 12.4787 50.1573 6.71079C55.3796 0.864946 63.3689 -1.16161 74.1252 0.631112ZM31.8014 0.631112L29.9307 13.9596C26.1894 13.6478 23.1495 14.2714 20.8112 15.8303C18.4729 17.3112 16.836 19.4937 15.9007 22.3776C15.0433 25.1836 14.8874 28.4573 15.433 32.1986H31.8014V64H0V32.1986C0 20.9746 2.61114 12.4787 7.83342 6.71079C13.0557 0.864946 21.045 -1.16161 31.8014 0.631112Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <h1 className="relative lg:max-w-lg text-base lg:text-md lg:text-ellipsis lg:overflow-hidden md:text-left w-full font-bold text-gray-500 font-heading poppin mb-4 lg:mb-12">
                      {Data.content}
                    </h1>
                    <h4 className="text-lg md:w-1/2 lg:text-2xl poppin font-bold text-nirmaan-darker">
                      {Data.name}
                    </h4>
                    <span className="block text-sm md:w-1/2 lg:text-base  text-nirmaan-darker font-semibold">
                      {Data.discriptrion}
                    </span>
                    <div className="flex items-center justify-end">
                      <div className=" group flex justify-center items-center">
                        <button
                          className="font-bold poppin flex justify-end items-center  text-xs lg:text-md inter text-blue-400  transition ease-in-out"
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
                  </div>
                </div>
              </div>
            </section>
            </div>        
      ))
      }
      </Carousel>
    </div>
  );
};
export default Testimonial;
