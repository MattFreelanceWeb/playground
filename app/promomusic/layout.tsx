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
    <main className={`min-h-screen flex flex-col items-center w-full overflow-x-hidden bg-black p-4 ${raleway.className}`} >
      <MobileNav/>
      {children}
    </main>
    </>
  );
}

export default layout;