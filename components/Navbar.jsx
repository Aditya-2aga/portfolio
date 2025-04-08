import Image from "next/image";
import { assets } from "../assets/assets";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const[isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    }

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
          if(scrollY > 50){
            setIsScroll(true);
          }
          else{
            setIsScroll(false);
          }
        })
    },[]);

  return (
    <>
    <div className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] ${isDarkMode ? 'hidden' : 'block'}`}>
        <Image src={assets.header_bg_color} alt="" className="w-full"/>
    </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
         ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-white/20" : ""}`}>
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8
        rounded-full px-12 py-3 font-ovo ${isScroll ? "": "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"} `}>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">My Projects</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
        <button onClick={()=>setIsDarkMode(prev=> !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6"/>
        </button>

          <a className={`hidden lg:flex items-center gap-3 px-10
          py-2.5 border rounded-full ml-4 font-ovo ${isDarkMode ? 'border-white/50' : 'border-gray-500'}`} href="#contact">
            Contact{" "}
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="contact" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
          <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6"/>
          </button>
        </div>

        <ul ref={sideMenuRef} className={`font-ovo flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 ${isDarkMode ? 'bg-dark-hover' : ''}`}>
            <div className="absolute right-6 top-6" onClick={closeMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-5 cursor-pointer"/>
            </div>
        <li onClick={closeMenu}>
            <a href="#top">Home</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#about">About me</a>
          </li >
          <li onClick={closeMenu}>
            <a href="#services">Services</a>
          </li >
          <li onClick={closeMenu}>
            <a href="#projects">My Projects</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

      </nav>
    </>
  );
};

export default Navbar;
