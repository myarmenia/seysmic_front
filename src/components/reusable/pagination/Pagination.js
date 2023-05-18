import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./pagination.module.css";

export const Pagination = ({ count }) => {
  const { page } = useParams();
  console.log(+page + 1);
  return (
    <div className={styles.pagination}>
      {page === "1" ? (
        <div
          className={[
            styles.item,
            styles.prev,
            "cursor-default",
            styles.active,
          ].join(" ")}>
          ‹‹
        </div>
      ) : (
        <Link to={+page - 1} className={[styles.item, styles.prev].join(" ")}>
          ‹‹
        </Link>
      )}
      <Link to={null} className={[styles.item, styles.prev].join(" ")}>
        ""
      </Link>
      {/* <Dots /> */}
      {Array.from({ length: count }).map((el, index) => {})}
      <Link to={"../2"} className={styles.item}>
        1
      </Link>
      {/* <Dots /> */}
      {+page === count ? (
        <div
          className={[
            styles.item,
            styles.prev,
            "cursor-default",
            styles.active,
          ].join(" ")}>
          ››
        </div>
      ) : (
        <Link
          to={`../${+page + 1}`}
          className={[styles.item, styles.next].join(" ")}>
          ››
        </Link>
      )}
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
