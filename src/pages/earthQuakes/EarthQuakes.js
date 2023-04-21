import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { useFormAction } from "react-router-dom";
import instance from "../../api";
import h1_icon from "../../assets/trash/home/h1.svg";
import organization from "../../assets/trash/home/organization.svg";
import { Boxes, QuakeBox } from "../../components/main";
import { toFormData, toObject } from "../../helper";
import { useAppSubmit } from "../../hooks";

// ------- Delete -----------
const expl = {
  title: "Название организации",
  icon: h1_icon,
  image: organization,
  date: "24.02.2023",
  time: "16:00",
};
// ==========================

const Component = () => {
  const submit = useAppSubmit(),
    action = useFormAction(),
    data = useLoaderData();

  const [values, setValues] = useState({
    search: "",
    magnitude: "",
    start_date: "",
    end_date: "",
  });

  const data1 = data.map((el) => ({
    ...expl,
    description: el.body.split("").slice(0, 68).join("") + "...",
    to: `/earth-quakes/${el.id}`,
  }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (Object.values(values).every((e) => !!e)) {
      const data = toFormData(values);
      submit(data, { action, method: "post" });
    }
  };

  return (
    <Boxes
      {...{
        onSubmit,
        values,
        setValues,
      }}
      data={data1}
      title="Текущие землетрясения"
      Item={QuakeBox}
      isMagnitude
    />
  );
};

const loader = async () => {
  console.log("World");
  try {
    const data = await instance.get(`posts?userId=1`);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const formObj = toObject(formData);
    console.log(formObj, "formObj");
    return { some: "hello" };
  } catch (err) {
    console.log(err);
  }
};

export const EarthQuakes = Object.assign(Component, { loader, action });
