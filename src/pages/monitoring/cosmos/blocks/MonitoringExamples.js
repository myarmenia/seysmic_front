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
  const submit = useAppSubmit(),
    action = useFormAction(),
    data = useLoaderData();

  const [values, setValues] = useState({
    search: "",
    filter: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (Object.values(values).every((e) => !!e)) {
      const data = toFormData(values);
      submit(data, { action, method: "post" });
    }
  };

  return (
    <Boxes
      boxes_className="grid-cols-[repeat(auto-fit,_minmax(340px,_1fr))]"
      title="ПРИМЕР МОНИТОРИНГА"
      data={data}
      Item={MonitoringBox}
    >
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-[32px] justify-between w-full"
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
        <div className="flex items-center gap-5">
          <FilterBtn
            active={values.filter === "d"}
            onClick={() => setValues((p) => ({ ...p, filter: "d" }))}
          >
            См. еще примеры
          </FilterBtn>
          <FilterBtn
            active={values.filter === "a"}
            onClick={() => setValues((p) => ({ ...p, filter: "a" }))}
          >
            по тегу
          </FilterBtn>
          <FilterBtn
            active={values.filter === "b"}
            onClick={() => setValues((p) => ({ ...p, filter: "b" }))}
          >
            по дате
          </FilterBtn>
          <FilterBtn
            active={values.filter === "c"}
            onClick={() => setValues((p) => ({ ...p, filter: "c" }))}
          >
            по название
          </FilterBtn>
        </div>
      </form>
    </Boxes>
  );
};

const loader = async () => {
  console.log("monitoring boxes");
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

export const MonitoringExamples = Object.assign(Component, { loader, action });
