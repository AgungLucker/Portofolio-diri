import React from 'react'
import Image from "next/image";

const Hero = () => {
  return (
    <section id="Hero" className="h-screen py-6 flex flex-col items-center">
        <div className="flex flex-row items-center justify-between px-16 py-16 w-full mt-12">
            <div className="flex-shrink-0 flex items-center justify-center w-1/3">
                <div className="rounded-full bg-[#36454F] w-[200px] h-[200px] overflow-hidden flex items-center justify-center">
                    <Image src="/images/profile.png" width={170} height={170} className="object-cover"/>
                </div>
            </div>
        <div className="flex flex-col place-content w-2/3 mt-10 ">
            <p className="text-gray-500 mb-5 text-lg font-semibold">Hello Everyone, My name is</p>
            <h1 className="text-cyan-950 font-extrabold text-6xl mb-4">MUHAMMAD AUFA FARABI</h1>
            <p className="text-gray-400 text-xl mb-6">A Software Developer Enthusiast</p>
    </div>
  </div>
</section>
    // <section id="Hero" className="h-screen py-6 ">
    //     <div className="grid grid-cols-6 gap-x-2 py-16 px-16 ">
    //         <div className="col-span-2 flex relative mt-40">
    //             <div className="rounded-full bg-[#36454F] w-[200px] h-[200px] overflow-hidden flex items-center justify-center">
    //                 <Image src="/images/profile.png" width={170} height={170} className="object-cover mt-10"/>
    //             </div>
    //         </div>
    //         <div className="col-span-4 place-content-center relative mt-40">
    //             <p className="text-gray-800 mb-5 text-lg">Hello Everyone, My name is</p>
    //             <h1 className="text-yellow-500 font-extrabold text-6xl mb-4">MUHAMMAD AUFA FARABI</h1>
    //             <p className="text-gray-400 text-xl mb-6 font">A Software Developer Enthusiast</p>
    //         </div>
    //     </div>
    // </section>
  )
}

export default Hero