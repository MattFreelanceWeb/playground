import Link from "next/link";
import React from "react";

type Props = { content: string, href?:string ,preventDefault:boolean};

function GradientButton({ content, href ,preventDefault}: Props) {
  return (
    <div className="flex items-center justify-end text-white ">
      <Link
        onClick={(e)=>{preventDefault? e.preventDefault() : ''}}
        href={href? href : '#'}
        className="w-full flex items-center justify-center rounded-md p-3 bg-gradient-to-r from-[#FCB045] from-2% via-[#FD1D1D] via-20% to-[#833AB4] to-99% hover:scale-105 duration-300 uppercase"
      >
        {content}
      </Link>
    </div>
  );
}

export default GradientButton;
