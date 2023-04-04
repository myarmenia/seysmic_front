import React from "react";
import { AccumulatedExperience } from "./blocks/AccumulatedExperience";
import { AdvanageMethod } from "./blocks/AdvanageMethod";
import { TechnologyWorks } from "./blocks/TechnologyWorks";

export const Technologies = () => {
  return (
    <>
      <TechnologyWorks />
      <AdvanageMethod />
      <AccumulatedExperience />
    </>
  );
};
