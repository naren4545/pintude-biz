"use client";

import Image from "next/image";
import promo from "../../assests/image 13.png";
import dot from "../../assests/3dot.png";
import { useState } from "react";
import ReadMore from "./ReadMore";
import Modal from "./Modal"; // This is your Modal component
import Color from "./Color";

interface Brodcast {
  title: string;
  date: string;
  content: string;
  image: string;
}

interface CardCustomProps {
  brodcast: Brodcast;
  colors:{
    primary: string,
  secondary: string,
  tertiary: string,
  }
}

const CardCustom: React.FC<CardCustomProps> = ({ brodcast,colors }) => {
  const [isOpen, setIsOpen] = useState(false); // State to control the modal

  const handleCardClick = () => {
    setIsOpen(true); // Open the modal when the card is clicked
  };

  const handleCloseModal = () => {
    setIsOpen(false); // Close the modal
  };

  return (
    <>
      {/* Card component */}
      <div
       // Clicking the card opens the modal
        className="cursor-pointer m-4 max-w-[986px] relative mx-auto bg-white shadow-[0px_0px_8px_2px_#00000040] rounded-lg overflow-hidden"
      >
        


<svg className="absolute right-[18px] top-[18px]" width="7" height="31" viewBox="0 0 7 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 15.3469H3.01583V15.364H3V15.3469ZM3 3.35547H3.01583V3.3726H3V3.35547ZM3 27.3383H3.01583V27.3555H3V27.3383Z" stroke="black" stroke-width="6" stroke-linejoin="round"/>
</svg>


        <div className="p-4">
          <h2 className="lg:text-3xl font-noto text-base italic pr-5 font-bold text-gray-800">
            {brodcast.title}
          </h2>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <svg
              width="24"
              className="mr-2"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21178C16.9879 3.41143 14.5461 2.4 12 2.4C9.45392 2.4 7.01212 3.41143 5.21178 5.21178C3.41143 7.01212 2.4 9.45392 2.4 12C2.4 14.5461 3.41143 16.9879 5.21178 18.7882C7.01212 20.5886 9.45392 21.6 12 21.6ZM12 0C13.5759 0 15.1363 0.310389 16.5922 0.913446C18.0481 1.5165 19.371 2.40042 20.4853 3.51472C21.5996 4.62902 22.4835 5.95189 23.0866 7.4078C23.6896 8.86371 24 10.4241 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C5.364 24 0 18.6 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0ZM12.6 6V12.3L18 15.504L17.1 16.98L10.8 13.2V6H12.6Z"
                style={{ fill:colors.primary  }}
              />
            </svg>
            <p style={{color:colors.primary}} className="lg:text-xl text-sm font-medium text-primary">
              {brodcast.date}
            </p>
          </div>
        </div>
        <hr />
        <div className="px-4 pb-4 font-light">
          
          
          <div className="my-4 text-center">
            <img
              className="rounded-lg mx-auto"
              src={promo.src}
              onClick={handleCardClick} 
              alt="Card Image"
              width={642}
              height={328}
            />
          </div>
          <ReadMore text={brodcast.content} maxLength={100} />
        </div>
      </div>

      {/* Modal component */}
      {isOpen && (
        <div className="popup-overlay ">
          <Modal isOpen={isOpen}>
            {/* The content to display in the modal */}
            <div
              // Clicking the card opens the modal
              className="cursor-pointer  w-[90vw] relative mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div
                className=" p-4 font-bold text-3xl"
                onClick={handleCloseModal}
              >
                            <svg className="inline z-40 mx-2" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>

              </div>
              <Image
                alt="dot"
                src={dot}
                className="absolute right-[18px] top-[18px]"
              />
              <div className="p-4">
                <h2 className="text-3xl font-bold text-gray-800">
                  {brodcast.title}
                </h2>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <svg
                    width="24"
                    className="mr-2"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21178C16.9879 3.41143 14.5461 2.4 12 2.4C9.45392 2.4 7.01212 3.41143 5.21178 5.21178C3.41143 7.01212 2.4 9.45392 2.4 12C2.4 14.5461 3.41143 16.9879 5.21178 18.7882C7.01212 20.5886 9.45392 21.6 12 21.6ZM12 0C13.5759 0 15.1363 0.310389 16.5922 0.913446C18.0481 1.5165 19.371 2.40042 20.4853 3.51472C21.5996 4.62902 22.4835 5.95189 23.0866 7.4078C23.6896 8.86371 24 10.4241 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C5.364 24 0 18.6 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0ZM12.6 6V12.3L18 15.504L17.1 16.98L10.8 13.2V6H12.6Z"
                      style={{ fill: "var(--color-primary)" }}
                    />
                  </svg>
                  <p className="text-xl font-medium text-primary">
                    {brodcast.date}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 font-light">
                <hr />
                <ReadMore text={brodcast.content} maxLength={100} />
                <div className="my-4 text-center">
                  <img
                    className="rounded-lg mx-auto"
                    src={promo.src}
                    alt="Card Image"
                    width={642}
                    height={328}
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default CardCustom;
