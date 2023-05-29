import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { useFormAction } from "react-router-dom";
import instance from "../../api";
import h1_icon from "../../assets/trash/home/h1.svg";
import organization from "../../assets/trash/home/organization.svg";
import { Boxes } from "../../components/main";
import {
  convertSearchParamsStr,
  getLang,
  toFormData,
  toObject,
} from "../../helper";
import { useAppSubmit, useTranslation } from "../../hooks";
import { CstmDateInput, CstmInput, SearchInput } from "../../components/forms";
import { QuakeBox } from "../../components/cards";
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
  const searchValues = Object.fromEntries(
    new URL(window.location.href).searchParams
  );
  const {
    earth_quakes: { end_date, magnitude, search, start_date, title },
  } = useTranslation().language;
  const { data, count } = useLoaderData(),
    navigate = useNavigate();

  const [values, setValues] = useState({
    search: searchValues?.search || "",
    date_from: searchValues?.date_from || "",
    date_to: searchValues?.date_to || "",
    magnitude: searchValues?.magnitude || "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const search = convertSearchParamsStr({ ...values });
    navigate({ pathname: "", search: "?" + search });
  };
  return (
    <Boxes data={data} count={count} title={title} Item={QuakeBox}>
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-[32px] justify-center med-900:flex-wrap med-600:flex-col med-600:gap-[16px]">
        <SearchInput
          inputProps={{
            placeholder: search,
            value: values.search,
            onChange: (e) =>
              setValues((p) => ({ ...p, search: e.target.value })),
            name: "search",
          }}
          clearValue={() => {
            setValues((p) => ({
              search: "",
              date_from: "",
              date_to: "",
              magnitude: "",
            }));
            navigate(getLang("/earth-quakes/1"));
          }}
        />
        <CstmInput
          placeholder={magnitude}
          value={values?.magnitude}
          onChange={(e) =>
            setValues((p) => ({ ...p, magnitude: e.target.value }))
          }
          name="magnitude"
          className="max-w-[132px] !px-4 med-600:max-w-none"
        />
        <div className="flex items-center gap-2 med-600:w-full">
          <CstmDateInput
            onChange={(e) =>
              setValues((p) => ({ ...p, start_date: e.target.value }))
            }
            className="max-w-[130px] text-sm med-600:max-w-none"
            placeholder={start_date}
            name="start-date"
            value={values.start_date}
          />
          <div className="bg-dark-blue w-[6px] h-[1px] shrink-0" />
          <CstmDateInput
            onChange={(e) =>
              setValues((p) => ({ ...p, end_date: e.target.value }))
            }
            className="max-w-[130px] text-sm med-600:max-w-none"
            placeholder={end_date}
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
  const search = convertSearchParamsStr(obj);
  try {
    if (Object.keys(obj).length) {
      const filter = await instance.get(
        `current-earthquakes-filter?lng=${lang}&page=${page}&${search}`
      );
      return {
        data: filter.data.data,
        count: filter.data.cont_page,
      };
    }
    const res = await instance.get(
      `current-earthquake?lng=${lang}&page=${page}`
    );
    return {
      data: res.data.data,
      count: res.data.cont_page,
    };
  } catch (err) {
    return err;
  }
};

export const EarthQuakes = Object.assign(Component, { loader });
