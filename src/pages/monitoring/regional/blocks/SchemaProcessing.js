import React from "react";
import { Container, Title } from "../../../../components/reusable";
import styles from "../blocks/regionalBlock.module.css";
import stputnik from "../../../../assets/main/monitoring/regional/sputnik.svg";
import notebook from "../../../../assets/main/monitoring/regional/notebook.svg";
import sputniktwo from "../../../../assets/main/monitoring/regional/sputniktwo.svg";
import dotLine from "../../../../assets/main/monitoring/regional/dotLine.svg";
import curelyLine from "../../../../assets/main/monitoring/regional/curelyLine.svg";
import removeImg from "../../../../assets/main/monitoring/regional/removeImg.svg";
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
        className="flex pb-[32px] mt-[20px] gap-[80px]"
      >
        <div className="flex gap-[20px] justify-between  max-w-[400px]  ">
          <div className="flex flex-col justify-between w-full gap-8 ">
            <div className="h-[400px]">
              <div className="flex gap-[20px]  relative  justify-center">
                <img src={stputnik} alt="sputnik" />
                <img
                  src={dotLine}
                  alt="dotLine"
                  className="absolute top-[80%] left-[26%]"
                />
              </div>
              <div className="flex gap-[20px] justify-between">
                <img src={sputniktwo} alt="sputniktwo" />
                <img src={dotLine} alt="dotLine" className="rotate-[223deg]" />
                <div className="relative">
                  <p className="text-black">Выбор спутника</p>
                  <img src={notebook} alt="notebook" />
                  <img
                    src={curelyLine}
                    alt="curelyLine"
                    className="absolute top-[-40%] right-[-40%] "
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#bbbbbb]   py-[15px] px-[20px] text-dark-blue">
              Поэтапная обработка космического изображения для выбранного
              спутника, даты, региона и локальной зоны
            </div>
          </div>
        </div>
        <div className="flex gap-[20px]  flex-col max-w-[700px] min-w-[500px]">
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
            <div className="flex justify-between gap-2">
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
      </Container>
    </>
  );
};
