/* eslint-disable @next/next/no-img-element */
import React from "react";

function Causes() {
  return (
    <>
      <div className="lg:hidden   w-full  h-96  ">
        <div className="grid grid-col-1 md:grid-cols-2 px-2 gap-x-1 ">
        
          <div>
            <div className="w-full md:w-1/2">
              <img
                src="/event3.jpg"
                alt=""
                className=" h-72 w-full object-fill p-2 absolute"
              />
              <h1 className=" lg:text-8xl relative uppercase text-3xl text-white flex justify-center items-center h-72 poppin font-bold ">
                Eduaction
              </h1>
            </div>
          </div>

          <div>
            <div className="w-full  ">
              <img
                src="/event3.jpg"
                alt=""
                className=" h-72 w-full  object-fill p-2 absolute"
              />
              <h1 className=" lg:text-8xl relative text-3xl text-white flex justify-center items-center h-72 poppin font-bold ">
                Skill Eduaction
              </h1>
            </div>
          </div>

          <div>
            <div className="w-full">
              <img
                src="/event3.jpg"
                alt=""
                className=" h-72 w-full object-fill p-2 absolute"
              />
              <h1 className=" lg:text-8xl relative text-3xl text-white flex justify-center items-center h-72 poppin font-bold ">
                Disaster Relif
              </h1>
            </div>

            <div className=" "></div>
          </div>

          <div>
            <div className="w-full absolute ">
              <img
                src="/event3.jpg"
                alt=""
                className=" h-72 w-full object-fill p-2 absolute"
              />
              <h1 className=" lg:text-8xl relative text-3xl text-white flex justify-center items-center h-72 poppin font-bold ">
                Health
              </h1>
            </div>
          </div>

          <div>
            <div className="w-full ">
              <img
                src="/event3.jpg"
                alt=""
                className=" h-72 w-full object-fill p-2 absolute "
              />
              <h1 className=" lg:text-8xl relative text-3xl text-white flex justify-center items-center h-72 poppin font-bold ">
                Divercity and Inclusion
              </h1>
            </div>
          </div>

          <div>
            <div className="w-full">
              <img
                src="/event3.jpg"
                alt=""
                className=" h-72 w-full object-fill absolute p-2"
              />
              <h1 className=" lg:text-8xl relative text-3xl text-white flex justify-center items-center h-72 poppin font-bold ">
                Women Empowerment
              </h1>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Causes;
