import Image from 'next/image'
import { assets } from "@/assets/assets";
import React from 'react'

const Projects = () => {
  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-ovo">Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I am a web developer with expertise in creating dynamic and responsive
        web applications.
      </p>
    </div>
  )
}

export default Projects
