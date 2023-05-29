import React, { useMemo } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./pagination.module.css";

export const Pagination = ({ count, maxPaginationItems = 7 }) => {
  const { page } = useParams();
  const { search } = useLocation();
  console.log(useLocation());
  const pageNum = +page;
  const my_items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const max = pageNum < 4 ? maxPaginationItems : pageNum + 4;
        const min =
          pageNum > count - 4 ? count - maxPaginationItems : pageNum - 3;
        return {
          num: i + 1,
          show: i >= min && i < max,
        };
      }),
    [page]
  );

  return (
    <div className={styles.pagination}>
      <Prev />
      {my_items.map(({ num, show }, i) => (
        <Item
          {...{ show }}
          active={pageNum === num}
          key={i}
          to={`../${num}${search}`}>
          {num}
        </Item>
      ))}
      <Next {...{ count }} />
    </div>
  );
};

const Item = ({ to, show, children, active, ...props }) => {
  if (!show) {
    return null;
  }
  return (
    <Link
      {...props}
      to={to}
      className={[styles.item, active ? styles.active : ""].join(" ")}>
      {children}
    </Link>
  );
};

const Prev = () => {
  const { page } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const prev = () => {
    if (page !== "1") {
      navigate(`../${+page - 1}${search}`);
    }
  };
  return (
    <div
      className={[
        styles.item,
        styles.prev,
        page === "1" ? "pointer-events-none" : "",
      ].join(" ")}
      onClick={prev}>
      ‹‹
    </div>
  );
};
const Next = ({ count }) => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();

  const next = () => {
    if (+page !== count) {
      navigate(`../${+page + 1}${search}`);
    }
  };
  return (
    <div
      className={[
        styles.item,
        styles.next,
        +page === count ? "pointer-events-none" : "",
      ].join(" ")}
      onClick={next}>
      ››
    </div>
  );
};
