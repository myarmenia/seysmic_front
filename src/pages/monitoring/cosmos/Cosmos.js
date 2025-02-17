import React from "react";
import { CosmosImage } from "./blocks/CosmosImage";
import { SchemaProcessing } from "./blocks/SchemaProcessing";
import { Outlet } from "react-router";

export const Cosmos = () => {
  return (
    <div className="py-[var(--py)]">
      <CosmosImage />
      <SchemaProcessing />
      {/* <Outlet /> */}
    </div>
  );
};
