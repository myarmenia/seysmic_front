import React from 'react';
import { EarthMap } from '../../../../../components/main';
import { Countries } from '../../../../../components/static';
import { Container, Title } from '../../../../../components/reusable';
import { useTranslation } from '../../../../../hooks';

export const Map = () => {
  const { map: language } = useTranslation().language;
  return (
    <div className="py-[54px] flex flex-col gap-[45px] px-[32px] relative med-1200:px-[20px] med-600:py-4 med-600:gap-5">
      <Container>
        <Title>{language?.title}</Title>
        <div className="w-[25%] min-w-[175px] bg-dark-blue h-[1px] mt-3 m-[0_auto] mb-4" />
        <p className="text-center text-[32px] text-[#938E97] leading-[150%] med-1200:text-[16px]">
          {language?.subtitle}
        </p>
        <div className="w-[25%] min-w-[175px] bg-dark-blue h-[1px] mt-3 m-[0_auto]" />
      </Container>
      <EarthMap className="pointer-events-none" />
      <Container className="med-600:p-0">
        <Countries className="med-600:p-0" />
      </Container>
    </div>
  );
};
