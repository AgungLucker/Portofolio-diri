import React from 'react'
import Image from 'next/image'
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
const Footer = () => {
  return (
    <footer id ="contact"className="border-t border-gray-500 left-0 px-16 py-4 pb-4">
        <div className="flex flex-row justify-between">
            <div className="flex flex-col items-start  ">
                <div className="w-full text-black">
                    <p>Reach out me at</p>
                    <a href="mailto:iniabi838@gmail.com" className="underline text-blue-800">iniabi838@gmail.com</a>
                </div>
                <div className="flex flex-row space-x-4 mt-3  ">
                    <a href="https://github.com/AgungLucker" target="_blank" >
                        <Image src={GithubIcon} alt="Github Icon" width={35} height={35} />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-aufa-farabi-b89822185/" target="_blank">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" width={35} height={35}/>
                    </a> 
                </div>

            </div> 
            <div className="py-6">
                <p className="text-black">©2024 Muhammad Aufa Farabi. All rights reserved.</p>
            </div>
        </div>


    </footer>
  )
}

export default Footer