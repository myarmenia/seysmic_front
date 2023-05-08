import React from "react";
import instance from "../../../api";
import { Countries } from "../../../components/static";
import { Map } from "./blocks";

const Component = () => {
  return (
    <div className="py-[var(--py)]">
      <Map />
      <Countries />
    </div>
  );
};

const loader = async () => {
  const data = await instance.get("/users");
  return data.data;
};

export const GlobalMonitoring = Object.assign(Component, { loader });
