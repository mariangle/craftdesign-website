import { BsInstagram, BsFacebook } from "react-icons/bs"
import img1 from "@/public/assets/img/image.jpg"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="min-h-[50vh] ">
      {/* HERO*/}
      <div className='flex justify-between px-4 py-20 max-w-screen-lg mx-auto '>
        <div className='max-w-full flex justify-center flex-col'>
          <h3 className='mb-4'><b>We Are</b> A Digital Agency</h3>
          <h1 className='text-7xl'>Be <b>Better</b> & <br /> <b>Built</b> Different.</h1>
          {/* MOBILE LETS TALK */}
          <div className="md:hidden flex">
            Let's talk
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end justify-start">
          <div className="bg-gray-200 rounded-full p-2">
            <BsInstagram size={20} />
          </div>
          <div className="bg-gray-200 rounded-full p-2">
            <BsFacebook size={20} />
          </div>
        </div>
      </div>
      {/* HERO IMAGE*/}
      <div className="bg-dark text-white">
        <div className="max-w-screen-lg mx-auto flex">
          <div className="w-full">
            <Image src={img1} alt="" />
          </div>
          {/* DESKTOP LETS TALK */}
          <div className="-translate-y-28 bg-dark w-60 justify-center items-start hidden md:flex">
            <div className="bg-blue-700 rounded-full w-32 h-32 flex items-center justify-center border-white border-4 -translate-y-1/2 text-xl">
              Let's <br />
              Talk
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero