import React from "react";
import { Container, Pagination, Title } from "../reusable";
import { useTranslation } from "../../hooks";

export const Boxes = ({
  Item,
  data,
  count = 1,
  title,
  children,
  boxes_className = "",
}) => {
  return (
    <Container
      bg="bg-[#F0F2F5]"
      className="min-h-[70vh] flex flex-col gap-[44px] py-[var(--py)] med-600:gap-[28px]">
      <Title>{title}</Title>
      {children}
      <div>
        <div
          className={[
            "grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-items-center w-full gap-[64px_46px] med-1440:gap-x-[30px] med-600:gap-5",
            boxes_className,
          ].join(" ")}>
          {data?.map((el, i) => (
            <Item {...el} key={i} />
          ))}
        </div>
        <Pagination count={count} />
      </div>
    </Container>
  );
};
