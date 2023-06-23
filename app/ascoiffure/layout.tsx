import SimpleNav from "@/components/nav/SimpleNav";
import React, { ReactNode } from "react";
import ascoiffureLogo from "@/assets/images/ascoiffure/logo.png";

type Props = { children: ReactNode };

function layout({ children }: Props) {
  return (
    <div className="container mx-auto">
      <SimpleNav
        navLinkArray={[
          { name: "prendre RDV", href: "" },
          { name: "avis", href: "" },
          { name: "À propos", href: "" },
        ]}
        src={ascoiffureLogo}
        title="AS Coiffure"
      />
      {children}
    </div>
  );
}

export default layout;
