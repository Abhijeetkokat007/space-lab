import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file
import bgimage from "./images/background1.jpg"; // Import the image
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="outer-div flex justify-evenly items-center flex-wrap h-[100vh] pt-[100px] pb-[100px]" >
        
        <div className="contact-container  bg-white/10 backdrop-blur-md text-white">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="bg-transparent outline-4 border rounded-xl text-white"
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="bg-transparent outline-4 border rounded-xl text-white"
              />
            </div>

            <div className="input-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="bg-transparent outline-4 border rounded-xl text-white"
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="bg-transparent outline-4 border rounded-xl text-white"
              />
            </div>
            <div className="m-auto  flex justify-center w-[50%] bg-blue-500 hover:bg-blue-600 rounded-[10px]">
              <button1 type="submit">Send Message</button1>
            </div>
          </form>
        </div>

        <div className=" h-[fit-content] w-[fit-content] text-center p-[30px] m-[50px]  bg-white/10 backdrop-blur-md text-white">
          <h1 className="text-center text-[30px] mt-[50px] font-bold">Get in touch</h1>
          <h1>Fill in the form to start a conversion </h1>

          <div className="mt-[50px]">
          <h1 className=" flex  text-[18px] mt-[15px] ms-[30px]"><IoIosCall className="text-[30px]"/> <p className="ms-[10px]">+91 9373700515</p> </h1>
          <h1 className=" flex  text-[18px] mt-[15px] ms-[30px]"><MdEmail className="text-[30px]"/> <p className="ms-[10px]">synodicspacelabs@gmail.com</p> </h1>
          <h1 className=" flex  text-[18px] mt-[100px] ms-[30px] flex justify-center items-center"><MdEmail className="text-[37px] cursor-pointer"/> <FaLinkedin className="text-[30px] ms-[10px] cursor-pointer"/> <FaInstagramSquare className="text-[30px] ms-[10px] cursor-pointer"/></h1>
          </div>

        </div>



      </div>
      <div className="bg-black h-[250px] w-[100%] ">

      </div>
      <Footer />
    </>
  );
};

export default Contact;
