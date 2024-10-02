import React from "react";
import Image1 from "../../assests/Rectangle3.png";
import Image2 from "../../assests/Rectangle4.png";
import Image3 from"../../assests/Rectangle5.png";
import Image4 from "../../assests/Rectangle6.png";

export default function GallerySection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px]  mx-auto ">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 text-center">
          <div>
            <img className="lg:mt-16 md:mt-0" src={Image2.src} />
          </div>
          <div>
            <img  src={Image1.src} />
          </div>
          <div>
            <img className="lg:mt-16 md:mt-0" src={Image3.src} />
          </div>
          <div>
            <img  src={Image4.src} />
          </div>
        </div>
       
      </div>
    </section>
  );
}
