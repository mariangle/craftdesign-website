import Button from "@/components/Button"

const ServicesGallery = () => {
  return (
    <div>
        <div className="md:flex gap-4 w-full justify-between mb-6">
            <Button style="services" fullWidth>Digital Marketing</Button>
            <Button style="services" fullWidth>Visual Design</Button>
            <Button style="services" fullWidth>UI / UX Design</Button>
            <Button style="services" fullWidth>Development</Button>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default ServicesGallery