import Image from "next/image";

import { Interface } from "readline";
interface mapUI {
  map: string;
}
export default function MapUI({map}:mapUI) {
  return (
    <section>
    <div className="text-center mb-6">
      <img className="mx-auto mt-[-90px]" alt="map" src={map} />

      
    </div>
    </section>
  )
}
