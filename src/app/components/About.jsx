import React from "react"
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
    <section id="About" className="h-100vh bg-[#ffcfda] -mx-10 -my-12">
      <div className="grid grid-cols-12 gap-16 items-center py-16 px-16">
        <div className="col-span-8 mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="my-4 mb-4 pr-4">
            <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
            <p className="text-lg text-gray-900">
            Hi! I am Muhammad Aufa Farabi, but you can call me Aufa. At this 19th age, currently i am studying informatics 
            engineering in Institut Teknologi Bandung. I have my interest on Software Development and currently focusing 
            on learning Front End Development. Besides that, Cybersecurity also fascinates me and i am eager to expand my knowledge 
            in this area. Building projects has been a good challenges for me and fuels my enthusiasm for learning a further new knowledge.
            My goal hopefully is to master both Front End and Back End technologies, ultimately becoming a well-rounded Full-Stack Developer. 
            I am excited about the journey ahead and the opportunities to grow in this dynamic field.
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
