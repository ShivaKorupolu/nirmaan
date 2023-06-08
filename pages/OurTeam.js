/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function OurTeam() {
  const [showingItem, setshowingItem] = useState(false);
  const [allList, setAllList] = useState(true);
  const [governingBorad, setGoverningBorad] = useState(false);
  const [advisoryCounsiler, setAdvisoryCounsiler] = useState(false);
  const [usaTeam, setUsaTeam] = useState(false);
  const [centralTeam, setCentralTeam] = useState(false);
  const [programLeaderShip, setProgramLeaderShip] = useState(false);



//------------------------------- onjects assigned here-----------------------

  const ourteam = [
 
    {
      id: 1,
      name: "Mayur Patnala",
      designation: "Founder & CEO",
      img: "/Team_photos/GoverningBorad/mayur.png",
      description:
        "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
      Link: "",
    },
    {
      id: 2,
      name: "ABHISHEK VADDADI",
      designation: "Core Team Member",
      img: "/Team_photos/GoverningBorad/Abhishek-gov.png",
      description:
        "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
      Link: "",
    },
    {
      id: 3,
      name: "SANDHYA RANI",
      designation: "IPoS (Rtd.)",
      img: "/Team_photos/GoverningBorad/Sandhya_Rani-gov.png",
      description:
        "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
      Link: "",
    },
    {
      id: 4,
      name: "VENKAT TANKASALA",
      designation: "Asst. Vice President, Synchrony",
      img: "/Team_photos/GoverningBorad/Venkatesh-gov.png",
      description:
        "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
      Link: "",
    },
    {
      id: 5,
      name: "RAKESH SINGHANIA",
      designation: "CFO, Wells Fargo India",
      img: "/Team_photos/GoverningBorad/RakeshSinghania-gov.png",
      description:
        "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
      Link: "",
    },
    {
      id: 6,
      name: "DR ASHOK AGARWAL",
      designation: "Founder of SQL Star International Ltd",
      img: "/Team_photos/GoverningBorad/AshokAgarwal-gov.png",
      description:
        "Founder of SQL Star International Ltd, Cyber Media India Ltd, ACS Technologies Ltd, and Era Software Systems (P) Ltd",
      Link: "",
    },
    {
      id: 7,
      name: "V LAXMIKANTH",
      designation: "Managing Director Broadridge",
      img: "/Team_photos/GoverningBorad/Laxmikanth-gov.png",
      description:
        "Managing Director Broadridge Financial Solution India Private Limited",
      Link: "",
    },
    {
      id: 8,
      name: "ABDUL WAHEED",
      designation: "Mission Director, Ex-Officio Member",
      img: "/Team_photos/GoverningBorad/Waheed-gov.png",
      description:
        "Mission Director, Ex-Officio Member, IFS (retd), Former Commissioner, Minority Welfare Department",
      Link: "",
    },



  ];

  const governing=[
    {
      id: 1,
      name: "Mayur Patnala",
      designation: "Founder & CEO",
      img: "/Team_photos/GoverningBorad/mayur.png",
      description:
        "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
      Link: "",
    },
    {
      id: 2,
      name: "ABHISHEK VADDADI",
      designation: "Core Team Member",
      img: "/Team_photos/GoverningBorad/Abhishek-gov.png",
      description:
        "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
      Link: "",
    },
    {
      id: 3,
      name: "SANDHYA RANI",
      designation: "IPoS (Rtd.)",
      img: "/Team_photos/GoverningBorad/Sandhya_Rani-gov.png",
      description:
        "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
      Link: "",
    },
    {
      id: 4,
      name: "VENKAT TANKASALA",
      designation: "Asst. Vice President, Synchrony",
      img: "/Team_photos/GoverningBorad/Venkatesh-gov.png",
      description:
        "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
      Link: "",
    },
    {
      id: 5,
      name: "RAKESH SINGHANIA",
      designation: "CFO, Wells Fargo India",
      img: "/Team_photos/GoverningBorad/RakeshSinghania-gov.png",
      description:
        "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
      Link: "",
    },
    {
      id: 6,
      name: "DR ASHOK AGARWAL",
      designation: "Founder of SQL Star International Ltd",
      img: "/Team_photos/GoverningBorad/AshokAgarwal-gov.png",
      description:
        "Founder of SQL Star International Ltd, Cyber Media India Ltd, ACS Technologies Ltd, and Era Software Systems (P) Ltd",
      Link: "",
    },
    {
      id: 7,
      name: "V LAXMIKANTH",
      designation: "Managing Director Broadridge",
      img: "/Team_photos/GoverningBorad/Laxmikanth-gov.png",
      description:
        "Managing Director Broadridge Financial Solution India Private Limited",
      Link: "",
    },
    {
      id: 8,
      name: "ABDUL WAHEED",
      designation: "Mission Director, Ex-Officio Member",
      img: "/Team_photos/GoverningBorad/Waheed-gov.png",
      description:
        "Mission Director, Ex-Officio Member, IFS (retd), Former Commissioner, Minority Welfare Department",
      Link: "",
    },




  ]

const advisorycounsiler =[
  {
    id: 1,
    name: "Mayur Patnala",
    designation: "Founder & CEO",
    img: "/Team_photos/AdvisoryCounciler/Jayesh_Ranjan-council.png",
    description:
      "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
    Link: "",
  },
  {
    id: 2,
    name: "ABHISHEK VADDADI",
    designation: "Core Team Member",
    img: "/Team_photos/AdvisoryCounciler/raju-council.png",
    description:
      "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
    Link: "",
  },
  {
    id: 3,
    name: "DIVYA NAWALE",
    designation: "Environment Program Advisor",
    img: "/Team_photos/AdvisoryCounciler/DivyaNawale.png",
    description:
      "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
    Link: "",
  },

]

const usa=[
  {
    id: 1,
    name: "GOPI VUDARU",
    designation: "Infrastructure Manager, State Farm Insurance",
    img: "/Team_photos/UsaTeam/Gopi-usa.png",
    description:
      "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
    Link: "",
  },

  {
    id: 2,
    name: "NAVEEN MADISETTY ",
    designation: "CEO, Techie Brains Inc IL, USA",
    img: "/Team_photos/UsaTeam/naveen_madisetty-usa.png",
    description:
      "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
    Link: "",
  },

  {
    id: 3,
    name: "VIVEK PALEPU (SECRETARY)",
    designation: "Regulatory Scientist at US FDA – VA, USA",
    img: "/Team_photos/UsaTeam/vivek_palepu-usa.png",
    description:
      "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
    Link: "",
  },
  {
    id: 4,
    name: "NITHYA ANNAMANENI",
    designation: "Siemens, Dallas, TX – USA",
    img: "/Team_photos/UsaTeam/nithya-usa.png",
    description:
      "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
    Link: "",
  }
]

const centralleads=[
  {
    id: 1,
    name: "Mayur Patnala",
    designation: "Founder & CEO",
    img: "/Team_photos/CentralTeam/mayur.png",
    description:
      "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
    Link: "",
  },

  {
    id: 2,
    name: "MOUNIKA KONATHAM ",
    designation: "Chief Global (Partnership) Officer",
    img: "/Team_photos/CentralTeam/Mounika.png",
    description:
      "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
    Link: "",
  },

  {
    id: 3,
    name: "UMA KESANI",
    designation: "Co-Chief Executive Officer",
    img: "/Team_photos/CentralTeam/Uma.png",
    description:
      "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
    Link: "",
  },
  {
    id: 4,
    name: "SWATI VEMPATI",
    designation: "Chief Development Officer",
    img: "/Team_photos/CentralTeam/Swati.png",
    description:
      "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
    Link: "",
  },

  {
    id: 5,
    name: "ANURADHA PULLA",
    designation: "Organizational Chief Operating Office",
    img: "/Team_photos/CentralTeam/anuradha.png",
    description:
      "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
    Link: "",
  },
  {
    id: 6,
    name: "RAMA RAO",
    designation: "Chief Financial Officer",
    img: "/Team_photos/CentralTeam/Ramarao.png",
    description:
      "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
    Link: "",
  },
  {
    id: 7,
    name: "HIMASREE RAGHUMUDRI",
    designation: "Chief People Officer",
    img: "/Team_photos/CentralTeam/himasree.png",
    description:
      "Here i am very happy to share this with you a remarkable initiative focused on empowering tribal girl students through",
    Link: "",
  },




]

const programleadership=[
  {
    id: 1,
    name: "NAGESH PALLA",
    designation: "COO, Nirmaan Vidya Helpline",
    img: "/Team_photos/ProgramLeads/Nagesh.png",
    description:
      "COO, Nirmaan Vidya Helpline. Ex Governing Board Member",
    Link: "",
  },

  {
    id: 2,
    name: "AKASH BADAVE",
    designation: "CEO, Farmers Project",
    img: "/Team_photos/ProgramLeads/Akash.png",
    description:
      "CEO, Farmers Project. Ex Governing Board Member",
    Link: "",
  },


]



//------------------------------------ method declaration here--------------------
  function all_team() {
    setGoverningBorad(false);
    setAllList(true);
    setAdvisoryCounsiler(false);
    setCentralTeam(false);
    setProgramLeaderShip(false);
  }

  function governing_board_list() {
    setGoverningBorad(true);
    setAllList(false);
    setAdvisoryCounsiler(false);
    setCentralTeam(false);
    setProgramLeaderShip(false);
  }

  function advisory_counsiler() {
    setGoverningBorad(false);
    setAllList(false);
    setAdvisoryCounsiler(true);
    setCentralTeam(false);
    setProgramLeaderShip(false);
  }

  function usa_team() {
    setGoverningBorad(false);
    setAllList(false);
    setAdvisoryCounsiler(false);
    setUsaTeam(true);
    setCentralTeam(false);
    setProgramLeaderShip(false);
  }
  function central_team() {
    setGoverningBorad(false);
    setAllList(false);
    setAdvisoryCounsiler(false);
    setUsaTeam(false);
    setCentralTeam(true);
    setProgramLeaderShip(false);
  }

  function program_leadership() {
    setGoverningBorad(false);
    setAllList(false);
    setAdvisoryCounsiler(false);
    setUsaTeam(false);
    setCentralTeam(false);
    setProgramLeaderShip(true);
  }


  return (
    <>
      <div className="w-full h-auto pb-10  bg-nirmaan-secondary px-20">
      <div className="text-center">
            <h1 className="py-20 ">
              {" "}
              <span className=" border border-nirmaan rounded-full p-3 leading-6 text-4xl font-bold poppin text-nirmaan-darker">
                Meet Our Team{" "}
              </span>
            </h1>
          </div>
          <div className="w-full h-16 bg-white shadow-lg border">

  <ul className=" flex justify-around items-center h-16 capitalize text-sm poppin">
    <li onClick={() => all_team()} >
    <button className=" hover:border-b-2 hover:border-b-blue-900 h-16 capitalize" >All</button>
      </li>
      <li  onClick={() => governing_board_list()} >
    <button className="hover:border-b-2 hover:border-b-blue-900 h-16  capitalize ">  governing board</button>
      </li>
      <li onClick={() => advisory_counsiler()}>
    <button className="hover:border-b-2 hover:border-b-blue-900 h-16  capitalize ">  Advisory council</button>
      </li>
      <li onClick={() => usa_team()}>
    <button className="hover:border-b-2 hover:border-b-blue-900 h-16 capitalize   "> USA Team</button>
      </li>
    <li onClick={() => central_team()}>
    <button className="hover:border-b-2 hover:border-b-blue-900 h-16  capitalize"> Central Leads</button>
      </li>
    <li>
    <button className="hover:border-b-2 hover:border-b-blue-900 h-16  capitalize "> Captains</button>
      </li>
      <li onClick={() => program_leadership()}>
    <button className="hover:border-b-2 hover:border-b-blue-900 h-16 capitalize  "> Program leadership</button>
      </li>
      <li>
    <button className="hover:border-b-2 hover:border-b-blue-900 h-16 capitalize  "> cxo team</button>
      </li>
   
    
  </ul>
</div>

{/* -------------------------------show all team here start-------------------------------- */}
                {allList === true?(
                  <>
                  <div className=" lg:grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 py-10 px-16 bg-white">
      
      {ourteam
      
        ? ourteam.map((ourteam_members, central_list) => (
          <div key={ourteam_members.id} >
               <div className="w-56 h-72 border shadow-lg mt-10  bg-nirmaan-secondary">
              <div
                onMouseEnter={() =>
                  setshowingItem((showingItem) => ourteam_members.id)
                }
                onMouseLeave={() => setshowingItem((showingItem) => "")}
              >
                <img
                  src={ourteam_members.img}
                  alt=""
                  className="h-72 w-56 object-cover text-center absolute"
                />
                <div className="w-56 p-1  h-20 bottom-0 top-56 bg-white  relative flex-col items-end justify-center text-center object-cover overflow-hidden text-ellipsis text-nirmaan-darker border border-white shadow-lg">
                  <p className="w-52 h-7 text-sm mt-3 text-center font-bold text-gray-600 poppin">
                    {ourteam_members.name}
                  </p>
                  <p className="w-52 h-7 text-xs text-center font-semibold  poppin">
                    ({ourteam_members.designation})
                  </p>
                </div>

                <Transition
                  show={showingItem === ourteam_members.id ? true : false}
                  enter="transition-opacity duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className=" relative w-56 h-52 top-4 flex justify-center items-center object-cover  bg-nirmaan-darker">
                    <div>
                      <p className="relative text-white px-2  text-sm h-44 text-left text-ellipsis overflow-hidden ">
                        {ourteam_members.description}
                      </p>
                      <a href={ourteam_members.Link} className="pb-4 ">
                        {" "}
                        <p className="text-right text-sm text-white mr-4">
                          view more
                        </p>
                      </a>
                    </div>
                  </div>
                </Transition>
              </div>
              </div>
         
            </div>  
          ))
        : ""}


    </div>
                  </>

                ) :("")}
{/* -------------------------------show all team here end-------------------------------- */}


{/*------------------------------- governing borad start-------------------------------------------- */}
{governingBorad === true? (
<>
<div className=" lg:grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 py-10 px-16 bg-white" >
      
      {governing
        ? governing.map((governing_board, central_list) => (
          <div key={governing_board.id} >
               <div className="w-56 h-72 border shadow-lg mt-10  bg-nirmaan-secondary">
              <div
                onMouseEnter={() =>
                  setshowingItem((showingItem) => governing_board.id)
                }
                onMouseLeave={() => setshowingItem((showingItem) => "")}
              >
                <img
                  src={governing_board.img}
                  alt=""
                  className="h-72 w-56 object-cover absolute"
                />
                <div className="w-56 p-1 h-20 bottom-0 top-56 bg-white  relative flex-col items-end justify-center text-center object-cover overflow-hidden text-ellipsis text-nirmaan-darker border border-white shadow-lg">
                  <p className="w-52 h-7 text-sm mt-3 text-center font-bold text-gray-600 poppin">
                    {governing_board.name}
                  </p>
                  <p className="w-52 h-7 text-xs text-center font-semibold  poppin">
                    ({governing_board.designation})
                  </p>
                </div>

                <Transition
                  show={showingItem === governing_board.id ? true : false}
                  enter="transition-opacity duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className=" relative w-56 h-52 top-4 flex justify-center items-center object-cover  bg-nirmaan-darker">
                    <div>
                      <p className="relative text-white px-2  text-sm h-44 text-left text-ellipsis overflow-hidden ">
                        {governing_board.description}
                      </p>
                      <a href={governing_board.Link} className="pb-4 ">
                        {" "}
                        <p className="text-right text-sm text-white mr-4">
                          view more 
                        </p>
                      </a>
                    </div>
                  </div>
                </Transition>
              </div>
              </div>
            </div>
          ))
        : ""}
    </div>
</>
):("")}
{/*------------------------------- governing borad start-------------------------------------------- */}

{/*---------------------- Advisory Counciler start---------------------------------------------------- */}
{advisoryCounsiler === true? (
  <>
<div className=" lg:grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 py-10 px-16 bg-white" >
      
      {advisorycounsiler
        ? advisorycounsiler.map((advisorycounsiler_team, counciler_list) => (
          <div key={advisorycounsiler_team.id} >
               <div className="w-56 h-72 border shadow-lg mt-10  bg-nirmaan-secondary">
              <div
                onMouseEnter={() =>
                  setshowingItem((showingItem) => advisorycounsiler_team.id)
                }
                onMouseLeave={() => setshowingItem((showingItem) => "")}
              >
                <img
                  src={advisorycounsiler_team.img}
                  alt=""
                  className="h-72 w-56 object-cover absolute"
                />
                <div className="w-56 p-1 h-20 bottom-0 top-56 bg-white  relative flex-col items-end justify-center text-center object-cover overflow-hidden text-ellipsis text-nirmaan-darker border border-white shadow-lg">
                  <p className="w-52 h-7 text-sm mt-3 text-center font-bold text-gray-600 poppin">
                    {advisorycounsiler_team.name}
                  </p>
                  <p className="w-52 h-7 text-xs text-center font-semibold  poppin">
                    ({advisorycounsiler_team.designation})
                  </p>
                </div>

                <Transition
                  show={showingItem === advisorycounsiler_team.id ? true : false}
                  enter="transition-opacity duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className=" relative w-56 h-52 top-4 flex justify-center items-center object-cover  bg-nirmaan-darker">
                    <div>
                      <p className="relative text-white px-2  text-sm h-44 text-left text-ellipsis overflow-hidden ">
                        {advisorycounsiler_team.description}
                      </p>
                      <a href={advisorycounsiler_team.Link} className="pb-4 ">
                        {" "}
                        <p className="text-right text-sm text-white mr-4">
                          view more 
                        </p>
                      </a>
                    </div>
                  </div>
                </Transition>
              </div>
              </div>
            </div>
          ))
        : ""}
    </div>
</>
):("")}
{/*---------------------- Advisory Counciler end ---------------------------------------------------- */}


{/*=----------------------------- Usa team members=-----------------------------  */}
{usaTeam === true? (
  <>
<div className=" lg:grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 py-10 px-16 bg-white" >
      
      {usa
        ? usa.map((usa_members, counciler_list) => (
          <div key={usa_members.id} >
               <div className="w-56 h-72 border shadow-lg mt-10  bg-nirmaan-secondary">
              <div
                onMouseEnter={() =>
                  setshowingItem((showingItem) => usa_members.id)
                }
                onMouseLeave={() => setshowingItem((showingItem) => "")}
              >
                <img
                  src={usa_members.img}
                  alt=""
                  className="h-72 w-56 object-fill absolute"
                />
                <div className="w-56 p-1 h-20 bottom-0 top-56 bg-white  relative flex-col items-end justify-center text-center object-cover overflow-hidden text-ellipsis text-nirmaan-darker border border-white shadow-lg">
                  <p className="w-52 h-7 text-sm mt-3 text-center font-bold text-gray-600 poppin">
                    {usa_members.name}
                  </p>
                  <p className="w-52 h-7 text-xs text-center font-semibold  poppin">
                    ({usa_members.designation})
                  </p>
                </div>

                <Transition
                  show={showingItem === usa_members.id ? true : false}
                  enter="transition-opacity duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className=" relative w-56 h-52 top-4 flex justify-center items-center object-cover  bg-nirmaan-darker">
                    <div>
                      <p className="relative text-white px-2  text-sm h-44 text-left text-ellipsis overflow-hidden ">
                        {usa_members.description}
                      </p>
                      <a href={usa_members.Link} className="pb-4 ">
                        {" "}
                        <p className="text-right text-sm text-white mr-4">
                          view more 
                        </p>
                      </a>
                    </div>
                  </div>
                </Transition>
              </div>
              </div>
            </div>
          ))
        : ""}
    </div>
</>
  ):("")}
{/*=----------------------------- Usa team members=-----------------------------  */}

{/*---------------- central team here starts-------------------------------------------- */}
{centralTeam === true? (
   <>
   <div className=" lg:grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 py-10 px-16 bg-white" >
         
         {centralleads
           ? centralleads.map((central_teammembers, counciler_list) => (
             <div key={central_teammembers.id} >
                  <div className="w-56 h-72 border shadow-lg mt-10  bg-nirmaan-secondary">
                 <div
                   onMouseEnter={() =>
                     setshowingItem((showingItem) => central_teammembers.id)
                   }
                   onMouseLeave={() => setshowingItem((showingItem) => "")}
                 >
                   <img
                     src={central_teammembers.img}
                     alt=""
                     className="h-72 w-56 object-fill absolute"
                   />
                   <div className="w-56 p-1 h-20 bottom-0 top-56 bg-white  relative flex-col items-end justify-center text-center object-cover overflow-hidden text-ellipsis text-nirmaan-darker border border-white shadow-lg">
                     <p className="w-52 h-7 text-sm mt-3 text-center font-bold text-gray-600 poppin">
                       {central_teammembers.name}
                     </p>
                     <p className="w-52 h-7 text-xs text-center font-semibold  poppin">
                       ({central_teammembers.designation})
                     </p>
                   </div>
   
                   <Transition
                     show={showingItem === central_teammembers.id ? true : false}
                     enter="transition-opacity duration-500"
                     enterFrom="opacity-0"
                     enterTo="opacity-100"
                     leave="transition-opacity duration-500"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                   >
                     <div className=" relative w-56 h-52 top-4 flex justify-center items-center object-cover  bg-nirmaan-darker">
                       <div>
                         <p className="relative text-white px-2  text-sm h-44 text-left text-ellipsis overflow-hidden ">
                           {central_teammembers.description}
                         </p>
                         <a href={central_teammembers.Link} className="pb-4 ">
                           {" "}
                           <p className="text-right text-sm text-white mr-4">
                             view more 
                           </p>
                         </a>
                       </div>
                     </div>
                   </Transition>
                 </div>
                 </div>
               </div>
             ))
           : ""}
       </div>
   </>
 ):("")}
{/*---------------- central team here ends-------------------------------------------- */}

{/*---------------------------- program leadership team starts------------------------------ */}

{programLeaderShip === true? (
   <>
   <div className=" lg:grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 py-10 px-16 bg-white" >
         
         {programleadership
           ? programleadership.map((programleadership_team, counciler_list) => (
             <div key={programleadership_team.id} >
                  <div className="w-56 h-72 border shadow-lg mt-10  bg-nirmaan-secondary">
                 <div
                   onMouseEnter={() =>
                     setshowingItem((showingItem) => programleadership_team.id)
                   }
                   onMouseLeave={() => setshowingItem((showingItem) => "")}
                 >
                   <img
                     src={programleadership_team.img}
                     alt=""
                     className="h-72 w-56 object-fill absolute"
                   />
                   <div className="w-56 p-1 h-20 bottom-0 top-56 bg-white  relative flex-col items-end justify-center text-center object-cover overflow-hidden text-ellipsis text-nirmaan-darker border border-white shadow-lg">
                     <p className="w-52 h-7 text-sm mt-3 text-center font-bold text-gray-600 poppin">
                       {programleadership_team.name}
                     </p>
                     <p className="w-52 h-7 text-xs text-center font-semibold  poppin">
                       ({programleadership_team.designation})
                     </p>
                   </div>
   
                   <Transition
                     show={showingItem === programleadership_team.id ? true : false}
                     enter="transition-opacity duration-500"
                     enterFrom="opacity-0"
                     enterTo="opacity-100"
                     leave="transition-opacity duration-500"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                   >
                     <div className=" relative w-56 h-52 top-4 flex justify-center items-center object-cover  bg-nirmaan-darker">
                       <div>
                         <p className="relative text-white px-2  text-sm h-44 text-left text-ellipsis overflow-hidden ">
                           {programleadership_team.description}
                         </p>
                         <a href={programleadership_team.Link} className="pb-4 ">
                           {" "}
                           <p className="text-right text-sm text-white mr-4">
                             view more 
                           </p>
                         </a>
                       </div>
                     </div>
                   </Transition>
                 </div>
                 </div>
               </div>
             ))
           : ""}
       </div>
   </>
 ):("")}
{/*---------------------------- program leadership team ends------------------------------ */}

      </div>
    </>
  );
}

export default OurTeam;
