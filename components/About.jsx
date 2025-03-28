import Image from 'next/image'
import { assets } from "../assets/assets";
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>About me</h2>
      <div className='flex flex-col w-full lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='User picture' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-ovo'>Hi, I'm Aditya Modanwal, a web developer and software developer passionate 
            about building innovative web apps. With expertise in MERN stack, 
            Next.js, and modern web technologies, I create seamless, user-friendly 
            applications that solve real-world problems.
            Apart from this, I am proficient in Data Structures and Algorithms using Java and C++,
            and I have a good grasp of competitive programming. I am also familiar with
            databases like MongoDB and MySQL. I am always eager to learn new technologies
            and improve my skills.<br/>
            Let's connect and create something amazing! 🚀
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
