import React from 'react';
import { Container, Title, ViewPosition } from '../../../../components/reusable';
import styles from './results.module.css';
import { useTranslation } from '../../../../hooks';

export const Results = () => {
  const { about: language } = useTranslation().language;

  return (
    <ViewPosition>
      {(bool) => (
        <Container
          bg="bg-[#F0F2F5]"
          className="pt-[45px] pb-[80px] flex flex-col gap-[55px] med-600:gap-[35px]">
          <Title>{language.results.title}</Title>
          <div className="grid grid-cols-2 gap-x-5 gap-y-[26px] justify-items-center med-900:grid-cols-1">
            {language.results.data.map((el, i) => (
              <Box
                key={i}
                index={i + 1}
                title={el}
                style={{
                  opacity: bool ? 1 : 0,
                  transform: bool ? 'translateY(0)' : 'translateY(50px)',
                  transitionDelay: `${i / 10}s`,
                }}
              />
            ))}
          </div>
        </Container>
      )}
    </ViewPosition>
  );
};

const Box = ({ title, index, style }) => {
  return (
    <div className={styles.box} style={style}>
      <div className={styles.box_index}>
        <p>{index}</p>
      </div>
      <p className="med-470:!text-[10.5px]">{title}</p>
    </div>
  );
};
