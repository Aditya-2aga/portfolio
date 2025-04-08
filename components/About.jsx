import Image from "next/image";
import { assets, infoList, toolsData } from "../assets/assets";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col w-full lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="User picture"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-ovo">
            Hi, I'm Aditya Modanwal, a web developer and software developer
            passionate about building innovative web apps. With expertise in
            MERN stack, Next.js, and modern web technologies, I create seamless,
            user-friendly applications that solve real-world problems. Apart
            from this, I am proficient in Data Structures and Algorithms using
            Java and C++, and I have a good grasp of competitive programming. I
            am also familiar with databases like MongoDB and MySQL. I am always
            eager to learn new technologies and improve my skills.
            <br />
            Let's connect and create something amazing! 🚀
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className={`border-[0.5px]  rounded-xl p-6 cursor-pointer 
                hover:-translate-y-1 duration-500 ${
                  isDarkMode ? "border-white" : "border-gray-400"
                } ${isDarkMode ? "hover:shadow-white" : "hover:shadow-black"}
                ${isDarkMode ? "hover:bg-dark-hover" : "hover:bg-light-hover"}`}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt="Title"
                  className="w-7 mt-3"
                />
                <h3
                  className={`my-4 font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-white/80" : "text-gray-600 "
                  }`}
                >
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className={`my-6 ${
              isDarkMode ? "text-white/80" : "text-gray-700 "
            } font-ovo`}
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{scale:1.1}}
                className="flex items-center justify-center w-12
                sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer 
                hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
