"use client";

{/** le composant actuel prends en props un tableau de Static Image Data pour utiliser des images provenant d'une api il faudra l'ajuster ;)  */}

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

interface ImageArray {
  src: StaticImageData | string;
}

type Props = { imageArray: ImageArray[] };

function SimpleCarousel({ imageArray }: Props) {

  {/** state faisant fonctionner la logique du composant */}

  const [numberOfClick, setNumberOfClick] = useState<number>(0);
  const [windowSize, setWindowSize] = useState<number>(0 | window.innerWidth);
  const [slicedImageArray, setSlicedImageArray] = useState(imageArray);
  const [toggle, setToggle] = useState(false);

  {/** fonction pour gérer le carousel selon un compteur qui reviens à son état initial apres avoir passé la taille maximale du tableau */}

  const goToNextSlide = (array: any[], numberOfClick: number) => {
    if (numberOfClick < array.length - 1) {
      setNumberOfClick(numberOfClick + 1);
    } else {
      setNumberOfClick(0);
    }
  };
  const goToPreviousSlide = (array: any[], numberOfClick: number) => {
    if (numberOfClick == 0) {
      setNumberOfClick(array.length - 1);
    } else {
      setNumberOfClick(numberOfClick - 1);
    }
  };

  {/** useEffect qui gère la taille de l'écran et qui permet de mettre à jour le tableau coupé pour l'affichage en mode desktop */}

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });

    if (windowSize >= 1024) {
      {
        /** if md: */
      }
      setSlicedImageArray(imageArray.slice(0, 5));
    } else if (windowSize >= 768) {
      {
        /** if lg: */
      }
      setSlicedImageArray(imageArray.slice(0, 3));
    }

    return window.removeEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [numberOfClick, windowSize, imageArray]);

  return (
    <>
    {/** version desktop */}
      <section className=" grid-cols-3 grid-rows-2 h-96 gap-4 p-4 lg:grid-cols-4 hidden md:grid">
        {slicedImageArray.map((item, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-lg relative ${
              i === 0 ? "col-span-2 row-span-2" : "row-span-1"
            }`}
          >
            <div
              onClick={() => {
                setToggle(true);
              }}
              className={`h-full w-full bg-black/50 absolute  ${
                i === slicedImageArray.length - 1
                  ? "flex items-center justify-center text-white z-10 cursor-pointer"
                  : "hidden"
              }`}
            >
              Voir les {imageArray.length} photos
            </div>
            <Image
              src={item.src}
              alt={`carousel-image-${i}`}
              className={`duration-300 h-full w-full rounded-lg object-cover hover:scale-110 -z-10 ${
                i === slicedImageArray.length - 1 && "blur-sm"
              }`}
              width={385}
              height={256}
            />
          </div>
        ))}
        {toggle && (
          <div className="fixed overflow-auto h-screen w-full top-0 left-0 bg-black/80 z-20 grid grid-cols-2 gap-4 p-20">
            <button
              onClick={() => {
                setToggle(false);
              }}
              className="fixed top-4 right-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {imageArray.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-lg min-h-[380px]">
                <Image
                  src={item.src}
                  alt={`carousel-image-${i}`}
                  className={`duration-300 h-full w-full rounded-lg object-cover hover:scale-110 -z-10 `}
                  width={385}
                  height={256}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/** version mobile  */}
      <section className="h-64 flex items-center relative overflow-hidden md:hidden">
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-between ">
          <button
            className="z-50 bg-gradient-to-r from-black/50 h-full"
            onClick={() => {
              goToPreviousSlide(imageArray, numberOfClick);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="z-50 bg-gradient-to-l from-black/50  h-full"
            onClick={() => {
              goToNextSlide(imageArray, numberOfClick);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className={`flex h-full  z-10 relative duration-150 -translate-x-[${(numberOfClick) * 100}vw]`} >
          {imageArray.map((item, i) => (
            <Image
              src={item.src}
              alt={`carousel-image-${i}`}
              placeholder="empty"
              className=" duration-300 min-w-[100vw] h-full object-cover"
              width={385}
              height={256}
              key={i}
              id={`carousel-img-${i}`}
            />
          ))}
        </div>
        <div className="absolute bottom-2 right-2 z-50 bg-black/50 px-8 py-1 rounded-full text-white text-sm">
          {" "}
          {`${numberOfClick + 1} / ${imageArray.length}`}{" "}
        </div>
      </section>
    </>
  );
}

export default SimpleCarousel;