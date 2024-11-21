import Image from "next/image";
import one from "../../assests/Verified.svg";
import two from "../../assests/Location.svg";
import promoImg from "../..//assests/bizImg.png";
import Button from "../ui/Button";
import img from "../../assests/industrial_2134177.png";
import img2 from "../../assests/prototype_2421341.png";
import ContactBox from "../ui/contactBox";
import HeroSection from "../ui/HeroSection";
import './sectionOne.css'
import ContactBoxMobile from "../ui/ContactBoxMobile";
interface Contact {
  phone: string;   // Phone number
  email: string;   // Email address
  website: string; // Website URL
}

interface ContactDetail {
  weekdays: string;          // Days the business is open
  timing: string;            // Business hours
  isOpen: boolean;           // Status whether the business is open or closed
  contact: Contact;          // Nested object containing contact information
}

interface HeroSection {
  promoImg:string,
  businessName:string,
  Biz_Categor:string,
  Biz_Subcategory:string,
  businessInfo:string,
  tags:string[],
}

// interface ContactDetail {
//   weekdays:string,
//   timing:"9:00 am - 7:00 pm",
//   isOpen:false,
//   Contact:{
//     phone: "+91 123 456 7890",
//     email: "demo@gmail.com",
//     website: "www.website.com",

// }
// }
interface SectionOneProps {
  heroSection: HeroSection;
  contactDetail: ContactDetail;
}
const SectionOne: React.FC<SectionOneProps> = ({ heroSection, contactDetail }) => {
  return (
    <section className="hero">
      <div className="max-w-[1440px] relative py-10 px-4  mx-auto ">
        

        <HeroSection
        promoImg={heroSection.promoImg}
          businessName={heroSection.businessName}
          Biz_Category={heroSection.Biz_Categor}
          Biz_Subcategory={heroSection.Biz_Subcategory}
          businessInfo={heroSection.businessInfo}
            tags={heroSection.tags}
            onClick={contactDetail.contact.phone}
        />
        <div className=" flex-col lg:flex-row gap-3 max-w-[590px] mx-auto mt-7 lg:flex hidden">
          <div className="flex border-[#F55256] rounded-lg  border-2 gap-4 p-4 justify-center items-center text-center">
            <Image src={one} alt="person" />

            <p className="text-[#F55256] text-xl font-semibold">
              Verified Business <br />
              Profile
            </p>
          </div>

          <div className="flex justify-center gap-4 border-[#F55256] rounded-lg border-2 p-4 items-center text-center">
            <Image src={two} alt="location" />

            <p className="text-[#F55256] text-xs font-semibold">
              Verify Your Location and
              <br />
              Earn This Badge Now! <br />
              <span className="underline font-bold">Verify Now</span>
            </p>
          </div>
        </div>

        <div className="max-w-[1170px] mx-auto my-10">
          <ContactBoxMobile  weekdays={contactDetail.weekdays}
            timing={contactDetail.timing}
            isOpen={contactDetail.isOpen}
            Contact={contactDetail.contact}
            addres="1901 Thornridge Cir. Shiloh, 
Hawaii 81063"/>
          <ContactBox
            weekdays={contactDetail.weekdays}
            timing={contactDetail.timing}
            isOpen={contactDetail.isOpen}
            Contact={contactDetail.contact}
            addres="1901 Thornridge Cir. Shiloh, 
Hawaii 81063"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionOne