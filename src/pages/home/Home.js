import React from "react";
import {
  EarthquakePlaces,
  Globuses,
  ImageSlider,
  News,
  Partners,
  PressRelease,
  UsersInfo,
} from "./blocks";
import instance from "../../api";

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

const loader = async () => {
  const res = await instance.get(`posts?userId=1`);
  const res1 = await instance.get(`posts?userId=1`);
  return { earth_quakes: res.data, press_release: res1.data };
};

export const Home = Object.assign(Component, { loader });
