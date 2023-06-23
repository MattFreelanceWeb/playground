/** main import */

import React, { ReactNode } from "react";

/** font import  */
import { Raleway } from "next/font/google";
import { Montserrat } from "next/font/google";
import MobileNav from "@/components/promomusic/nav/MobileNav";

/** main font  */
const raleway = Raleway( {weight:'300', subsets: ["latin"]} )
/** number font  */
const montserrat = Montserrat( {weight:'300', subsets: ["latin"]} )

type Props = { children: ReactNode };

function layout({ children }: Props) {
  return (
    <>
    <MobileNav/>
    <main className={`min-h-screen flex flex-col items-center justify-center ${raleway.className}`} >
      {children}
    </main>
    </>
  );
}

export default layout;


// #833AB4, #FD1D1D, #FCB045 linear CanvasGradient

// #727272 grey

// #13131399 black