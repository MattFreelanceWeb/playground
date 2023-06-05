import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface NavLinkArray{name: string; href: string }

type Props = { navLinkArray: NavLinkArray[], src: StaticImageData, title:string };

function SimpleNav({ navLinkArray, src, title }: Props) {
  {
    /** tableau à passer en props */
  }

  return (
    <header className="w-full flex flex-col items-center justify-center gap-4 shadow-2xl md:flex-row pt-2 pb-4 px-4 text-lg md:text-xl font-bold">
      {/** logo  redirect to home*/}
      <Link href="/" className="w-full flex flex-col items-center justify-center uppercase md:flex-row-reverse md:justify-end md:gap-4 ">
        <span>{title}</span> 
        <Image src={src} alt='logo de navigation' className="w-16 object-cover rounded-full" />
      </Link>
      {/**navlink */}
      <nav className="w-full flex items-center justify-evenly gap-4">
        {navLinkArray.map((item:{name: string; href: string} , i:number) => (
          <Link href="" key={i} className="capitalize after:content-[''] after:border-b-2 flex flex-col after:scale-0 hover:after:scale-100 duration-300 after:duration-300 after:border-black ">
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default SimpleNav;
