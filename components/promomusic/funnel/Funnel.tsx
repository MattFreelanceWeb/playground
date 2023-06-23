"use client";

import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import ProfilFunnel from "./ProfilFunnel";
import GradientButton from "../button/GradientButton";
import { breadcrumbContent, breadcrumbObject } from "../data/data";
import SecundaryButton from "../button/SecundaryButton";

type Props = {};

function Funnel({}: Props) {
  const [actualIndex, setActuelIndex] = useState(0);

  const nextStep = (BreadcrumbContent: breadcrumbObject[]) => {
    actualIndex < BreadcrumbContent.length - 1 &&
      setActuelIndex(actualIndex + 1);
  };

  const previousStep = () => {
    actualIndex < 0 && setActuelIndex(0);
    actualIndex > 0 && setActuelIndex(actualIndex - 1);
  };

  return (
    <div className="min-h-[75vh] flex flex-col justify-between">
      <Breadcrumb actualIndex={actualIndex} setActualIndex={setActuelIndex} />
      <ProfilFunnel />
      <div className="flex items-center justify-between">
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
