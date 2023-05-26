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

const loader = async ({ params: { lang } }) => {
  // const data = await instance.get("/users");
  try {
    const res = await instance.get(`regions?lng=${lang}`);
    if (res.status === 200) {
      return res.data.data;
    } else {
      return new Error("Somting when wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

export const GlobalMonitoring = Object.assign(Component, { loader });
