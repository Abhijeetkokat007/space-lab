import React, { useState } from "react";
import astroimg from "./images/astronauts.png";
import { FaSearch } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FiAlertOctagon } from "react-icons/fi";
import { RiArticleLine } from "react-icons/ri";
import { GiNetworkBars } from "react-icons/gi";
import { IoBagAddOutline } from "react-icons/io5";
import Jobs from "../../components/Jobs/Jobs";
import QandA from "../QandA/QandA";
import Posts from "../../components/Posts/Posts";
import News from "../../components/News/News";
import Article from "../../components/Article/Article";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
const Community = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState("");
  const [search, setSearch] = useState("");

  const handleLinkClick = (index) => {
    if (index !== activeSection) {
      setDirection(index > activeSection ? "right" : "left");
      setTimeout(() => {
        setActiveSection(index);
        setDirection("");
      }, 500); // Duration of the transition
    }
  };

  const sections = [
    { name: "Posts", component: <Posts />, logo: <CgNotes /> },
    { name: "News", component: <News />, logo: <FiAlertOctagon /> },
    { name: "Article", component: <Article />, logo: <RiArticleLine /> },
    { name: "FAQ", component: <QandA />, logo: <GiNetworkBars /> },
    // { name: "Jobs", component: <Jobs />, logo: <IoBagAddOutline /> },
  ];

  return (
    <>
      <Navbar />
      <div className="h-full w-full relative">
        <section className="h-[100vh] md:h-[100vh] lg:h-[100vh] w-full flex flex-col justify-start">
          <h2 className="text-white mt-[12rem] text-3xl font-bold pl-[7rem]">
            Welcome to SYNODIC SPACE LABS
          </h2>
          <h2 className="text-white text-center lg:pr-[17rem] text-[3rem] lg:text-[7rem] lg:-mt-10 font-bold">
            Community
          </h2>

          {/* <div
            className="text-white hidden md:block h-[14rem] w-[23rem] rounded-[2rem] 
                    bg-white/10 backdrop-blur-md mx-auto md:mx-0 lg:mx-0"
          >
            <h2 className="text-center text-lg font-bold mt-[1rem]">
              Explore with us and build the network
            </h2>
            <ul className="flex flex-col items-center justify-center gap-2 font-bold text-xl">
              {sections.map((section, index) => (
                <li key={index}>{section.name}</li>
              ))}
            </ul>
          </div> */}
          {/* change the image from here for the page */}
          <img
            className="h-full w-full absolute -z-10 object-cover"
            src={astroimg}
            alt=""
          />
        </section>
      </div>

      <div
        className="h-full w-full relative px-7 shadow-[0px_-12px_14px_5px_rgba(13,_27,_42,_1)] flex flex-col md:flex-row justify-between items-center pb-[14px]"
        style={{ backgroundColor: "rgba(13, 27, 42, 1)" }}
      >
        <section className="h-8 text-black bg-white w-full md:w-1/5 mb-4 md:mb-0 rounded-md flex items-center gap-3">
          <input
            className="opacity-65 text-sm md:text-base border-none outline-none pl-2 w-full"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="opacity-65 p-2">
            <FaSearch />
          </span>
        </section>

        <section className="flex-grow flex items-center justify-end space-x-4 md:space-x-8 px-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center cursor-pointer text-white"
              onClick={() => handleLinkClick(index)}
            >
              <span className="text-lg md:text-2xl font-bold">
                {section.logo}
              </span>
              <p className="text-sm md:text-xl font-bold">{section.name}</p>
            </div>
          ))}
        </section>

        {/* <section className="flex items-center justify-center w-full md:w-1/5 text-white mt-4 md:mt-0">
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => handleLinkClick(sections.length - 1)}
          >
            <span className="text-lg md:text-2xl font-bold">
              {sections[sections.length - 1].logo}
            </span>
            <p className="text-sm md:text-xl font-bold">
              {sections[sections.length - 1].name}
            </p>
          </div>
        </section> */}
      </div>

      <div
        className="h-full w-full relative px-7 pb-7 overflow-hidden"
        style={{ backgroundColor: "rgba(13, 27, 42, 1)" }}
      >
        <div
          className={`w-full h-full flex items-center justify-center transition-transform duration-500 ${
            direction === "left"
              ? "-translate-x-full"
              : direction === "right"
              ? "translate-x-full"
              : ""
          }`}
        >
          {sections[activeSection].component}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Community;
