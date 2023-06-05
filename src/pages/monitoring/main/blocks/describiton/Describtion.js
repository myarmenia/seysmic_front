import React from "react";
import {
  Container,
  Title,
  TitleBorder,
  Ul,
} from "../../../../../components/reusable";
import styles from "./describiton.module.css";
import { useTranslation } from "../../../../../hooks";

const ul_data = [
  "не требуют создания новых сетей наблюдений;",
  "позволяют контролировать как сушу, так и морское дно на всех этапах подготовки землетрясений;",
  "позволяют поднять эффективность уже существующих методов прогноза землетрясений;",
  "позволяют контролировать техногенную сейсмичность;",
  "позволяют строить динамические карты сейсмической опасности и усовершенствовать строительные нормы и правила;",
  "параметры мониторинга устойчивы, надежны, для их расчета накоплена большая информация по всему миру;",
  "параметры мониторинга рассчитываются (On-Line) на основе данных глобальных и локальных сейсмологических сетей;",
  "позволяют визуализировать процесс подготовки сильных землетрясений;",
  "позволяют со временем повышать точность прогнозов, создать компьютерный интеллект.",
];

export const Describtion = () => {
  const {
    monitoring_and_prediction: { ITU: language },
  } = useTranslation().language;

  return (
    <>
      <Container bg="bg-[#F9F9F9]" className={styles.my_container}>
        <Title className="med-600:text-[18px] tracking-[0.01em]">
          {language?.title}
        </Title>
        <div className={styles.content}>
          <p dangerouslySetInnerHTML={{ __html: language?.text }}></p>
          <div className="flex flex-col gap-3">
            <b>{language?.text2}</b>
            <Ul className={styles.list} data={language?.data} />
          </div>
          <p dangerouslySetInnerHTML={{ __html: language?.text3 }}></p>
        </div>
      </Container>
      <Container>
        <TitleBorder title={language?.seismic_entropy_method} />
      </Container>
    </>
  );
};
