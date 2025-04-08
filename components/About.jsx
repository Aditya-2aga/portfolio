import Image from "next/image";
import { assets, infoList, toolsData } from "../assets/assets";
import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>
      <div className="flex flex-col w-full lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="User picture"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
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
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className={`border-[0.5px]  rounded-xl p-6 cursor-pointer 
                hover:-translate-y-1 duration-500 ${
                  isDarkMode ? "border-white" : "border-gray-400"
                } ${isDarkMode ? "hover:shadow-white" : "hover:shadow-black"}
                ${
                  isDarkMode ? "hover:bg-dark-hover" : "hover:bg-light-hover"
                }`}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt="Title"
                  className="w-7 mt-3"
                />
                <h3 className={`my-4 font-semibold ${isDarkMode ? 'text-white' :'text-gray-700'}`}>{title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-600 '}`}>{description}</p>
              </li>
            ))}
          </ul>

          <h4 className={`my-6 ${isDarkMode ? 'text-white/80' : 'text-gray-700 '} font-ovo`}>Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12
                sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer 
                hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
