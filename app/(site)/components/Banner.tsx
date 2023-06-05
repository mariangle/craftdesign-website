import Image from "next/image"
import { AiFillDownCircle } from "react-icons/ai"

import hero from "@/public/assets/img/hero.png"
import Link from "next/link" 

const Banner = () => {
  return (
    <div className="bg-dark">
      <div className="bg-dark text-white max-w-screen-xl mx-auto md:pr-4 lg:pr-12">
        <div className="max-w-screen-xl mx-auto flex">
          {/* IMAGE*/}
          <div className="w-full relative">
            <Image src={hero} alt="hero_image" />
            <div className="flex absolute bottom-0 right-0 left-0 px-4 lg:px-12 pb-5w-full justify-between gap-4 pb-8 items-center">
              <div className="font-bold text-2xl">
                CRAFT
              </div>
              <div className="md:flex gap-8 hidden">
                <div>
                  <span className="text-gray-300">Based in</span> <br />
                  Copenhagen
                </div>
                <div>
                  <span className="text-gray-300">Completed more than</span> <br />
                  200 Projects.
                </div>
              </div>
            </div>
          </div>
          {/* LETS TALK PILLAR*/}
          <div className="justify-center items-start hidden md:flex pb-8">
            <div className="w-64 flex flex-col text-center items-center justify-end h-full">
              <div className="h-full w-[1px] my-6">
                <div className="h-full bg-gradient-to-b from-transparent to-gray-400" />
              </div>              
              <AiFillDownCircle size={35} className="cursor-pointer"/>
              <Link href={"/works"} className="pt-2">Explore More</Link>
              <p className="text-gray-400">Scroll Down</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner