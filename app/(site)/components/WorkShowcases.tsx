import Image from 'next/image';
import showcase1 from '@/public/assets/img/showcase1.png';
import showcase2 from '@/public/assets/img/showcase2.png';

const WorkShowcase = () => {
  return (
    <div className="my-20 px-4 max-w-screen-xl mx-auto lg:px-12" id='works'>
      <div className="md:flex justify-between gap-4 md:mb-10 items-end">
        <h2 className="text-4xl flex-1 pb-4">
          Our Latest <br />
          <b>Work.</b>
        </h2>
        <p className="flex-1 pb-4">
          Our team crafts visually <b>stunning</b> and <b>refined</b> designs that align with your desires and exceed your expectations.
        </p>
      </div>
      <div className="md:flex justify-between gap-4 mt-4">
        <div className="flex-1">
          <div className="bg-slate-200 p-4 md:p-8 relative">
            <Image src={showcase1} alt="work_showcase" className="hover:blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
              <span className="text-white text-lg font-semibold cursor-pointer bg-primary rounded-full px-4 py-2">See More</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-slate-200 p-4 md:p-8 relative">
            <Image src={showcase2} alt="work_showcase" className="hover:brightness-50" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
              <span className="text-white text-lg font-semibold cursor-pointer bg-primary rounded-full px-4 py-2">See More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkShowcase;
