import Image from "next/image";
import Header from "./Header";
import SectionOne from "./sectionOne";
import MapUI from "./MapUI";
import GallerySection from "./GalerySec";
import BuisnessCard from "./BuisnessCard";
import ResponsiveCard from "../ui/CardCustom";
import CardCustom2 from "../ui/Cardcustom2";
import SectionCard from "./SectionCard";
import map from '../../assests/map.png'
import ResponsiveSlider from "./ResponsiveSlider";
import Footer from "./Footer";
import promoImg from "../..//assests/Group 228.png";
import Image1 from "../../assests/Rectangle3.png";
import Image2 from "../../assests/Rectangle4.png";
import Image3 from"../../assests/Rectangle5.png";
import Image4 from "../../assests/Rectangle6.png";
import Bcard from '../../assests/WhatsApp Image 2024-09-25 at 23.21.13_906379e8 1.png'


export default function HomePG() {

const data={

headerContent:{
  headerBizContent:"India>Goa>bardez>mapusa>biz_category>biz_name",
  onClick:"+91 123 456 7890"
  
},

heroSectionData:{
  promoImg:promoImg.src,
  businessName:"Business Name",
  Biz_Categor:"Biz_Category",
  Biz_Subcategory:"Biz_Subcategory",
  businessInfo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
tags:[
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
],

  
},
ContactDetails:{
  weekdays:"Monday - Friday",
  timing:"9:00 am - 7:00 pm",
  isOpen:false,
  contact:{
    phone: "+91 123 456 7890",
    email: "demo@gmail.com",
    website: "www.website.com",

}},
MapUIsrc:map.src,
GallerySectionImges:[Image1.src,Image2.src,Image3.src,Image4.src],
BuisnessCard:{
digitalBuisnessCard:Bcard.src,
onclick:"url"

},
brodcast1:{
heading:"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
time:"Sep 27, 2024 09:42 AM IST",
content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation",
imgURL:""
},

brodcast2:{
  heading:"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
  time:"Sep 27, 2024 09:42 AM IST",
  imgURL:""
  },
  broadcast3: [
    {
      title: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
      date: "Sep 27, 2024 09:42 AM IST",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
    },
    {
      title: "Second Slide Example Title",
      date: "Sep 28, 2024 09:42 AM IST",
      content:
        "Second slide content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Third Slide Example Title",
      date: "Sep 29, 2024 09:42 AM IST",
      content:
        "Third slide content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]

}

  return (
    <div>
      <Header headerContent="India>Goa>bardez>mapusa>biz_category>biz_name" onClick={data.headerContent.onClick}/>
      <SectionOne heroSection={data.heroSectionData} contactDetail={data.ContactDetails}/>
      <MapUI map={data.MapUIsrc}/>
      <GallerySection images={data.GallerySectionImges}/>
      <BuisnessCard digitalBuisnessCard={data.BuisnessCard.digitalBuisnessCard} onClick={data.BuisnessCard.onclick}/>
      <SectionCard bizName={data.heroSectionData.businessName} Brodcast2={data.brodcast2}  Brodcast1={data.brodcast1} />
      <ResponsiveSlider broadcasts={data.broadcast3}/>
      <Footer biz_name={data.heroSectionData.businessName}/>
    </div>
  );
}
