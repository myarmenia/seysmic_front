import React from "react";
import { Container } from "../../components/reusable";
import { AdvanageMethod } from "./blocks/AdvanageMethod";
import { AccumulatedExperience } from "./blocks/AccumulatedExperience";
import { TechnologyWorks } from "./blocks/TechnologyWorks";

export const Technologies = () => {
  return (
    <>
      <TechnologyWorks />
      <AdvanageMethod />
      <AccumulatedExperience />
    </>
    // <Container className="flex flex-col gap-[44px] py-[42px]">
    // </Container>
  );
};
