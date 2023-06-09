import React from "react";
import styles from "./technologiesBlock.module.css";
import { Container, Title } from "../../../components/reusable";
import certificate from "../../../assets/main/technologies/certificate.svg";
import { useTranslation } from "../../../hooks";

export const AccumulatedExperience = () => {
  const { technology: language } = useTranslation().language;
  return (
    <>
      <Container
        className="min-h-[425px] flex items-center py-[100px] med-900:py-12"
        bg={styles.accumulated_experience}>
        <div className="flex flex-col gap-[70px] justify-between med-900:gap-12 med-600:gap-5">
          <Title>{language.title_approbation.title}</Title>
          <p className=" text-xl text-justify text-black med-1200:text-sm">
            {language.title_approbation.text}
          </p>
        </div>
      </Container>
      <Container
        bg="bg-[linear-gradient(180deg,_rgba(0,38,170,0.3)_50%,_rgba(48,207,255,0.3)_100%)]"
        className="flex flex-col pb-[42px] ">
        <div className="flex gap-[20px] justify-between med-1200:gap-[80px] med-900:flex-col-reverse med-900:gap-[40px] ">
          <p className="w-[50%] text-xl text-justify text-black mt-[92px] med-1200:text-sm med-900:mt-0 med-900:w-full ">
            {language.title_approbation.certeficate}
          </p>
          <img
            loading="lazy"
            src={certificate}
            alt=""
            className="max-w-md min-w-[200px] w-full h-[335px] object-cover mt-[92px] med-900:h-full"
          />
        </div>
      </Container>
      <Container className={styles.accumulated_bottom}>
        <div className={styles.title}>
          <h2>{language.renewable_energy.title}</h2>
          <p>{language.renewable_energy.subTitle}</p>
        </div>
        {language.renewable_energy.texts.map((el, i) => (
          <div key={i} className={styles.accumulated_text}>
            {el}
          </div>
        ))}
        {/* <div className={styles.accumulated_text}>
          для On-Line мониторинга, прогноза землетрясений и цунами, для визуализации сейсмической
          обстановки на площадках действующих и проектируемых АЭС мира.
        </div>
        <div className={styles.accumulated_text}>
          для On-Line мониторинга, прогноза землетрясений и цунами, для визуализации сейсмической
          обстановки на площадках действующих и проектируемых АЭС мира.
        </div>
        <div className={styles.accumulated_text}>
          КТ позволяет создать динамические карты сейсмической опасности для площадок действующих и
          проектируемых АЭС дополнительно к существующим традиционным картам; внедрить динамический
          паспорт расчета сейсмических нагрузок на АЭС, на топливно-энергетические сооружения и
          коммуникации.
        </div> */}
      </Container>
    </>
  );
};
