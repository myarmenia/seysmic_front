import React from 'react';
import instance from '../../api';
import {
  EarthquakePlaces,
  Globuses,
  ImageSlider,
  News,
  Partners,
  PressRelease,
  UsersInfo,
} from './blocks';
import { useLinkClickHandler } from 'react-router-dom';

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
    let res2 = await instance.get(`banner?lng=${lang}`);
    console.log(res);
    return { data: res.data.data, banner: res2.data.data };
  } catch (error) {
    return error;
  }
};

export const Home = Object.assign(Component, { loader });
