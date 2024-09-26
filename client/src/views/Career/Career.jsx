
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import bgimage from "../../components/Navbar/images/background1.jpg";
// import Navbar from "./../../components/Navbar/Navbar";
// import Footer from "./../../components/Footer/Footer";

// function Career() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     cv: null,
//     cvName: "",
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [submitMessage, setSubmitMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleApplyClick = () => {
//     setIsModalOpen(true);
//     // Reset form data when opening the form
//     setFormData({ name: "", email: "", phone: "", message: "", cv: null, cvName: "" });
//     setFormErrors({});
//     setSubmitMessage("");
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
    
//     // Validation logic (same as before)
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData({ ...formData, cv: file, cvName: file.name });
//     }
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.name) errors.name = "Name is required.";
//     if (!formData.email) errors.email = "Email is required.";
//     if (!formData.phone) errors.phone = "Phone number is required.";
//     if (!formData.message) errors.message = "Message is required.";
//     if (!formData.cv) errors.cv = "CV is required.";
//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validateForm();
//     if (Object.keys(errors).length === 0) {
//       setIsSubmitting(true);
//       setSubmitMessage("Your application will be submitted");
//       setTimeout(() => {
//         handleCloseModal(); // Close modal after submission
//         setSubmitMessage("Application successfully submitted!"); // Update success message
//         setFormData({ name: "", email: "", phone: "", message: "", cv: null, cvName: "" });
//         setIsSubmitting(false);
//       }, 2000);
//     } else {
//       setFormErrors(errors);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div
//         className="h-full pt-14 pb-8 px-4 md:px-10 flex flex-col items-center justify-center text-white"
//         style={{
//           backgroundImage: `url(${bgimage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <motion.div
//           className="bg-transparent container mx-auto mt-14 py-4 rounded-lg shadow-lg px-4 sm:px-6 md:px-10 w-full max-w-[1200px]"
//           style={{
//             backgroundColor: "rgba(255, 255, 255, 0.1)",
//             WebkitBackdropFilter: "blur(20px)",
//             opacity: "1",
//             transition: "opacity 0.3s ease",
//           }}
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.div
//             className="text-center mb-7"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             <h1 className="text-2xl md:text-4xl font-bold text-white py-4 md:py-6">
//               Careers at Our Company
//             </h1>
//             <p className="border-b-2 border-white mt-2 w-3/4 md:w-1/2 mx-auto">
//               Join us and help build the future of innovative products!
//             </p>
//           </motion.div>

//           <motion.section
//             className="mb-16 text-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             <h2 className="text-xl md:text-2xl font-semibold text-white">
//               Open Positions
//             </h2>
//             <motion.div className="mt-6 space-y-6">
//               <motion.div
//                 className="bg-white p-4 md:p-6 rounded-lg shadow-lg"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <h3 className="text-lg md:text-xl font-semibold text-black">
//                   Frontend Developer
//                 </h3>
//                 <p className="mt-2 text-sm md:text-base text-black">
//                   We are looking for a talented frontend developer with experience
//                   in React and Tailwind CSS to help us build a seamless user
//                   experience for our customers.
//                 </p>
//                 <button
//                   className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mx-auto block"
//                   onClick={handleApplyClick}
//                 >
//                   Apply Now
//                 </button>
//               </motion.div>

//               <motion.div
//                 className="bg-white p-4 md:p-6 rounded-lg shadow-lg"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <h3 className="text-lg md:text-xl font-semibold text-black">
//                   Backend Developer
//                 </h3>
//                 <p className="mt-2 text-sm md:text-base text-black">
//                   We are looking for a skilled backend developer with expertise in Node.js and Express.js to support our growing applications.
//                 </p>
//                 <button
//                   className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mx-auto block"
//                   onClick={handleApplyClick}
//                 >
//                   Apply Now
//                 </button>
//               </motion.div>
//             </motion.div>
//           </motion.section>

//           {/* Modal for Application Form */}
//           {isModalOpen && (
//             <motion.div
//               className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
//               onClick={handleCloseModal}
//             >
//               <motion.section
//                 className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2"
//                 onClick={(e) => e.stopPropagation()} // Prevent modal from closing on inside click
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
//                   Application Form
//                 </h2>
//                 {submitMessage && <p className="text-green-500">{submitMessage}</p>}
                
//                 {/* Padding added above the form */}
//                 {/* <div className="mb-4">
//                   <p className="text-black">{formData.cvName && `CV: ${formData.cvName}`}</p> {/* Display CV name */}
//                 {/* </div> */} 

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <input
//                     type="text"
//                     id="name"
//                     placeholder="Full Name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full p-2 rounded-md"
//                   />
//                   {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full p-2 rounded-md"
//                   />
//                   {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

//                   <input
//                     type="text"
//                     id="phone"
//                     placeholder="Phone Number"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full p-2 rounded-md"
//                   />
//                   {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}

//                   <textarea
//                     id="message"
//                     placeholder="Message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     className="w-full p-2 rounded-md"
//                     style={{ color: "black" }} // Changed text color to black
//                   />
//                   {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}

//                   <input
//                     type="file"
//                     id="cv"
//                     onChange={handleFileChange}
//                     className="w-full p-2 rounded-md"
//                     accept="application/pdf"
//                   />
//                   {formErrors.cv && <p className="text-red-500">{formErrors.cv}</p>}
//                   <div className="mb-4">
//                   <p className="text-black">{formData.cvName && `CV: ${formData.cvName}`}</p> {/* Display CV name */}
//                 </div>
//                   <button
//                     type="submit"
//                     className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Submitting..." : "Submit"}
//                   </button>
//                 </form>
//               </motion.section>
//             </motion.div>
//           )}
//         </motion.div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Career;
import React, { useState } from "react";
import { motion } from "framer-motion";
import bgimage from "../../components/Navbar/images/background1.jpg";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

function Career() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    cv: null,
    cvName: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApplyClick = () => {
    setIsModalOpen(true);
    setFormData({ name: "", email: "", phone: "", message: "", cv: null, cvName: "" });
    setFormErrors({});
    setSubmitMessage("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, cv: file, cvName: file.name });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (!formData.message) errors.message = "Message is required.";
    if (!formData.cv) errors.cv = "CV is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setSubmitMessage("Your application will be submitted");
      setTimeout(() => {
        handleCloseModal();
        setSubmitMessage("Application successfully submitted!");
        setFormData({ name: "", email: "", phone: "", message: "", cv: null, cvName: "" });
        setIsSubmitting(false);
      }, 2000);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="h-full pt-14 pb-8 px-4 md:px-10 flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="bg-transparent container mx-auto mt-14 py-4 rounded-lg shadow-lg px-4 sm:px-6 md:px-10 w-full max-w-[1200px]"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            WebkitBackdropFilter: "blur(20px)",
            opacity: "1",
            transition: "opacity 0.3s ease",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-center mb-7"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-white py-4 md:py-6">
              Careers at Our Company
            </h1>
            <p className="border-b-2 border-white mt-2 w-3/4 md:w-1/2 mx-auto">
              Join us and help build the future of innovative products!
            </p>
          </motion.div>

          <motion.section
            className="mb-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Open Positions
            </h2>
            <motion.div className="mt-6 space-y-6">
              <motion.div
                className="bg-transparent p-4 md:p-6 rounded-lg shadow-lg" // Made box transparent
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Frontend Developer
                </h3>
                <p className="mt-2 text-sm md:text-base text-white">
                  We are looking for a talented frontend developer with experience
                  in React and Tailwind CSS to help us build a seamless user
                  experience for our customers.
                </p>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mx-auto block"
                  onClick={handleApplyClick}
                >
                  Apply Now
                </button>
              </motion.div>

              <motion.div
                className="bg-transparent p-4 md:p-6 rounded-lg shadow-lg" // Made box transparent
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Backend Developer
                </h3>
                <p className="mt-2 text-sm md:text-base text-white">
                  We are looking for a skilled backend developer with expertise in Node.js and Express.js to support our growing applications.
                </p>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mx-auto block"
                  onClick={handleApplyClick}
                >
                  Apply Now
                </button>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Modal for Application Form */}
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
              onClick={handleCloseModal}
            >
              <motion.section
                className="bg-white p-6 rounded-lg shadow-lg w-10/12 md:w-1/3 relative" // Adjusted form width
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Close (Cross) Mark */}
                <button
                  className="absolute top-2 right-2 text-black text-2xl"
                  onClick={handleCloseModal}
                >
                  &times;
                </button>

                <h2 className="text-xl md:text-2xl font-semibold text-black mb-4 flex justify-center">
                  Application Form
                </h2>
                {submitMessage && <p className="text-green-500">{submitMessage}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md"
                  />
                  {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md"
                  />
                  {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md"
                  />
                  {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}

                  <textarea
                    id="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md"
                    style={{ color: "black" }}
                  />
                  {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}

                  <input
                    type="file"
                    id="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full p-2 rounded-md"
                  />
                  {formErrors.cv && <p className="text-red-500">{formErrors.cv}</p>}
                  {formData.cvName && (
                    <p className="text-black">{formData.cvName}</p>
                  )}
<div className="flex justify-center">
<button
                    type="submit"
                    className={`width: auto aline:center p-2 bg-black text-white  rounded-md ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
</div>
                
                </form>
              </motion.section>
            </motion.div>
          )}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Career;
