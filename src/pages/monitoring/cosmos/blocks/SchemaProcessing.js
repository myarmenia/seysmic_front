import React from "react";
import { Container, Title } from "../../../../components/reusable";
import styles from "../blocks/cosmos.module.css";
import stputnik from "../../../../assets/main/monitoring/cosmos/sputnik.svg";
import notebook from "../../../../assets/main/monitoring/cosmos/notebook.svg";
import sputniktwo from "../../../../assets/main/monitoring/cosmos/sputniktwo.svg";
import dotLine from "../../../../assets/main/monitoring/cosmos/dotLine.svg";
import curelyLine from "../../../../assets/main/monitoring/cosmos/curelyLine.svg";
import curelyLine2 from "../../../../assets/main/monitoring/cosmos/curelyLine2.svg";
import removeImg from "../../../../assets/main/monitoring/cosmos/removeImg.svg";
export const SchemaProcessing = () => {
  return (
    <>
      <Container className="mb-[60px] ">
        <Title>СХЕМА ОБРАБОТКИ КОСМИЧЕСКИХ СНИМКОВ</Title>
        <div className={styles.schema_processing}>
          <p>
            Схема поэтапной обработки космических снимков изображена ниже.
            <br /> Для конкретного региона выбирается спутник и с помощью
            специализированных программ выбирается первичное космическое
            изображение. Для обработки первичных изображений и для выделения
            линеаментов на космических снимках используются специализированные
            программы.
          </p>
        </div>
      </Container>
      <Container
        bg="bg-[#F9F9F9]"
        className="flex pb-[32px] mt-[20px] gap-[80px] med-1200:flex-col med-1200:gap-0 med-1200:pb-0"
      >
        <div className="flex gap-[20px] justify-between  max-w-[400px]  ">
          <div className="flex flex-col justify-between w-full gap-8 ">
            <div className="h-[400px] med-600:h-[300px] ">
              <div className="flex gap-[20px]  relative  justify-center">
                <img
                  src={stputnik}
                  alt="sputnik"
                  className="med-600:w-[120px]"
                />
                <img
                  src={dotLine}
                  alt="dotLine"
                  className="absolute top-[80%] left-[26%]"
                />
              </div>
              <div className="flex gap-[20px] justify-between med-600:gap-2">
                <img
                  src={sputniktwo}
                  alt="sputniktwo"
                  className="med-600:w-[70px]"
                />
                <img src={dotLine} alt="dotLine" className="rotate-[223deg]" />
                <div className="relative">
                  <p className="text-black">Выбор спутника</p>
                  <img
                    src={notebook}
                    alt="notebook"
                    className="med-600:w-[150px]"
                  />
                  <img
                    src={curelyLine}
                    alt="curelyLine"
                    className="absolute top-[-40%] right-[-40%] med-1200:hidden "
                  />
                  <img
                    src={curelyLine2}
                    alt="curelyLine2"
                    className="absolute top-[50%] right-[-40%] hidden med-1200:block "
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#bbbbbb]  py-[15px] px-[20px] text-dark-blue med-1200:hidden">
              Поэтапная обработка космического изображения для выбранного
              спутника, даты, региона и локальной зоны
            </div>
          </div>
        </div>
        <div className="flex gap-[20px]  flex-col max-w-[700px] min-w-[500px] med-1200:min-w-[300px] med-600:min-w-[200px]">
          <div className={styles.sputnik_box}>
            <div className={styles.sputnik_box_title}>
              Первичное изображение
              <img
                src={dotLine}
                alt="dotLine"
                className={styles.sputnik_box_line_down}
              />
            </div>
            <div className={styles.dot_line_box}>
              <img src={dotLine} alt="dotLine" />
            </div>
            <div className={styles.sputnik_box_child}>
              <img src={removeImg} alt="removeImg" />
              <img src={removeImg} alt="removeImg" />
            </div>
          </div>
          <div className={styles.sputnik_box}>
            <div className={styles.sputnik_box_title}>
              Обработка снимка программой ENVI
              <img
                src={dotLine}
                alt="dotLine"
                className={styles.sputnik_box_line_down}
              />
            </div>
            <div className={styles.dot_line_box}>
              <img src={dotLine} alt="dotLine" />
            </div>
            <div className={styles.sputnik_box_child}>
              <img src={removeImg} alt="removeImg" />
            </div>
          </div>
          <div className={styles.sputnik_box}>
            <div className={styles.sputnik_box_title}>
              Виделение линеаментов программа Win LESSA
              <img
                src={dotLine}
                alt="dotLine"
                className={styles.sputnik_box_line_down}
              />
            </div>
            <div className={styles.dot_line_box}>
              <img src={dotLine} alt="dotLine" />
            </div>
            <div className={styles.sputnik_box_child}>
              <img src={removeImg} alt="removeImg" />
              <img src={removeImg} alt="removeImg" />
            </div>
          </div>
          <div className={styles.sputnik_box}>
            <div className={styles.sputnik_box_title}>
              Обработка снимка программой ENVI
            </div>
            <div className={styles.dot_line_box}>
              <img src={dotLine} alt="dotLine" />
            </div>

            <div className={styles.sputnik_box_child}>
              <img src={removeImg} alt="removeImg" />
            </div>
          </div>
        </div>
        <div className=" py-[15px] px-[20px] text-dark-blue hidden med-1200:block">
          Поэтапная обработка космического изображения для выбранного спутника,
          даты, региона и локальной зоны
        </div>
      </Container>
    </>
  );
};
