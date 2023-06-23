import Link from "next/link";
import React from "react";

type Props = { content: string };

function GradientButton({ content }: Props) {
  return (
    <div className="flex items-center justify-end ">
      <Link
        href=""
        className="rounded-md p-3 bg-gradient-to-r from-[#FCB045] from-2% via-[#FD1D1D] via-20% to-[#833AB4] to-99% hover:scale-105 duration-300"
      >
        {content}
      </Link>
    </div>
  );
}

export default GradientButton;
