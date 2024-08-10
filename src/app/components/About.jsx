import React from 'react'
import Image from "next/image";
import HTMLIcon from "../../../public/html-1.svg"
import CSSIcon from "../../../public/css-3.svg"
import JSIcon from "../../../public/logo-javascript.svg"
import TailwindCSSIcon from "../../../public/tailwind-css-2.svg"
import PythonIcon from "../../../public/python-5.svg"
import NextJSIcon from "../../../public/next-js.svg"
import GithubIcon from "../../../public/github-icon.svg"
import GitIcon from "../../../public/git-icon.svg"
const About = () => {
  return (
    <section id="about" className="h-100vh bg-[#ffcfda] -mx-10 -my-12">
      <div className="grid grid-cols-12 gap-16 items-center py-16 px-16">
        <div className="col-span-8 mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="my-4 mb-4 pr-4">
            <h2 className="text-4xl font-bold text-black mb-4">My Profile</h2>
            <p className="text-lg text-gray-900">
              I'm Muhammad Aufa Farabi, A 19 year old undergraduate Informatics Engineering Student at Institut Teknologi Bandung.
              ga bakal periss
              My enthusiasm for creating user-friendly interfaces drives me to explore the latest technologies and design trends.
               I enjoy turning complex problems into intuitive and engaging web applications, always aiming to enhance the user
                experience through thoughtful design and innovative solutions.
            

              
            </p>
          </div>
          <div className="text-black mt-8">
              <h3 className="font-bold text-2xl mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-md p-2 flex items-center w-1/5 min-w-[100px]">
                  <Image src={HTMLIcon} alt="Github Icon" width={35} height={35} />
                  <p className="ml-2">HTML</p>
                </div>
                <div className="bg-white rounded-md p-2 flex items-center w-1/5 min-w-[100px]">
                  <Image src={CSSIcon} alt="Github Icon" width={35} height={35} />
                  <p className="ml-2">CSS</p>
                </div>
                <div className="bg-white rounded-md p-2 flex items-center w-1/5 min-w-[100px]">
                  <Image src={JSIcon} alt="Github Icon" width={35} height={35} />
                  <p className="ml-2">Javascript</p>
                </div>
                <div className="bg-white rounded-md p-2 flex items-center w-1/5 min-w-[100px]">
                  <Image src={TailwindCSSIcon} alt="Github Icon" width={35} height={35} />
                  <p className="ml-2">Tailwind</p>
                </div>
                <div className="bg-white rounded-md p-2 flex items-center w-1/5 min-w-[100px]">
                  <Image src={NextJSIcon} alt="Github Icon" width={35} height={35} />
                  <p className="ml-2">Next JS</p>
                </div>
                <div className="bg-white rounded-md p-2 flex items-center w-1/5 min-w-[100px]">
                  <Image src={PythonIcon} alt="Github Icon" width={35} height={35} />
                  <p className="ml-2">Python</p>
                </div>
                <div className="bg-white rounded-md p-2 flex items-center w-1/5 min-w-[100px]">
                  <Image src={GitIcon} alt="Github Icon" width={35} height={35} />
                  <p className="ml-2">Git</p>
                </div>
                <div className="bg-white rounded-md p-2 flex items-center w-1/5 min-w-[100px]">
                  <Image src={GithubIcon} alt="Github Icon" width={35} height={35} />
                  <p className="ml-2">Github</p>
                </div>
                

              </div>

          </div>

        </div>
        <Image src="/images/profile.png" width={300} height={200} className="ml-14 col-span-4" />
      </div>
    </section>
  )
}

export default About