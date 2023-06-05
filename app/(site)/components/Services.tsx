import ServicesGallery from "./ServicesGallery"
import ImageSlider from "./ImageSlider"

const Services = () => {
  return (
    <div className='bg-dark text-white'>
      {/* START SECTION*/}
      <div className="max-w-screen-xl mx-auto px-4 py-20 lg:px-12" id="services">
        <div className='md:flex justify-between mb-8 items-end'>
          <div className='flex-1'>
            <h2 className='text-3xl leading-relaxed py-4'>
              <b>Best Services</b><br />
              For Customers.
            </h2>
          </div>
          <div className='flex-1'>
            <p>
              We are here to assist you in <b>advancing and expanding</b> your business. Trust us to resolve your challenges and propel your growth.
            </p>
          </div>
        </div>
        {/* GALLERY SECTION*/}
        <ServicesGallery />
        {/* END SECTION*/}
        <div className="md:flex items-center justify-between gap-8 pt-20" id="about">
          <div className="flex-1">
            <h2 className="text-5xl pb-10 leading-tight">
              <b>Built Different</b><br />
              With Passion
            </h2>
            <p className="text-lg leading-loose">
              "<b><span className="bg-gradient-to-r from-blue-500">CRAFT</span></b>DESIGN is a design and strategy company that tackles challenges head-on. With our unwavering passion, we <b>create innovative solutions</b> and build our reputation."
            </p>
          </div>
          <div className="flex-1">
            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services