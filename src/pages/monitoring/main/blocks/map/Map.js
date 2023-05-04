import React from "react";
import { EarthMap } from "../../../../../components/main";
import { Countries } from "../../../../../components/static";
import { Container, Title } from "../../../../../components/reusable";

export const Map = () => {
  return (
    <div className="py-[54px] flex flex-col gap-[45px] px-[32px] relative med-600:px-[20px]">
      <Container>
        <Title>НА ГЛОБАЛЬНОЙ КАРТЕ СЕЙСМИЧЕСКОЙ ОПАСНОСТИ</Title>
        <p className="text-center text-[32px] text-[#938E97] leading-[150%]">
          В хронологическом порядке показаны сейсмоопасные регионы, в которых
          ведется мониторинг и прогноз землетрясений.
        </p>
      </Container>
      <EarthMap className="pointer-events-none" />
      <Container>
        <Countries />
      </Container>
    </div>
  );
};
