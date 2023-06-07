import React from 'react';
import instance from '../../../api';
import { Countries } from '../../../components/static';
import { Map } from './blocks';
import axios from 'axios';
import { convertToPercent } from '../../../helper';

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
    let res2 = await instance.get(`map-region-translation?lng=${lang}`);
    console.log(res2);

    if (res2.status === 200) {
      res2 = res2.data.map((el) => ({ id: el.id, title: el.title, ...convertToPercent(el) }));
    }
    return { country: res.data.data, map: res2 };
  } catch (error) {
    console.log(error);
  }
};

export const GlobalMonitoring = Object.assign(Component, { loader });
