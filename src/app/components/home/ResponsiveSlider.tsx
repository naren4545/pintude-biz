"use client";
import { useState, useRef } from "react";
import Slider from "react-slick"; // Import react-slick
import CardCustom3 from "../ui/CardCustom3";
import arrow1 from "../../assests/Vector (13).svg";
import arrow2 from "../../assests/Vector (14).svg";
import Image from "next/image";
import CardCustom2 from "../ui/Cardcustom2";
import CardCustom from "../ui/CardCustom";
import chunkArray from "@/app/util/arrayBrodcast";

interface Broadcast {
  title: string;
  date: string;
  content: string;
  image: string;
}

interface CustomSliderProps {
  broadcasts: Broadcast[];
  bizName:string // Accept an array of Broadcasts
}

const CustomSlider: React.FC<CustomSliderProps> = ({ broadcasts,bizName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paginationIndex, setPaginationIndex] = useState(0); // Track which pagination group we are on
  const paginationGroupSize = 3; // Show 3 buttons at a time

  const b = chunkArray(broadcasts, 3); // Chunk broadcasts into groups of 3

  const sliderRef = useRef<any>(null);

  const sliderSettings = {
    dots: false, // Enable pagination dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentIndex(newIndex);
    },
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  // Pagination logic
  const goToPrevPagination = () => {
    if (paginationIndex > 0) {
      setPaginationIndex(paginationIndex - 1);
    }
  };

  const goToNextPagination = () => {
    if (paginationIndex < Math.ceil(b.length / paginationGroupSize) - 1) {
      setPaginationIndex(paginationIndex + 1);
    }
  };

  return (
    <div className="relative p-4 mx-auto">

<div className="mb-7">
  
   <h2 className="font-m text-[40px] leading-[50px] font-bold text-center">Latest broadcast from {bizName}</h2>
  <p className="text-center">Engage with your customers by scheduling special announcements or promotions.</p>
   </div>
      
     { broadcasts.length? (<div className="overflow-hidden rounded-lg relative">
        <Slider {...sliderSettings} ref={sliderRef}>
          {b.map((brodcast, index) => (
            <div key={index} className="flex items-center">
              <div>
                {brodcast.map((broadcast, idx) => {
                  let brodcastType = 1;
                  if (broadcast.image && !broadcast.content) {
                    brodcastType = 2;
                  }
                  if (!broadcast.image) {
                    brodcastType = 3;
                  }
                  return (
                    <div
                      key={idx}
                      className="transition-transform duration-300 ease-in-out"
                    >
                      {brodcastType === 3 && (
                        <CardCustom3
                          title={broadcast.title}
                          date={broadcast.date}
                          content={broadcast.content}
                        />
                      )}
                      {brodcastType === 2 && <CardCustom2 brodcast={broadcast} />}
                      {brodcastType === 1 && <CardCustom brodcast={broadcast} />}
                    </div>
                  );
                })}
              </div>

            
            

             
            </div>
          ))}
        </Slider>

        <div className="text-center mt-5 pb-3">
                <button onClick={goToPrevPagination}>
                  <Image src={arrow2} className="mr-3" alt="arrow" />
                </button>

              
                {b
                  .slice(
                    paginationIndex * paginationGroupSize,
                    paginationIndex * paginationGroupSize + paginationGroupSize
                  )
                  .map((_, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        goToSlide(
                          paginationIndex * paginationGroupSize + index
                        )
                      }
                      className={`mx-1 w-8 h-8 rounded-[6px] ${
                        currentIndex === paginationIndex * paginationGroupSize + index
                          ? "bg-[#E78B01] text-white"
                          : "shadow-[1px_1px_6px_0px_rgba(0,0,0,0.25)]"
                      }`}
                    >
                      {paginationIndex * paginationGroupSize + index + 1}
                    </button>
                  ))}

                <button onClick={goToNextPagination}>
                  <Image src={arrow1} className="ml-3" alt="arrow" />
                </button>
              </div>
      </div>):(<div className="p-4 shadow-lg max-w-72 mx-auto">
        
         <p className="text-center">No broadcast yet </p>
         <p className="text-center">Coming soon...  <svg
              width="24"
              className="ml-2 inline"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21178C16.9879 3.41143 14.5461 2.4 12 2.4C9.45392 2.4 7.01212 3.41143 5.21178 5.21178C3.41143 7.01212 2.4 9.45392 2.4 12C2.4 14.5461 3.41143 16.9879 5.21178 18.7882C7.01212 20.5886 9.45392 21.6 12 21.6ZM12 0C13.5759 0 15.1363 0.310389 16.5922 0.913446C18.0481 1.5165 19.371 2.40042 20.4853 3.51472C21.5996 4.62902 22.4835 5.95189 23.0866 7.4078C23.6896 8.86371 24 10.4241 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C5.364 24 0 18.6 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0ZM12.6 6V12.3L18 15.504L17.1 16.98L10.8 13.2V6H12.6Z"
                fill="#E78B01"
              />
            </svg></p>
         
         </div>)}
    </div>
  );
};

export default CustomSlider;
