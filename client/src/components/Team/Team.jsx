import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Team = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState("right");

  const pages = [
    {
      title: "Welcome to Space Lab",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit accusantium enim. Nulla officiis inventore sint magnam nisi nam obcaecati libero, possimus dolores, impedit, laudantium dolorum corrupti temporibus sed et repudiandae numquam consectetur? Fugit sit qui explicabo rerum tempora in?",
      img: "https://img.freepik.com/premium-photo/astronaut-exploring-alien-planet-hightech-astronaut-from-future_158863-10112.jpg",
    },
    {
      title: "Mission to Mars",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit accusantium enim. Nulla officiis inventore sint magnam nisi nam obcaecati libero, possimus dolores, impedit, laudantium dolorum corrupti temporibus sed et repudiandae numquam consectetur? Fugit sit qui explicabo rerum tempora in?",
      img: "https://images.pexels.com/photos/7672252/pexels-photo-7672252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Astronaut Training Program",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit accusantium enim. Nulla officiis inventore sint magnam nisi nam obcaecati libero, possimus dolores, impedit, laudantium dolorum corrupti temporibus sed et repudiandae numquam consectetur? Fugit sit qui explicabo rerum tempora in?",
      img: "https://img.freepik.com/premium-photo/close-up-view-cosmonaut-space-suit-beautiful-illustration-picture-generative-ai_146671-76005.jpg",
    },
    {
      title: "Space Tourism",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit accusantium enim. Nulla officiis inventore sint magnam nisi nam obcaecati libero, possimus dolores, impedit, laudantium dolorum corrupti temporibus sed et repudiandae numquam consectetur? Fugit sit qui explicabo rerum tempora in?",
      img: "https://img.freepik.com/premium-photo/astronaut-spacesuit-against-background-night-sky-created-with-generative-ai-technology_134032-15503.jpg",
    },
  ];

  const handlePageChange = (pageIndex) => {
    setDirection(pageIndex > currentPage ? "right" : "left");
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setDirection("right");
      setCurrentPage((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [pages.length]);

  const iconStyle = {
    fontSize: "1.5rem",
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-r from-black to-[#0b0e29]">
      <div className="flex items-center w-[80%] lg:w-[50%] my-12">
        <div className="w-[25%] mr-4 border-b-4 border-blue-700"></div>
        <h1 className="text-2xl text-white lg:text-6xl font-bold tracking-tighter">
          OUR TEAM
        </h1>
      </div>

      <div className="w-[80%] mx-auto p-2 lg:px-8 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
        <div
          className="lg:w-1/2 w-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${direction === "right" ? "0%" : "-100%"})`,
          }}
        >
          <img
            src={pages[currentPage].img}
            alt="Astronaut"
            className="rounded-lg shadow-lg object-cover w-[300px] h-[400px] md:w-[350px] md:h-[450px] lg:w-[350px] lg:h-[450px] mx-auto"
          />
        </div>
        <div
          className="lg:w-1/2 w-full text-white pl-4 lg:px-12 space-y-6 transition-opacity duration-700 ease-in-out"
          style={{ opacity: currentPage ? 1 : 1 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold">
            {pages[currentPage].title}
          </h1>
          <p className="text-md md:text-lg leading-relaxed">
            {pages[currentPage].content}
          </p>
          <div className="flex justify-center lg:justify-start space-x-6 lg:space-x-16 mt-18">
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

      <div className="m-8">
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() =>
              handlePageChange(currentPage > 0 ? currentPage - 1 : 0)
            }
            className="text-xl text-gray-400"
          >
            &lt;
          </button>
          <div className="flex space-x-2">
            {pages.map((_, index) => (
              <div
                key={index}
                onClick={() => handlePageChange(index)}
                className={`h-4 w-4 rounded-full cursor-pointer ${
                  index === currentPage ? "bg-blue-500" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
          <button
            onClick={() =>
              handlePageChange(
                currentPage < pages.length - 1
                  ? currentPage + 1
                  : pages.length - 1
              )
            }
            className="text-xl text-gray-400"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
