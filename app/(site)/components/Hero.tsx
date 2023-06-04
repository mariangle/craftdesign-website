import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs"
import img1 from "@/public/assets/img/test.png"
import Image from "next/image"
import Button from "@/components/Button"

const Hero = () => {
  return (
    <div>
      {/* HERO*/}
      <div className='flex justify-center px-4 max-w-screen-xl mx-auto min-h-[50vh] lg:px-12 flex-col md:flex-row md:justify-between'>
        <div className='max-w-full flex justify-center flex-col'>
          <h3 className='mb-4'><b>We Are</b> A Digital Agency</h3>
          <h1 className='text-6xl md:text-7xl lg:text-8xl'>Be <b>Better</b> & <br /> <b>Built</b> Different.</h1>
          {/* MOBILE LETS TALK */}
          <div className="md:hidden flex mt-6">
            <Button style="hero">Let's talk</Button>
          </div>
        </div>
        <div className="gap-4 flex my-6 md:block">
          <div className="bg-gray-200 rounded-full p-2 md:mb-6">
            <BsInstagram size={20} />
          </div>
          <div className="bg-gray-200 rounded-full p-2 md:mb-6">
            <BsFacebook size={20} />
          </div>
          <div className="bg-gray-200 rounded-full p-2">
            <BsYoutube size={20} />
          </div>
        </div>
      </div>
      {/* HERO IMAGE SECTION*/}
      <div className="bg-dark text-white md:pr-12">
        <div className="max-w-screen-xl mx-auto flex">
          {/* HERO IMAGE*/}
          <div className="w-full relative">
            <Image src={img1} alt="hero_image" />
            <div className="flex absolute bottom-0 right-0 left-0 px-10 lg:px-16 pb-5 mr-4 mb-4 w-full justify-between gap-4">
              <div>
                CRAFT
              </div>
              <div className="lg:flex gap-4 hidden">
                <div>
                  <span className="text-gray-300">Based in</span> <br />
                  Copenhagen
                </div>
                <div className="bg-gray-300 h-full w-[1px]"></div>
                <div>
                  <span className="text-gray-300">Completed more than</span> <br />
                  200 Projects.
                </div>
              </div>
            </div>
          </div>
          {/* DESKTOP LETS TALK */}
          <div className="-translate-y-28 bg-dark w-80 justify-center items-start hidden md:flex">
            <div className="bg-blue-600 rounded-full w-44 h-44 flex items-center justify-center border-white border-8 -translate-y-1/2 text-3xl cursor-pointer">
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