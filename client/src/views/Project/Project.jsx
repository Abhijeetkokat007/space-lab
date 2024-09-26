import { motion } from "framer-motion";
import bgimage from "../../components/About/images/background1.jpg";
import projectImage1 from "../../components/Navbar/images/background1.jpg";
import projectImage2 from "../../components/Navbar/images/background1.jpg";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Project Title 1",
    description:
      "Description of the project goes here. It explains the goals, technologies used, and key features of the project.",
    image: projectImage1,
  },
  {
    id: 2,
    title: "Project Title 2",
    description:
      "Another project description that highlights its uniqueness, technologies, and the impact it has had in its respective field.",
    image: projectImage2,
  },
  // {
  //   id: 3,
  //   title: "Project Title 3",
  //   description:
  //     "Another project description that highlights its uniqueness, technologies, and the impact it has had in its respective field.",
  //   image: projectImage2,
  // },
  {
    id: 3,
    title: "Project Title 3",
    description:
      "Another project description that highlights its uniqueness, technologies, and the impact it has had in its respective field.",
    image: projectImage2,
  },

  {
    id: 4,
    title: "Project Title 4",
    description:
      "Another project description that highlights its uniqueness, technologies, and the impact it has had in its respective field.",
    image: projectImage2,
  },
];

export default function Project() {
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
          className="bg-transparent mx-auto mt-14 py-4 rounded-lg shadow-lg px-4 sm:px-6 md:px-10 w-full"
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
            <h1 className="text-4xl font-bold text-white py-4 md:py-6">
              Our Projects
            </h1>
            <p className=" text-xl font-semibold mt-2 lg:text-2xl md:w-1/2 mx-auto">
              Discover our innovative projects that make a difference.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white bg-opacity-10 p-4 md:p-6 rounded-lg shadow-lg flex flex-col"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-48 object-cover"
                />
                <div className="mt-4 text-left">
                  <h3 className=" text-xl lg:text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-white">
                    {project.description}
                  </p>
                  <button className="bg-blue-500  mt-4 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition mx-auto md:mx-0 block md:inline-block">
                    Know More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.section
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Want to Learn More About Our Work?
            </h2>
            <p className="mt-4 text-sm md:text-base text-white">
              Contact us to discuss our projects or for collaboration
              opportunities.
            </p>
          </motion.section>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
