import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { useFormAction } from "react-router-dom";
import instance from "../../api";
import { SearchInput } from "../../components/forms";
import { Container, Pagination } from "../../components/reusable";
import { convertSearchParamsStr, getLang } from "../../helper";
import { useAppSubmit } from "../../hooks";
import { Result } from "./Result";
import styles from "./search.module.css";
import img from "../../assets/main/logo-light-gray.svg";

const Id = () => Math.random().toString();
const linkTo = (type, id) => {
  if (type === "press_release") {
    return `/press-release/release-page/${id}`;
  }
  if (type === "current_earthquake") {
    return `/earth-quakes/earth-quake/${id}`;
  }
  if (type === "map_region_info") {
    return `/monitoring/global/earth-map/${id}`;
  }
  return "/home";
};

export const Component = () => {
  const { data, page } = useLoaderData();
  const search = new URL(window.location.href).searchParams.get("search");
  const [value, setValue] = useState(search || "");
  const navigate = useNavigate();
  const onSubmit = () => {
    const search = convertSearchParamsStr({ search: value });
    navigate({ pathname: "", search: "?" + search });
  };

  return (
    <>
      <Container bg={styles.myContainer} className={styles.search_box}>
        <form
          onSubmit={(e) => {
            if (!value) {
              e.preventDefault();
            }
          }}>
          <SearchInput
            className="w-[60%] mx-auto med-600:w-full"
            inputProps={{
              value: value,
              onChange: (e) => setValue(e.target.value),
              placeholder: "Поиск",
              className: "w-full",
              boxClassName: "w-full [&_input]:w-full",
              name: "search",
            }}
            onButtonClick={onSubmit}
            clearValue={() => {
              setValue("");
              const search = convertSearchParamsStr({ search: "" });
              navigate(`../search/1`);
            }}
          />
        </form>
      </Container>
      <div
        style={{
          background: !data.length && `url("${img}") center no-repeat`,
        }}
        className={styles.bg}>
        <Container className={styles.results}>
          {data.length ? (
            data.map(({ title, type = "", description, id = "" }) => (
              <Result
                key={Id()}
                title={title}
                describtion={description}
                section="Землетрясения"
                to={linkTo(type, id)}
                {...{ search }}
              />
            ))
          ) : (
            <span className="mx-auto text-[24px] text-center">
              Ничего не найдено
            </span>
          )}
        </Container>
        {!!data.length && (
          <div>
            <Pagination count={page} linkto={true} />
          </div>
        )}
      </div>
    </>
  );
};

// const action = async ({ request }) => {
//   try {
//     const formData = await request.formData();
//     const formObj = toObject(formData);
//     return { some: "hello" };
//   } catch (err) {
//     console.log(err);
//   }
// };

const loader = async ({ params: { lang, page = 1 }, request }) => {
  const url = Object.fromEntries(new URL(request.url).searchParams);
  const search = convertSearchParamsStr(url);
  try {
    if (!search) {
      const res = await instance.get(
        `smart-search?lng=${lang}&search=&page=${page}`
      );
      return { data: res.data.data, page: res.data.cont_page };
    } else {
      const res = await instance.get(
        `smart-search?lng=${lang}&${search}&page=${page}`
      );
      return { data: res.data.data, page: res.data.cont_page };
    }
  } catch (err) {
    console.log(err);
  }
};

export const Search = Object.assign(Component, { loader });
