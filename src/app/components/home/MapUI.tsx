import Image from "next/image";
import mapi from "../../assests/map2.svg";
import { Interface } from "readline";
interface mapUI {
  map: string;
}
export default function MapUI({map}:mapUI) {
  return (
    <section>
    <div className="text-center mb-6">
      <img className="mx-auto mt-[-39px] md:inline hidden md:w-auto md:h-auto w-[336px] h-[336px]" alt="map" src={map} />

      <Image src={mapi} className="mx-auto mt-[-39px] md:hidden inline " alt="map" />
    </div>
    </section>
  )
}
