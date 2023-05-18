import React, { useState } from "react";
import { redirect, useLoaderData } from "react-router";
import { useFormAction } from "react-router-dom";
import instance from "../../api";
import h1_icon from "../../assets/trash/home/h1.svg";
import organization from "../../assets/trash/home/organization.svg";
import { Boxes } from "../../components/main";
import { getLang, toFormData, toObject } from "../../helper";
import { useAppSubmit, useTranslation } from "../../hooks";
import { CstmDateInput, SearchInput } from "../../components/forms";
import { PressReleaseBox } from "../../components/cards";
import axios from "axios";

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
  const { press_release: language } = useTranslation().language;

  const submit = useAppSubmit(),
    action = useFormAction(),
    { data, count } = useLoaderData();

  const [values, setValues] = useState({
    search: "",
    start_date: "",
    end_date: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(values).every((e) => !e)) {
      const data = toFormData(values);
      submit(data, { action, method: "post" });
    }
  };

  return (
    <Boxes {...{ count, data }} title={language.title} Item={PressReleaseBox}>
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-[32px] justify-center med-900:flex-wrap med-600:flex-col med-600:gap-[16px]"
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
        <div className="flex items-center gap-2 med-600:w-full">
          <CstmDateInput
            onChange={(e) =>
              setValues((p) => ({ ...p, start_date: e.target.value }))
            }
            className="max-w-[130px] text-sm med-600:max-w-none"
            placeholder="ДД.ММ.ГГГГ"
            name="start-date"
            value={values.start_date}
          />
          <div className="bg-dark-blue w-[6px] h-[1px] shrink-0" />
          <CstmDateInput
            onChange={(e) =>
              setValues((p) => ({ ...p, end_date: e.target.value }))
            }
            className="max-w-[130px] text-sm med-600:max-w-none"
            placeholder="ДД.ММ.ГГГГ"
            name="end-date"
            value={values.end_date}
          />
        </div>
      </form>
    </Boxes>
  );
};

const loader = async ({ params: { lang, page = 1 }, request }) => {
  const obj = Object.fromEntries(new URL(request.url).searchParams);
  try {
    const res = await instance.get(`press-releases?lng=${lang}&page=${page}`);
    if (res.status === 200) {
      return {
        data: res.data.data,
        count: res.data.cont_page,
      };
    } else {
      return new Error("Somting when wrong");
    }
  } catch (err) {
    alert(err);
  }
};

const action = async ({ request, params: { lang } }) => {
  try {
    const formData = await request.formData();
    const formObj = toObject(formData);
    console.log(formObj, "formObj");
    return redirect(`/${lang}/press-release/1`);
  } catch (err) {
    console.log(err);
  }
};

export const PressReleases = Object.assign(Component, { loader, action });
