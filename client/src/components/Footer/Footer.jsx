import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from "../Navbar/images/logosynodic.png";
import Footerbg from "./images/FooterBG.png"; // Ensure the path to your image is correct

const Footer = () => {
  const iconStyle = { fontSize: "1.5rem" }; // Adjust the size as needed

  return (
    <footer
      className="relative z-10 p-8 text-white bg-black bg-center bg-cover lg:p-16"
      style={{ backgroundImage: `url(${Footerbg})` }} // Apply background image
    >
      {/* Content */}
      <div className="relative flex flex-col items-center justify-between px-4 mx-auto lg:flex-row">
        {/* Left side: Logo */}
        <div className="mb-4 lg:mb-0">
          <a href="/">
            <img src={logo} alt="Logo" className="h-16 lg:h-20" />
          </a>
        </div>

        {/* Middle: Links */}
        <ul className="flex flex-col items-center mb-4 lg:mb-0 lg:flex-row lg:justify-center lg:space-x-8">
          <li className="mb-2 lg:mb-0">
            <a href="/about" className="text-white hover:underline">
              About Company
            </a>
          </li>
          <li className="mb-2 lg:mb-0">
            <a href="/" className="text-white hover:underline">
              Company Activity
            </a>
          </li>
          <li className="mb-2 lg:mb-0">
            <a href="/" className="text-white hover:underline">
              Team
            </a>
          </li>
          <li className="mb-2 lg:mb-0">
            <a href="/" className="text-white hover:underline">
              Gallery
            </a>
          </li>
          <li className="mb-2 lg:mb-0">
            <a href="/" className="text-white hover:underline">
              Terms & Conditions
            </a>
          </li>
        </ul>

        {/* Right side: Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-6 lg:space-x-16">
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
    </footer>
  );
};

export default Footer;
