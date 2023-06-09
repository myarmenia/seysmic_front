import React from "react";
import { PreFace } from "./blocks/PreFace";
import Description from "./blocks/Description";
import { Outlet } from "react-router";
import instance from "../../../api";
import { RegionalIndex } from "./RegionalIndex";
const Component = () => {
  return (
    <div className="py-[var(--py)]">
      <PreFace />
      <Description />
    </div>
  );
};
const loader = async ({ params: { lang } }) => {
  try {
    const res = await instance.get(`regional-monitoring?lng=${lang}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const Regional = Object.assign(Component, { loader });
