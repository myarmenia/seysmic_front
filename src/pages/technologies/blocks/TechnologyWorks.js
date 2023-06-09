import React from "react";
import {
  Container,
  Title,
  TitleBorder,
  Ul,
  ViewPosition,
} from "../../../components/reusable";
import styles from "./technologiesBlock.module.css";
import { ApplicationProduct } from "../../ourProduct/blocks/ApplicationProduct";
import { generateArray } from "../../../helper";
import Definitions_technology from "./Definitions_technology";
import { useTranslation } from "../../../hooks";
import { Ul2 } from "../../../components/reusable/ul/Ul2";
const data = [
  "Метод, лежащий в основе КТ, основан: на введении новых физических параметров, рассчитываемых на основе сейсмостатистики; на концепции сейсмической системы (СС), в рамках которых сформулирован новый закон – закон производства сейсмической энтропии (Акопян С. Ц., 1995-2015 гг.). ",
  "Ретроспективный анализ показывает, что из 750 исторических сильных землетрясений 96% подчиняются новому закону. ",
  "Новые закономерности позволяют: устойчиво следить за развитием сейсмической неустойчивости во времени и пространстве; прогнозировать место, время и силу; исключать землетрясения на 97% от всего времени подготовки; делать мониторинг и оценить возможный сценарий развития сейсмичности; контролировать триггерную и техногенную сейсмичность; рассчитывать принципиально новые динамические карты сейсмической опасности; информировать о подготовке сильных землетрясений, цунами и возможных последствиях.",
];

export const TechnologyWorks = () => {
  const { technology: language } = useTranslation().language;

  return (
    <>
      <Container className="mb-[60px]">
        <Title>{language.title}</Title>
        <div className="flex flex-col items-center mt-[40px]">
          <TitleBorder title={language.subTitle} />
          <Ul data={language.data} className={styles.list}></Ul>
          <Ul2
            data={language.Technology_about.data2}
            title={language.Technology_about.title2}
            className={styles.list}></Ul2>
          <Definitions_technology />
          <ApplicationProduct />
          <PlannedProducts />
        </div>
      </Container>
    </>
  );
};

export const PlannedProducts = () => {
  const { technology: language } = useTranslation().language;
  return (
    <>
      <Title>{language.title_planned_products.title}</Title>
      <div className={styles.bigBox}>
        <div className={styles.boxes}>
          <h1 className="text-[#EA3933] pb-[21px] text-[28px] font-semibold">
            {language.title_planned_products.category_1.name}
          </h1>
          <p>{language.title_planned_products.category_1.text}</p>
        </div>
        <div className={styles.boxes}>
          <h1 className="text-[#FEC60A] pb-[21px] text-[28px] font-semibold">
            {language.title_planned_products.category_2.name}
          </h1>
          <p>{language.title_planned_products.category_2.text}</p>
        </div>
        <div className={styles.boxes}>
          <h1 className="text-[#89C53D] pb-[21px] text-[28px] font-semibold">
            {language.title_planned_products.category_3.name}
          </h1>
          <p>{language.title_planned_products.category_3.text}</p>
        </div>
        <div className={styles.boxes}>
          <h1 className="text-[#01A1A1] pb-[21px] text-[28px] font-semibold">
            {language.title_planned_products.category_4.name}
          </h1>
          <p>{language.title_planned_products.category_4.text}</p>
        </div>
      </div>
    </>
  );
};
