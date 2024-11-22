"use client";

import { title } from "process";
import { useState } from "react";
interface ContactInfo {
  phone: string;
  email: string;
  website: string;
}
interface ContactBoxProps {
  weekdays: string;
  timing: string;
  Contact: ContactInfo;
  addres: string;
  isOpen: boolean;
}
const ContactBoxMobile = function ({
  weekdays,
  timing,
  Contact,
  addres,
  isOpen,
}: ContactBoxProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      trigger: (
        <span className="text-base font-medium flex gap-3 items-center">
          <svg
            className="inline mr-2 w-8 "
            width="70"
            height="60"
            viewBox="0 0 70 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="70" height="60" rx="5" fill="#FF5E62" />
            <path
              d="M35 46C39.2435 46 43.3131 44.3143 46.3137 41.3137C49.3143 38.3131 51 34.2435 51 30C51 25.7565 49.3143 21.6869 46.3137 18.6863C43.3131 15.6857 39.2435 14 35 14C30.7565 14 26.6869 15.6857 23.6863 18.6863C20.6857 21.6869 19 25.7565 19 30C19 34.2435 20.6857 38.3131 23.6863 41.3137C26.6869 44.3143 30.7565 46 35 46ZM35 10C37.6264 10 40.2272 10.5173 42.6537 11.5224C45.0802 12.5275 47.285 14.0007 49.1421 15.8579C50.9993 17.715 52.4725 19.9198 53.4776 22.3463C54.4827 24.7728 55 27.3736 55 30C55 35.3043 52.8929 40.3914 49.1421 44.1421C45.3914 47.8929 40.3043 50 35 50C23.94 50 15 41 15 30C15 24.6957 17.1071 19.6086 20.8579 15.8579C24.6086 12.1071 29.6957 10 35 10ZM36 20V30.5L45 35.84L43.5 38.3L33 32V20H36Z"
              fill="white"
            />
          </svg>
          Timings
        </span>
      ),
      title: "Timings",
      answer: (
        <div className="flex justify-between pl-9">
        <div>
          <p className="text-sx font-medium">Monday</p>
          <p className="text-[10px] italic text-[#9E9D9D]">Working Hours:</p>
          <p className="text-sm">{timing}</p>
          </div>
          <div>
          <p className="text-sx font-medium invisible">Monday</p>
          <p className="text-[10px] italic text-[#9E9D9D]">Lunch break:</p>
          <p className="text-sm">1:00 PM - 2:30 PM</p>
          </div>
        </div>
      ),
    },
    {
      trigger:  (
        <span className="text-base font-medium flex gap-3 items-center">
          <svg
          className="inline mr-2 w-8 "
          width="70"
          height="60"
          viewBox="0 0 70 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="70" height="60" rx="5" fill="#FF5E62" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.9997 33.334C42.1471 33.3341 44.2116 34.1632 45.7626 35.6484C47.3137 37.1336 48.2315 39.1602 48.3247 41.3057L48.333 41.6673V45.0007C48.3325 45.4254 48.1699 45.834 47.8783 46.1429C47.5866 46.4518 47.1881 46.6377 46.764 46.6626C46.3399 46.6875 45.9224 46.5495 45.5966 46.2769C45.2709 46.0042 45.0615 45.6175 45.0113 45.1957L44.9997 45.0007V41.6673C44.9997 40.392 44.5125 39.1648 43.6375 38.2369C42.7626 37.309 41.5662 36.7505 40.293 36.6756L39.9997 36.6673H26.6663C25.391 36.6672 24.1638 37.1545 23.2359 38.0295C22.308 38.9044 21.7495 40.1008 21.6747 41.374L21.6663 41.6673V45.0007C21.6659 45.4254 21.5032 45.834 21.2116 46.1429C20.92 46.4518 20.5214 46.6377 20.0973 46.6626C19.6733 46.6875 19.2557 46.5495 18.93 46.2769C18.6042 46.0042 18.3948 45.6175 18.3447 45.1957L18.333 45.0007V41.6673C18.3331 39.5199 19.1622 37.4554 20.6474 35.9044C22.1326 34.3533 24.1593 33.4355 26.3047 33.3423L26.6663 33.334H39.9997ZM49.9997 31.6673C50.4417 31.6673 50.8656 31.8429 51.1782 32.1555C51.4907 32.468 51.6663 32.892 51.6663 33.334C51.6663 33.776 51.4907 34.1999 51.1782 34.5125C50.8656 34.8251 50.4417 35.0007 49.9997 35.0007H48.333C47.891 35.0007 47.4671 34.8251 47.1545 34.5125C46.8419 34.1999 46.6663 33.776 46.6663 33.334C46.6663 32.892 46.8419 32.468 47.1545 32.1555C47.4671 31.8429 47.891 31.6673 48.333 31.6673H49.9997ZM33.333 13.334C35.5431 13.334 37.6628 14.212 39.2256 15.7748C40.7884 17.3376 41.6663 19.4572 41.6663 21.6673C41.6663 23.8775 40.7884 25.9971 39.2256 27.5599C37.6628 29.1227 35.5431 30.0007 33.333 30.0007C31.1229 30.0007 29.0033 29.1227 27.4405 27.5599C25.8776 25.9971 24.9997 23.8775 24.9997 21.6673C24.9997 19.4572 25.8776 17.3376 27.4405 15.7748C29.0033 14.212 31.1229 13.334 33.333 13.334ZM49.9997 26.6673C50.4417 26.6673 50.8656 26.8429 51.1782 27.1555C51.4907 27.468 51.6663 27.892 51.6663 28.334C51.6663 28.776 51.4907 29.1999 51.1782 29.5125C50.8656 29.8251 50.4417 30.0007 49.9997 30.0007H46.6663C46.2243 30.0007 45.8004 29.8251 45.4878 29.5125C45.1753 29.1999 44.9997 28.776 44.9997 28.334C44.9997 27.892 45.1753 27.468 45.4878 27.1555C45.8004 26.8429 46.2243 26.6673 46.6663 26.6673H49.9997ZM33.333 16.6673C32.6764 16.6673 32.0262 16.7966 31.4196 17.0479C30.813 17.2992 30.2618 17.6675 29.7975 18.1318C29.3332 18.5961 28.9649 19.1473 28.7136 19.7539C28.4623 20.3605 28.333 21.0107 28.333 21.6673C28.333 22.3239 28.4623 22.9741 28.7136 23.5807C28.9649 24.1874 29.3332 24.7386 29.7975 25.2029C30.2618 25.6671 30.813 26.0354 31.4196 26.2867C32.0262 26.538 32.6764 26.6673 33.333 26.6673C34.6591 26.6673 35.9309 26.1405 36.8685 25.2029C37.8062 24.2652 38.333 22.9934 38.333 21.6673C38.333 20.3412 37.8062 19.0695 36.8685 18.1318C35.9309 17.1941 34.6591 16.6673 33.333 16.6673ZM49.9997 21.6673C50.4245 21.6678 50.8331 21.8304 51.142 22.1221C51.4508 22.4137 51.6367 22.8122 51.6616 23.2363C51.6865 23.6604 51.5485 24.0779 51.2759 24.4037C51.0033 24.7295 50.6165 24.9388 50.1947 24.989L49.9997 25.0007H44.9997C44.5749 25.0002 44.1663 24.8375 43.8574 24.5459C43.5485 24.2543 43.3626 23.8557 43.3377 23.4317C43.3128 23.0076 43.4508 22.59 43.7234 22.2643C43.9961 21.9385 44.3828 21.7292 44.8047 21.679L44.9997 21.6673H49.9997Z"
            fill="white"
          />
        </svg>
        Contact
        </span>
      ),
      answer:(<div className="pl-9">
        {/* <p className="text-sm mb-1">
          <a href={"tel:" + Contact.phone}>
            <svg
              className="inline mr-4 mt-[-3px]"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M2.58735 1.02902L1.87056 1.50181C1.23239 1.923 0.727828 2.51773 0.416249 3.21599C0.10467 3.91426 -0.000954269 4.68701 0.111809 5.44328C0.464687 7.81281 1.98831 10.2513 4.65794 12.772C7.32089 15.2863 9.83755 16.6668 12.2196 16.8882C12.9849 16.9593 13.7546 16.8091 14.4371 16.4555C15.1196 16.1019 15.6862 15.5598 16.0695 14.8936L16.4962 14.1509C16.7734 13.6693 16.8664 13.1035 16.7579 12.5585C16.6494 12.0136 16.3467 11.5266 15.9061 11.188L13.7989 9.5679C13.5141 9.34927 13.1681 9.22522 12.8093 9.21315C12.4504 9.20108 12.0968 9.30159 11.798 9.50059L9.75064 10.863L9.69569 10.8914C9.45824 11.0019 8.72415 10.6361 7.64023 9.61251C6.50627 8.54163 6.12618 7.83065 6.27317 7.57367L7.0995 6.16215C7.40126 5.64613 7.53416 5.04867 7.4796 4.45339C7.42504 3.8581 7.18575 3.29476 6.79522 2.84218L5.58481 1.4435C5.22073 1.02255 4.716 0.748363 4.16471 0.672045C3.61342 0.595727 3.05209 0.722814 2.58735 1.02902ZM4.7197 2.1928L5.92791 3.59215C6.16233 3.86354 6.30606 4.20142 6.33899 4.55853C6.37192 4.91564 6.29241 5.27411 6.11157 5.5838L5.28228 6.9974C4.75441 7.91399 5.35366 9.02981 6.85412 10.4459C8.26503 11.7787 9.35096 12.3206 10.2215 11.9095L10.3491 11.8402L12.4339 10.4547C12.5335 10.3882 12.6514 10.3546 12.771 10.3585C12.8907 10.3625 13.0061 10.4038 13.1011 10.4766L15.2083 12.0967C15.4288 12.2659 15.5804 12.5095 15.6348 12.782C15.6892 13.0546 15.6427 13.3377 15.5041 13.5785L15.0763 14.3216C14.8024 14.7972 14.3977 15.1843 13.9103 15.4367C13.4229 15.6891 12.8733 15.7963 12.3268 15.7455C10.2367 15.5517 7.93901 14.2913 5.44626 11.9379C2.94714 9.57925 1.55544 7.3539 1.2461 5.27415C1.16545 4.73387 1.24085 4.1818 1.46341 3.68294C1.68598 3.18407 2.04644 2.75918 2.50237 2.45829L3.21915 1.98551C3.4516 1.83242 3.73179 1.76911 4.00748 1.80737C4.28317 1.84563 4.53553 1.98286 4.7175 2.19346"
                fill="white"
                stroke="black" 
    stroke-width="1"
              />
            </svg>
            {Contact.phone}
          </a>
        </p> */}

        <p className="text-sm mb-1">
          <a href={"mailto:" + Contact.email}>
            <svg
              className="inline mr-4 mt-[-3px]"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                d="M2.21053 0H11.7895C12.3757 0 12.938 0.232894 13.3526 0.647448C13.7671 1.062 14 1.62426 14 2.21053V8.84211C14 9.42837 13.7671 9.99063 13.3526 10.4052C12.938 10.8197 12.3757 11.0526 11.7895 11.0526H2.21053C1.62426 11.0526 1.062 10.8197 0.647448 10.4052C0.232894 9.99063 0 9.42837 0 8.84211V2.21053C0 1.62426 0.232894 1.062 0.647448 0.647448C1.062 0.232894 1.62426 0 2.21053 0ZM2.21053 0.736842C1.84211 0.736842 1.51789 0.862105 1.26737 1.08316L7 4.78947L12.7326 1.08316C12.4821 0.862105 12.1579 0.736842 11.7895 0.736842H2.21053ZM7 5.68105L0.832632 1.68C0.773684 1.84211 0.736842 2.02632 0.736842 2.21053V8.84211C0.736842 9.23295 0.892105 9.60779 1.16847 9.88416C1.44484 10.1605 1.81968 10.3158 2.21053 10.3158H11.7895C12.1803 10.3158 12.5552 10.1605 12.8315 9.88416C13.1079 9.60779 13.2632 9.23295 13.2632 8.84211V2.21053C13.2632 2.02632 13.2263 1.84211 13.1674 1.68L7 5.68105Z"
                fill="white"
                stroke="black" 
    stroke-width="1"
              />
            </svg>
            {Contact.email}
          </a>
        </p>
        <p className="text-sm mb-1">
          <svg
            className="inline mr-4 mt-[-3px]"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85651 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85651 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 8.85651 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85651 14 7 14ZM12.425 8.4C12.6621 7.48172 12.6621 6.51828 12.425 5.6H9.751C9.81544 6.53222 9.81544 7.46778 9.751 8.4H12.425ZM11.851 9.8H9.597C9.48005 10.6438 9.2566 11.4694 8.932 12.257C10.1617 11.8034 11.1942 10.9343 11.851 9.8ZM5.656 8.4H8.344C8.42001 7.46821 8.42001 6.53179 8.344 5.6H5.656C5.57999 6.53179 5.57999 7.46821 5.656 8.4ZM5.831 9.8C6.118 11.48 6.622 12.6 7 12.6C7.378 12.6 7.882 11.48 8.169 9.8H5.831ZM1.575 8.4H4.249C4.18456 7.46778 4.18456 6.53222 4.249 5.6H1.575C1.3379 6.51828 1.3379 7.48172 1.575 8.4ZM2.149 9.8C2.80578 10.9343 3.8383 11.8034 5.068 12.257C4.774 11.585 4.55 10.745 4.403 9.8H2.149ZM11.851 4.2C11.1942 3.06572 10.1617 2.19663 8.932 1.743C9.226 2.415 9.45 3.255 9.597 4.2H11.851ZM5.831 4.2H8.169C7.882 2.52 7.378 1.4 7 1.4C6.622 1.4 6.118 2.52 5.831 4.2ZM2.149 4.2H4.403C4.543 3.255 4.774 2.415 5.068 1.743C3.8383 2.19663 2.80578 3.06572 2.149 4.2Z"
              fill="white"
              stroke="black" 
    stroke-width="1"
            />
          </svg>

          {Contact.website}
        </p>
      </div>)
      },
      {
        trigger: (
          <span className="text-base font-medium flex gap-3 items-center">
             <svg className="inline mr-2 w-8 " width="70" height="60" viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="70" height="60" rx="5" fill="#FF5E62"/>
<path d="M34.9871 11.5685C34.498 11.5693 34.0269 11.7529 33.6663 12.0833L15.5903 28.0205L15.5735 28.0357C14.9919 28.5737 14.8567 29.4517 15.1495 30.0925C15.4423 30.7333 16.1287 31.1921 16.9071 31.1925H21.5679V46.5957C21.5679 47.6473 22.4831 48.4317 23.4867 48.4321H46.5123C47.5159 48.4321 48.4311 47.6473 48.4311 46.5961V31.1925H53.0923C53.8707 31.1925 54.5571 30.7341 54.8499 30.0929C55.1427 29.4521 55.0075 28.5737 54.4259 28.0357L54.4091 28.0205L36.3331 12.0833C35.966 11.7469 35.485 11.5628 34.9871 11.5685ZM34.9999 21.2833C39.2399 21.2833 42.7131 24.7473 42.7131 28.9749C42.7131 29.9929 42.5103 30.9665 42.1451 31.8581C42.0663 32.0932 41.9679 32.3212 41.8507 32.5397L35.9347 42.6077C35.3099 43.4545 34.8107 43.6409 34.0591 42.6597L28.6951 33.3873C27.7792 32.0982 27.287 30.5562 27.2867 28.9749C27.2867 24.7469 30.7599 21.2829 34.9999 21.2829M34.9999 24.8869C32.7167 24.8869 30.9007 26.6977 30.9007 28.9745C30.9007 31.2513 32.7167 33.0621 34.9999 33.0621C37.2831 33.0621 39.0991 31.2513 39.0991 28.9749C39.0991 26.6981 37.2831 24.8877 34.9999 24.8877" fill="white"/>
</svg>
Address
          </span>
        ),
    
        answer: (
            <p className="text-base pl-9">{addres}</p>
        ),
      },
  ];

  return (
    <div className="mx-auto rounded-lg grid grid-cols-1 gap-5 lg:hidden ">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2 last:border-b-0 relative">
          <button
            type="button"
            onClick={() => toggleAccordion(index)}
            className={`w-full flex justify-between  ${
              openIndex === index ? "" : ""
            } border border-[#c6e7f4] rounded-[5px] shadow-lg`}
          >
            <div className="flex w-full">
              <div className="w-full">
                <p className="px-4 lg:ml-4 md:text-2xl text-sm max-w-[668px] font-medium text-left">
                  {faq.trigger}
                </p>
                <div
                  className={`overflow-hidden rounded-[5px] transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100 py-4 bg-[#F8F9DE]"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-left text-sm px-4 ">{faq.answer}</div>
                </div>
              </div>
            </div>
            <span className="text-xl absolute right-4 top-6">
              {openIndex === index ? (
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Arrow Icon</title>
                  <path
                    d="M1.242 7.78973L7.48837 1.6421C7.62465 1.50727 7.80863 1.43164 8.00034 1.43164C8.19206 1.43164 8.37603 1.50727 8.51232 1.6421L14.7587 7.7884C14.8958 7.92316 15.0804 7.99867 15.2727 7.99867C15.4649 7.99867 15.6495 7.92316 15.7866 7.7884C15.8542 7.72256 15.9078 7.64388 15.9445 7.55698C15.9811 7.47009 16 7.37673 16 7.28243C16 7.18812 15.9811 7.09477 15.9445 7.00787C15.9078 6.92097 15.8542 6.84229 15.7866 6.77646L9.5416 0.630156C9.13026 0.226279 8.57682 0 8.00034 0C7.42387 0 6.87042 0.226279 6.45908 0.630156L0.214045 6.77646C0.146312 6.84231 0.0924715 6.92107 0.0557069 7.0081C0.0189423 7.09512 0 7.18863 0 7.28309C0 7.37756 0.0189423 7.47107 0.0557069 7.55809C0.0924715 7.64511 0.146312 7.72388 0.214045 7.78973C0.351179 7.92449 0.535754 8 0.72802 8C0.920286 8 1.10486 7.92449 1.242 7.78973Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Arrow Icon</title>
                  <path
                    d="M1.242 0.21027L7.48837 6.3579C7.62465 6.49273 7.80863 6.56836 8.00034 6.56836C8.19206 6.56836 8.37603 6.49273 8.51232 6.3579L14.7587 0.211604C14.8958 0.0768442 15.0804 0.00133371 15.2727 0.00133371C15.4649 0.00133371 15.6495 0.0768442 15.7866 0.211604C15.8542 0.277436 15.9078 0.356119 15.9445 0.443017C15.9811 0.529913 16 0.623267 16 0.717574C16 0.811882 15.9811 0.905234 15.9445 0.992131C15.9078 1.07903 15.8542 1.15771 15.7866 1.22354L9.5416 7.36984C9.13026 7.77372 8.57682 8 8.00034 8C7.42387 8 6.87042 7.77372 6.45908 7.36984L0.214045 1.22354C0.146312 1.15769 0.0924715 1.07893 0.0557069 0.991905C0.0189423 0.904884 0 0.811375 0 0.716907C0 0.622439 0.0189423 0.528931 0.0557069 0.44191C0.0924715 0.354889 0.146312 0.276123 0.214045 0.21027C0.351179 0.0755105 0.535754 0 0.72802 0C0.920286 0 1.10486 0.0755105 1.242 0.21027Z"
                    fill="black"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactBoxMobile;
