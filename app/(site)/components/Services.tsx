import ServicesGallery from "./ServicesGallery"

const Services = () => {
  return (
    <div className='bg-dark text-white'>
      {/* START SECTION*/}
      <div className="max-w-screen-xl mx-auto px-4 py-20 ">
        <div className='md:flex justify-between mb-8 items-end'>
          <div className='flex-1'>
            <h2 className='text-3xl'>
              <b>Best Services</b><br />
              For Customers.
            </h2>
          </div>
          <div className='flex-1'>
            <p>
              We are <b>ready to help</b> you to <b>move forward and grow</b> your business. with us your problem will be solved.
            </p>
          </div>
        </div>
        {/* GALLERY SECTION*/}
        <ServicesGallery />
        <div className="md:flex itens-end gap-4">
          {/* END SECTION*/}
          <div className="flex-1">
            <h2 className="text-3xl mb-4">
              <b>Built Different</b><br />
              With Passion
            </h2>
            <p>
              "<b>Craft</b> is a design and strategy company focused on <b>solving problems</b> in every situation. Built different with passion is the foundation for <b>creating solutions</b> and building our credibility."
            </p>
          </div>
          <div className="flex-1">
            image carrousel
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services