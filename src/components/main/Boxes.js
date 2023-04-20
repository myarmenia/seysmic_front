import React, { useState } from "react";
import { CstmDateInput, SearchInput } from "../forms";
import { Container, Title } from "../reusable";

export const Boxes = ({ Item, data, title }) => {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <Container bg="bg-[#F0F2F5]" className="flex flex-col gap-[44px] py-[42px]">
      <Title>{title}</Title>
      <div className="flex items-center gap-[60px] ">
        <SearchInput
          inputProps={{
            placeholder: "Поиск",
            value: search,
            onChange: (e) => setSearch(e.target.value),
          }}
        />
        <div className="flex items-center gap-[16px]">
          <span className="text-dark-blue text-base font-semibold">Период</span>
          <div className="flex items-center gap-2">
            <CstmDateInput
              onChange={(e) => setStartDate(e.target.value)}
              className="max-w-[130px] text-sm"
              placeholder="ДД.ММ.ГГГГ"
            />
            <div className="bg-dark-blue w-[6px] h-[1px]" />
            <CstmDateInput
              onChange={(e) => setEndDate(e.target.value)}
              className="max-w-[130px] text-sm"
              placeholder="ДД.ММ.ГГГГ"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-items-center w-full gap-[64px_27px] ">
        {data.map((el, i) => (
          <Item {...el} key={i} />
        ))}
      </div>
    </Container>
  );
};
