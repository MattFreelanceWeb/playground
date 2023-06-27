"use client";

import { breadcrumbContent } from "../data/data";
import Link from "next/link";

type Props = {actualIndex:number, setActualIndex:Function};

function Breadcrumb({actualIndex, setActualIndex}: Props) {


  return (
    <div className=" overflow-x-auto scrollbar-none">
      <div
        className={"flex items-center gap-4 duration-500"}
        style={{ transform: `translate(-${actualIndex * 70}px,0)` }}
      >
        {breadcrumbContent.map((item, i) => (
          <Link
            onClick={(e) => (e.preventDefault(), setActualIndex(i))}
            href={item.href}
            key={i}
            className={` min-w-[110px] p-0.5 text-gray-300/50 ${
              i === actualIndex
                ? " flex items-center justify-center  font-bold capitalize bg-gradient-to-r from-[#FCB045] from-2% via-[#FD1D1D] via-20% to-[#833AB4] to-99%"
                : ""
            } `}
          >
            <div className="bg-gray-800 w-full flex items-center justify-center">
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Breadcrumb;