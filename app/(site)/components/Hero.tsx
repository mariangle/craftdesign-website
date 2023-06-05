import { BsInstagram, BsDribbble, BsTwitter } from "react-icons/bs"

import Button from "@/components/Button"

const Hero = () => {
  return (
    <div>
      {/* HERO*/}
      <div className='flex justify-center px-4 max-w-screen-xl mx-auto min-h-[50vh] lg:px-12 flex-col md:flex-row md:justify-between'>
        <div className='max-w-full flex justify-center flex-col md:my-32'>
          <h3 className='mb-4'><b>We Are</b> A Digital Agency</h3>
          <h1 className='text-6xl md:text-7xl lg:text-8xl'>Be <b>Better</b> & <br /> <b>Built</b> Different.</h1>
          {/* MOBILE LETS TALK */}
          <div className="md:hidden flex mt-6">
            <Button style="hero">Let&apos;s talk</Button>
          </div>
        </div>
      <div>
        { /* LETS TALK PILLAR */}
      <div className="flex flex-col justify-between h-full items-start md:items-end">
          <div className="gap-4 flex my-6 md:block">
            <div className="bg-gray-200 rounded-full p-2 md:mb-6 cursor-pointer text-gray-800 hover:bg-gray-300">
              <BsInstagram size={25} />
            </div>
            <div className="bg-gray-200 rounded-full p-2 md:mb-6 cursor-pointer text-gray-800 hover:bg-gray-300 transition">
              <BsDribbble size={25} />
            </div>
            <div className="bg-gray-200 rounded-full p-2 cursor-pointer text-gray-800 hover:bg-gray-300">
              <BsTwitter size={25} />
            </div>
          </div>
          <div className="w-64 bg-dark h-32 relative md:flex hidden justify-center">
            <div className="absolute bg-blue-600 rounded-full w-44 h-44 flex items-center justify-center border-white border-8 cursor-pointer -translate-y-1/2 text-white text-3xl hover:bg-blue-800 transition hover:scale-95">
                Let's <br />
                Talk
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero