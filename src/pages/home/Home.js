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

export const Home = () => {
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
