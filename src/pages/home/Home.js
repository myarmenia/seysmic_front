import React from "react";
import instance from "../../api";
import {
  EarthquakePlaces,
  Globuses,
  ImageSlider,
  News,
  Partners,
  PressRelease,
  UsersInfo,
} from "./blocks";
import { NationalScheme } from "../monitoring/main/blocks";

const Component = () => {
  return (
    <>
      <ImageSlider />
      <Globuses />
      <EarthquakePlaces />
      <PressRelease />
      <Partners />
      <News />
      <UsersInfo />
    </>
  );
};

export const loader = async ({ params: { lang } }) => {
  try {
    let res = await instance.get(`home?lng=${lang}`);
    console.log(res);
    return res.data.data;
  } catch (error) {
    return error;
  }
};

export const Home = Object.assign(Component, { loader });
