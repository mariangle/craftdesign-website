import Button from "@/components/Button"
import Image from "next/image"
import temp2 from "@/public/assets/img/service.png"
import { BsArrowRightSquareFill, BsFillCpuFill, BsWindow } from "react-icons/bs"
import { HiOutlineSpeakerphone } from "react-icons/hi"
import { MdDesignServices } from "react-icons/md"

const ServicesGallery = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-between mb-6">
            <Button style="services" fullWidth> 
              <HiOutlineSpeakerphone/> 
              Digital Marketing
            </Button>
            <Button style="services" fullWidth>
              <MdDesignServices />
              Visual Design
            </Button>
            <Button style="services" fullWidth>
              <BsWindow/>
                UI/UX Design
            </Button>
            <Button style="services" fullWidth>
              <BsFillCpuFill />
              Development
            </Button>
        </div>
        <div className="bg-midnight_blue border-gray-600 border-[2px]">
          <Image src={temp2} alt="service_img" width={1500}/>
          <div className="md:flex justify-between p-6 md:p-10">
            <p className="mb-4 md:mb-0 md:pr-10">
              Experience our creative expertise in delivering polished and tailored visuals that exceed your expectations. Request a quote today!
            </p>
            <Button style="hero">
              <p>Get a Quote</p>
              <BsArrowRightSquareFill />
            </Button>
          </div>
        </div>
    </div>
  )
}

export default ServicesGallery