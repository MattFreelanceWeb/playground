import React, { useEffect, useState } from "react";
import { platformContent } from "../data/data";
import Image from "next/image";

type Props = {
  objectFunnel: any;
  setObjectFunnel: Function;
  actualIndex: number;
};

function PlatformFunnel({ objectFunnel, setObjectFunnel, actualIndex }: Props) {
  const [selected, setSelected] = useState(0);

  const findIByname = (array: { id: string }[], name: string) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === name) {
        return i;
      }
    }
    return -1;
  };
  useEffect(() => {
    let indexInObject = findIByname(platformContent, objectFunnel.platform);
    setSelected(indexInObject);
  }, [objectFunnel.platform]);

  return (
    <section
      className={`min-h-[400px] text-white flex flex-col items-start justify-start gap-4 mt-4 duration-300 ${
        actualIndex === 2 ? "translate-x-0 " : "-translate-x-full "
      }`}
    >
      <div className="flex flex-col justify-center">
        <h2 className="">Sur quel plateforme?</h2>
        <p className="text-sm font-thin text-gray-300">
          Choix de la platefrome:
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 self-center">
        {platformContent.map((item, i) => (
          <div
            key={i}
            className={`${
              i === selected
                ? "bg-gradient-to-r from-[#FCB045] from-2% via-[#FD1D1D] via-20% to-[#833AB4] to-99%"
                : ""
            } p-0.5 rounded-md hover:scale-105 duration-100`}
          >
            <div
              id={item.id}
              onClick={() => {
                setSelected(i),
                  setObjectFunnel({ ...objectFunnel, platform: item.id });
              }}
              className="w-24 h-24 flex flex-col items-center justify-center p-2 rounded-md bg-gray-800 text-xs gap-2 text-center text-ellipsis cursor-pointer"
            >
              <Image src={item.svg} alt={""} />
              <span className="">{item.name} </span>
            </div>
          </div>
        ))}
      </div>

    {/** self closed div  */}
      <div className="h-1 w-full border-b-2 border-gray-500"/>

      <h3>Votre clip vidéo sera promu grâce à une publicité vidéo et une recommandation sur {objectFunnel.platform} avec google Ads.</h3>
      <p className="text-xs text-gray-300 text-justify">Votre clip sera promu grâce à une publicité vidéo et une recommandation sur {objectFunnel.platform} avec google Ads. Cette puissante campagne de promotion va placer votre clip sur plusieurs playlist très influentes. Notre équipe de community manager, avec son exprtise à analysé, repertorié les meilleures techniques, va promouvoir vos contenus de manière avancée pour atteindre un public large et augmenter les vues. Faites découvrir votre talent à un nouveau public grâce à cette campagne de mise en avant d&apos;artiste pour vos projjets musicaux.</p>
    </section>
  );
}

export default PlatformFunnel;