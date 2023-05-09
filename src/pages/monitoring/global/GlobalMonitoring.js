import React from "react";
import instance from "../../../api";
import { Countries } from "../../../components/static";
import { Map } from "./blocks";
import axios from "axios";

const Component = () => {
  return (
    <div className="py-[var(--py)]">
      <Map />
      <Countries />
    </div>
  );
};

const loader = async () => {
  // const data = await instance.get("/users");
  const data = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  return data.data;
};

export const GlobalMonitoring = Object.assign(Component, { loader });
