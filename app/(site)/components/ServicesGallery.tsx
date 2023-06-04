import Button from "@/components/Button"
import Image from "next/image"
import temp2 from "@/public/assets/img/temp2.jpg"

const ServicesGallery = () => {
  return (
    <div>
        <div className="md:flex gap-4 w-full justify-between mb-6">
            <Button style="services" fullWidth>Digital Marketing</Button>
            <Button style="services" fullWidth>Visual Design</Button>
            <Button style="services" fullWidth>UI / UX Design</Button>
            <Button style="services" fullWidth>Development</Button>
        </div>
        <div className="bg-midnight_blue border-gray-600 border-[2px]">
          <Image src={temp2} alt="service_img"/>
          <div className="md:flex justify-between px-4 py-10">
            <p className="mb-4 md:pr-20">
              We make neat and <b>elegant</b> visuals according to your wishes and according to what you expect. Get a quote from us right now!
            </p>
            <Button style="hero">
              Get A Quote
            </Button>
          </div>
        </div>
    </div>
  )
}

export default ServicesGallery