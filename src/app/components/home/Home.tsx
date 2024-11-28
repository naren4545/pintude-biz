import Image from "next/image";
import Header from "./Header";
import SectionOne from "./sectionOne";
import MapUI from "./MapUI";
import GallerySection from "./GalerySec";
import BuisnessCard from "./BuisnessCard";
import ResponsiveCard from "../ui/CardCustom";
import CardCustom2 from "../ui/Cardcustom2";
// import SectionCard from "./SectionCard";
import map from '../../assests/map.png'
import ResponsiveSlider from "./ResponsiveSlider";
import Footer from "./Footer";
import promoImg from "../..//assests/bizImg.png";
import Image1 from "../../assests/Business3.png";
import Image2 from "../../assests/Business4.png";
import Image3 from"../../assests/Business5.png";
import Image4 from "../../assests/Business6.png";
import Bcard from '../../assests/bizCard.png'

import promo from '../../assests/image 13.png'
import CurvedImageSlider from "./CurvedImageSlider";
export default function HomePG() {

const data={

headerContent:{
  headerBizContent:"India > Goa > bardez > mapusa > biz_category > biz_name",
  onClick:"+91 123 456 7890"
  
},
colors:{
  primary: "#F55256",
  secondary: "#F8F9DE",
  tertiary: "#DCE35B",
},
heroSectionData:{
  promoImg:promoImg.src,
  businessName:"PinTude",
  Biz_Categor:"Biz_Category",
  Biz_Subcategory:"Biz_Subcategory",
  businessInfo:"PinTude is a powerful app, designed to help businesses reach their local audience effortlessly. The app provides an easy-to-use platform where businesses can showcase their products, services, and special offerings to attract nearby customers. With a focus on fostering community connections, PinTude empowers businesses to grow their visibility and engage directly with customers in their area. Whether you're a small shop or a large multi-location brand, the PinTude app is your gateway to connecting with the people who matter most—your local community",
  tags:[
    "Local Growth",
    "Community Ties",
    "Business Boost",
    "Customer Reach",
    "Easy Marketing",
    "Small Biz Help",
    "Local Ads",
    "Digital Reach",
    "Brand Growth",
    "Engage Locally"
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
        image:promo.src
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
      date: "Sep 27, 2024 09:42 AM IST",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
        image:promo.src
    },
  
    {
      title: "Second Slide Example Title",
      date: "Sep 28, 2024 09:42 AM IST",
      content:"",
      image:promo.src
    },
    {
      title: "Third Slide Example Title",
      date: "Sep 29, 2024 09:42 AM IST",
      content:
        "Third slide content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:"",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
        date: "Sep 27, 2024 09:42 AM IST",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
          image:promo.src
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
        date: "Sep 27, 2024 09:42 AM IST",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
          image:promo.src
      },
    
      {
        title: "Second Slide Example Title",
        date: "Sep 28, 2024 09:42 AM IST",
        content:"",
        image:promo.src
      },
      {
        title: "Third Slide Example Title",
        date: "Sep 29, 2024 09:42 AM IST",
        content:
          "Third slide content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image:"",
        },
        {
          title: "Second Slide Example Title",
          date: "Sep 28, 2024 09:42 AM IST",
          content:"",
          image:promo.src
        },{
          title: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
          date: "Sep 27, 2024 09:42 AM IST",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
            image:promo.src
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
          date: "Sep 27, 2024 09:42 AM IST",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
            image:promo.src
        },
      
        {
          title: "Second Slide Example Title",
          date: "Sep 28, 2024 09:42 AM IST",
          content:"",
          image:promo.src
        },
        {
          title: "Third Slide Example Title",
          date: "Sep 29, 2024 09:42 AM IST",
          content:
            "Third slide content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image:"",
          },
          {
            title: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
            date: "Sep 27, 2024 09:42 AM IST",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
              image:promo.src
          },
          {
            title: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et",
            date: "Sep 27, 2024 09:42 AM IST",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, qui nostrud exercitation.",
              image:promo.src
          },
        
          {
            title: "Second Slide Example Title",
            date: "Sep 28, 2024 09:42 AM IST",
            content:"",
            image:promo.src
          },
          {
            title: "Third Slide Example Title",
            date: "Sep 29, 2024 09:42 AM IST",
            content:
              "Third slide content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              image:"",
            },
            {
              title: "Second Slide Example Title",
              date: "Sep 28, 2024 09:42 AM IST",
              content:"",
              image:promo.src
            }
  ],
  broad:[]

}

  return (
    <div>
      <Header colors={data.colors} headerContent="India>Goa>bardez>mapusa>biz_category>biz_name" onClick={data.headerContent.onClick}/>
      <SectionOne colors={data.colors} heroSection={data.heroSectionData} contactDetail={data.ContactDetails}/>
      <MapUI map={data.MapUIsrc}/>
      <GallerySection images={data.GallerySectionImges}/>
      <CurvedImageSlider/>
      <BuisnessCard colors={data.colors} digitalBuisnessCard={data.BuisnessCard.digitalBuisnessCard} onClick={data.BuisnessCard.onclick}/>
      {/* <SectionCard bizName={data.heroSectionData.businessName} Brodcast2={data.brodcast2}  Brodcast1={data.brodcast1} /> */}
      <ResponsiveSlider colors={data.colors} broadcasts={data.broadcast3} bizName={data.heroSectionData.businessName}/>
      <Footer colors={data.colors} biz_name={data.heroSectionData.businessName}/>
    
    </div>
  );
}
