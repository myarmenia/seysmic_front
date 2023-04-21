import React from "react";
import { Link } from "react-router-dom";
import styles from "./pagination.module.css";

export const Pagination = ({}) => {
  return (
    <div className={styles.pagination}>
      <Link to={""} className={[styles.item, styles.prev].join(" ")}>
        ‹‹
      </Link>
      <Link to={""} className={styles.item}>
        ...
      </Link>
      <Link to={""} className={styles.item}>
        1
      </Link>
      <Link to={""} className={styles.item}>
        ...
      </Link>
      <Link to={""} className={[styles.item, styles.next].join(" ")}>
        ››
      </Link>
    </div>
  );
};
