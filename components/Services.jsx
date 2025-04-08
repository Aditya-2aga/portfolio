import Image from 'next/image'
import { assets, serviceData } from "@/assets/assets";
import React from "react";

const Services = ({isDarkMode}) => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-ovo">Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I am a web developer with expertise in creating dynamic and responsive
        web applications.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className={`border ${isDarkMode? 'border-white' : 'border-gray-700'} rounded-lg px-9 py-12 cursor-pointer 
                        hover:-translate-y-1 duration-500 ${isDarkMode ? 'hover:bg-dark-hover' : 'hover:bg-light-hover'}
                        ${isDarkMode ? 'hover:shadow-white' : 'hover:shadow-black'}`}
          >
            <Image src={icon} alt="Title" className="w-10" />
            <h3 className={`my-4 text-lg ${isDarkMode ? 'text-white' :'text-gray-700'}`}>{title}</h3>
            <p className={`${isDarkMode ? 'text-white/80' : 'text-gray-600 '} text-sm leading-5`}>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                Read more <Image src={assets.right_arrow} alt='' className='w-4'/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
