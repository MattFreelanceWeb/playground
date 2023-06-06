import Link from "next/link";
import React from "react";
import SimpleButton from "../button/SimpleButton";

type Props = {
  name: string;
  adress: string;
  score: number;
  reviewNumber: number;
  devise: string;
  href:string
};

function SimpleInfo({ name, adress, score, reviewNumber, devise, href }: Props) {
  return (
    <section className="p-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div className=" font-thin">
        <h2 className="text-xl font-bold uppercase">{name}</h2>
        <Link href={href} target="_blank" className="underline flex items-center -translate-x-[7px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6 self-start"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          {adress}
        </Link>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
          {score}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-6 h-6 -translate-y-[2px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg> 
          </div>
          ({reviewNumber}avis)
          <div>. {devise}</div>
        </div>
      </div>
      <SimpleButton content={"Prendre RDV"} />
    </section>
  );
}

export default SimpleInfo;
