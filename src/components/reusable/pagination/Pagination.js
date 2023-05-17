import React from "react";
import { Link } from "react-router-dom";
import styles from "./pagination.module.css";

export const Pagination = ({}) => {
  return (
    <div className={styles.pagination}>
      <Link to={""} className={[styles.item, styles.prev].join(" ")}>
        ‹‹
      </Link>
      <Dots />
      <Link to={"../2"} className={styles.item}>
        1
      </Link>
      <Dots />
      <Link to={""} className={[styles.item, styles.next].join(" ")}>
        ››
      </Link>
    </div>
  );
};

const Dots = ({ ...props }) => {
  return (
    <Link to={""} className={styles.item} {...props}>
      ...
    </Link>
  );
};
