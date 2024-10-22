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
  broadcasts: Broadcast[]; // Accept an array of Broadcasts
}

const CustomSlider: React.FC<CustomSliderProps> = ({ broadcasts }) => {
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
      <div className="overflow-hidden rounded-lg relative">
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
      </div>
    </div>
  );
};

export default CustomSlider;
