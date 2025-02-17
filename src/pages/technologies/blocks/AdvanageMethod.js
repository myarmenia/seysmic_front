import React from "react";
import styles from "./technologiesBlock.module.css";
import { Container, Title, Ul } from "../../../components/reusable";
import { useTranslation } from "../../../hooks";
// const data = [
//   'не требуют создания новых сетей наблюдений;',
//   'позволяют контролировать техногенную сейсмичность;',
//   'позволяют контролировать как сушу, так и морское дно на всех этапах подготовки землетрясений',
//   'позволяют строить динамические карты сейсмической опасности и усовершенствовать строительные нормы и правила;',
//   'позволяют поднять эффективность уже существующих методов прогноза землетрясений',
//   'параметры мониторинга устойчивы, надежны, для их расчета накоплена большая информация по всему миру;',
//   'параметры мониторинга рассчитываются (On-Line) на основе данных глобальных и локальных сейсмологических сетей;',
//   ' позволяют визуализировать процесс подготовки сильных землетрясений;',
//   'позволяют со временем повышать точность прогнозов, создать компьютерный интеллект.',
// ];

export const AdvanageMethod = () => {
  const { technology: language } = useTranslation().language;
  return (
    <Container className="mt-[60px]">
      <Title>{language.title_advantage.title}</Title>

      {/* <div className="my-[10px]  text-2xl text-light-grey text-center med-1200:text-lg">
        Метод и функционирование КТ
      </div> */}
      <Ul
        className={styles.advantage_list}
        data={language.title_advantage.texts}></Ul>
    </Container>
  );
};
