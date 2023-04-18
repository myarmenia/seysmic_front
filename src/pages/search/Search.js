import React from "react";
import { Link } from "react-router-dom";
import { SearchInput } from "../../components/forms";
import { Container } from "../../components/reusable";
import { getLang } from "../../helper";
import styles from "./search.module.css";

export const Search = () => {
  return (
    <>
      <Container bg={styles.myContainer} className={styles.search_box}>
        <SearchInput
          className="w-[60%] mx-auto"
          inputProps={{
            placeholder: "Поиск",
            className: "w-full",
            boxClassName: "w-full [&_input]:w-full",
          }}
        />
      </Container>
      <Container className={styles.results}>
        <Result
          title="Текущие землетрясения "
          describtion="Компания Терморобот занимается Название производством котельного оборудования с 2010 г.Компания Терморобот занимается производством котельного оборудования с 2010 г."
          section="Землетрясения "
          to="/home"
        />
      </Container>
    </>
  );
};

const Result = ({ section, title, describtion, to }) => {
  return (
    <div className={styles.result}>
      <p className={styles.result_title}>{section}</p>
      <Link to={getLang(to)}>{title}</Link>
      <p className={styles.result_describtion}>{describtion}</p>
    </div>
  );
};
