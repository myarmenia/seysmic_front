import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import instance from "../../api";
import { PressReleaseBox } from "../../components/cards";
import { CstmDateInput, SearchInput } from "../../components/forms";
import { Boxes } from "../../components/main";
import { convertSearchParamsStr } from "../../helper";
import { useTranslation } from "../../hooks";

const Component = () => {
  const searchValues = Object.fromEntries(
    new URL(window.location.href).searchParams
  );
  const { press_release: language } = useTranslation().language;

  const { data, count } = useLoaderData(),
    navigate = useNavigate();

  const [values, setValues] = useState({
    search: searchValues?.search || "",
    date_from: searchValues?.date_from || "",
    date_to: searchValues?.date_to || "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const search = convertSearchParamsStr({ ...values });
    navigate({ pathname: "", search: "?" + search });
  };

  return (
    <Boxes {...{ count, data }} title={language?.title} Item={PressReleaseBox}>
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-[32px] justify-center med-900:flex-wrap med-600:flex-col med-600:gap-[16px]"
      >
        <SearchInput
          inputProps={{
            placeholder: language?.search,
            value: values.search,
            onChange: (e) =>
              setValues((p) => ({
                ...p,
                search: e.target.value,
              })),
            name: "search",
          }}
          clearValue={() => setValues((p) => ({ ...p, search: "" }))}
        />
        <div className="flex items-center gap-2 med-600:w-full">
          <CstmDateInput
            onChange={(e) =>
              setValues((p) => ({
                ...p,
                date_from: e.target.value,
              }))
            }
            className="max-w-[130px] text-sm med-600:max-w-none"
            placeholder={language?.start_date}
            name="start-date"
            value={values.date_from}
          />
          <div className="bg-dark-blue w-[6px] h-[1px] shrink-0" />
          <CstmDateInput
            onChange={(e) =>
              setValues((p) => ({
                ...p,
                date_to: e.target.value,
              }))
            }
            className="max-w-[130px] text-sm med-600:max-w-none"
            placeholder={language?.end_date}
            name="end-date"
            value={values.date_to}
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
        `press-releases-filter?lng=${lang}&page=${page}&${search}`
      );
      return {
        data: filter.data.data,
        count: filter.data.cont_page,
      };
    }
    const res = await instance.get(`press-releases?lng=${lang}&page=${page}`);
    return {
      data: res.data.data,
      count: res.data.cont_page,
    };
  } catch (err) {
    return err;
  }
};

export const PressReleases = Object.assign(Component, { loader });
