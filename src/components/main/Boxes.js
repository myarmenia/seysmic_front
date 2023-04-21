import React from "react";
import { CstmDateInput, CstmInput, SearchInput } from "../forms";
import { Container, Pagination, Title } from "../reusable";

export const Boxes = ({
  Item,
  data,
  title,
  onSubmit,
  values,
  setValues,
  isMagnitude,
}) => {
  return (
    <Container bg="bg-[#F0F2F5]" className="flex flex-col gap-[44px] py-[42px]">
      <Title>{title}</Title>
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-[32px] justify-center"
      >
        <SearchInput
          inputProps={{
            placeholder: "Поиск",
            value: values.search,
            onChange: (e) =>
              setValues((p) => ({ ...p, search: e.target.value })),
            name: "search",
          }}
          clearValue={() => setValues((p) => ({ ...p, search: "" }))}
        />
        {isMagnitude && (
          <CstmInput
            placeholder="Магнитуда"
            value={values?.magnitude}
            onChange={(e) =>
              setValues((p) => ({ ...p, magnitude: e.target.value }))
            }
            name="magnitude"
            className="max-w-[132px] !px-4"
          />
        )}
        <div className="flex items-center gap-2">
          <CstmDateInput
            onChange={(e) =>
              setValues((p) => ({ ...p, start_date: e.target.value }))
            }
            className="max-w-[130px] text-sm"
            placeholder="ДД.ММ.ГГГГ"
            name="start-date"
            value={values.start_date}
          />
          <div className="bg-dark-blue w-[6px] h-[1px]" />
          <CstmDateInput
            onChange={(e) =>
              setValues((p) => ({ ...p, end_date: e.target.value }))
            }
            className="max-w-[130px] text-sm"
            placeholder="ДД.ММ.ГГГГ"
            name="end-date"
            value={values.end_date}
          />
        </div>
      </form>
      <div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-items-center w-full gap-[64px_27px] ">
          {data.map((el, i) => (
            <Item {...el} key={i} />
          ))}
        </div>
        <Pagination />
      </div>
    </Container>
  );
};
