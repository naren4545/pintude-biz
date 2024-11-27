"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import Image1 from "../../assests/Business3.png";
import Image2 from "../../assests/Business4.png";
import Image3 from "../../assests/Business5.png";
import Image4 from "../../assests/Business6.png";

const HorizontalScroller = () => {
  const images = [Image1, Image2, Image3, Image4];

  // React Slick settings
  const settings = {
    dots: true, // Set to true if you want navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Adjust based on how many images you want to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // arrows: true, // Show next/prev arrows
    responsive: [
      {
        breakpoint: 1024, // For larger screens (lg)
        settings: {
          slidesToShow: 3, // Show 3 images at a time
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For tablets
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full lg:hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="text-center">
            <Image
              src={img}
              alt={`Image ${index + 1}`}
              className="rounded-lg object-cover"
              priority={index === 0} // Preload the first image
              layout="responsive"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalScroller;
