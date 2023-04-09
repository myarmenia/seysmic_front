import React from "react";
import { Map, Countries } from "./blocks";
import instance from "../../../api";

export const Component = () => {
  return (
    <div className="py-5">
      <Map />
      <Countries />
    </div>
  );
};

const loader = async () => {
  const data = await instance.get("/users");
  return data.data;
};

export const Monitoring = Object.assign(Component, { loader });
