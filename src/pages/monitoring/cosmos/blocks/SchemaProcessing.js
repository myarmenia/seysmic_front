import React, { useMemo } from 'react';
import { Container, Title } from '../../../../components/reusable';
import styles from '../blocks/cosmos.module.css';
import stputnik from '../../../../assets/main/monitoring/cosmos/sputnik.svg';
import notebook from '../../../../assets/main/monitoring/cosmos/notebook.svg';
import sputniktwo from '../../../../assets/main/monitoring/cosmos/sputniktwo.svg';
import dotLine from '../../../../assets/main/monitoring/cosmos/dotLine.svg';
import curelyLine from '../../../../assets/main/monitoring/cosmos/curelyLine.svg';
import curelyLine2 from '../../../../assets/main/monitoring/cosmos/curelyLine2.svg';
import a1 from '../../../../assets/shema/1.png';
import a2 from '../../../../assets/shema/2.png';
import a3 from '../../../../assets/shema/3.png';
import a4 from '../../../../assets/shema/4.png';
import a5 from '../../../../assets/shema/5.png';
import a6 from '../../../../assets/shema/6.png';
import a7 from '../../../../assets/shema/7.png';
import armenia from '../../../../assets/shema/armenia.png';
import ex from '../../../../assets/shema/ex.png';
import { generateArray } from '../../../../helper';
import { useParams } from 'react-router';
import { useTranslation } from '../../../../hooks';

export const SchemaProcessing = () => {
  const { lang } = useParams();
  const { schema_processing: language } = useTranslation().language;
  const imgData = useMemo(() => {
    if (lang === 'ru') {
      return [
        {
          title: 'Фрагмент изображения',
          images: generateArray(8, a3),
        },
        {
          title: 'Региональные линеаментны (порог 130)',
          images: generateArray(8, a4),
        },
        {
          title: 'Линии вытянутости штрихов',
          images: generateArray(8, a5),
        },
        {
          title: 'Плотности штрихов',
          images: generateArray(8, a6),
        },
        {
          title: 'РОЗА-ДИАГРАММА',
          images: generateArray(8, a7),
        },
      ];
    }
    if (lang === 'am') {
      return [
        {
          title: 'ՊԱՏԿԵՐԻ ՖՐԱԳՄԵՆՏ',
          images: generateArray(8, a3),
        },
        {
          title: 'ՌԵԳԻՈՆԱԼ ԼԻՆԵԱՄԵՆՏՆԵՐ (ՇԵՄԸ՝ 130)',
          images: generateArray(8, a4),
        },
        {
          title: 'Շտրիխների ձգվածության գծերը',
          images: generateArray(8, a5),
        },
        {
          title: 'Շտրիխների խտությունը',
          images: generateArray(8, a6),
        },
        {
          title: 'ՎԱՐԴ-ԴԻԱԳՐԱՄ',
          images: generateArray(8, a7),
        },
      ];
    }
    if (lang === 'en') {
      return [
        {
          title: 'Image targment',
          images: generateArray(8, a3),
        },
        {
          title: 'Regional Lineaments (threshold 130)',
          images: generateArray(8, a4),
        },
        {
          title: 'Stroke lines',
          images: generateArray(8, a5),
        },
        {
          title: 'Stroke density',
          images: generateArray(8, a6),
        },
        {
          title: 'Rose chart',
          images: generateArray(8, a7),
        },
      ];
    }
    return [];
  }, [lang]);
  return (
    <>
      <Container className="mb-[60px] relative max-w-[1440px] mx-auto ">
        <Title>{language?.title2}</Title>
        <div className={styles.schema_processing}>
          <p dangerouslySetInnerHTML={{ __html: language?.text5 }}></p>
        </div>
      </Container>
      <Container
        bg="bg-[#F9F9F9] relative max-w-[1440px] mx-auto"
        className="flex pb-[32px] mt-[20px] gap-[80px] med-1200:flex-col med-1200:gap-0 med-1200:pb-0">
        <div className="flex gap-[20px] justify-between  max-w-[400px]  ">
          <div className="flex flex-col justify-between w-full gap-8 ">
            <div className="h-[400px] med-600:h-[300px] ">
              <div className="flex gap-[20px]  relative  justify-center">
                <img loading="lazy" src={stputnik} alt="sputnik" className="med-600:w-[120px]" />
                <img
                  loading="lazy"
                  src={dotLine}
                  alt="dotLine"
                  className="absolute top-[80%] left-[26%]"
                />
              </div>
              <div className="flex gap-[20px] justify-between med-600:gap-2">
                <img
                  loading="lazy"
                  src={sputniktwo}
                  alt="sputniktwo"
                  className="med-600:w-[70px]"
                />
                <img loading="lazy" src={dotLine} alt="dotLine" className="rotate-[223deg]" />
                <div className="relative">
                  <p className="text-black">{language?.satellite_selection?.text1}</p>
                  <img loading="lazy" src={notebook} alt="notebook" className="med-600:w-[150px]" />
                  <img
                    loading="lazy"
                    src={curelyLine}
                    alt="curelyLine"
                    className="absolute top-[-40%] right-[-40%] med-1200:hidden "
                  />
                  <img
                    loading="lazy"
                    src={curelyLine2}
                    alt="curelyLine2"
                    className="absolute top-[50%] right-[-40%] hidden med-1200:block "
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#bbbbbb] text-center  py-[15px] px-[20px] text-dark-blue">
              {language?.satellite_selection?.text6}
            </div>
          </div>
        </div>
        <div className="flex gap-[20px]  flex-col max-w-[700px] min-w-[500px] med-1200:min-w-[300px] med-600:min-w-[200px]">
          <div className={styles.sputnik_box}>
            <div className={styles.sputnik_box_title}>
              {language?.satellite_selection?.text2}
              <img
                loading="lazy"
                src={dotLine}
                alt="dotLine"
                className={styles.sputnik_box_line_down}
              />
            </div>
            <div className={styles.dot_line_box}>
              <img src={dotLine} alt="dotLine" />
            </div>
            <div className={styles.sputnik_box_child}>
              <img loading="lazy" src={a1} alt="removeImg" />
              <img loading="lazy" src={a2} alt="removeImg" />
            </div>
          </div>
          <div className={styles.sputnik_box}>
            <div className={styles.sputnik_box_title}>
              {language?.satellite_selection?.text3}
              <img
                loading="lazy"
                src={dotLine}
                alt="dotLine"
                className={styles.sputnik_box_line_down}
              />
            </div>
            <div className={styles.dot_line_box}>
              <img loading="lazy" src={dotLine} alt="dotLine" />
            </div>
            <div className={styles.sputnik_box_child}>
              <img loading="lazy" src={a3} alt="removeImg" />
            </div>
          </div>
          <div className={styles.sputnik_box}>
            <div className={styles.sputnik_box_title}>
              {language?.satellite_selection?.text4}
              <img
                loading="lazy"
                src={dotLine}
                alt="dotLine"
                className={styles.sputnik_box_line_down}
              />
            </div>
            <div className={styles.dot_line_box}>
              <img loading="lazy" src={dotLine} alt="dotLine" />
            </div>
            <div className={styles.sputnik_box_child}>
              <img loading="lazy" src={a4} alt="removeImg" />
              <img loading="lazy" src={a5} alt="removeImg" />
              <img loading="lazy" src={a6} alt="removeImg" />
            </div>
          </div>
          <div className={styles.sputnik_box}>
            <div className={styles.sputnik_box_title}>{language?.satellite_selection?.text5}</div>
            <div className={styles.dot_line_box}>
              <img loading="lazy" src={dotLine} alt="dotLine" />
            </div>

            <div className={styles.sputnik_box_child}>
              <img loading="lazy" src={a7} alt="removeImg" />
            </div>
          </div>
        </div>
      </Container>
      <Container className="relative max-w-[1440px] mx-auto">
        <Title className="my-11">{language?.title3}</Title>
        <img loading="lazy" alt=" " src={armenia} />
        {/* <p className="pt-11">{language?.text6}</p> */}
        <Title className="my-11">{language?.title4}</Title>
        <p className="mx-auto max-w-[934px] text-center w-full">{language?.text7}</p>
        <img loading="lazy" className="mt-[37px] mx-auto" alt=" " src={ex} />
        <Title className="my-11">{language?.title5}</Title>
        {imgData.length && (
          <div className="flex flex-col gap-3">
            {imgData.map((el, i) => (
              <div className="flex flex-col gap-3" key={i}>
                <h3 className="font-bold text-[16px] text-center uppercase text-dark-blue mx-auto w-fit med-600:text-[12px] med-600:leading-[112%] ">
                  {el.title}
                </h3>
                <div
                  className={`grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-3 med-600:grid-cols-3`}>
                  {el.images.map((el, indexs) => (
                    <img
                      loading="lazy"
                      key={indexs}
                      className={`med-600:${indexs > 2 && 'hidden'}`}
                      src={el}
                      alt=" "
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};
