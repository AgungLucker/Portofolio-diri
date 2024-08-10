import React from "react"
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Navbar = () => {
  return (
    <nav className="fixed backdrop-blur border border-b-3 border-[#808080] w-full top-0 left-0 right-0 bg-white bg-opacity-60 z-10">
        <div className="flex justify-between items-center p-6 mx-auto">
            <Link href={"/"} className="text-gray-700 text-3xl font-bold mx-3">Aufa Portfolio</Link>
            <div className="flex ml-auto mr-10 space-x-4 text-gray-500">
                <Link href="#about" className="hover:text-black text-lg">About</Link>
                <Link href="#more informations" className="hover:text-black text-lg">More</Link>
            </div>
            <div className="h-8 border-r border-gray-800 mr-5"></div>
            <div className="flex flex-row space-x-4 pl-2  ">
                <a href="https://github.com/AgungLucker" target="_blank" >
                    <Image src={GithubIcon} alt="Github Icon" width={35} height={35} />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-aufa-farabi-b89822185/" target="_blank">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" width={35} height={35}/>
                </a> 
            </div>

        </div>
    </nav>
  )
}

export default Navbar
