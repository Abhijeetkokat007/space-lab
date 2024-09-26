import React, { useEffect, useState } from "react";
import astronautImage from "./images/image 1.png";
import bgimage from "./images/background1.jpg";
import ellipse from "../../assets/images/Ellipse 21.png";

const AboutCompany = () => {
  // State to track first visit animation
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    // Disable the first visit effect after 3 seconds
    const timer = setTimeout(() => setFirstVisit(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen w-full text-white p-6 sm:p-10 bg-cover bg-center flex items-center bg-gradient-to-r from-black to-[#0b0e29]"
      // style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* Main content wrapper with backdrop blur and gradient overlay */}
      <div className="flex flex-col lg:flex-row w-full justify-between bg-opacity-60 p-6 sm:p-10">
        {/* Left: Astronaut image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <img
            src={astronautImage}
            alt="Astronaut"
            className={`max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto transition-transform duration-1000 ease-in-out ${
              firstVisit ? "scale-125" : "hover:scale-110"
            }`}
          />
        </div>

        {/* Right: Company text */}
        <div
          className={`w-full lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center transition-all duration-1000 ease-in-out ${
            firstVisit
              ? "opacity-0 translate-x-full"
              : "opacity-100 translate-x-0"
          }`}
        >
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 text-center lg:text-left">
              ABOUT COMPANY
            </h1>
            <div className="w-[20%] mx-4 border-b-4 border-blue-700"></div>
          </div>

          <div className="space-y-4 sm:space-y-6 mb-5 bg-gradient-to-b from-[rgba(78,95,255,0.23)] to-[rgba(0,0,0,0.023)] text-white p-4 sm:p-5 rounded-lg shadow-lg text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>

            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>

          {/* <span className="mt-5 py-2 px-4 font-bold text-white rounded-full text-base text-center lg:text-left">
            WE ARE ALWAYS WITH YOU
          </span> */}

          <div className="w-[65.14px] h-[65.14px] flex-row  ml-4 relative">
            <img
              className="w-full h-full object-cover"
              src={ellipse}
              alt="ellipse"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xs ml-20 whitespace-nowrap">
              WE ARE ALWAYS WITH YOU
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
