import React, { useMemo } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./pagination.module.css";
import { getLang } from "../../../helper";

export const Pagination = ({ count, maxPaginationItems = 7, linkto }) => {
  const { page } = useParams();
  const { search } = useLocation();
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
      <Prev linkto={linkto} />
      {my_items.map(({ num, show }, i) => (
        <Item
          {...{ show }}
          active={pageNum === num}
          key={i}
          to={
            linkto ? getLang(`/search/${num}${search}`) : `../${num}${search}`
          }>
          {num}
        </Item>
      ))}
      <Next {...{ count }} linkto={linkto} />
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

const Prev = ({ linkto }) => {
  const { page } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  console.log(linkto, page);
  const prev = () => {
    if (linkto && page !== "1") {
      navigate(getLang(`/search/${+page - 1}${search}`));
    }
    if (page !== "1" && !linkto) {
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
const Next = ({ count, linkto }) => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();

  const next = () => {
    if (linkto && +page !== count) {
      navigate(getLang(`/search/${+page + 1}${search}`));
    } else if (+page !== count) {
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
