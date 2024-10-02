import Image from "next/image";
import map from '../../assests/map.png'

export default function MapUI() {
  return (
    <section>
    <div className="text-center mb-6">
      <Image className="mx-auto mt-[-90px]" src={map} />
    </div>
    </section>
  )
}
