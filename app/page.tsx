import SimpleCarousel from '@/components/carousel/SimpleCarousel'
import Image from 'next/image'
import Salon1 from "@/assets/images/ascoiffure/salon-1.webp";
import Salon2 from "@/assets/images/ascoiffure/salon-2.webp";
import Salon3 from "@/assets/images/ascoiffure/salon-3.webp";
import Salon4 from "@/assets/images/ascoiffure/salon-4.webp";
import Salon5 from "@/assets/images/ascoiffure/salon-5.webp";
import Salon6 from "@/assets/images/ascoiffure/salon-6.webp";
import Salon7 from "@/assets/images/ascoiffure/salon-7.webp";
import Salon8 from "@/assets/images/ascoiffure/salon-8.webp";
import Salon9 from "@/assets/images/ascoiffure/salon-9.webp";
import Salon10 from "@/assets/images/ascoiffure/salon-10.webp";
import Salon11 from "@/assets/images/ascoiffure/salon-11.webp";

export default function Home() {
  const imageArray = [
    Salon1,
    Salon2,
    Salon3,
    Salon4,
    Salon5,
    Salon6,
    Salon7,
    Salon8,
    Salon9,
    Salon10,
    Salon11,
  ];
  return (
    <main className=" min-h-screen flex items-center justify-center px-10">
       <SimpleCarousel imageArray={imageArray} />
    </main>
  )
}
