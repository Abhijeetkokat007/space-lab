import React from "react";
import bgimage from "../../components/Navbar/images/background1.jpg";
import Animation from "../Animation";
import ellipse from "../../assets/images/Ellipse 21.png";
import Activtiy from "../../components/Activity/Activtiy";
import Navbar from "./../../components/Navbar/Navbar";
import Team from "../../components/Team/Team";
import AboutCompany from "../../components/About/About";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import HomeGallary from "../../components/HomeGallary/HomeGallary";
import Footer from "./../../components/Footer/Footer";
import Article from "../../components/Article/Article";
function Home() {
  const iconStyle = { fontSize: "1.5rem" }; // Adjust the size as needed
  return (
    <>
      <Navbar />
      <div className="h-screen w-full relative flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={bgimage}
            alt="background"
          />
        </div>

        {/* Left Side Text */}
        <div className=" relative pl-8 lg:pl-32 text-white z-1  w-full h-[301px] mb-18  gap-0">
          <div className="bg-opacity-10 p-4 rounded-lg">
            <h1 className="text-4xl lg:text-6xl  font-extrabold tracking-tighter font-titillium  leading-[75px] lg:leading-[85px]">
              WHAT COULD <br /> B≡ HIGHER THAN <br /> THE SKY
            </h1>
            <p className="mt-4 text-2xl">The only space!</p>

            {/* Ellipse with Read More button */}
            <div className="flex items-center mt-14">
              <div className="w-[48.14px] h-[48.14px] flex-row  ml-52 relative">
                <img
                  className="w-full h-full object-cover"
                  src={ellipse}
                  alt="ellipse"
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xs ml-6 whitespace-nowrap">
                  Read more
                </span>
              </div>
            </div>
            <div className="flex flex-wrap mt-8 justify-start space-x-6 lg:space-x-16">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
                style={iconStyle}
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
                style={iconStyle}
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:someone@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
                style={iconStyle}
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
      <AboutCompany />
      <Activtiy />

      <Team />
      {/* <Animation /> */}
      {/* <div className="h-[1300px] bg-black"></div> */}
      <div className="flex items-center p-8 bg-black pb-[50px]">
        <div className="w-[15%] mr-4 border-b-4 border-blue-700"></div>
        <h1 className="text-2xl lg:text-6xl font-bold tracking-tighter text-white ">
          Our Gallery
        </h1>
      </div>

      <Article />
      <div className="bg-black h-[100px]"></div>
      <Footer />
    </>
  );
}

export default Home;
