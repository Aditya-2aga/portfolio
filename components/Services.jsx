import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";
import React from "react";
import { motion } from "motion/react";

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        I am a web developer with expertise in creating dynamic and responsive
        web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{scale:1.05}}
            key={index}
            className={`border ${
              isDarkMode ? "border-white" : "border-gray-700"
            } rounded-lg px-9 py-12 cursor-pointer 
                        hover:-translate-y-1 duration-500 ${
                          isDarkMode
                            ? "hover:bg-dark-hover"
                            : "hover:bg-light-hover"
                        }
                        ${
                          isDarkMode
                            ? "hover:shadow-white"
                            : "hover:shadow-black"
                        }`}
          >
            <Image src={icon} alt="Title" className="w-10" />
            <h3
              className={`my-4 text-lg ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
            >
              {title}
            </h3>
            <p
              className={`${
                isDarkMode ? "text-white/80" : "text-gray-600 "
              } text-sm leading-5`}
            >
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
