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
export default function HomePG() {
  return (
    <div>
      <Header headerContent="India>Goa>bardez>mapusa>biz_category>biz_name"/>
      <SectionOne/>
      <MapUI map={map.src}/>
      <GallerySection/>
      <BuisnessCard/>
      <SectionCard/>
      <ResponsiveSlider/>
      <Footer/>
    </div>
  );
}
