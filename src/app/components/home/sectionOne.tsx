import Image from "next/image";
import one from "../../assests/1.png";
import two from "../../assests/2.png";
import promoImg from "../..//assests/Group 228.png";
import Button from "../ui/Button";
import img from "../../assests/industrial_2134177.png";
import img2 from "../../assests/prototype_2421341.png";
import ContactBox from "../ui/contactBox";
import HeroSection from "../ui/HeroSection";
export default function SectionOne() {
  return (
    <section className="hero">
      <div className="max-w-[1440px] relative py-10 px-4  mx-auto ">
        

        <HeroSection
        promoImg={promoImg.src}
          businessName="Business Name"
          Biz_Category="Biz_Category"
          Biz_Subcategory="Biz_Subcategory"
          businessInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        tags={[
          'tag1',
          'tag2',
          'tag3',
          'tag4',
          'tag5',
          'tag6',
          'tag7',
          'tag8',
          'tag9',
          'tag10'
        ]}
        />
        <div className="flex flex-col lg:flex-row gap-3 max-w-[590px] mx-auto mt-7">
          <div className="flex bg-[#00506B0A] p-4 justify-center items-center text-center">
            <Image src={one} alt="person" />

            <p className="text-[#E78B01] font-semibold">
              Verified Business <br />
              Profile
            </p>
          </div>

          <div className="flex justify-center bg-[#00506B0A] p-4 items-center text-center">
            <Image src={two} alt="location" />

            <p className="text-[#E78B01] text-xs font-semibold">
              Verify Your Location and
              <br />
              Earn This Badge Now! <br />
              <span className="underline">Verify Now</span>
            </p>
          </div>
        </div>

        <div className="max-w-[1170px] mx-auto my-10">
          <ContactBox
            weekdays="Monday - Friday"
            timing="9:00 am - 7:00 pm"
            isOpen={true}
            Contact={{
              phone: "+91 123 456 7890",
              email: "demo@gmail.com",
              website: "www.website.com",
            }}
            addres="1901 Thornridge Cir. Shiloh, 
Hawaii 81063"
          />
        </div>
      </div>
    </section>
  );
}
