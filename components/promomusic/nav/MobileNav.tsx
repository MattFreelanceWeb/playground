"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/promomusic/Logo.png";
import ToggleMenu from "./ToggleMenu";
import NavList from "./NavList";
import GradientButton from "../button/gradientButton";

type Props = {};

function MobileNav({}: Props) {

  const [toggle, setToggle] = useState(false);
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {

    setWindowSize(window.innerWidth)

    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });

    windowSize >= 1024? setToggle(true) : setToggle(false)

    return window.removeEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize])
  

  return (
    <nav className="flex flex-col justify-between items-center px-10 py-8 bg-black text-white uppercase overflow-x-hidden lg:flex-row">
      <div className="w-full flex justify-between items-center lg:w-auto">
        <Link href="/" className=" flex items-center justify-center ">
          <Image src={Logo} alt={"Logo-promomusic"} />
        </Link>
        <ToggleMenu toggle={toggle} setToggle={setToggle} />
      </div>

      <div
        className={`flex-1 flex flex-col items-center justify-center duration-500 gap-4 lg:flex-row ${
          toggle ? "flex translate-x-0 " : "hidden translate-x-full "
        }`}
      >
        <NavList />
        <GradientButton content={"créer ma campagne"} />
      </div>
    </nav>
  );
}

export default MobileNav;
