import Image from "next/image";
import { assets } from "@/assets/assets";
import { React } from "react";

const Footer = ({isDarkMode}) => {
  return (
    <div>
      <div className="mt-20">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="logo" className="w-6" />
          aditya.2aga@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Aditya Modanwal. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li><a target='_blank' href="https://github.com/Aditya-2aga">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/aditya-modanwal-2aga/">LinkedIn</a></li>
            <li><a target='_blank' href="https://www.instagram.com/aditya_modanwal._/">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
