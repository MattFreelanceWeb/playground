import Link from 'next/link'
import React from 'react'
import { navContent } from '../data/data'

type Props = {}

function NavList({}: Props) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-8 text-base lg:flex-row ">
    {navContent.map((item, i) => (
      <Link href={item.href} key={i} className="h-20 lg:h-0 flex items-center">
        <div
          className="flex flex-col items-center hover:scale-105 duration-500 hover:after:bg-gradient-to-r hover:after:from-[#FCB045] hover:after:from-2% hover:after:via-[#FD1D1D] hover:after:via-20% hover:after:to-[#833AB4] hover:after:to-99% hover:after:content-['']  after:w-full after:bg-white hover:after:h-0.5 after:scale-0 hover:after:scale-105 hover:after:duration-500"
        >
          {item.name}
        </div>
      </Link>
    ))}
  </div>
  )
}

export default NavList