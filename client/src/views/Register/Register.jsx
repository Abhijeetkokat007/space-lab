import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import image0 from "./images/image0.png";
import image1 from "./images/image1.png";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    orgnization: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/register",
        formData
      );
      if (response.data.activationToken) {
        localStorage.setItem("activationToken", response.data.activationToken);
        window.location.href = "/otp-verification";
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-gradient-to-b from-[#111435] to-blue-900 flex justify-center items-center">
      <div className="relative w-full h-full max-w-[100%] max-h-[100vh] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="frame-1-194252 absolute w-full h-full flex">
          {/* Frame 21 */}
          <section className="frame-2-194253 w-[70%] hidden lg:block lg:relative">
            <div className="astronautspacew-194250 absolute inset-0">
              <img
                src={image0}
                className="absolute inset-0 object-cover w-full h-full"
                alt="astronaut-space-with-planet-background"
              />
            </div>
            <a href="/">
              <div className="h-20 w-64 mt-[50%] rounded-tr-xl rounded-br-xl bg-tra flex items-center justify-center sticky">
                <img src={image1} className="absolute " alt="SPACE LABS Logo" />
              </div>
            </a>
          </section>

          {/* Frame 31 */}
          <section className="w-[100%] h-[100%] lg:h-auto lg:w-1/3 lg:rounded-3xl bg-black absolute lg:mt-16 lg:ml-[65%] flex flex-col justify-center p-8">
            <div className="login-194265 mb-6 text-4xl mx-auto font-bold text-white">
              Register
            </div>
            <div className="mb-3 text-lg mx-auto text-white">
              Get your start here
            </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}

            {/* Form fields */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                className="p-3 text-lg bg-white outline-none rounded-lg text-black"
                placeholder="Firstname"
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                className="p-3 text-lg bg-white outline-none rounded-lg text-black"
                placeholder="Lastname"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-3 text-lg bg-white outline-none rounded-lg text-black"
                placeholder="Email"
              />
              <input
                type="text"
                name="orgnization"
                value={formData.orgnization}
                onChange={handleInputChange}
                className="p-3 text-lg bg-white outline-none rounded-lg text-black"
                placeholder="Organization Name"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="p-3 text-lg bg-white outline-none rounded-lg text-black"
                placeholder="Password"
              />
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full p-3 text-lg bg-blue-600 outline-none text-white rounded-lg hover:bg-blue-700"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="bottom-text text-lg mt-4 text-center text-white">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:text-blue-700 text-lg"
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Register;
