"use client" 

import { useState, useEffect } from 'react';
import img1 from '@/public/assets/img/img1.png';
import img2 from '@/public/assets/img/img2.png';
import Image from 'next/image';
import Button from '@/components/Button';

import { HiOutlineArrowLeft } from 'react-icons/hi';
import { HiOutlineArrowRight } from 'react-icons/hi';

const ImageSlider = () => {
  const images = [img1, img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); 

    return () => {
      clearInterval(interval);
    };
  }, [])

  return (
    <div className="md:max-w-sm mx-auto mt-8 md:mt-0">
      <div className="relative aspect-square">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="slider"
            className={`absolute top-0 left-0 transition-opacity duration-500 aspect-square ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="flex justify-end items-center mt-4 gap-2">
        <Button onClick={goToPrevious} className="bg-slate-500 hover:bg-slate-600 transition">
          <HiOutlineArrowLeft />
          Previous
        </Button>
        <Button onClick={goToNext} style="hero">
          Next
          <HiOutlineArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default ImageSlider;
