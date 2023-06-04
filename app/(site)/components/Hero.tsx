import { BsInstagram, BsFacebook } from "react-icons/bs"
import img1 from "@/public/assets/img/test.png"
import Image from "next/image"
import Button from "@/components/Button"

const Hero = () => {
  return (
    <div>
      {/* HERO*/}
      <div className='md:flex justify-between px-4 py-20 max-w-screen-xl mx-auto min-h-[50vh]'>
        <div className='max-w-full flex justify-center flex-col'>
          <h3 className='mb-4'><b>We Are</b> A Digital Agency</h3>
          <h1 className='text-7xl'>Be <b>Better</b> & <br /> <b>Built</b> Different.</h1>
          {/* MOBILE LETS TALK */}
          <div className="md:hidden flex mt-6">
            <Button style="hero">Let's talk</Button>
          </div>
        </div>
        <div className="gap-4 items-end justify-start flex mt-6 md:block">
          <div className="bg-gray-200 rounded-full p-2 md:mb-4">
            <BsInstagram size={20} />
          </div>
          <div className="bg-gray-200 rounded-full p-2">
            <BsFacebook size={20} />
          </div>
        </div>
      </div>
      {/* HERO IMAGE*/}
      <div className="bg-dark text-white">
        <div className="max-w-screen-xl mx-auto flex">
          <div className="w-full">
            <Image src={img1} alt="" />
          </div>
          {/* DESKTOP LETS TALK */}
          <div className="-translate-y-28 bg-dark w-80 justify-center items-start hidden md:flex">
            <div className="bg-blue-600 rounded-full w-40 h-40 flex items-center justify-center border-white border-8 -translate-y-1/2 text-3xl cursor-pointer">
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