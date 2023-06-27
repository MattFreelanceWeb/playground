"use client";

import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import ProfilFunnel from "./ProfilFunnel";
import GradientButton from "../button/GradientButton";
import { breadcrumbContent, breadcrumbObject } from "../data/data";
import SecundaryButton from "../button/SecundaryButton";
import { whoAreYouContent } from "../data/data";
import { platformContent } from "../data/data";
import PlatformFunnel from "./PlatformFunnel";
import ContentFunnel from "./ContentFunnel";
import { yourContent } from "../data/data";
import PromoteFunnel from "./PromoteFunnel";

type Props = {};

function Funnel({}: Props) {
  const [actualIndex, setActuelIndex] = useState(0);
  const [objectFunnel, setObjectFunnel] = useState({
    customer: whoAreYouContent[0].name,
    platform: platformContent[0].name,
    content: yourContent[0].name,
  });

  const nextStep = (BreadcrumbContent: breadcrumbObject[]) => {
    actualIndex < BreadcrumbContent.length - 1 &&
      setActuelIndex(actualIndex + 1);
  };

  const previousStep = () => {
    actualIndex < 0 && setActuelIndex(0);
    actualIndex > 0 && setActuelIndex(actualIndex - 1);
  };

  return (
    <div className="min-h-[75vh] w-full overflow-hidden flex flex-col justify-between ">
      <Breadcrumb actualIndex={actualIndex} setActualIndex={setActuelIndex} />
      {actualIndex === 0 && (
        <ProfilFunnel
          objectFunnel={objectFunnel}
          setObjectFunnel={setObjectFunnel}
          actualIndex={actualIndex}
        />
      )}
      {actualIndex === 1 && (
        <ContentFunnel
          objectFunnel={objectFunnel}
          setObjectFunnel={setObjectFunnel}
          actualIndex={actualIndex}
        />
      )}
      {actualIndex === 2 && (
        <PlatformFunnel
          objectFunnel={objectFunnel}
          setObjectFunnel={setObjectFunnel}
          actualIndex={actualIndex}
        />
      )}
      {actualIndex === 3 && (
        <PromoteFunnel
          objectFunnel={objectFunnel}
          setObjectFunnel={setObjectFunnel}
          actualIndex={actualIndex}
        />
      )}

      <div className="flex items-center justify-between p-4 ">
        <div
          className="w-36 mt-4"
          onClick={() => {
            previousStep();
          }}
        >
          <SecundaryButton content={"retour"} href="" preventDefault={true} />
        </div>
        <div
          className="w-36 mt-4"
          onClick={() => {
            nextStep(breadcrumbContent);
          }}
        >
          <GradientButton content={"continuer"} preventDefault={true} />
        </div>
      </div>
    </div>
  );
}

export default Funnel;
