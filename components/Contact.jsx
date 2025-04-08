import Image from "next/image";
import { assets } from "@/assets/assets";
import { React, useState } from "react";
import { motion } from "motion/react";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f15d7471-0c02-449a-b09a-296666ad3150");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className={`w-full px-[12%] py-10 scroll-mt-20 ${
        isDarkMode ? "bg-none" : 'bg-[url("/footer-bg-color.png")]'
      } bg-no-repeat
     bg-center bg-[length:90%_auto]`}
    >
      <motion.h4 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mb-2 text-lg font-ovo">Get in touch</motion.h4>
      <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center text-5xl font-ovo">Contact me</motion.h2>
      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Got a project in mind or just want to chat about tech? I'm all ears! I
        believe great ideas come from collaboration, so don't hesitate to reach
        out. I typically respond within 24 hours and look forward to connecting
        with fellow developers, potential clients, and tech enthusiasts.
      </motion.p>
      <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
          initial={{ x:-50, opacity: 0 }}
          whileInView={{ x:0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${
              isDarkMode ? "text-white" : ""
            }
          ${isDarkMode ? "bg-dark-hover" : "bg-white"}
          ${isDarkMode ? "border-white/90" : "border-gray-400"}`}
          />
          <motion.input
          initial={{ x:50, opacity: 0 }}
          whileInView={{ x:0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${
              isDarkMode ? "text-white" : ""
            }
            ${isDarkMode ? "bg-dark-hover" : "bg-white"}
          ${isDarkMode ? "border-white/90" : "border-gray-400"}`}
          />
        </div>
        <motion.textarea
        initial={{ y:100, opacity: 0 }}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
          rows="6"
          placeholder="Write your message"
          required
          name="message"
          className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 ${
            isDarkMode ? "text-white" : ""
          }
          ${isDarkMode ? "bg-dark-hover" : "bg-white"}
          ${isDarkMode ? "border-white/90" : "border-gray-400"}`}
        ></motion.textarea>
        <motion.button
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
          type="submit"
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 
          rounded-full mx-auto duration-500 text-white
         ${isDarkMode ? "bg-transparent" : "bg-black/80"}
         ${isDarkMode ? "border-[0.5px]" : ""}
         ${isDarkMode ? "hover:bg-dark-hover" : "hover:bg-black"}`}
        >
          Send{" "}
          <Image alt="Arrow" src={assets.right_arrow_white} className="w-4" />
        </motion.button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
