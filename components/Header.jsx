import Image from 'next/image'
import { assets } from "../assets/assets";
import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
            Hi! I'm Aditya Modanwal
            <Image src={assets.hand_icon} alt='' className='w-6'/>
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
            Full stack developer & Sofware engineer</h1>
            <p className='max-w-2xl mx-auto font-ovo'>
                I am a full stack developer and software engineer with a passion for web development. 
                I have experience in building web applications using modern technologies like React, 
                Next.js, and Node.js. I am also familiar with databases like MongoDB and MySQL.
            </p>
            <div>
                <a href="#contact">Contact me<Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
                <a href="" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                    My resume<Image src={assets.download_icon} alt='' className='w-4'/></a>
            </div>
      </div>
    </div>
  )
}

export default Header
