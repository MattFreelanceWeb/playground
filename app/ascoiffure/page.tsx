import React from "react";
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
import { Poppins } from "next/font/google";
import SimpleCarousel from "@/components/carousel/SimpleCarousel";
import SimpleInfo from "@/components/about/SimpleInfo";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

type Props = {};

function page({}: Props) {
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
    <main className={`${poppins.className} `}>
      <div className="flex flex-col-reverse md:flex-col">
        <SimpleInfo
          name={"as coiffure"}
          adress={"11 rue de la république, 38690 Le Grand-Lemps"}
          score={5.0}
          reviewNumber={53}
          devise="€"
          href="https://www.google.com/maps/place/AS+COIFFURE/@45.3981211,5.4171679,17z/data=!4m15!1m8!3m7!1s0x478adea83f45be2b:0x2e11d6fd4b401619!2s11+Rue+de+la+R%C3%A9publique,+38690+Le+Grand-Lemps!3b1!8m2!3d45.3981211!4d5.4171679!16s%2Fg%2F11bw41q5q4!3m5!1s0x478adea83f4fffff:0xc674f913e3333a40!8m2!3d45.3981211!4d5.4171679!16s%2Fg%2F11f5d_qq42?entry=ttu"
        />
        <SimpleCarousel imageArray={imageArray} />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">Réserver en ligne pour un RDV chez AS Coiffure</h2>
        <p className="font-thin text-gray-500">24/24 - Paiement sur place - Confirmation immédiate</p>
      </div>
    </main>
  );
}

export default page;
