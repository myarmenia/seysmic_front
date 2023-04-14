import React from "react";
import { Container, Title } from "../reusable";

export const Boxes = ({ Item, data, title }) => {
  return (
    <Container bg="bg-[#F0F2F5]" className="flex flex-col gap-[44px] py-[42px]">
      <Title>{title}</Title>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-items-center w-full gap-[64px_27px] ">
        {data.map((el, i) => (
          <Item {...el} key={i} />
        ))}
      </div>
    </Container>
  );
};
