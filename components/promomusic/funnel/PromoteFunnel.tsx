import PromoteInput from "@/components/input/PromoteInput";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  objectFunnel: any;
  setObjectFunnel: Function;
  actualIndex: number;
};

function PromoteFunnel({ objectFunnel, setObjectFunnel, actualIndex }: Props) {
  const inputRef: any = useRef();

  const [urlPreview, setUrlPreview] = useState();
  const [dataFetched, setDataFetched] = useState({
    image: "",
    title: "",
    description: "",
  });
  const [isloading, setIsloading] = useState(false);

  const fetchPreview = async (url: string) => {
    if (url.trim() !== "") {
      const data = await fetch(url);
      const object = await data.json();


      if (data.status === 200) {
        setDataFetched(object);
        setIsloading(false);
      } else {
        setIsloading(true);
        setTimeout(() => {
          setIsloading(false);
        }, 1000);
      }
    }
  };

  return (
    <section
      className={`min-h-[400px] text-white flex flex-col items-start justify-start gap-4 mt-4 duration-300 ${
        actualIndex === 3 ? "translate-x-0 " : "-translate-x-full "
      }`}
    >
      <div className="flex flex-col justify-center">
        <h2 className="">Lien à promouvoir</h2>
        <p className="text-sm font-thin text-gray-300">
          Ajouter le lien à promouvoir:
        </p>
      </div>
      <div className="">
        <h3>
          Recherchez et sélectionnez votre{" "}
          {objectFunnel.platform === "spotify" ? "musique" : "vidéo"}{" "}
          {objectFunnel.platform}
        </h3>
        <div className="flex ">
          <input
            ref={inputRef}
            type="url"
            className="w-full roundedl-l-sm bg-gray-800 p-4 text-gray-300"
            placeholder="Renseignez l'URL de votre vidéo"
            value={urlPreview}
            onChange={(e) => {
              setUrlPreview(inputRef.current.value);
              console.log(inputRef.current.value);
            }}
          />
          {/** en faire un comosant dédié */}
          <button
            onClick={() => {
              fetchPreview(
                `https://api.linkpreview.net/?key=${process.env.NEXT_PUBLIC_API_KEY_LINKPREVIEW}&q=${urlPreview}`
              );
            }}
            className=" w-16 rounded-r-sm bg-green-600 flex items-center justify-center"
          >
            {isloading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 animate-spin"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            )}
          </button>
        </div>
        {dataFetched && (
          <div className="flex items-center justify-between gap-4 min-h-[200px] border-2">
            <Image
              src={dataFetched.image}
              alt={`image from ${objectFunnel.platform}`}
              className="flex-1 flex items-center justify-center"
              width={40}
              height={40}
            />
            <div className="flex-1 flex items-center justify-center">
              <h3>{dataFetched.title}</h3>
              <p>{dataFetched.description}</p>
            </div>
            <button className="flex-1 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default PromoteFunnel;
