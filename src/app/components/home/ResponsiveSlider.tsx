'use client';
import { useState,useRef } from 'react';
import Slider from 'react-slick' // Import react-slick
import CardCustom3 from '../ui/CardCustom3';
import arrow1 from '../../assests/Vector (13).svg'
import arrow2 from '../../assests/Vector (14).svg'
import Image from 'next/image';

interface Broadcast {
  title: string;
  date: string;
  content: string;
}

interface CustomSliderProps {
  broadcasts: Broadcast[]; // Accept an array of Broadcasts
}

const CustomSlider: React.FC<CustomSliderProps> = ({ broadcasts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<any>(null); 
  // Settings for React Slick
  const sliderSettings = {
    dots: false, // Enable pagination dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Enable default arrows
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentIndex(newIndex);
    },
    nextArrow: (
      <button className="text-black font-bold ">
        ›
      </button>
    ),
    prevArrow: (
      <button className="text-black font-bold relative">
        ‹
      </button>
    ),
    customPaging: (i: number) => {
      return (
        <button
          className={`mx-1 w-8 h-8 rounded-[6px] ${
            currentIndex === i ? 'bg-[#E78B01] text-white' : 'shadow-xl'
          }`}
        >
         
        </button>
      );
    },
  };
  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Use slickPrev method available on slider instance
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Use slickNext method available on slider instance
    }
  };

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Go to specific slide using slickGoTo method
    }
  };
  return (
    <div className="relative p-4 mx-auto">
      {/* React Slick Slider */}
      <div className="overflow-hidden rounded-lg relative">
        <Slider {...sliderSettings} ref={sliderRef}>
          {broadcasts.map((broadcast, index) => (
            <div key={index} className="transition-transform duration-300 ease-in-out">
             <CardCustom3 title={broadcast.title} date={broadcast.date} content={broadcast.content}/>
            </div>
          ))}
        </Slider>


<div className='text-center mt-5 pb-3'>
        <button onClick={goToPrevSlide} className="">
          <Image src={arrow2} className='mr-3' alt='arrow'/>
        </button>

    
        {broadcasts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-1 w-8 h-8 rounded-[6px] ${
              currentIndex === index ? 'bg-[#E78B01] text-white' : 'shadow-[1px_1px_6px_0px_rgba(0,0,0,0.25)]'
            }`}
          >
            {index + 1}
          </button>
        ))}

    
        <button onClick={goToNextSlide} className="">
        <Image src={arrow1} className='ml-3' alt='arrow'/>
        </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
