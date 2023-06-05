"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

interface ImageArray {
    src:StaticImageData | string
}

type Props = {imageArray:ImageArray[]};

function SimpleCarousel({imageArray}: Props) {

  const [numberOfClick, setNumberOfClick] = useState(0);

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
      setNumberOfClick(numberOfClick -1);
    }
  };

  useEffect(() => {
    let imageToScroll = document.getElementById(
      `carousel-img-${numberOfClick}`
    );
    imageToScroll?.scrollIntoView({ behavior: "smooth" });
  }, [numberOfClick]);

  return (
    <section className="h-64 flex items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-between ">
        <button
          className="z-50 bg-black/50 rounded-full"
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
          className="z-50 bg-black/50 rounded-full"
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
      <div className=" flex h-full overflow-x-hidden z-10 relative ">
        {imageArray.map((item, i) => (
          <Image src ={item.src} alt={`carousel-image-${i}`} placeholder="empty"
            className=" duration-300 min-w-[100vw] h-full object-cover"
            width={385}
            height={256}
            key={i}
            id={`carousel-img-${i}`}
          />
        ))}
      </div>
    </section>
  );
}

export default SimpleCarousel;