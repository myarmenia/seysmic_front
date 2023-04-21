import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { useFormAction } from "react-router-dom";
import instance from "../../api";
import h1_icon from "../../assets/trash/home/h1.svg";
import organization from "../../assets/trash/home/organization.svg";
import { Boxes, PressReleaseBox } from "../../components/main";
import { toFormData, toObject } from "../../helper";
import { useAppSubmit } from "../../hooks";
import { CstmDateInput, SearchInput } from "../../components/forms";

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
    start_date: "",
    end_date: "",
  });

  const data1 = data.map((el) => ({
    ...expl,
    description: el.body.split(" ").slice(0, 8).join(" ") + "...",
    to: `/press-release/${el.id}`,
  }));

  const onSubmit = (e) => {
    e.preventDefault();
    const data = toFormData(values);
    submit(data, { action, method: "post" });
  };

  return (
    <Boxes data={data1} title="Пресс-релиз" Item={PressReleaseBox}>
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-[32px] justify-center"
      >
        <SearchInput
          inputProps={{
            placeholder: "Поиск",
            value: values.search,
            onChange: (e) =>
              setValues((p) => ({ ...p, search: e.target.value })),
            name: "search",
          }}
          clearValue={() => setValues((p) => ({ ...p, search: "" }))}
        />
        <div className="flex items-center gap-2">
          <CstmDateInput
            onChange={(e) =>
              setValues((p) => ({ ...p, start_date: e.target.value }))
            }
            className="max-w-[130px] text-sm"
            placeholder="ДД.ММ.ГГГГ"
            name="start-date"
            value={values.start_date}
          />
          <div className="bg-dark-blue w-[6px] h-[1px]" />
          <CstmDateInput
            onChange={(e) =>
              setValues((p) => ({ ...p, end_date: e.target.value }))
            }
            className="max-w-[130px] text-sm"
            placeholder="ДД.ММ.ГГГГ"
            name="end-date"
            value={values.end_date}
          />
        </div>
      </form>
    </Boxes>
  );
};

const loader = async () => {
  console.log("Hello");
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

export const PressReleases = Object.assign(Component, { loader, action });
