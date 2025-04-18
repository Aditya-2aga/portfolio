import Image from "next/image";
import { assets, workData } from "@/assets/assets";
import React from "react";
import { motion } from "motion/react";

const Projects = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My latest projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Welcome to my creative portfolio! Explore a collection of projects
        showcasing my expertise in full stack development and designing.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className={`grid grid-cols-auto my-10 gap-5 ${
          isDarkMode ? "text-black" : ""
        }`}
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg 
            relative cursor-pointer group"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <a href={project.link} target="_blank">
              <div
                className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
            py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
              >
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div
                  className="border rounded-full border-black w-9 aspect-square flex items-center
                shadow-[2px_2px_0_#000] justify-center group-hover:bg-lime-300 transition"
                >
                  <Image src={assets.send_icon} alt="icon" className="w-5" />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.1 }}
        href="https://linktr.ee/Aditya_projects"
        className={`w-max flex items-center justify-center gap-2 
       border-[0.5px]  rounded-full py-3 px-10 
       ${isDarkMode ? "border-white" : "border-gray-700"}
      mx-auto my-20 ${
        isDarkMode ? "hover:bg-dark-hover" : "hover:bg-light-hover"
      }
      ${isDarkMode ? "text-white/80" : "text-gray-700"} duration-500`}
      >
        Show more{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="more"
          className="w-4"
        />{" "}
      </motion.a>
    </motion.div>
  );
};

export default Projects;
