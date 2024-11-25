// components/ResponsiveCard.js
import Image from "next/image";
import promo from "../../assests/image 13.png";
import dot from "../../assests/3dot.png";
import ReadMore from "./ReadMore";
interface Broadcast {
  title: string;
  date: string;
  content: string;
}

const CardCustom3 = ({ title, date, content }: Broadcast) => {
  return (
    <div className="max-w-[986px] m-4  py-5 relative mx-auto bg-white shadow-[0px_0px_8px_2px_#00000040] rounded-lg overflow-hidden">
     <svg className="absolute right-[18px] top-[18px]" width="7" height="31" viewBox="0 0 7 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 15.3469H3.01583V15.364H3V15.3469ZM3 3.35547H3.01583V3.3726H3V3.35547ZM3 27.3383H3.01583V27.3555H3V27.3383Z" stroke="black" stroke-width="6" stroke-linejoin="round"/>
</svg>
      <div className="p-4">
        <h2 className="lg:text-3xl font-noto text-base font-bold text-gray-800 pr-4">
          {title}{" "}
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
          <p className="lg:text-xl text-base font-medium text-primary">
            {date}
          </p>
        </div>
      </div>
      <hr />
      <div className="px-4 pb-4">
       
        <div className="my-4 ">
          {/* Image from Next.js Image component */}
          {/* <Image 
            className="rounded-lg mx-auto"
            src={promo}
            alt="Card Image" 
            width={642} 
            height={328}
           
            
          /> */}
          <ReadMore text={content} maxLength={80} />
        </div>
      </div>
    </div>
  );
};

export default CardCustom3;
