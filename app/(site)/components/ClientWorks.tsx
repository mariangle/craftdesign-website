import Image from "next/image"
import showcase1 from "@/public/assets/img/showcase1.png"
import showcase2 from "@/public/assets/img/showcase2.png"

const ClientWorks = () => {
  return (
    <div className='my-20 px-4 max-w-screen-xl mx-auto'>
      <div className='md:flex justify-between gap-4'>
        <h2 className='text-3xl flex-1 pb-4'>
          Our Recent <br />
          <b>Client Works.</b>
        </h2>
        <p className='flex-1 pb-4'>
          We make <b>neat</b> and <b>elegant</b> visuals according to your wishes and according to what you expect.
        </p>
      </div>
      <div className='md:flex justify-between gap-4 mt-4'>
        <div className='flex-1'>
          <div className="bg-slate-200 p-8">
            <Image src={showcase1} alt="work_showcase" />
          </div>
        </div>
        <div className='flex-1'>
          <div className="bg-slate-200 p-8">
            <Image src={showcase2} alt="work_showcase" />
          </div>        
        </div>
      </div>
    </div>
  )
}

export default ClientWorks