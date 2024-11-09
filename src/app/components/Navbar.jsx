import React, { useState } from "react"; 
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false); 
    const toggleMenu = () => {
        setIsOpen(!isOpen); 
  };
  return (
    <nav className="fixed top-7 lg:left-1/2 transform -translate-x-1/2  right-0 backdrop-blur border border-b-3 border-[#9b9898] max-w-3xl  w-[30%] lg:w-[40%] h-[60px] rounded-full shadow-lg bg-white bg-opacity-60 z-10">
        <div className="flex justify-center items-center p-4 mx-auto">
            <div id="hamburger" className="lg:hidden flex items-center">
                <button className="text-gray-500 focus:outline-none " onClick={toggleMenu}>
                    <span className="md:text-lg mr-2">Menu</span>
                    <span className="text-xl md:text-2xl">&#9776;</span>
                </button>
            </div>
            <div id="menu" className= "hidden lg:flex flex-row items-center">
                <div className="flex items-center mr-10 space-x-4 text-gray-500">
                    <Link href="#Hero" className="hover:text-black text">Home</Link>
                    <Link href="#Projects" className="hover:text-black text">Projects</Link>
                    <Link href="#Experiences " className="hover:text-black text">Experiences</Link>
                </div>
                <div className="h-8 border-r border-gray-800 mr-5 hidden md:block" ></div>
                <div className="flex flex-row space-x-4 pl-2  ">
                    <a href="https://github.com/AgungLucker" target="_blank" >
                        <Image src={GithubIcon} alt="Github Icon" width={30} height={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-aufa-farabi-b89822185/" target="_blank">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" width={30} height={30}/>
                    </a> 
                </div>
            </div>

        </div>
        <div id="menu-mobile" className={`lg:hidden flex flex-col items-center ${isOpen ? "flex" : "hidden"} bg-white bg-opacity-60 border border-gray-700 rounded-lg w-full mt-1.5 h-auto pb-2`}>
            <a href="#Hero" className="underline text-black text-sm md:text-base md:py-1 border-b ">Home</a>
            <a href="#Projects" className="underline text-black text-sm md:text-base md:py-1">Projects</a>
            <a href="#Experiences" className="underline text-black text-sm md:text-base md:py-1">Experiences</a>
        </div>
    </nav>
  )
}

export default Navbar
