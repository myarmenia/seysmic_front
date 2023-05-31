import React from "react";
import { Preface, Publications, Results } from "./blocks";
import { NationalScheme } from "../monitoring/main/blocks";

export const About = () => {
  return (
    <>
      <Preface />
      <Publications />
      <Results />
      <NationalScheme />
    </>
  );
};
