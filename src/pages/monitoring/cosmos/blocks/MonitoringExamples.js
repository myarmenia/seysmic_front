import React, { useState } from "react";
import { Boxes } from "../../../../components/main";
import { MonitoringBox } from "../../../../components/cards";
import { SearchInput } from "../../../../components/forms";
import { useAppSubmit } from "../../../../hooks";
import { useFormAction, useLoaderData } from "react-router-dom";
import { FilterBtn } from "../../../../components/reusable";
import { toFormData, toObject } from "../../../../helper";
import instance from "../../../../api";
import axios from "axios";

const Component = () => {
  const data = useLoaderData();

  return (
    <Boxes
      boxes_className="grid-cols-[repeat(auto-fit,_minmax(340px,_1fr))]"
      title="ПРИМЕР МОНИТОРИНГА"
      data={data}
      Item={MonitoringBox}></Boxes>
  );
};

const loader = async () => {
  try {
    // const data = await instance.get(`posts?userId=1`);
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=1`
    );
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const MonitoringExamples = Object.assign(Component, { loader });
