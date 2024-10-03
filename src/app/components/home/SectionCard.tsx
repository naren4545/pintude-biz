import CardCustom from "../ui/CardCustom";
import CardCustom2 from "../ui/Cardcustom2";
import CardCustom3 from "../ui/CardCustom3";


export default function SectionCard() {
  return (
    <section>
<div className="py-9 px-2 max-w-[1440px] mx-auto">
  <div className="mb-7">
  
    <h2 className="font-m text-4xl font-bold text-center">Latest broadcast from biz_name</h2>
 <p className="text-center">Engage with your customers by scheduling special announcements or promotions.</p>
  </div>
<div className="mb-8">
<CardCustom/>
</div>



<div className="mb-8">
<CardCustom2/>
</div>



</div>

    </section>
  )
}
