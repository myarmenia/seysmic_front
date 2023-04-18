import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { useFormAction } from "react-router-dom";
import instance from "../../api";
import { SearchInput } from "../../components/forms";
import { Container } from "../../components/reusable";
import { toFormData, toObject } from "../../helper";
import { useAppSubmit } from "../../hooks";
import { Result } from "./Result";
import styles from "./search.module.css";

export const Component = () => {
  const { filteredData: loaderData, search } = useLoaderData();
  const [value, setValue] = useState(search || "");
  const submit = useAppSubmit();
  const action = useFormAction();
  const onSubmit = () => {
    submit(toFormData({ search: value }), { action, method: "post" });
  };

  return (
    <>
      <Container bg={styles.myContainer} className={styles.search_box}>
        <form>
          <SearchInput
            className="w-[60%] mx-auto"
            inputProps={{
              value: value,
              onChange: (e) => setValue(e.target.value),
              placeholder: "Поиск",
              className: "w-full",
              boxClassName: "w-full [&_input]:w-full",
              name: "search",
            }}
            onButtonClick={onSubmit}
          />
        </form>
      </Container>
      <div className={styles.bg}>
        <Container className={styles.results}>
          {loaderData.length ? (
            loaderData.map(({ title, body, id }) => (
              <Result
                key={id}
                title={title}
                describtion={body}
                section="Землетрясения"
                to="/home"
                {...{ search }}
              />
            ))
          ) : (
            <span className="mx-auto text-[24px] text-center">
              Ничего не найдено
            </span>
          )}
        </Container>
      </div>
    </>
  );
};

const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const formObj = toObject(formData);
    // console.log(formObj);
    return { some: "hello" };
  } catch (err) {
    console.log(err);
  }
};

const loader = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");

  const data = await instance.get(`posts?userId=1`);
  const filteredData = data.data.filter((e) => e.body.includes(search));

  return { filteredData, search: search };
};

export const Search = Object.assign(Component, { action, loader });
