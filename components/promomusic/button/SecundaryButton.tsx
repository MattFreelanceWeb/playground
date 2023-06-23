import Link from "next/link";
import React from "react";

type Props = { content: string, href?:string ,preventDefault:boolean};

function SecundaryButton({ content, href ,preventDefault}: Props) {
  return (
    <div className="flex items-center justify-end text-white ">
      <Link
        onClick={(e)=>{preventDefault? e.preventDefault() : ''}}
        href={href? href : '#'}
        className="w-full flex items-center justify-center rounded-md p-3 hover:scale-105 duration-300 border-2 border-gray-500 text-gray-300/50 uppercase"
      >
        {content}
      </Link>
    </div>
  );
}

export default SecundaryButton;