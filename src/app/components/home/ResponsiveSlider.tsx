'use client';
import { useState, useEffect } from 'react';
import CardCustom3 from '../ui/CardCustom3';
import CardCustom2 from '../ui/CardCustom2';
import CardCustom1 from '../ui/CardCustom';

const images = [
  { component: <CardCustom3 />, alt: 'Slide 1' },
  { component: <CardCustom3 />, alt: 'Slide 2' },
  { component: <CardCustom3 />, alt: 'Slide 3' },
];

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  
  const goToNextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsAnimating(false);
      }, 300); 
    }
  };

  
  const goToPrevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 300);
    }
  };

  
  const goToSlide = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="relative p-4 mx-auto">
      
      <div className="overflow-hidden rounded-lg relative">
        <div
          className={`transition-transform duration-300 ease-in-out transform ${
            isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          }`}
        >
          {images[currentIndex].component}
        </div>
      </div>

      
      <div className="flex justify-center items-start mt-4 space-x-4">
 
        <button onClick={goToPrevSlide} className="">
          ‹
        </button>

    
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-1 w-8 h-8 rounded-[6px] ${
              currentIndex === index ? 'bg-[#E78B01] text-white' : 'shadow-xl'
            }`}
          >
            {index + 1}
          </button>
        ))}

    
        <button onClick={goToNextSlide} className="">
          ›
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
