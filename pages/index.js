/* eslint-disable @next/next/no-img-element */
import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Header from "../components/header";
import Footer from "../components/footer";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import Shiva from "../components/shiva";
import Tabs from "../components/tabs";
import Testimonial from "./Testimonial";
import News from "./News";
import Campaign from "./Campaign";
import GalleryIndex from "./GalleryIndex";
import OurPartnerIndex from "./OurPartnersIndex";
import Map from "./Map";
import Video from "./Video";

const Index = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [state, setState] = useState("");
  return (
    <>
      <Header />
      <div>
        <div className="px-0 ">
          <Carousel
            autoPlay={true}
            showDots={false}
            useKeyboardArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
            emulateTouch="true"
            infinite={true}
            keyBoardControl={true}
          >
            <div>
              <img
                className=" lg:h-screen object-fill h-96"
                alt=""
                src="/Banners/banner-1.jpg"
              />
            </div>
            <div>
              <img
                className="lg:h-screen  object-fill"
                alt=""
                src="/Banners/banners-2.avif"
              />
            </div>
            <div>
              <img
                className="lg:h-screen   object-fill"
                alt=""
                src="/Banners/banners-3.avif"
              />
            </div>
            <div>
              <img
                className="lg:h-screen  object-fill"
                alt=""
                src="/Banners/banners-4.jpg"
              />
            </div>
            <div>
              <img
                className="lg:h-screen  object-fill"
                alt=""
                src="/Banners/banners-5.avif"
              />
            </div>
          </Carousel>
        </div>

        {/* -------------------------------About Us stars-------------------------------------------- */}
        <section className="lg:px-20  py-10 ">
          <div className="lg:flex justify-around items-center sm:w-full lg:pb-8 sm:pb-4 lg:space-x-8 p-3 lg:p-0 md:space-x-4 ">
            <div className=" lg:w-[55%]  mt-1">
              <h1 className="lg:text-4xl md:text-2xl text-xl font-bold inter mb-7 lg:mt-7 underline underline-offset-8">
                {" "}
                ABOUT US
              </h1>
              <p className="  font-medium poppin text-gray-600 mt-4 lg:mt-0 md:mt-0 leading-8">
                Nirmaan Organization is a registered NGO, started by students of
                BITS Pilani in 2005. We work in the areas of Education, Skill
                Development & Entrepreneurship, Health and Wellbeing, Community
                Development and Social Leadership. In the past 16 years of
                journey, we have impacted the lives of 1.5+ million
                beneficiaries with the support of 300+ full time employees and
                1000+ strong volunteer network, through various impact-oriented
                Flagship Programs & Social Leadership Initiatives benefiting
                Children, Women, Youth, Persons with Disabilities (PwDs), LGBTQ+
                and Farmers from diverse social backgrounds across 15 States of
                India while partnering with 100+ Corporate, Government and
                Philanthropic partners.
              </p>
            </div>

            <div className=" lg:w-[45%]  sm:w-full object-fill sm:h-[300px] mt-4">
              <img
                className="lg:h-[350px] shadow-lg w-full"
                src="/Banners/banner-1.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        {/* -------------------------------About end-------------------------------------------- */}

        {/* -------------------------------volunteer icons starts-------------------------------------------- */}
        <section className="py-4 lg:px-20 px-2 bg-gray-100 shadow-lg ">
            <div className=" lg:py-6 lg:px-20 lg:flex grid grid-cols-1 md:grid-cols-2 justify-between items-center ">

              <div className="flex flex-col text-blue-900 bg-white  space-y-5 border  rounded-lg m-10 lg:m-0 shadow-lg lg:w-44 h-44  justify-center items-center lg:space-y-4 md:space-y-4  transition  hover:scale-105">
                <div className="text-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                </div>
                <div className="flex-col">
                  <h3 className="text-2xl font-bold inter ">
                    87923{" "}
                    <span className="text-2xl font-bold inter ">
                      {" "}
                      +{" "}
                    </span>
                  </h3>
                  <h3 className="text-md font-semibold  poppin ">
                    Volunteer
                  </h3>
                </div>
              </div>
             

              
                  <div className="flex flex-col bg-white text-blue-900 border space-y-5 rounded-lg m-10 lg:m-0 shadow-lg lg:w-44 h-44  justify-center lg:space-y-4 md:space-y-4 items-center  transition  hover:scale-105">
                    <div className="w-auto ">
                      <div className="text-center rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-col ">
                      <h3 className="text-2xl font-bold inter ">
                        {" "}
                        $29043{" "}
                        <span className="text-2xl font-bold inter ">
                          {" "}
                          +{" "}
                        </span>
                      </h3>
                      <h3 className="text-md font-semibold poppin ">
                        Donate Now
                      </h3>
                    </div>
                  </div>
                

             
                  <div className="flex flex-col  bg-white text-blue-900 border space-y-5  rounded-lg m-10 lg:m-0 shadow-lg lg:w-44 h-44  justify-center lg:space-y-4 md:space-y-4 items-center  transition  hover:scale-105">
                    <div className="w-auto ">
                      <div className="text-center rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-8 h-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-col text-center">
                      <h3 className="text-2xl font-bold inter ">
                        5978
                        <span className="text-2xl font-bold inter ">
                          +
                        </span>
                      </h3>
                      <h3 className="text-md font-semibold poppin ">
                        Buy Products
                      </h3>
                    </div>
                  </div>
               

                  <div className="flex flex-col border space-y-5 bg-white text-blue-900 rounded-lg m-10 lg:m-0 shadow-lg lg:w-44 h-44  justify-center lg:space-y-4 md:space-y-4 items-center  transition  hover:scale-105">
                    <div className="w-auto">
                      <div className="text-center rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-8 h-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-col text-center">
                      <h3 className="text-2xl font-bold inter ">
                        300
                        <span className="text-2xl font-bold inter ">
                          +
                        </span>
                      </h3>
                      <h3 className="text-md font-semibold poppin ">
                        Impact Project
                      </h3>
                    </div>
                  </div>
             
            </div>
         
        </section>

        {/* -------------------------------volunteer icons end-------------------------------------------- */}

        {/* -------------------------------Events starts-------------------------------------------- */}
        <News />
        {/* -------------------------------Events end-------------------------------------------- */}

        {/* -------------------------------Compaigns starts-------------------------------------------- */}
        <Campaign />
        {/* -------------------------------Compaings end-------------------------------------------- */}

        {/* -------------------------------Video Section starts-------------------------------------------- */}
        <Video />
        {/* -------------------------------video Section starts-------------------------------------------- */}

        {/* -------------------------------Location Section starts-------------------------------------------- */}
        <section className=" bg-gray-50 lg:px-20 w-full lg:h-[510px]  relative  px-2">
          <div className=" lg:flex  justify-around  items-start">
            <div className="lg:w-[50%] sm:flex-col w-full sm:mb-20 py-6 lg:py-0">
              <h1 className=" lg:text-4xl md:text-2xl text-xl font-bold inter mb-7 lg:mt-7 underline underline-offset-8">
                WHERE NIRMAAN LOCATED
              </h1>
              <h6 className="mt-10 lg:text-2xl text-lg inter sm:text-xl text-gray-700  font-bold font-heading tracking-px-n leading-tight">
                Our Latest News and Articles
              </h6>
              <p className="text-gray-600 font-medium leading-relaxed inter">
                Lorem ipsum dolor sit amet, consectetury a dipiscing elit.
                Volutpat, tempor to after condimentum commodadipiscing elit.
                Volutpat, tempor to after condimentum commodadipiscing elit.
                Volutpat, tempor to after condimentum commodadipiscing elit.
                Volutpat, tempor to after condimentum commodadipiscing elit.
                Volutpat, tempor to after condimentum commodadipiscing e o
              </p>

              <p className="inter lg:text-2xl  md:text-xl  text-lg  text-gray-700 font-bold mt-4 mb-2">
                SEE OUR WORK IN 50+ STATES
              </p>

              <label
                for="State"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Select an option
              </label>
              <select
                onChange={(e) => setState(e.target.value)}
                class="bg-gray-50 border border-gray-300 absolute text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadra and Nagar Haveli and Daman and Diu">
                  Dadra and Nagar Haveli and Daman and Diu
                </option>
                <option value="Delhi">Delhi</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
              </select>
            </div>
            <div className="lg:w-[50%] w-full text-center justify-start items-start left-0">
              <Map state={state} />
            </div>
          </div>
        </section>

        {/* -------------------------------Location Section end-------------------------------------------- */}

        {/* ----------------gallery section starts---------------------------  */}
        <div className="relative bg-white lg:my-6 lg:p-4 p-2 mt-5 ">
          <GalleryIndex />
        </div>
        {/* ----------------gallery section ends---------------------------  */}

        {/*------------------------------------------------ OurCenters section start---------------------------------------------- */}
        <div className="relative bg-white sm:grid-cols-1 lg:overflow-visible sm:overflow-scroll text-center ">
          <OurPartnerIndex />
        </div>
        {/*------------------------------------------------ OurCenters section end---------------------------------------------- */}

        {/*-------------------------------- Testimonial starts here------------------------------------------ */}
        <div className="bg-white relative pb-10">
          <h1 className="flex justify-center items-center lg:text-4xl md:text-2xl text-xl font-bold inter mb-7 lg:mt-7 underline underline-offset-8">
            TESTIMONIALS
          </h1>
          <Testimonial />
        </div>
        {/*-------------------------------- Testimonial starts end------------------------------------------ */}

        {/* -------------------------------Certificate Section starts-------------------------------------------- */}
        <div className="w-full bg-blue-50 lg:px-20 px-2 h-40 flex justify-center items-center">
          <div>
            <p className="lg:text-2xl sm:text-base text-gray-600 font-semibold inter">
              Proud to be one of the world’s highest-rated nonprofits
            </p>
          </div>
          <div className="flex mx-8">
            <a href="">
              <img
                src="./guide1.png"
                className="w-30 h-36 transition hover:scale-105"
                alt=""
              />
            </a>
            <a href="">
              {" "}
              <img
                src="./gptw.png"
                className="w-30 h-36 transition hover:scale-105 bg-white"
                alt=""
              />
            </a>
          </div>
        </div>
        {/* -------------------------------Certificate Section starts-------------------------------------------- */}

        {/* --------------footer section starts-------------  */}
        <Footer />
        {/* --------------footer section ends-------------  */}
      </div>
    </>
  );
};

export default Index;
