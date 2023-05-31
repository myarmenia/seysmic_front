import React from "react";
import { EarthMap } from "../../../../../components/main";
import { Countries } from "../../../../../components/static";
import { Container, Title } from "../../../../../components/reusable";

export const Map = () => {
  return (
    <div className="py-[54px] flex flex-col gap-[45px] px-[32px] relative med-1200:px-[20px] med-600:py-4 med-600:gap-5">
      <Container>
        <Title>НА ГЛОБАЛЬНОЙ КАРТЕ СЕЙСМИЧЕСКОЙ ОПАСНОСТИ</Title>
        <p className="text-center text-[32px] text-[#938E97] leading-[150%] med-1200:text-[16px]">
          В хронологическом порядке показаны сейсмоопасные регионы, в которых
          ведется мониторинг и прогноз землетрясений.
        </p>
      </Container>
      <EarthMap className="pointer-events-none" />
      {/* <Container className="med-600:p-0">
        <Countries className="med-600:p-0" />
      </Container> */}
    </div>
  );
};
