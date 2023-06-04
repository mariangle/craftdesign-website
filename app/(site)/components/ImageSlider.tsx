"use client" 
import { useState } from 'react';
import img1 from '@/public/assets/img/img1.png';
import img2 from '@/public/assets/img/img2.png';
import Image from 'next/image';

import { HiOutlineArrowLeft } from "react-icons/hi"
import { HiOutlineArrowRight } from "react-icons/hi"

const ImageSlider = () => {
  const images = [img1, img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div className="flex justify-center">
        <Image src={images[currentIndex]} alt="slider" className="aspect-square lg:max-w-sm" />
      </div>
      <div className='lg:max-w-sm mx-auto flex justify-end items-center py-4'>
        <div className='flex gap-2'>
          <button onClick={goToPrevious} className='bg-slate-400 aspect-square p-2'>
          <HiOutlineArrowLeft />
            </button>
            <button onClick={goToNext} className='bg-blue-600 aspect-square p-2'>
            <HiOutlineArrowRight />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
