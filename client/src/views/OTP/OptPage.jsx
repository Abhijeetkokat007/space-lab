import React, { useState } from "react";
import image0 from "../Login/images/image0.png";
import image1 from "../Login/images/image1.png";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const OtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const activationToken =
    location?.state?.activationToken || localStorage.getItem("activationToken");
  console.log(activationToken, "Token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!activationToken) {
      setError("Activation token not found.");
      return;
    }

    try {
      // Log the request data to verify you're sending the correct information
      console.log("Sending request:", { otp, activationToken });

      const response = await axios.post(
        "http://localhost:4000/api/user/verify",
        {
          otp,
          activationToken,
        }
      );

      // Log the response to see if it's working correctly
      console.log("Response:", response);

      if (response.data.message === "User Registered") {
        // Navigate to the login page after successful OTP verification
        navigate("/login");
      } else {
        setError(response.data.message || "Verification failed.");
      }
    } catch (error) {
      // Log the error to inspect the reason for the failure
      console.error("Error:", error);
      setError(error.response?.data?.message || "OTP verification failed.");
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-gradient-to-b from-[#111435] to-blue-900 flex justify-center items-center">
      <div className="relative w-full h-full max-w-[100%] max-h-[100vh] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="frame-1-194252 absolute w-full h-full flex">
          {/* Image Section */}
          <section className="frame-2-194253 w-[70%] hidden lg:block lg:relative">
            <div className="astronautspacew-194250 absolute inset-0">
              <img
                src={image0} // Use your astronaut image URL
                className="absolute inset-0 object-cover w-full h-full"
                alt="astronaut-space-with-planet-background"
              />
            </div>

            <a href="/">
              <div className="h-20 w-64 mt-[50%] rounded-tr-xl rounded-br-xl bg-tra flex items-center justify-center sticky">
                <img src={image1} className="absolute" alt="SPACE LABS Logo" />
              </div>
            </a>
          </section>

          {/* OTP Form Section */}
          <section className="w-[100%] h-[100%] lg:h-auto lg:w-1/3 lg:rounded-3xl bg-black absolute lg:mt-44 lg:ml-[65%] flex flex-col justify-center p-8">
            <div className="otp-header mb-6 text-4xl font-bold mx-auto text-white">
              Enter OTP
            </div>
            <div className="mb-3 text-lg mx-auto text-white">
              Verify your identity
            </div>

            {/* OTP Form */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                className="p-3 text-lg bg-white outline-none rounded-lg text-black"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              {error && <p className="text-red-500">{error}</p>}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full p-3 text-lg bg-blue-600 outline-none text-white rounded-lg hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
