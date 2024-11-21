import React from "react";
import Image from "next/image";

import Image1 from "../../assests/Business3.png";
import Image2 from "../../assests/Business4.png";
import Image3 from "../../assests/Business5.png";
import Image4 from "../../assests/Business6.png";

const HorizontalScroller = () => {
  const images = [Image1, Image2, Image3, Image4];

  return (
    <div className="w-full overflow-x-scroll scrollbar-hide lg:hidden">
      <div className="flex items-center space-x-6 py-6">
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={img}
              alt={`Image ${index + 1}`}
               // Adjust height for each image
              className="rounded-lg object-cover"
              priority={index === 0} // Preload the first image
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroller;
