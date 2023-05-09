import React from "react";
import { Product } from "./blocks/Product";
import { ApplicationProduct } from "./blocks/ApplicationProduct";
import { MarketingResearch } from "./blocks/MarketingResearch";

export const OurProduct = () => {
  return (
    <div className="pt-[var(--py)]">
      <Product />
      <ApplicationProduct />
      <MarketingResearch />
    </div>
  );
};
