import React from "react";
import { PreFace } from "./blocks/PreFace";
import Description from "./blocks/Description";
import { Outlet } from "react-router";
export const Regional = () => {
  return (
    <div className="py-[var(--py)]">
      <PreFace />
      <Description>
        <Outlet />
      </Description>
    </div>
  );
};
