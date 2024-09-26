import "./Login.css";
import image0 from "./images/image0.png";
import image1 from "./images/image1.png";
// import image2 from "./images/image2.png";
// import image3 from "./images/image3.png";
// import image4 from "./images/image4.png";
import React, { useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear any previous error

    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        {
          email,
          password,
        }
      );

      console.log(response.data, "data"); // Handle the response (e.g., store token)
      window.location.href = "/";
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message || "Something went wrong");
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
              <div className=" h-20 w-64 mt-[50%] rounded-tr-xl rounded-br-xl bg-tra flex items-center justify-center sticky">
                <img src={image1} className="absolute " alt="SPACE LABS Logo" />
              </div>
            </a>
          </section>

          {/* Frame 31 */}
          <section className=" w-[100%] h-[100%] lg:h-auto lg:w-1/3 lg:rounded-3xl bg-black absolute lg:mt-16 lg:ml-[65%] flex flex-col justify-center p-8">
            <div className="login-194265 mb-6 text-4xl font-bold mx-auto text-white">
              Login
            </div>
            <div className=" mb-3 text-lg mx-auto text-white">
              Get your start here
            </div>

            {/* Form fields */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="email"
                className="p-3 text-lg bg-white outline-none rounded-lg text-black"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="p-3 text-lg bg-white outline-none rounded-lg text-black"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="text-red-500">{error}</p>}
              <div className=" mt-6">
                <button
                  type="submit"
                  className="w-full p-3 text-lg bg-blue-600 outline-none text-white rounded-lg hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>

            <div className=" mt-6">
              <button className="w-full p-3 text-lg bg-white outline-none text-center text-black rounded-lg ">
                <p className="flex justify-center">
                  <FcGoogle className="text-[30px] text-center" /> Login With
                  Google
                </p>
              </button>
            </div>

            <div className="bottom-text mt-4 text-lg text-center text-white">
              Don't have an account?{" "}
              <span
                className="text-blue-500 text-lg cursor-pointer hover:text-blue-700"
                onClick={() => (window.location.href = "/register")}
              >
                Register
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
