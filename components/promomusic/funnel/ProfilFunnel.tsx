import React from "react";
import { whoAreYouContent } from "../data/data";
import Image from "next/image";

type Props = {};

function ProfilFunnel({}: Props) {
  return (
    <section className="text-white flex flex-col items-start justify-center gap-4 mt-4">
      <div className="flex flex-col justify-center">
        <h2 className="">Qui êtes-vous ?</h2>
        <p className="text-sm font-thin text-gray-500">
          Choisir, je suis un(e):
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 self-center">
        {whoAreYouContent.map((item, i) => (
          <div key={i} className="w-24 h-24 flex flex-col items-center justify-center p-2 rounded-md bg-gray-800 text-xs gap-2 text-center text-ellipsis">
            <Image src={item.svg} alt={''}/>
            <span className="text-">{item.name} </span>          
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfilFunnel;